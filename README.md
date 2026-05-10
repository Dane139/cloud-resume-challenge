# The Cloud Resume Challenge: Azure Edition

> **A Note to the Reader:** This isn't just another static site sitting in a storage bucket. It’s a full-stack, serverless ecosystem that I’ve broken, fixed, and rebuilt more times than I’d like to admit. It represents my transition from the "Reset your password" world of the IT help desk to the "Build it for scale" world of Cloud Engineering.

## 🗓️ The Journey
I originally kicked off this challenge in March 2025. I then started a new job at Baird and shortly started the Cloud & Networking Engineering (Azure) degree at WGU in July. In September, my girlfriend and I started to talk about moving to Florida. We then packed up our lives and drove down to Florida the weekend before Christmas last year (2025).

When the dust finally settled in 2026, I came back to this project and realized "past me" had left "future me" some serious technical debt. Azure had evolved, best practices had shifted, and my own skills had leveled up. I decided to tear it down and rebuild it with a focus on production-grade automation.

## 🚀 The Stack
* **The Cloud:** Microsoft Azure
* **Infrastructure as Code (IaC):** Terraform
* **The Brains:** Azure Functions (Python 3.11) & Cosmos DB
* **The Face:** React 18 & Vite
* **The Delivery:** GitHub Actions (Full CI/CD)
* **Content Pipeline:** Node.js (Markdown → JSON)

---

## 🏗️ Architectural Pivots: The "Why"
I learned that the reasoning behind the choices made is just as important as how it's done. Here is the logic behind my biggest technical shifts:

### 1. Swapping Bicep for Terraform
Bicep is great if you're staying strictly in the Microsoft bubble. However, I wanted a Cloud Agnostic mindset. I migrated the entire environment to Terraform to master state management and resource lifecycle hooks that translate across any provider. It’s also been a perfect deep-dive for my upcoming Terraform Associate certification.

### 2. Moving from Local Ansible to GitHub Actions
In the beginning, I was running local Ansible playbooks from my desk. It worked, but if my computer died, my deployment would follow suit. I moved the logic to GitHub Actions to create a declarative, hands-off pipeline. Now, the code is the only source of truth.

### 3. Engineering a Custom Content Pipeline
I got tired of manually wrestling with `blogData.json`. I engineered a Node.js synchronization script that watches my Markdown folders. When I push a new post or project lab, the script parses the metadata and builds the JSON artifacts automatically. It’s a Content-as-Code approach that keeps the UI and the Data strictly separated.

---

## 🚧 Battle Scars: What Went Wrong
This project was a series of brick walls I had to headbutt my way through. Plenty of reverted changes that felt like no progress was made. Nights with less sleep just trying to fix one last thing before going to bed and that taking WAY longer than expected:

* **The "Double-Count" Race Condition**
  <details>
  <summary><i>How I fixed it...</i></summary>
  React 18’s Strict Mode mounts components twice in development to find bugs, which meant my visitor counter was jumping by +2 every time I refreshed. I went through three rounds of hardening: starting with <code>useRef</code> locks, moving to <code>localStorage</code> optimistic stamping, and finally refactoring the API to a strict GET vs POST contract. Now, the backend only increments when a unique session is validated. The visitor counter was the bane of my existence back when I first started this challenge back in March 2025, and it still was an annoying headache for me a year later.
  </details>

* **The "NoneType" Connection String Crash**
  <details>
  <summary><i>How I fixed it...</i></summary>
  I spent an entire afternoon staring at an <code>AttributeError: 'NoneType' object has no attribute 'rstrip'</code>. It turned out my Python runtime was failing to find the Cosmos DB connection string because of a silent injection failure in my local environment. I had to reconstruct the local <code>.venv</code> from scratch and overhaul my <code>local.settings.json</code> to ensure the Azure Functions Core Tools injected the variables correctly.
  </details>

* **The GitHub Actions "Silent Fail"**
  <details>
  <summary><i>How I fixed it...</i></summary>
  My pipeline was giving me green checkmarks, but my API was 404ing. Because of how VS Code collapsed my directories, I didn't realize my Python code was sitting in a nested sub-folder. I had to stop trusting the success badge and dive into the raw Oryx build logs. I found a "No buildable projects found" warning, updated my YAML pathing, and the API finally came to life.
  </details>

---

## 🚀 Production-Grade Roadmap
If I were building this for a 24/7 enterprise environment tomorrow, here is exactly what I’d change:

1.  **Secret Governance:** Move all connection strings out of GitHub Secrets and into Azure Key Vault with Managed Identity. Zero-secret exposure is the standard.
2.  **Observability:** Hook up Azure Application Insights. I want to see the latency of those Function App "Cold Starts" and set up Kusto (KQL) queries to alert me before the DB hits its limits.
3.  **Global Scale:** Move Cosmos DB to a Multi-Region write setup. If a user hits my site from overseas, I want them to have the same low-latency experience as someone in Florida.

---

## 🙌 Mentors & Influence
* **Forrest Brazeal:** For dreaming up this challenge and setting me on a path I haven't looked back from.
* **Jhante Charles:** For being the voice in my head telling me to focus on high-value projects. His guidance on my AD, Splunk, and Nessus labs is the reason my portfolio actually has meat on its bones.
* **MadeByGPS & Andrew Brown:** For the initial frontend blueprints and the serverless deep-dives that kept me sane when the code wouldn't compile.

---

## 🌐 Live Environment
**[daneondemand.com](https://daneondemand.com)**