const ResumeData = {
  person: {
    name: "Dane Willms",
    contact: {
      address: "Tampa, FL",
      email: "hello@daneondemand.com",
      phone: "414-210-7636",
    },
  },
  sections: {
    education: [
      {
        id: 1,
        title: "Western Governors University",
        subtitle: "B.S. Cloud and Network Engineering (Microsoft Azure Track)",
        location: "Millcreek, UT",
        duration: "Exp. Dec 2026",
      },
    ],
    experience: [
      {
        id: 2,
        title: "Jefe Consulting",
        subtitle: "Cloud Engineer",
        location: "",
        duration: "Apr '26 – Present",
        details: [
          "Designed and deployed an AI Inventory Tracker integrating Azure Service Bus, Azure Functions, Azure SQL, Azure OpenAI, and Logic Apps — provisioned end-to-end via Terraform to automate client inventory processing workflows.",
          "Built an Azure Website Uptime Monitor using a timer-triggered Python Azure Function (V2) with Table Storage audit logging and Azure Monitor KQL alert rules tracking availability across 15+ client-facing endpoints.",
          "Automated cloud cost governance by deploying an Azure Cost Visibility Dashboard via Terraform with Cost Management budget alerts, Logic Apps notifications, and Azure Workbooks backed by Log Analytics, reducing monthly spend by 20%.",
          "Provisioned geo-redundant backup platform across 3 Azure Blob containers via Terraform with GRS replication, versioning, and 30-day soft-delete; built Logic Apps workflow delivering daily backup confirmation emails to stakeholders.",
        ],
      },
      {
        id: 3,
        title: "DART Tech",
        subtitle: "Cloud Administrator",
        location: "Tampa, FL",
        duration: "Mar '26 – Present",
        details: [
          "Task: Automated identity lifecycle provisioning for ~2,000 users across 8 client tenants. Tool: PowerShell & Microsoft Graph API. Impact: Eliminated manual workflows and reduced ticket backlog by standardizing Entra ID attribute management.",
          "Task: Administered multi-tenant AVD host pools. Tool: Azure Virtual Desktop & Nerdio. Impact: Maintained high-availability desktop delivery across 2,000 endpoints while resolving ~30 daily incidents via ConnectWise Manage.",
          "Task: Executed cloud mailbox and permissions operations for 8 client tenants. Tool: Exchange Online PowerShell. Impact: Managed account configurations, delegation, and security changes with zero-error CLI execution.",
        ],
      },
      {
        id: 4,
        title: "RW Baird",
        subtitle: "IT Service Desk Technician",
        location: "Milwaukee, WI",
        duration: "Mar '25 – Mar '26",
        details: [
          "Task: Supported Zero Trust identity and access enforcement across a 5,000-user enterprise environment. Tool: Entra ID Conditional Access & Zscaler ZPA. Impact: Ensured least-privilege network segmentation and secure remote access compliance.",
          "Task: Automated Active Directory security group lifecycle audits. Tool: PowerShell. Impact: Generated IAM compliance telemetry and access governance reporting across 5,000 users.",
          "Task: Authored high-fidelity technical documentation and RCA reports. Tool: Knowledge Base (KB). Impact: Established a standardized troubleshooting benchmark used for team-wide training and improving first-call resolution rates.",
        ],
      },
      {
        id: 5,
        title: "Helgesen Industries",
        subtitle: "IT Support Specialist",
        location: "Hartford, WI",
        duration: "Sep '23 – Mar '25",
        details: [
          "Task: Deployed and configured 40+ Cisco Meraki access points across 2 buildings and 3 sites. Tool: Cisco Meraki. Impact: Delivered stable wireless connectivity for a 500-user organization and reduced network-related support requests.",
          "Task: Administered Microsoft 365 and Exchange Online for ~500 users. Tool: Microsoft 365 & Exchange Online. Impact: Resolved account issues and maintained operational efficiency across the organization's cloud productivity suite.",
          "Task: Managed ~5 daily IT service requests. Tool: Zendesk. Impact: Provided end-to-end technical support across all departments and documented resolutions to build a reusable knowledge base.",
        ],
      },
    ],
    projects: [
      {
        id: 6,
        title: "Multi-Site Cloud SIEM",
        subtitle: "Splunk | Terraform | Azure | SPL",
        details: [
          "Automated provisioning of a Splunk Enterprise indexer via Terraform, replacing click-ops with a scalable declarative IaC foundation.",
          "Engineered custom SPL dashboards to visualize brute-force telemetry and accelerate threat detection.",
        ],
      },
      {
        id: 7,
        title: "Automated Identity Infrastructure",
        subtitle: "Terraform | Azure | Active Directory | Windows Server 2025",
        details: [
          "Architected a Windows Server 2025 Domain Controller in Azure via Terraform, establishing a hardened, version-controlled cloud identity footprint.",
        ],
      },
      {
        id: 8,
        title: "Automated Vulnerability Management",
        subtitle: "Nessus | Azure | PowerShell | Terraform",
        details: [
          "Deployed Tenable Nessus into Azure via IaC and PowerShell; executed credentialed scans and automated remediation of high-severity vulnerabilities, reducing organizational attack surface.",
        ],
      },
      {
        id: 9,
        title: "Azure Cloud Resume Challenge",
        subtitle: "Azure Functions | Cosmos DB | Blob Storage | GitHub Actions | DNS",
        details: [
          "Architected a globally available serverless static resume website with 100% automated CI/CD deployment via GitHub Actions.",
        ],
      },
    ],
    skills: {
      Cloud_IaC: ["Microsoft Azure", "Terraform", "GitHub Actions", "Azure Functions", "Logic Apps", "Azure Monitor", "Log Analytics", "Azure Workbooks", "AVD", "Blob Storage", "Table Storage", "Cosmos DB", "Key Vault", "VNets", "NSGs"],
      Identity_Security: ["Microsoft Entra ID", "Active Directory", "Microsoft Graph API", "Zscaler ZPA", "Zero Trust", "RBAC", "Splunk", "Nessus"],
      Scripting_Dev: ["PowerShell", "Python", "Azure CLI", "Bash", "HCL (Terraform)", "KQL"],
      Networking_Productivity: ["Cisco Meraki", "TCP/IP", "DNS", "VPN", "Exchange Online", "Microsoft 365", "Nerdio"],
      ITSM: ["ServiceNow", "ConnectWise Manage", "Zendesk"],
    },
  },
};

export default ResumeData;