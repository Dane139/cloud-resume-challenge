---
name: Azure AD Lab
handle: azure-ad-lab
thumbnail: /assets/projects/ad-lab-thumb.jpg
description: Architected a Windows Server 2025 Active Directory Domain Controller in Azure using Terraform to automate identity infrastructure.
weight: 2
---

# Project Details

This lab demonstrates the transition from manual, GUI-based ("Click-Ops") identity management to **Infrastructure as Code (IaC)**. I architected a Windows Server 2025 Active Directory Domain Controller within a secure Azure VNet, utilizing Terraform for full deployment automation.

## The Tech Stack
- **Infrastructure:** Microsoft Azure
- **Provisioning:** HashiCorp Terraform
- **Directory Services:** Windows Server 2025 Active Directory
- **Identity:** Microsoft Entra ID (Azure AD)
- **Automation:** GitHub Actions (CI/CD Pipeline)

## Key Challenges Overcome
- **IaC Migration:** Successfully converted manual Azure resource deployment into modular Terraform configurations, ensuring infrastructure consistency and repeatability.
- **Network Security:** Configured strict Network Security Groups (NSGs) to isolate the Domain Controller while maintaining necessary connectivity for domain joining.

---

Check out the architecture and code on my [GitHub Repository](https://github.com/Dane139/azure-ad-lab).