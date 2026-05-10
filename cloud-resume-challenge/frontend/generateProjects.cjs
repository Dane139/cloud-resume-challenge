const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const syncFolder = (inputSubDir, outputFileName) => {
    const inputDir = path.join(__dirname, '..', 'backend', 'data', inputSubDir);
    const outputFile = path.join(__dirname, 'src', 'data', outputFileName);

    if (!fs.existsSync(inputDir)) {
        console.error(`Directory not found: ${inputDir}`);
        return;
    }

    const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.md'));

    const items = files.map(file => {
        const rawContent = fs.readFileSync(path.join(inputDir, file), 'utf-8');
        const { data, content } = matter(rawContent);
        const body_html = marked.parse(content); 
        
        return {
            ...data,
            body_html
        };
    });

    if (inputSubDir === 'projects') {
        items.sort((a, b) => (a.weight || 0) - (b.weight || 0));
    } else {
        items.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    fs.writeFileSync(outputFile, JSON.stringify(items, null, 2));
    console.log(`Successfully synced ${inputSubDir} to ${outputFileName}`);
};

syncFolder('projects', 'projectsData.json');
syncFolder('blog', 'blogData.json');

console.log('All Markdown content is now live in the frontend');