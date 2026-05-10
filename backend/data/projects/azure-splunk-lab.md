---
name: Azure Multi-Site SIEM Lab
handle: azure-splunk-lab
thumbnail: /assets/projects/splunk-thumbnail.jpg
description: A hybrid-cloud security engineering project using Terraform to deploy a Splunk SIEM in Azure that monitors both cloud-native and on-premises endpoints.
weight: 3
---

# The Hybrid Watchtower: Scaling Security from On-Prem to Azure

> **The Big Idea:** Moving to the cloud doesn't happen overnight. Most companies live in a "Hybrid" world. I built this lab to simulate that exact transition: using Terraform to spin up a Splunk SIEM in Azure, then engineering secure data pipelines to ingest logs from both an on-premises VirtualBox lab and cloud-native Azure VMs.

## 👁️ What I Actually Built
I transformed a standard cloud deployment into a multi-site Security Operations Center (SOC) using Infrastructure as Code.
* **The Brain:** A Splunk Enterprise Indexer hosted on an Ubuntu Linux VM in Azure.
* **The Hybrid Link:** A secure pipeline shipping encrypted event data from an on-premises Windows Server across the public internet.
* **The Private Bridge:** A cloud-native pipeline using Azure VNet Peering to ingest logs from an Azure joined Domain Controller over a private internal network.

![Splunk Security Lab Architecture](/assets/projects/splunk-thumbnail.jpg)

---

## 📐 The "Why" (My Thought Process)

### 1. Terraform for Repeatable Security
Clicking through the portal is fine for a one-off, but security needs consistency. I used Terraform so that my Network Security Groups (NSGs) and VM configurations are documented in code. If I need to scale the SOC or move regions, I change one variable and run a command.

### 2. Hybrid vs. Native Ingestion
I wanted to master two different worlds. The on-premises lab taught me how to handle Public IP allow-listing and encryption across the web. The Azure-native lab taught me how to route traffic over Private VNet Peering, which is significantly more secure and reduces data egress costs.

### 3. Agent-Based Monitoring
I used Splunk Universal Forwarders (UF) on all endpoints. Managing these via the CLI (`inputs.conf` and `outputs.conf`) gave me a deep understanding of how telemetry is actually parsed and routed before it ever hits a dashboard.

---

## 🚧 Battle Scars: Things That Broke
Building a hybrid bridge means more things can go wrong. Here’s how I fixed them:

* **The "Locked Door" Firewall Loop:** I initially secured the Splunk VM by only allowing my home's public IP. This worked for the on-prem server but accidentally blocked the Azure VM from sending logs across the internal network. I had to refactor my Terraform NSG rules to allow both the Public IP and the Internal VNet Subnet (10.0.0.0/8).
* **The "Invisible" Config File:** I spent an hour wondering why logs weren't flowing, only to realize Windows had saved my config as `inputs.conf.txt`. Renaming it and restarting the service via PowerShell instantly fixed the stream.
* **The NLA RDP Trap:** I tried to brute-force RDP to generate "Failed Logon" alerts (Event 4625), but nothing showed up. I discovered that Network Level Authentication (NLA) drops bad requests before the logs are even written. I had to pivot my detection strategy to focus on Network Logons (Type 3) to prove the SIEM was working.

---

## 🚀 What I’d Change For The Real World
1. **Splunk Deployment Server:** Instead of manually editing `inputs.conf` on every VM, I would use a Splunk Deployment Server to push configuration "apps" to hundreds of forwarders at once.
2. **Managed Identities:** I would move away from local SSH keys and use Azure Managed Identities to handle the authentication between the VMs and the storage accounts used for Terraform state.
3. **Automated Response (SOAR):** I’d integrate Azure Logic Apps. If Splunk detects a brute-force attack from a specific IP, the Logic App should automatically add that IP to the Azure NSG "Deny" list.

---

**[Think my code looks as good as the site? Check the Repo on GitHub](https://github.com/Dane139/azure-splunk-lab)**