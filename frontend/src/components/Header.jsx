import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    );
}