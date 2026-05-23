import azure.functions as func
import logging
import os
import json
from azure.cosmos import CosmosClient, exceptions
from azure.identity import ClientSecretCredential
import datetime
import requests as req_lib

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

COSMOS_CONNECTION_STRING = os.environ.get("COSMOS_DB_CONNECTION_STRING")
DATABASE_NAME = "Resume"
CONTAINER_NAME = "Counter"

@app.route(route="view_counter", methods=["GET", "POST"])
def view_counter(req: func.HttpRequest) -> func.HttpResponse:
    method = req.method.upper()
    logging.info(f"Processing {method} request.")

    try:
        client = CosmosClient.from_connection_string(COSMOS_CONNECTION_STRING)
        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        try:
            item = container.read_item(item="1", partition_key="1")
        except exceptions.CosmosResourceNotFoundError:
            item = {'id': '1', 'count': 0}
            container.create_item(item)

        if method == "POST":
            logging.info("New unique visitor detected. Incrementing...")
            item['count'] += 1
            container.upsert_item(item)
        else:
            logging.info("Returning visitor. Serving count without incrementing.")

        return func.HttpResponse(
            json.dumps({"count": item['count']}), 
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return func.HttpResponse("Internal Server Error", status_code=500)


@app.route(route="cost_summary", methods=["GET"])
def cost_summary(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Processing cost_summary request.")

    try:
        tenant_id = os.environ.get("AZURE_TENANT_ID")
        client_id = os.environ.get("AZURE_CLIENT_ID")
        client_secret = os.environ.get("AZURE_CLIENT_SECRET")
        subscription_id = os.environ.get("AZURE_SUBSCRIPTION_ID")

        credential = ClientSecretCredential(tenant_id, client_id, client_secret)
        token = credential.get_token("https://management.azure.com/.default").token

        now = datetime.datetime.utcnow()
        start = now.replace(day=1, hour=0, minute=0, second=0).strftime("%Y-%m-%dT00:00:00Z")
        end = now.strftime("%Y-%m-%dT%H:%M:%SZ")

        url = f"https://management.azure.com/subscriptions/{subscription_id}/providers/Microsoft.CostManagement/query?api-version=2023-11-01"

        payload = {
            "type": "ActualCost",
            "timeframe": "Custom",
            "timePeriod": {"from": start, "to": end},
            "dataset": {
                "granularity": "None",
                "aggregation": {"totalCost": {"name": "Cost", "function": "Sum"}},
                "grouping": [
                    {"type": "Dimension", "name": "ResourceGroupName"},
                    {"type": "Dimension", "name": "ServiceName"}
                ]
            }
        }

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }

        response = req_lib.post(url, json=payload, headers=headers)
        data = response.json()

        rows = data.get("properties", {}).get("rows", [])
        services = []
        total = 0.0
        resource_groups = {}

        for row in rows:
            cost = round(float(row[0]), 4)
            resource_group = row[1] if row[1] else "Other"
            service = row[2] if row[2] else "Other"

            if cost > 0:
                services.append({
                    "service": service,
                    "resourceGroup": resource_group,
                    "cost": cost
                })
                total += cost

                if resource_group not in resource_groups:
                    resource_groups[resource_group] = 0.0
                resource_groups[resource_group] += cost

        services.sort(key=lambda x: x["cost"], reverse=True)

        rg_breakdown = [
            {"resourceGroup": rg, "cost": round(cost, 2)}
            for rg, cost in sorted(resource_groups.items(), key=lambda x: x[1], reverse=True)
        ]

        result = {
            "total": round(total, 2),
            "budget": 50,
            "month": now.strftime("%B %Y"),
            "services": services[:12],
            "resourceGroups": rg_breakdown,
            "updated": now.strftime("%Y-%m-%dT%H:%M:%SZ")
        }

        return func.HttpResponse(
            json.dumps(result),
            mimetype="application/json",
            status_code=200,
            headers={"Access-Control-Allow-Origin": "*"}
        )

    except Exception as e:
        logging.error(f"Cost summary error: {str(e)}")
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            mimetype="application/json",
            status_code=500
        )