# Frontend Architecture & Setup

This directory contains the frontend code for the Cloud Resume Challenge. The application is a React-based Single Page Application (SPA) designed to serve as a comprehensive professional portfolio, featuring a modular architecture that separates content (Markdown) from presentation (React).

## 🚀 Tech Stack
* **Framework:** React 18+ (via Vite)
* **Routing:** React Router v7 (Declarative routing)
* **Styling:** Custom Vanilla CSS (Mobile-first, Glassmorphism theme)
* **Icons:** Lucide-React
* **Hosting:** Azure Static Web Apps
* **CI/CD:** GitHub Actions

## 🏗️ Architecture & Data Flow

The frontend has evolved into a modular, data-driven application to ensure maintainability and high performance.

### 1. Resume Rendering (`ResumeData.js`)
The resume view follows the traditional **Harvard Resume Template** format but is rendered dynamically to allow for easy updates without touching HTML tags.
* **Data Layer:** All professional experience, education, and technical skills are stored as a JSON object in `src/data/ResumeData.js`.
* **Component Layer:** React components (`ResumePage.jsx`, `ResumeSectionItem.jsx`) map this data to the DOM.

### 2. Unified Content Pipeline (`generateProjects.cjs`)
To optimize performance and simplify the Azure deployment, we have transitioned to a **Build-Phase JSON Generation** model. This eliminates the need for the browser to fetch multiple files at runtime.
* **The Process:** A Node.js script processes Markdown files located in the `backend/` directory.
* **Data Sync:** The script parses frontmatter (metadata) and body content, compiling them into `src/data/projectsData.json` and `blogData.json`.
* **Performance:** By importing these JSON files directly into components like `HomePage.jsx`, we achieve instant rendering and seamless client-side filtering.

## 💻 Local Development Setup

### Prerequisites
* Node.js & npm

### Installation & Serving

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend
   ```

2. **Install JavaScript dependencies:**
   ```sh
   npm install
   ```

3. **Generate JSON data from Markdown:**
   Run the python invoker to compile the latest projects and blog posts.
   ```sh
   invoke render-blog
   invoke render-projects
   ```

4. **Start the Vite Development Server:**
   *(Note: Do not use `http-server`, as Vite provides Hot Module Replacement and handles React routing).*
   ```sh
   npm run dev
   ```

## Performance & Styling Considerations

* **Glassmorphism UI:** The site utilizes a consistent glass-effect theme using `backdrop-filter: blur()` and semi-transparent gradients. This maintains a modern, high-contrast aesthetic that sits cleanly over the high-detail background texture.
* **Image Optimization:** All heavy assets, such as high-resolution background textures (originally 14MB) and headshots, have been optimized and converted to `.webp` format. This drastically reduces initial load times and bandwidth consumption.
* **Responsive Layouts:** The UI relies on a mobile-first approach. Custom CSS media queries (centralized in `breakpoints.css`) manage the transition from complex horizontal project/resume layouts on desktop to simplified vertical stacks on mobile devices.
* **Visual Hierarchy:** Standardized header gradients (`page_header`) and deliberate use of text shadows are implemented globally to ensure readability against dynamic backgrounds and textured paper elements.
* **Code Formatting:** The codebase is standardized on 4-space indentation to align with the Python-based backend and infrastructure-as-code (Terraform) standards used across the wider project.

---

<details>
<summary><b>Original Technical Specification & Blueprint (Archive)</b></summary>

# Frontend Technicial Specification

- Create a static website that serves an html resume.

## Resume Format Considerations

Resumes are in US are typically accepted in word or pdf format that exclude information. eg. Age, photos, marital status. We typically don't include GPA either.

I'm going to use the [Harvard Resume Template format](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) as the basis of my resume.

### Harvard Resume Format Generation

I'm going to utilize AI to generate the HTML and possibly the CSS and from there I will customize the code to my preferred liking.

Prompt to Gemini:

```text
Convert this resume format into html.
Please don't use a css framework.
Please use the least amount of css tags
Please create a downloaded html template file
```

Image provided to Gemini:
![](./docs/harvard-resume-format.jpg)

This is the [generated output](./docs/apr-4-2026-harvard-resume.html) which I will further customize.

This is what the generated HTML looks like unaltered:

![](./docs/harvard-resume-rendered.jpg)

## HTML Adjustments

- I will be applying mobile styling to my website we'll include the viewport meta tag width=device-width so mobile styling scales correctly.
- I'll extract our styles into it's own style sheet after we are happy with the HTML markup
- I'll simplify our HTML css selector to be as possible.
- For the HTML page I'll use 4 spaces because I most use Python and that's standard tab format.

## Serve Static Website Locally

I need to serve the static website locally so I can start using stylesheets 
externally from the HTML page in a Cloud Developer Environment (CDE).

Using the simple web-server http-server

### Install HTTP Server
```sh
npm i http-server -g
```

https://www.npmjs.com/package/http-server

### Server Website

http-server will serve a public folder by default where 
the command is run.

```sh
cd frontend
http-server
```

## Image Size Considertations

I have a background texture that was 14MB.
I'm going to optimize it to webp with an online tool.

## Frontend Framework Consideration

- Chose to use React because its the most popular javascript framework.
- Chose to use Vite.js over webpack because the frontend is very simple
- Configured React Router V7, decided to use declaractive mode because the app is very simple.

## Render Items with Frontmatter

Both my projects and blog posts rely on markdown.
It would be better to collect markdown files with front matter
and turn those into json objects.
Maybe everything contained within a directory for data.

eg. `/projects/:handle.markdown`
eg. `/blog/:handle.markdown`

## Tasks runner with invoker

I am using the task runner invoke and refactor the render_projects into render_items
so it can render the projects and the blog.
```sh
invoke --list
invoke render-blog
invoke render-projects
```
</details>

<details>
<summary><b>Deprecated Architectures & Archive</b></summary>

### Deprecated: Python Task Runner (`invoke`)
<p>The project originally utilized a Python-based task runner (<code>invoke render-blog</code>, <code>invoke render-projects</code>) to compile Markdown files. This required a dual-language environment (Python + Node) just to build the frontend.</p>
<br>
<b>The Pivot:</b> I deprecated this in favor of a native Node.js script (<code>generateProjects.cjs</code>). This unified the frontend toolchain under a single language, simplifying the CI/CD pipeline and removing the need for a Python runtime on the frontend build runner.

### Deprecated: Client-Side Markdown Fetching
<p>Early versions of the site used the browser <code>fetch</code> API to retrieve <code>.md</code> files from the <code>/public</code> directory at runtime. While simple, this led to "Flash of Unstyled Content" (FOUC) and high latency as the browser made sequential requests for every blog post.</p>
<br>
<b>The Pivot:</b> I moved to a Build-Phase JSON Generation model. By compiling Markdown into JSON artifacts before deployment, the data is bundled with the site. This allows for instant rendering, better SEO, and powerful client-side filtering without extra network overhead.

### Deprecated: Local `http-server` & Manual HTML
<p>Early technical specifications suggested using <code>http-server</code> for serving a static HTML resume. This was a "bare-metal" approach that made state management and navigation difficult to scale.</p>
<br>
<b>The Pivot:</b> Upon migrating to a React Single Page Application (SPA), I deprecated <code>http-server</code> in favor of the Vite Development Server. This transition provided Hot Module Replacement (HMR) and native handling of React Router's declarative navigation logic.

### Deprecated: Manual JSON Management
<p>In the "MVP" phase, <code>blogData.json</code> and <code>projectsData.json</code> were edited manually. This was highly error-prone, as a single missing comma in a large JSON file would break the entire production build.</p>
<br>
<b>The Pivot:</b> I implemented the Markdown-to-JSON Pipeline. This treats the <code>backend/</code> folder as the "Source of Truth." Now, the content is managed in clean Markdown files, and the JSON is strictly a machine-generated build artifact, eliminating human syntax errors.

### Original Technical Specification (Blueprint)
* **Goal:** Create a static website that serves an HTML resume.
* **Format:** Based on the Harvard Career Services bullet-point resume template.
* **Initial Tools:** Pure HTML/CSS optimized via Gemini-assisted code generation.
* **Mobile Scaling:** Initial requirement for `viewport` meta tags and 1:1 scaling for handheld devices.

</details>
