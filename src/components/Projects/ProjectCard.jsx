import React from "react";
import { IconGithub, IconExternal, IconArrowRight, IconCode } from "../common/Icons";

const ProjectCard = ({ project, onOpenDetails }) => {
  const {
    title,
    category,
    shortDescription,
    image,
    technologies,
    featured,
    year,
    githubUrl,
    liveUrl,
    caseStudy,
  } = project;

  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      {/* Card Header & Preview Image */}
      <div className="card-media-wrapper">
        {image ? (
          <img src={image} alt={`${title} screenshot`} className="project-thumbnail" />
        ) : (
          <div className="project-thumbnail-fallback">
            <IconCode size={40} className="fallback-icon" />
            <span>Screenshot coming soon</span>
          </div>
        )}
        <div className="card-media-badges">
          <span className="category-pill">{category}</span>
          {featured && <span className="featured-pill">Featured</span>}
          {year && <span className="year-pill">{year}</span>}
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{shortDescription}</p>

        {/* Tech Tags */}
        <div className="project-tech-tags">
          {technologies &&
            technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
        </div>

        {/* Card Footer Actions */}
        <div className="card-actions-row">
          <div className="links-group">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-icon-btn"
                title="View Source Code on GitHub"
                aria-label={`View ${title} source code on GitHub`}
              >
                <IconGithub size={18} />
                <span>Code</span>
              </a>
            ) : null}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-icon-btn action-live-btn"
                title="View Live Demo"
                aria-label={`View ${title} live application demo`}
              >
                <IconExternal size={18} />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>

          {caseStudy && (
            <button
              onClick={() => onOpenDetails(project)}
              className="card-details-btn"
              aria-label={`Read case study for ${title}`}
            >
              <span>Case Study</span>
              <IconArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
