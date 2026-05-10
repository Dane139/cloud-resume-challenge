import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <article className="post-item-card">
      <div className="post-meta">
        <span className="post-date">{post.date}</span>
      </div>
      
      <h2 className="post-title">{post.name}</h2>
      
      <p className="post-excerpt">
        {post.excerpt}
      </p>
      
      <NavLink to={`/blog/${post.handle}`} className="btn-explore">
        Read More
      </NavLink>
    </article>
  );
}