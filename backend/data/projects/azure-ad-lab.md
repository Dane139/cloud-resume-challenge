---
name: Azure AD Lab
handle: azure-ad-lab
thumbnail: /assets/projects/ad-lab-thumb.jpg
description: Architected a Windows Server 2025 Active Directory Domain Controller in Azure using Terraform to automate identity infrastructure.
weight: 2
---

# Scaling Identity: Why I Stopped "Clicking" and Started Coding Active Directory

> **The Big Idea:** We’ve all been there, clicking through the Azure portal, setting up VMs by hand, and hoping we didn't miss a checkbox. This project was a way for me to take the next step in setting up environments. I wanted to see if I could take a classic Windows Server 2025 Active Directory setup and turn it into a repeatable, automated blueprint using Terraform.

## 🏗️ What I Actually Built
This lab isn't just about Active Directory; it’s about the infrastructure that keeps it safe.
* **The Heart:** A Windows Server 2025 Domain Controller.
* **The Perimeter:** A custom VNet with zero "wide open" rules. I used a Bastion Host so I never had to expose RDP to the public internet.
* **The Automation:** A full Terraform lifecycle. If I break the domain, I don't spend an hour fixing it. I run one command and it’s back in minutes.

![Azure Active Directory Architecture Diagram](/assets/projects/ad-lab-thumb.jpg)

---

## 📐 The "Why" (My Thought Process)

### 1. Windows Server 2025 (The New Stuff)
I could have used 2019 or 2022, but I wanted to work with the latest security features. Server 2025 is the current industry "cutting edge," and I wanted to see how the new functional levels play with modern Azure identity.

### 2. Terraform over "Click-Ops"
The portal is great for learning, but it’s a nightmare for consistency. I used Terraform because I wanted a record of every single decision I made. If I change a network rule or a disk size, it’s documented in the code. No more "Wait, what did I click?" moments.

### 3. Hardening the Network
Identity is the most targeted part of any network. I didn't want a "lazy" VNet. I manually mapped out the specific ports AD actually needs (DNS, Kerberos, RPC) and blocked everything else. It was a lesson in least privilege networking that felt a lot more like a real-world production environment.

---

## 🚧 Battle Scars: Things That Broke
Let’s be real: this project fought me back. 

* **The DNS Loop:** Active Directory *is* DNS. When I first promoted the server to a DC, the VNet didn't know the new DNS server existed yet. I had to go back into my Terraform code and tell the VNet: *"Hey, look at this specific IP for DNS now."* This problem that taught me exactly how Azure handles custom DNS.
* **The Promotion Race:** Sometimes Terraform would try to configure the VM before the VM was even fully awake. I had to implement explicit dependencies (`depends_on`) to make sure the network security was solid before the server tried to talk to the domain.

---

## 🚀 What I’d Change For The Real World
If I were building this for a company with 500 employees instead of just for myself, here’s how I’d level it up:

1.  **High Availability:** I would deploy an Availability Set with at least two Domain Controllers across different Fault Domains to ensure identity services stay online during Azure maintenance.
2.  **Hybrid Connectivity:** I would implement a Site-to-Site VPN or ExpressRoute gateway to simulate a real-world hybrid cloud environment where the Azure DC handles cloud-native authentication for on-prem users.
3.  **Managed Identity:** Instead of using local admin passwords in the Terraform code, I would pull secrets from Azure Key Vault using a Managed Identity to ensure zero-secret exposure.

---

**[Think my code looks as good as the site? Check the Repo on GitHub](https://github.com/Dane139/azure-ad-lab)**