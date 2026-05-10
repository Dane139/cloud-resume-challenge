##Checking Updated Nameservers

After I changed the nameserves for my third-party domain
I checked to make sure they were updated using the whois command:

```sh
sudo apt update
sudo apt install whois
whois daneondemand.com | grep "Name Server"
```

## Install Azure Bicep

I could have used Terraform but then I would have to manage the 
statefile, and if a company only uses Azure they lean towards 
only using Azure Bicep.

```
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### Login to azure

```sh
az login
az ad sp create-for-rbac --name "GitHubActionsDeploy" --role contributor --scopes /subscriptions/{subscription-id} --json-auth
```

### Install Ansible

I don't need Ansible in order to run Azure Bicep, I want to do various
config changes like uploading my web site files so I want to use ansible
because its more flexible than bash & powershell. Plus I want to gain more hands on

```sh
pipx install --include-deps ansible
```


## Install Deps for Ansible
```sh
cd azure
ansible-galaxy collection install azure.azcollection

```sh
/usr/local/py-utils/venvs/ansible/bin/python -m pip install "ansible[azure]"
```

```sh
echo "This is a test resume" > dummy-resume.pdf
```
## Provisioning Infrastructure (Azure Static Web Apps)

I created a `main.bicep` file to declare the foundational Azure architecture. Originally, following standard static-site patterns, I provisioned an Azure Storage Account. However, Azure recently deprecated their standard CDN tier, making Azure Front Door (which has a $35/month base fee) the default alternative. 

To avoid unnecessary costs while maintaining a global CDN and free SSL, I refactored the Bicep template to deploy a **Microsoft Azure Static Web App (ASWA)** on the Free tier. 

To deploy code to this resource, the Static Web Apps CLI must be installed globally:
```sh
npm install -g @azure/static-web-apps-cli


### Building The React App
Before deploying the frontend to Azure, the React/Vite code must be compiled into static HTML, CSS, and JS assets.

```sh
cd frontend
npm run build
```

## Automating The Deployment with Ansible

I built a custom deployment pipeline using Ansible. To align with enterprise DevOps best practices, I structured the pipeline using Separation of Concerns. Splitting the pipeline into two distinct playbooks makes the components easier to test, maintain, and execute safely.

### Deploying The Infrastructure (deploy.yml)
This playbook acts as the foundational layer. It guarantees the resource group exists and deploys the ASWA Bicep template.

```sh
chmod u+x bin/deploy
./bin/deploy
```

## Uploading The Application Code (upload.yml)
This secondary playbook handles the application payload. Because ASWA uses deployment tokens instead of storage keys, this Ansible playbook uses the Azure CLI to dynamically query the live deployment token, and then securely passes it to the swa deploy command.

Because it skips all Bicep infrastructure validation checks, this playbook runs instantly and allows for rapid, safe website updates.

```sh
chmod u+x bin/upload
./bin/upload
```

### Modular Infrastructure as Code (Bicep)
I broke my infrastructure down into modular Bicep files to maintain a clean and scalable codebase.

storage.bicep: Provisions the Azure Storage accounts used for logging and internal Function data.

db.bicep: Declares the Cosmos DB account, database, and container for the visitor counter data.

cdn.bicep: (Refactored) Contains the logic for the edge delivery layer.

main.bicep: The orchestration file that ties all modules together.

### Architectural Pivot: Originally, I provisioned an Azure Storage Account for web hosting. However, Azure recently deprecated their standard CDN tier, making Azure Front Door (which has a $35/month base fee) the default alternative. To avoid unnecessary costs, I refactored the Bicep template to deploy a Microsoft Azure Static Web App (ASWA) on the Free tier, which includes a global CDN and managed SSL.

### Automating the Deployment with Ansible
To align with enterprise DevOps best practices, I built a custom deployment pipeline using Ansible. I structured the pipeline using a strict Separation of Concerns, with individual playbooks for each layer of the stack.

Helper Scripts (bin/)
I created a set of Bash wrappers in the bin/ directory to simplify the execution of complex Ansible commands:

./bin/deploy: Runs the full infrastructure deployment.

./bin/deploy-db: Targets just the Cosmos DB resources.

./bin/deploy-storage: Targets the storage account infrastructure.

./bin/deploy-cdn: Manages the CDN/Static Web App configuration.

./bin/upload: Handles the application code delivery.

## Infrastructure Playbooks (playbooks/)
deploy.yml: The primary playbook that triggers the main.bicep deployment.

deploy-db.yml: Specifically manages the NoSQL backend state.

deploy-storage.yml: Manages the storage account lifecycle.

deploy-cdn.yml: Manages the Static Web App and custom domain settings.

Application Delivery (upload.yml)
Because ASWA uses deployment tokens instead of storage keys, this playbook uses the Azure CLI to dynamically query the live deployment token and securely passes it to the swa deploy command.

Bash
## Building the React assets
```sh
cd ../frontend
npm run build
cd ../azure
```

## Deploying the code
```sh
chmod u+x bin/upload
./bin/upload
```

## Challenges & "War Stories"
The Environment "Bake-In" Trap: Discovered that Vite environment variables are static and injected at build time, requiring a re-build for every endpoint change.

The Routing Disconnect: Resolved a 404 error caused by a mismatch between the React fetch URL and the Python Azure Function route (view_counter vs viewcounter).

The Deployment Mystery: Navigated the Azure Portal to discover the site was managed via SwaCli rather than GitHub Actions, requiring a shift in my CI/CD logic.

The CORS & Cache "Final Boss": Successfully configured cross-origin policies for both local and production domains, while mastering the use of "Hard Refreshes" to bypass browser-level caching.