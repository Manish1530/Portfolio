import React, { useEffect } from "react";
import { IconClose, IconGithub, IconExternal, IconCheck } from "../common/Icons";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const { title, category, technologies, githubUrl, liveUrl, caseStudy, image } = project;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="modal-category-badge">{category}</span>
            <h2 className="modal-title">{title}</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <IconClose size={22} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {image && (
            <div className="modal-banner-image-wrapper">
              <img src={image} alt={`${title} overview`} className="modal-banner-image" />
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="modal-tech-stack">
            <span className="modal-tech-label">Technologies Used:</span>
            <div className="modal-tech-chips">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag modal-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="case-study-section">
            <h3 className="section-subheading">1. Problem & Purpose</h3>
            <p className="case-study-text">{caseStudy.problem}</p>
          </div>

          <div className="case-study-section">
            <h3 className="section-subheading">2. What I Built</h3>
            <p className="case-study-text">{caseStudy.whatIBuilt}</p>
          </div>

          {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
            <div className="case-study-section">
              <h3 className="section-subheading">3. Key Features</h3>
              <ul className="modal-features-list">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <IconCheck size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="case-study-section">
            <h3 className="section-subheading">4. Technology & Implementation</h3>
            <p className="case-study-text">{caseStudy.techImplementation}</p>
          </div>

          <div className="case-study-section">
            <h3 className="section-subheading">5. What I Learned</h3>
            <p className="case-study-text">{caseStudy.learnings}</p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <div className="modal-links-left">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <IconGithub size={18} />
                <span>View Source Code</span>
              </a>
            ) : null}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <IconExternal size={18} />
                <span>Open Live Demo</span>
              </a>
            ) : null}
          </div>

          <button onClick={onClose} className="btn-ghost">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
