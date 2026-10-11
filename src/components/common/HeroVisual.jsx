import React from "react";
import "./HeroVisual.css";
import { commonProfile } from "../../data/portfolioData";
import { IconCode, IconTrophy, IconUsers } from "./Icons";

const HeroVisual = ({ mode = "developer" }) => {
  const isDev = mode === "developer";

  // If a verified portrait photo is supplied, render portrait card
  if (commonProfile.avatar) {
    return (
      <div className={`hero-visual-card ${isDev ? "visual-dev" : "visual-sports"}`}>
        <div className="hero-avatar-frame">
          <img
            src={commonProfile.avatar}
            alt={`${commonProfile.name} Portrait`}
            className="hero-avatar-image"
          />
          <div className="hero-avatar-shade" />
        </div>
      </div>
    );
  }

  // Understated, polished initials-based executive visual
  return (
    <div className={`hero-visual-card ${isDev ? "visual-dev" : "visual-sports"}`}>
      <div className="visual-card-inner">
        {/* Card Header Chrome */}
        <div className="visual-card-chrome">
          <div className="chrome-dots">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
          </div>
          <span className="chrome-filename">
            {isDev ? "manish_dev.tsx" : "sports_leadership.ts"}
          </span>
          <span className="chrome-status-indicator">
            <span className="status-ping" />
            <span>Active</span>
          </span>
        </div>

        {/* Monogram Center */}
        <div className="visual-monogram-container">
          <div className="monogram-backdrop-glow" />
          <div className="monogram-ring">
            <span className="monogram-text">{commonProfile.initials}</span>
          </div>
          <div className="monogram-name-badge">
            <span className="monogram-name">{commonProfile.name}</span>
            <span className="monogram-subtitle">
              {isDev ? "Full-Stack Web Developer" : "Volleyball Captain & Operations"}
            </span>
          </div>
        </div>

        {/* Route-Specific Verified Attributes */}
        <div className="visual-attributes-list">
          {isDev ? (
            <>
              <div className="visual-attr-item">
                <span className="attr-icon-box dev-accent">
                  <IconCode size={15} />
                </span>
                <div className="attr-content">
                  <span className="attr-label">Primary Discipline</span>
                  <span className="attr-value">Full-Stack MERN Architecture</span>
                </div>
              </div>
              <div className="visual-attr-item">
                <span className="attr-icon-box dev-accent">
                  <span className="attr-mini-text">&lt;/&gt;</span>
                </span>
                <div className="attr-content">
                  <span className="attr-label">Academic Track</span>
                  <span className="attr-value">B.Tech Computer Engineering</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="visual-attr-item">
                <span className="attr-icon-box sports-accent">
                  <IconTrophy size={15} />
                </span>
                <div className="attr-content">
                  <span className="attr-label">Verified Achievement</span>
                  <span className="attr-value">Championship Team Captain</span>
                </div>
              </div>
              <div className="visual-attr-item">
                <span className="attr-icon-box sports-accent">
                  <IconUsers size={15} />
                </span>
                <div className="attr-content">
                  <span className="attr-label">Operational Focus</span>
                  <span className="attr-value">Tournament & Team Coordination</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Tagline */}
        <div className="visual-card-footer">
          <span className="footer-code-label">
            {isDev ? "// Focus: Clean code & real-world utility" : "// Focus: Leadership, execution & athletics"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
