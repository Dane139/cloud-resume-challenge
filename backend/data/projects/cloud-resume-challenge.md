---
name: The Cloud Resume Challenge (Azure)
handle: cloud-resume-challenge
thumbnail: /assets/projects/cloud-resume-thumb.jpg
description: A full-stack serverless application featuring a unique visitor counter, automated CI/CD, and IaC using Terraform.
weight: 1
---

# Cloud Resume Challenge: The Azure Evolution

> **The Mission:** This isn't just a digital CV. It's a full-stack, serverless environment designed to prove one thing: that I’ve moved beyond the "password reset" ticket queue and into the world of automated, scalable cloud architecture.

---

## 🗓️ The Journey: Wisconsin to Florida
I kicked off this challenge in March 2025 while working at Baird. Shortly after, I started my Cloud & Networking Engineering (Azure) degree at WGU in July. This project became the sandbox where I turned classroom theory into production reality.

By September, life accelerated. My girlfriend and I decided to make a major move, and we spent the weekend before Christmas 2025 driving our entire lives down to Florida. When the dust finally settled in early 2026, I returned to this project and realized "Past Dane" had left "Future Dane" some serious technical debt. 

Azure had evolved, best practices had shifted, and my own standards had leveled up. I decided to tear it down and rebuild it with a focus on production-grade automation.

---

## 🚀 The Engineering Stack
* **The Cloud:** Microsoft Azure
* **IaC:** Terraform (State management via Blob Storage)
* **Backend:** Azure Functions (Python 3.11)
* **Database:** Azure Cosmos DB (NoSQL)
* **Frontend:** React 18 & Vite
* **CI/CD:** GitHub Actions (Fully automated pipelines)
* **Data Pipeline:** Node.js (Markdown-to-JSON automation)

![Cloud resume challenge implementation](/assets/projects/cloud-resume-thumb.jpg)

---

## 🏗️ Architectural Decision Records (The "Why")
In a production environment, the *reasoning* behind the tech is as important as the code itself.

### 1. Swapping Bicep for Terraform
Bicep is excellent for Microsoft pure shops, but I wanted a Cloud Agnostic mindset. I migrated the entire environment to Terraform to master state management and resource lifecycle hooks that translate across providers. This serves as the foundation for my upcoming Terraform Associate certification.

### 2. From Ansible to GitHub Actions
Originally, I used local Ansible playbooks. It worked, but it was "Snowflake Infrastructure" if my computer died, the deployment path died with it. I moved the logic to GitHub Actions to create a declarative, hands-off pipeline. Now, the code is the only source of truth.

### 3. Engineering a Custom Content Pipeline
I reached a point where manual JSON management was a bottleneck. I engineered a Node.js synchronization script that watches my Markdown folders. When I push a new post, the script parses metadata and builds the JSON artifacts automatically. This Content-as-Code approach keeps the UI and Data strictly decoupled.

---

## 🚧 Post-Mortems: What Went Wrong
This project was a series of brick walls that I had to "headbutt" my way through. Nights with less sleep, reverted changes, and the classic "one last fix" that took four hours:

* **The "Double-Count" Race Condition**
    > **The Issue:** React 18’s Strict Mode mounts components twice in development. This caused my visitor counter to jump by +2 on every refresh. The visitor counter was the bane of my existence back in 2025, and it remained a challenge a year later.
    >
    > **The Fix:** I went through three rounds of hardening: starting with `useRef` locks, moving to `localStorage` optimistic stamping, and finally refactoring the API to a strict GET vs POST contract. Now, the backend only increments when a unique session is validated.
* **The "NoneType" Connection String Crash**
    > **The Issue:** A critical `AttributeError` during local testing. It turned out the Python runtime was failing to find the Cosmos DB connection string due to a silent injection failure.
    >
    > **The Fix:** I reconstructed the local `.venv` from scratch and overhauled `local.settings.json` to ensure the Azure Functions Core Tools injected the variables correctly.
* **The GitHub Actions "Silent Fail"**
    > **The Issue:** Green checkmarks on the pipeline, but 404s on the API. 
    >
    > **The Fix:** I stopped trusting the success badge and dived into the raw Oryx build logs. I found a "No buildable projects found" warning caused by a nested sub-folder, updated the YAML pathing, and the API finally came to life.

---

## 🚀 Production-Grade Roadmap
If I were handing this over to a 24/7 enterprise environment tomorrow, here is the roadmap:

1.  **Secret Governance:** Move all connection strings out of GitHub Secrets and into Azure Key Vault with Managed Identity. Zero-secret exposure is the standard.
2.  **Observability:** Integrate Azure Application Insights. I want real-time telemetry on Function App "Cold Starts" and Kusto (KQL) alerts to monitor DB throughput.
3.  **Global Scale:** Transition Cosmos DB to a Multi-Region write setup to provide low-latency experiences for global users.

---

## 🙌 Mentors & Influence
* **Forrest Brazeal:** For the original blueprint that set me on this cloud path.
* **Jhante Charles:** For being the voice in my head telling me to focus on high-value projects. His guidance on my AD, Splunk, and Nessus labs is the reason my portfolio has "meat" on its bones.
* **MadeByGPS & Andrew Brown:** For the frontend blueprints and serverless deep-dives that kept me sane when the code wouldn't compile.

---


**[View the full implementation and technical post-mortem on GitHub](https://github.com/Dane139/cloud-resume-challenge)**