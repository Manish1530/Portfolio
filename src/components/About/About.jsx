import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { commonProfile, developerProfile } from "../../data/portfolioData";
import { IconCheck, IconCode, IconTrophy, IconArrowRight } from "../common/Icons";

const About = () => {
  const { about, skills } = developerProfile;
  const { education } = commonProfile;

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <IconCode size={14} />
            <span>{about.eyebrow}</span>
          </div>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-subtitle">
            Focused on building clean web applications with reliable backend architecture,
            supported by strong analytical foundations and engineering discipline.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="about-narrative-grid">
          {/* Left Narrative */}
          <div className="narrative-content">
            <h3 className="content-heading">Engineering Mindset & Problem Solving</h3>
            {about.introduction.map((paragraph, index) => (
              <p key={index} className="narrative-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Authentic, understated sports supporting point */}
            <div className="sports-supporting-callout">
              <div className="callout-icon-box">
                <IconTrophy size={18} />
              </div>
              <div className="callout-body">
                <p className="callout-text">{about.sportsSupportingNote}</p>
                <Link to="/sports" className="callout-link">
                  <span>Explore sports leadership profile</span>
                  <IconArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Current Focus / Learning */}
            <div className="current-learning-block">
              <h4 className="sub-heading">Currently Expanding In:</h4>
              <ul className="learning-list">
                {about.currentLearning.map((item, index) => (
                  <li key={index} className="learning-item">
                    <span className="learning-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education Overview */}
          <div className="education-card-panel">
            <div className="education-header">
              <span className="edu-badge">Academic Background</span>
              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-institution">{education.institution}</p>
              <div className="edu-meta-row">
                <span className="edu-meta-item">
                  <strong>Graduation:</strong> {education.graduationYear}
                </span>
                <span className="edu-meta-divider">•</span>
                <span className="edu-meta-item">
                  <strong>CGPA:</strong> {education.cgpa}
                </span>
              </div>
            </div>

            <div className="coursework-section">
              <h4 className="coursework-title">Core Computer Science Coursework:</h4>
              <div className="coursework-chips">
                {education.coursework.map((course, idx) => (
                  <span key={idx} className="course-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Categorized Matrix (Clean, no skill-level badges) */}
        <div id="skills" className="skills-matrix-wrapper">
          <h3 className="matrix-section-title">Technical Skills Directory</h3>
          <p className="matrix-section-sub">
            Technologies I have built projects with, tested, or use actively in software development.
          </p>

          <div className="skills-grid">
            {skills.map((categoryGroup, index) => (
              <div key={index} className="skill-category-card">
                <div className="skill-category-header">
                  <h4 className="category-title">{categoryGroup.category}</h4>
                  <span className="category-count">{categoryGroup.skills.length} skills</span>
                </div>
                <div className="skill-tags-flow">
                  {categoryGroup.skills.map((skillName, sIdx) => (
                    <div key={sIdx} className="skill-tag">
                      <IconCheck size={14} className="skill-check-icon" />
                      <span className="skill-name">{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;