<<<<<<< HEAD
# Cloud Resume Challenge: Azure Edition

This is my take on the Cloud Resume Challenge. It's a full-stack cloud project I built on the side to help bridge the gap between my day job in IT help desk and the cloud engineering roles I am aiming for.

## 🗓️ The Journey
I originally started this challenge back in March 2025. Life got pretty busy shortly after that. I landed a new job, went back to school at WGU, and ended up moving to Florida. Once the dust settled, I picked the project back up in 2026 to finally cross the finish line.

Taking a break ended up being a blessing in disguise. Azure's platform had evolved, and honestly, my own skills had leveled up too. It was still a really tough build that threw some classic cloud engineering brick walls at me, but I learned a massive amount just figuring out how all these tools wire together under the hood.

## 🚀 Tech Stack
* **Cloud Provider:** Microsoft Azure
* **Infrastructure as Code (IaC):** Azure Bicep
* **CI/CD:** GitHub Actions, Bash
* **Frontend:** React, Vite, CSS
* **Hosting:** Azure Static Web Apps
* **Backend:** Azure Functions (Python)
* **Database:** Azure Cosmos DB

## 📁 Project Structure
* **frontend/:** The React code for my resume site and visitor counter.
* **api/backend-counter/:** The Python code for the backend API.
* **azure/:** My Bicep templates and infrastructure deployment logic.
* **.github/workflows:** The pipeline automation that handles my deployments.

## 🏗️ The CI/CD Setup
I ended up moving from local Ansible scripts to a GitHub Actions pipeline, which was a massive quality-of-life upgrade. Instead of fighting with my local laptop environment, I now have a clean Linux runner that handles everything automatically:
1. It builds the React app and compiles the Python backend simultaneously.
2. It drops my routing config file into the exact right folder.
3. It pushes the whole thing to Azure.
It is just a much more reliable way to manage a live site than running scripts manually from my desk.

## 🚧 What Went Wrong (And How I Fixed It)
This whole project was basically one long debugging session. Here are the biggest hurdles I hit:

* **The GitHub Actions "Lie" & The Nested Folder Trap:** Right at the finish line, my deployment pipeline showed a green success checkmark, but the API was completely broken.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>My React frontend was crashing with a weird HTML parsing error (<code>Unexpected token '<'</code>) instead of showing the visitor count. It turned out GitHub Actions was successfully deploying the frontend but quietly skipping the Python backend. VS Code visually collapsed my directories, so I didn't realize my Python files were sitting inside an extra subfolder (<code>api/backend-counter</code>). Azure looked in the top-level <code>api/</code> folder, didn't find a <code>requirements.txt</code>, shrugged, and skipped the build entirely without failing the pipeline. I had to dig into the raw Oryx build logs, spot the silent failure, and update my YAML file to point to the exact subfolder (<code>api_location: "api/backend-counter"</code>). It was a brutal lesson in reading the actual build logs instead of just trusting a green pipeline.</p>
  </details>

* **Infrastructure Sequencing:** I ran into circular dependencies in my Bicep templates. The Function App and CosmosDB were basically stuck waiting on each other.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>The deployment would just hang and eventually time out. I had to learn how to map out my infrastructure properly and use the <code>dependsOn</code> property in Bicep to force Azure to deploy things in a very specific order: Infrastructure first, app settings second, and the actual code last.</p>
  </details>

* **The CORS Rabbit Hole:** I spent hours rewriting my Python backend code when the real issue was just a security handshake failure.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>The browser was killing the connection before it even reached my API because my Azure Static Web App wasn't on the "Allowed Origins" list. It definitely taught me to check the browser's Network Tab first before assuming my code is broken. I eventually bypassed the CORS nightmare entirely by migrating to a Managed API architecture.</p>
  </details>

* **The Frontend/ViteJS Learning Curve:** Since I am much more comfortable on the backend and infrastructure side, learning React and Vite felt incredibly strict and unintuitive.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>React is super unforgiving. If your JSX isn't absolutely perfect, the whole build breaks. Vite treats every single character as critical, so missing a closing tag or a curly brace leads to an immediate build failure. It was brutal, but it forced me to actually learn how modern frontend build tools work.</p>
  </details>

* **CSS and Layout Refactoring:** I struggled a lot with getting consistent grid layouts and thumbnail alignment across different screen sizes.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>I spent days fighting with CSS box-model spacing and thumbnail aspect ratios. I eventually got the hang of Flexbox and Grid layouts to make sure the project gallery cards actually looked good whether you are on a phone or a desktop monitor. It was a harsh lesson in the difference between <i>'it looks fine on my screen'</i> and <i>'it looks fine on every screen.'</i></p>
  </details>

## 🔄 My Architectural Pivot
I originally started this build using a basic Storage Account and a legacy CDN. When I came back to the project later, I realized that setup was practically deprecated. I decided to switch over to **Azure Static Web Apps**. It took extra work to migrate everything, but it handles SSL and hosting so much better. It was a solid lesson in staying flexible when cloud platforms inevitably change.

## 🙌 Thanks
* **MadeByGPS:** For the original inspiration to take this on.
* **Andrew Brown (ExamPro):** For the help with React architecture and keeping me sane when the debugging got tough.

---

## 🌐 Live Site
=======
# Cloud Resume Challenge: Azure Edition

This is my take on the Cloud Resume Challenge. It's a full-stack cloud project I built on the side to help bridge the gap between my day job in IT help desk and the cloud engineering roles I am aiming for.

## 🗓️ The Journey
I originally started this challenge back in March 2025. Life got pretty busy shortly after that. I landed a new job, went back to school at WGU, and ended up moving to Florida. Once the dust settled, I picked the project back up in 2026 to finally cross the finish line.

Taking a break ended up being a blessing in disguise. Azure's platform had evolved, and honestly, my own skills had leveled up too. It was still a really tough build that threw some classic cloud engineering brick walls at me, but I learned a massive amount just figuring out how all these tools wire together under the hood.

## 🚀 Tech Stack
* **Cloud Provider:** Microsoft Azure
* **Infrastructure as Code (IaC):** Azure Bicep
* **CI/CD:** GitHub Actions, Bash
* **Frontend:** React, Vite, CSS
* **Hosting:** Azure Static Web Apps
* **Backend:** Azure Functions (Python)
* **Database:** Azure Cosmos DB

## 📁 Project Structure
* **frontend/:** The React code for my resume site and visitor counter.
* **api/backend-counter/:** The Python code for the backend API.
* **azure/:** My Bicep templates and infrastructure deployment logic.
* **.github/workflows:** The pipeline automation that handles my deployments.

## 🏗️ The CI/CD Setup
I ended up moving from local Ansible scripts to a GitHub Actions pipeline, which was a massive quality-of-life upgrade. Instead of fighting with my local laptop environment, I now have a clean Linux runner that handles everything automatically:
1. It builds the React app and compiles the Python backend simultaneously.
2. It drops my routing config file into the exact right folder.
3. It pushes the whole thing to Azure.
It is just a much more reliable way to manage a live site than running scripts manually from my desk.

## 🚧 What Went Wrong (And How I Fixed It)
This whole project was basically one long debugging session. Here are the biggest hurdles I hit:

* **The GitHub Actions "Lie" & The Nested Folder Trap:** Right at the finish line, my deployment pipeline showed a green success checkmark, but the API was completely broken.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>My React frontend was crashing with a weird HTML parsing error (<code>Unexpected token '<'</code>) instead of showing the visitor count. It turned out GitHub Actions was successfully deploying the frontend but quietly skipping the Python backend. VS Code visually collapsed my directories, so I didn't realize my Python files were sitting inside an extra subfolder (<code>api/backend-counter</code>). Azure looked in the top-level <code>api/</code> folder, didn't find a <code>requirements.txt</code>, shrugged, and skipped the build entirely without failing the pipeline. I had to dig into the raw Oryx build logs, spot the silent failure, and update my YAML file to point to the exact subfolder (<code>api_location: "api/backend-counter"</code>). It was a brutal lesson in reading the actual build logs instead of just trusting a green pipeline.</p>
  </details>

* **Infrastructure Sequencing:** I ran into circular dependencies in my Bicep templates. The Function App and CosmosDB were basically stuck waiting on each other.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>The deployment would just hang and eventually time out. I had to learn how to map out my infrastructure properly and use the <code>dependsOn</code> property in Bicep to force Azure to deploy things in a very specific order: Infrastructure first, app settings second, and the actual code last.</p>
  </details>

* **The CORS Rabbit Hole:** I spent hours rewriting my Python backend code when the real issue was just a security handshake failure.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>The browser was killing the connection before it even reached my API because my Azure Static Web App wasn't on the "Allowed Origins" list. It definitely taught me to check the browser's Network Tab first before assuming my code is broken. I eventually bypassed the CORS nightmare entirely by migrating to a Managed API architecture.</p>
  </details>

* **The Frontend/ViteJS Learning Curve:** Since I am much more comfortable on the backend and infrastructure side, learning React and Vite felt incredibly strict and unintuitive.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>React is super unforgiving. If your JSX isn't absolutely perfect, the whole build breaks. Vite treats every single character as critical, so missing a closing tag or a curly brace leads to an immediate build failure. It was brutal, but it forced me to actually learn how modern frontend build tools work.</p>
  </details>

* **CSS and Layout Refactoring:** I struggled a lot with getting consistent grid layouts and thumbnail alignment across different screen sizes.
  <details>
  <summary><i>View technical details...</i></summary>
  <p>I spent days fighting with CSS box-model spacing and thumbnail aspect ratios. I eventually got the hang of Flexbox and Grid layouts to make sure the project gallery cards actually looked good whether you are on a phone or a desktop monitor. It was a harsh lesson in the difference between <i>'it looks fine on my screen'</i> and <i>'it looks fine on every screen.'</i></p>
  </details>

## 🔄 My Architectural Pivot
I originally started this build using a basic Storage Account and a legacy CDN. When I came back to the project later, I realized that setup was practically deprecated. I decided to switch over to **Azure Static Web Apps**. It took extra work to migrate everything, but it handles SSL and hosting so much better. It was a solid lesson in staying flexible when cloud platforms inevitably change.

## 🙌 Thanks
* **MadeByGPS:** For the original inspiration to take this on.
* **Andrew Brown (ExamPro):** For the help with React architecture and keeping me sane when the debugging got tough.

---

## 🌐 Live Site
>>>>>>> 064dded5d1f334f7f35c1f2b440f9e769608ffc6
You can check out the final build at: **[daneondemand.com](https://daneondemand.com)**