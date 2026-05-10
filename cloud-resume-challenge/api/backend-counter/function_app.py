import azure.functions as func
import logging
import os
import json
from azure.cosmos import CosmosClient, exceptions

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