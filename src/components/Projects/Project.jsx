import React, { useState } from "react";
import "./project.css";
import { developerProfile } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { IconCode } from "../common/Icons";

const Project = ({
  projects = developerProfile.projects,
  categories = ["All", "Full Stack", "Frontend", "Backend"],
  sectionId = "projects",
  eyebrow = "Featured Works",
  title = "Practical Software Projects",
  subtitle = "A curated collection of web applications demonstrating full-stack engineering, responsive design, database architecture, and real-time communication.",
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  // Filter projects by category and sort featured projects first
  const filteredProjects = projects
    .filter((project) => {
      if (activeCategory === "All") return true;
      return project.category.toLowerCase() === activeCategory.toLowerCase();
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  return (
    <section id={sectionId} className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <IconCode size={14} />
            <span>{eyebrow}</span>
          </div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="project-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setModalProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="projects-empty-state">
            <IconCode size={36} className="empty-icon" />
            <h3 className="empty-title">No projects in "{activeCategory}" yet</h3>
            <p className="empty-text">
              Projects in this category are currently under development. Check back soon or view all projects!
            </p>
            <button
              className="btn-secondary"
              onClick={() => setActiveCategory("All")}
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Case Study Modal */}
        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Project;