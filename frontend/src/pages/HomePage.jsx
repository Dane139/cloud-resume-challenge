import React from "react";
import dane_willms from 'images/dane-willms-headshot.webp';
import blogData from 'data/blogData.json';
import PostItem from 'components/PostItem';
import ViewCounter from 'components/ViewCounter';
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredSkills = [
    "Microsoft Azure",
    "Terraform",
    "Entra ID",
    "PowerShell",
    "Nerdio / AVD",
    "Python",
    "Azure OpenAI",
  ];

  return (
    <div className="content_wrap">
      <h1 className="page_header">Dane Willms</h1>

      <ViewCounter />

      <article className="hero-card">
        <div className="profile-image-container">
          <img src={dane_willms} alt="Dane Willms" className="profile-image" />
        </div>

        <h2 className="hero-title">Azure Administrator</h2>

        <p className="hero-bio">
          I build and automate cloud infrastructure using Terraform and Azure — turning repeatable
          tasks into code and manual workflows into scalable solutions. Currently managing
          multi-tenant AVD environments via Nerdio and shipping lab projects that span Azure
          Functions, Azure OpenAI, and identity at scale with Entra ID.
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

      <div className="infra-teaser-card">
        <span className="status_dot green_glow"></span>
        <span className="infra-teaser-text">
          Live Azure infrastructure metrics running in production
        </span>
        <NavLink to="/infrastructure" className="infra-teaser-link">
          View Dashboard →
        </NavLink>
      </div>

      <section className="posts-section">
        <h2 className="section-title">Recent Posts</h2>
        {sortedPosts.slice(0, 3).map((post) => (
          <PostItem key={post.handle} post={post} />
        ))}
      </section>
    </div>
  );
}