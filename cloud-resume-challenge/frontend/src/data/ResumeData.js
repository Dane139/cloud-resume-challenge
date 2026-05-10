const ResumeData = {
  person: {
    name: "Dane Willms",
    contact: {
      address: "Brandon, FL",
      email: "dane.willms1@gmail.com",
      phone: "414-210-7636",
    },
  },
  sections: {
    education: [
      {
        id: 1,
        title: "Western Governor's University",
        subtitle: "B.S. Cloud and Network Engineering (Azure Track)",
        location: "Millcreek, UT",
        duration: "Exp. 2026",
      },
    ],
    experience: [
      {
        id: 2,
        title: "DART Tech",
        subtitle: "IT Support Services",
        location: "Tampa, FL",
        duration: "Mar '26 - Present",
        details: [
          "Optimized Azure Virtual Desktop (AVD) infrastructure using Nerdio Manager to ensure high availability.",
          "Diagnosed and resolved complex session escalations, reducing end-user downtime via FSLogix remediation.",
          "Hardened Entra ID (Azure AD) security by configuring B2B guest access and enforcing MFA policies.",
        ],
      },
      {
        id: 3,
        title: "RW Baird",
        subtitle: "IT Service Desk Technician",
        location: "Milwaukee, WI",
        duration: "Mar '25 - Mar '26",
        details: [
          "Remediated secure web gateway and enterprise authentication issues using Zscaler and CLI diagnostics.",
          "Automated routine security auditing tasks using PowerShell, significantly reducing administrative overhead.",
        ],
      },
    ],
    projects: [
      {
        id: 4,
        title: "Multi-Site Cloud SIEM",
        subtitle: "Azure, Splunk, Terraform",
        details: [
          "Automated the deployment of a Splunk Enterprise indexer in Azure using Terraform.",
          "Engineered custom SPL dashboards to visualize and respond to brute-force telemetry."
        ],
      },
      {
        id: 5,
        title: "Automated Identity Infrastructure",
        subtitle: "Active Directory, Azure, Terraform",
        details: [
          "Architected a Windows Server 2025 Domain Controller in Azure using Terraform.",
          "Replaced manual 'Click-Ops' with repeatable, version-controlled infrastructure deployment."
        ],
      },
      {
        id: 6,
        title: "Vulnerability Management Lab",
        subtitle: "Tenable Nessus, Azure",
        details: [
          "Deployed a Tenable Nessus scanner via IaC to perform authenticated vulnerability assessments.",
          "Automated remediation of High-severity (CVSS 8.8) vulnerabilities, establishing a clean security baseline."
        ],
      }
    ],
    skills: {
      Cloud_IaC: ["Microsoft Azure", "Terraform", "Azure Bicep", "GitHub Actions"],
      Security: ["Splunk (SIEM)", "Tenable Nessus", "IAM", "Entra ID", "NSG Hardening"],
      Automation: ["PowerShell", "Bash", "Git"],
    },
  },
};

export default ResumeData;