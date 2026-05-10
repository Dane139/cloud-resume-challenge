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
    <>
      <h1 className="page_header">{project.name}</h1>

      <article>
        <div className="nav-container" style={{ marginBottom: '10px' }}>
          <NavLink className="button l-icon" to={`/projects`}>
            <ArrowLeft size={20} />
            Back to all projects
          </NavLink>
        </div>

        <p style={{ 
            fontWeight: '600', 
            fontSize: '1.2rem', 
            marginBottom: '20px', 
            color: '#1a1a1a',
            borderBottom: '1px solid #ccc',
            paddingBottom: '20px'
        }}>
          {project.description}
        </p>

        <div 
          className="markdown" 
          dangerouslySetInnerHTML={{ __html: project.body_html }} 
        />
      </article>
    </>
  );
}