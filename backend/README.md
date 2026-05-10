## Render Project Emulate Markdown

For the project page, we want to be able to render markdown.
Using server side because client side markdown rendering is
difficult to implement and provides inconsistent results.

the `render_projects.py` will render the json with the markdown into html.
Eventually I'll rework this code into the eventual serverless function.

Backend: Data Processing & Static Site Generation
This directory serves as the "Build Engine" for the website’s content. It handles the transformation of raw Markdown files into the structured data required by the React frontend.

🏗️ Core Architecture: Server-Side Rendering (SSR)
For the project and blog pages, I implemented a server-side rendering strategy. Instead of making the user's browser parse Markdown on the fly, I process the content at build time.

Why Render Server-Side?
Performance: Pre-rendering HTML means the frontend doesn't have to download heavy Markdown libraries.

Consistency: Eliminates "Layout Shift" and ensures every visitor sees the exact same formatting.

SEO & Speed: Sending ready-to-render HTML is significantly faster than client-side parsing.

📝 Markdown Processing Pipeline
The system is designed to take raw content and turn it into a JSON API-like structure.

data/blog/: Contains my blog posts (e.g., my-journey-to-the-cloud.md).

data/projects/: This is where my project documentation lives.

lib/render_items.py: The heart of the processing logic. This script parses Markdown, handles "Front Matter" (metadata like dates and titles), and converts the body text into clean HTML.

tasks.py: An automation script used to trigger the build process and update the output_path.

🚀 Future-Proofing with Placeholders
I have proactively created test1.md through test5.md in the projects directory. These serve as structural placeholders, allowing me to:

Verify that the frontend grid and pagination handle multiple items correctly.

Rapidly deploy new content without having to re-architect the backend logic.

Ensure the "Recent Posts" and "Project Showcase" sections of the site look populated during the final testing phase of the Cloud Resume Challenge.

📁 Directory Breakdown
data/: The "Source of Truth" for all website content.

blog/: My personal technical blog, starting with my journey into the cloud.

projects/: A library of technical projects with pre-built placeholders for future growth.

lib/: Contains the internal Python modules (__init__.py, render_items.py) that handle the heavy lifting of data transformation.

requirements.txt: Lists the Python dependencies (like markdown2) required to run the build engine.

output_path: A configuration file or pointer that tells the scripts where to dump the final JSON/HTML assets for the frontend to consume.

🚧 Road Map
[x] Establish directory structure for Blogs and Projects.

[x] Implement Markdown-to-HTML rendering engine.

[x] Build out project placeholders for UI testing.

[ ] Migrate render_items.py into a dynamic Azure Function.

[ ] Add automated image-compression tasks to the build pipeline.