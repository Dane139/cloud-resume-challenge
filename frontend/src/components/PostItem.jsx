import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PostItem({ post }) {
  // Format the date string into a readable format
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="post-item-card">
      <div className="post-meta">
        <span className="post-date">{formattedDate}</span>
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