---
name: Azure Vulnerability Management Lab
handle: azure-nessus-lab
thumbnail: /assets/projects/nessus-thumbnail.jpg
description: A security-focused lab deploying Nessus on Azure using Terraform to perform authenticated scans and troubleshoot complex cloud networking barriers.
weight: 4
---

# Offensive Security: Hunting for Holes in a Locked-Down Cloud

> **The Big Idea:** Standing up a network from scratch is one thing, but securely dropping a vulnerability scanner into an already locked-down environment without breaking the "Zero Trust" model is a totally different challenge. I built this lab to practice the messy, real-world work that happens *after* the initial deployment.

## 🛡️ What I Actually Built
This project is a dedicated security sandbox designed to stay entirely within the private cloud perimeter.
* **The Heart:** A Tenable Nessus Essentials scanner deployed on an Ubuntu 22.04 server.
* **The Strategy:** Instead of a standalone network, I used Terraform `data` blocks to inject the scanner directly into my existing `ad-vnet`. This kept all scanning traffic 100% internal, never touching the public internet.
* **The Target:** A Windows Server 2025 Domain Controller, serving as the "boss level" for my credentialed scans.

![Nessus Vulnerability Lab Architecture](/assets/projects/nessus-thumbnail.jpg)

---

## 📐 The "Why" (My Thought Process)

### 1. Terraform Data Blocks
I wanted to simulate joining an existing corporate environment. By using Terraform `data` blocks, I could reference my existing Active Directory infrastructure without having to redeploy it. It taught me how to manage "shared state" and avoid wrecked configurations when adding new security tools.

### 2. Credentialed Visibility
I focused heavily on Credentialed Scans. An unauthenticated scan only sees the "skin" of the server; a credentialed scan sees the "organs." I wanted to prove that I could properly configure local service accounts and WMI permissions to give Nessus deep visibility into the OS.

### 3. Traffic Isolation
Security tools shouldn't create new security risks. By placing the scanner on the same internal subnet as the targets, I ensured that no sensitive vulnerability data was ever exposed to the public web during the transit from the target to the indexer.

---

## 🚧 Battle Scars: Things That Broke
This lab fought back harder than any other project. Here is how I solved the "100% Packet Loss" mystery:

* **The Automated Download Block:** Tenable's servers blocked my server's direct `curl` request, sending a dead 230-byte file instead. I had to pivot, downloading the package to my local node and using SCP (Secure Copy Protocol) to push the file through an SSH tunnel to the Azure server.
* **The Cloud vs. OS Firewall Trap:** My first discovery scan found nothing. Ping failed with 100% packet loss. 
    * **Step 1:** I disabled the Windows firewall; the ping still failed. That proved Azure was the culprit.
    * **Step 2:** I refactored my Terraform code to add a Priority 110 NSG rule, explicitly whitelisting the Nessus internal IP. 
    * **Step 3:** Once the cloud was clear, I turned the Windows firewall back on and wrote a targeted PowerShell rule to allow only ICMPv4 echo requests from the scanner.

---

## 🚀 What I’d Change For The Real World
1. **Azure Key Vault Integration:** Instead of manually handling scan credentials, I would store them in Azure Key Vault and have Nessus pull them dynamically to ensure zero-password exposure in the scan configs.
2. **Scheduled Remediation Workflows:** I would integrate the scan results with Azure Automation. If a "Critical" patch is missing, a Runbook should trigger to patch the server and then signal Nessus to run a verification scan.
3. **Internal Load Balancing:** For a larger enterprise environment, I’d deploy multiple scanners behind an internal Load Balancer to handle large-scale subnets without bottlenecking the VNet traffic.

---

**[Explore the scan results and troubleshooting logs on GitHub](https://github.com/Dane139/Azure-nessus-lab)**