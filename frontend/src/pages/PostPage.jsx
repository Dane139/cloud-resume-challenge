import React from "react";
import blogData from 'data/blogData.json'; // Now Vite knows exactly where this is
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function PostPage() {
  const { handle } = useParams();
  
  const post = blogData.find(p => p.handle === handle);

  if (!post) {
    return (
      <div className="content_wrap">
        <h1 className="page_header">Post Not Found</h1>
        <NavLink to="/blog" className="btn-back">Back to Blog</NavLink>
      </div>
    );
  }

  return (
    <div className="content_wrap">
      <NavLink className="btn-back" to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <ArrowLeft size={18} />
        Back to Blog
      </NavLink>

      <article className="single-post-card">
        <header className="post-view-header">
          <h1 className="page_header post-view-title">{post.name}</h1>
          <div className="post-date-sub" style={{ opacity: 0.7, marginBottom: '2rem' }}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div 
          className="markdown" 
          dangerouslySetInnerHTML={{ __html: post.body_html }} 
        />
      </article>
    </div>
  );
}