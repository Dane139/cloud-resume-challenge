import React from "react";
import projectsData from 'data/projectsData.json';
import ProjectItem from 'components/ProjectItem';

export default function ProjectsPage() {
  return (
    <div className="content_wrap">
      <h1 className="page_header">Dane Willms's Projects</h1>
      <article className="projects"> 
        {projectsData.map((project) => (
          <ProjectItem key={project.handle} project={project} />
        ))}
      </article>
    </div>
  );
}