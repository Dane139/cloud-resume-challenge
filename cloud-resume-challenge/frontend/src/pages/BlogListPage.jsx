import React from 'react';
import blogData from 'data/blogData.json';
import PostItem from 'components/PostItem';

export default function BlogListPage() {
  const data = Array.isArray(blogData) ? blogData : [];
  
  const sortedPosts = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log("Rendering Blog Posts:", sortedPosts);

  return (
    <div className="content_wrap">
      <h1 className="page_header">The Cloud Journal</h1>
      <div className="blog-feed">
        {sortedPosts.length > 0 ? (
          sortedPosts.map(post => (
            <PostItem key={post.handle} post={post} />
          ))
        ) : (
          <p>No posts found. Check your data source!</p>
        )}
      </div>
    </div>
  );
}