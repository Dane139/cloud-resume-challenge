import React from "react";
import dane_willms from 'images/dane-willms-headshot.webp';
import blogData from 'data/blogData.json';
import PostItem from 'components/PostItem';
import ViewCounter from 'components/ViewCounter';
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredSkills = ["Microsoft Azure", "Terraform", "Splunk (SIEM)", "PowerShell", "Entra ID"];

  return (
    <div className="content_wrap">
      <h1 className="page_header">Dane Willms's Personal Website</h1>
      
      <ViewCounter />

      <article className="hero-card">
        <div className="profile-image-container">
          <img src={dane_willms} alt="Dane Willms" className="profile-image" />
        </div>

        <h2 className="hero-title">Junior Cloud Engineer</h2>
        
        <p className="hero-bio">
          Passionate about cloud automation and infrastructure. I combine a strong foundation 
          in IT troubleshooting with hands-on project work in Azure administration, 
          Terraform deployments, and identity management.
        </p>

        <div className="featured-skills-badges">
          {featuredSkills.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>

        <div className="cta-container">
          <NavLink to="/resume" className="btn-solid">View Resume</NavLink>
          <NavLink to="/projects" className="btn-explore">Explore Projects</NavLink>
        </div>
      </article>

      <section className='posts-section'>
        <h2 className="section-title">Recent Posts</h2>
        {sortedPosts.slice(0, 3).map((post) => (
          <PostItem key={post.handle} post={post} />
        ))}
      </section>
    </div>
  )
}