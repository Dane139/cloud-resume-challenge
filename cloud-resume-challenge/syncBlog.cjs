const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const blogDir = path.resolve(__dirname, 'backend/data/blog');
const outputFile = path.resolve(__dirname, 'frontend/src/data/blogData.json');

const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

const blogData = files.map(file => {
  const filePath = path.join(blogDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const { data, content } = matter(fileContent);
  
  return {
    name: data.name,
    handle: data.handle,
    date: data.date,
    excerpt: data.excerpt,
    body_html: marked.parse(content)
  };
});

fs.writeFileSync(outputFile, JSON.stringify(blogData, null, 2));

console.log(`✅ Success! Synced ${blogData.length} posts to frontend/src/data/blogData.json`);