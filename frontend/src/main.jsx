import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Layout from './Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import BlogListPage from './pages/BlogListPage.jsx'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import PostPage from './pages/PostPage'
import InfrastructurePage from 'pages/InfrastructurePage';

createRoot(document.querySelector('main')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:handle" element={<PostPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:handle" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)