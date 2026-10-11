import React from "react";
import "./Sports.css";
import { Link as RouterLink } from "react-router-dom";
import { sportsProfile } from "../../data/portfolioData";
import {
  IconTrophy,
  IconUsers,
  IconChart,
  IconCpu,
  IconCheck,
  IconCode,
  IconArrowRight,
} from "../common/Icons";

const Sports = () => {
  const { leadership, areasOfInterest, technicalAdvantage, futureProjects } = sportsProfile;

  const getInterestIcon = (name) => {
    switch (name) {
      case "trophy":
        return <IconTrophy size={22} />;
      case "users":
        return <IconUsers size={22} />;
      case "chart":
        return <IconChart size={22} />;
      case "cpu":
        return <IconCpu size={22} />;
      default:
        return <IconTrophy size={22} />;
    }
  };

  return (
    <div className="sports-page-content">
      {/* Part A: Sports Leadership Featured Showcase */}
      <section id="leadership" className="section-wrapper sports-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow sports-eyebrow">
              <IconTrophy size={14} />
              <span>Athletic Leadership & Achievements</span>
            </div>
            <h2 className="section-title">Sports Leadership & Captaincy</h2>
            <p className="section-subtitle">
              Authentic on-court leadership experience: squad selection, tournament scheduling,
              practice readiness, and high-pressure tactical coordination.
            </p>
          </div>

          <div className="sports-leadership-card">
            <div className="leadership-card-glow" aria-hidden="true" />

            <div className="leadership-banner">
              <div className="leadership-badge-wrap">
                <span className="trophy-pill">
                  <IconTrophy size={16} />
                  <span>{leadership.badge}</span>
                </span>
                <span className="period-pill">{leadership.period}</span>
              </div>

              <h3 className="leadership-role-title">{leadership.title}</h3>
              <p className="leadership-role-subtitle">{leadership.subtitle}</p>
              <p className="leadership-summary">{leadership.summary}</p>

              {/* Verified Achievements List */}
              {leadership.verifiedAchievements && (
                <div className="verified-achievements-box">
                  <span className="achievements-heading">Verified Milestone:</span>
                  <ul className="achievements-list">
                    {leadership.verifiedAchievements.map((ach, idx) => (
                      <li key={idx} className="achievement-item">
                        <IconCheck size={15} className="ach-check" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="leadership-responsibilities-grid">
              <h4 className="responsibilities-header">Core Captaincy & Operational Responsibilities:</h4>
              <div className="responsibilities-list">
                {leadership.responsibilities.map((resp, index) => (
                  <div key={index} className="responsibility-item">
                    <div className="responsibility-icon-wrap">
                      <IconCheck size={16} className="check-cyan" />
                    </div>
                    <div className="responsibility-content">
                      <h5 className="resp-title">{resp.title}</h5>
                      <p className="resp-desc">{resp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="leadership-callout">
              <p className="callout-lead">
                <strong>Operational Takeaway:</strong> {leadership.keyTakeaway}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part B: Areas of Interest in Sports Management & Analytics */}
      <section id="domains" className="section-wrapper domains-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow sports-eyebrow">
              <IconChart size={14} />
              <span>Career & Practical Focus</span>
            </div>
            <h2 className="section-title">Sports Management Focus Areas</h2>
            <p className="section-subtitle">
              Key domains I am actively exploring to blend organizational teamwork, tournament logistics, and technology.
            </p>
          </div>

          <div className="interests-grid">
            {areasOfInterest.map((area) => (
              <div key={area.id} className="interest-card">
                <div className="interest-icon-box">{getInterestIcon(area.iconName)}</div>
                <h4 className="interest-title">{area.title}</h4>
                <p className="interest-desc">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Foundation Advantage Card */}
          {technicalAdvantage && (
            <div className="tech-advantage-card">
              <div className="advantage-header">
                <div className="advantage-icon">
                  <IconCode size={20} />
                </div>
                <div className="advantage-titles">
                  <h3 className="advantage-title">{technicalAdvantage.title}</h3>
                  <p className="advantage-desc">{technicalAdvantage.description}</p>
                </div>
              </div>
              <div className="advantage-strengths-grid">
                {technicalAdvantage.keyStrengths.map((strength, idx) => (
                  <div key={idx} className="advantage-strength-item">
                    <IconCheck size={16} className="advantage-check" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
              <div className="advantage-cta-row">
                <RouterLink to="/" className="advantage-dev-link">
                  <span>Explore my Full-Stack Developer Portfolio</span>
                  <IconArrowRight size={14} />
                </RouterLink>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Part C: Sports Technology & Concepts */}
      <section id="sports-projects" className="section-wrapper future-sports-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow sports-eyebrow">
              <IconCpu size={14} />
              <span>Sports Technology</span>
            </div>
            <h2 className="section-title">Sports Software Concepts & Tools</h2>
            <p className="section-subtitle">
              Concepts and architectures designed to address tournament operations, bracket generation, and match statistics.
            </p>
          </div>

          <div className="future-projects-grid">
            {futureProjects.map((fProj) => (
              <div key={fProj.id} className="future-project-card">
                <div className="future-card-top">
                  <span className="future-badge">{fProj.badge}</span>
                  <IconCode size={18} className="code-hint" />
                </div>
                <h4 className="future-proj-title">{fProj.title}</h4>
                <p className="future-proj-desc">{fProj.description}</p>

                <div className="future-tech-row">
                  {fProj.targetTech.map((tech, idx) => (
                    <span key={idx} className="future-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
