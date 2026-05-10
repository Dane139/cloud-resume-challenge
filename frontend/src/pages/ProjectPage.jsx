import React from "react";
import 'css/pages/projects.css';
import projectsData from 'data/projectsData.json';
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function ProjectPage() {
  const { handle } = useParams();
  const project = projectsData.find(p => p.handle === handle);

  if (!project) {
    return <h1 className="page_header">Project not found</h1>;
  }

  return (
    <div className="project-page-wrapper" style={{ padding: '20px' }}>
      <h1 className="page_header">{project.name}</h1>

      <article>
        <div className="nav-container" style={{ marginBottom: '20px' }}>
          <NavLink className="button l-icon" to={`/projects`}>
            <ArrowLeft size={20} />
            Back to all projects
          </NavLink>
        </div>

        <p style={{ 
            fontWeight: '600', 
            fontSize: '1.25rem', 
            marginBottom: '30px', 
            lineHeight: '1.6',
            color: 'inherit', // Follows the parent theme color
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            paddingBottom: '20px'
        }}>
          {project.description}
        </p>

        {/* The images live inside here, controlled by .markdown img in CSS */}
        <div 
          className="markdown" 
          dangerouslySetInnerHTML={{ __html: project.body_html }} 
        />
      </article>
    </div>
  );
}