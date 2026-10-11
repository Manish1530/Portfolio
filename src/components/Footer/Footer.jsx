import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { commonProfile } from "../../data/portfolioData";
import { IconGithub, IconLinkedin, IconMail, IconArrowRight } from "../common/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isSports = location.pathname.startsWith("/sports");

  const devNavLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "timeline", label: "Milestones" },
    { to: "contact", label: "Contact" },
  ];

  const sportsNavLinks = [
    { to: "home", label: "Home" },
    { to: "leadership", label: "Leadership" },
    { to: "domains", label: "Focus Areas" },
    { to: "sports-projects", label: "Sports Tech" },
    { to: "timeline", label: "Milestones" },
    { to: "contact", label: "Contact" },
  ];

  const navLinks = isSports ? sportsNavLinks : devNavLinks;

  return (
    <footer className={`footer-root ${isSports ? "footer-sports-mode" : ""}`}>
      {/* Audience Cross-Navigation Banner */}
      <div className="footer-cross-nav-strip">
        <div className="container cross-nav-container">
          {isSports ? (
            <div className="cross-nav-content">
              <span className="cross-nav-text">Looking for software engineering & web development work?</span>
              <RouterLink to="/" className="cross-nav-link sports-link">
                <span>Explore my Software Developer Portfolio</span>
                <IconArrowRight size={14} />
              </RouterLink>
            </div>
          ) : (
            <div className="cross-nav-content">
              <span className="cross-nav-text">Also interested in my sports leadership profile?</span>
              <RouterLink to="/sports" className="cross-nav-link dev-link">
                <span>View Sports & Leadership Profile</span>
                <IconArrowRight size={14} />
              </RouterLink>
            </div>
          )}
        </div>
      </div>

      <div className="container footer-container">
        {/* Brand & Tagline */}
        <div className="footer-brand-col">
          <RouterLink
            to={isSports ? "/sports" : "/"}
            className="footer-brand"
          >
            <span className="footer-logo-badge">{commonProfile.initials}</span>
            <span className="footer-brand-title">
              {commonProfile.name}
              <span className="brand-dot">.</span>
            </span>
          </RouterLink>
          <p className="footer-role-tagline">
            {isSports
              ? "Volleyball Championship Captain, Sports Management & Event Operations Enthusiast."
              : "Full-Stack Web Developer & Computer Engineering Graduate building practical web applications."}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links-col">
          <span className="footer-heading">
            {isSports ? "Sports Navigation" : "Developer Navigation"}
          </span>
          <ul className="footer-nav-list">
            {navLinks.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="footer-nav-link"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Connect Links */}
        <div className="footer-social-col">
          <span className="footer-heading">Connect</span>
          <div className="footer-social-row">
            {commonProfile.socials.github && (
              <a
                href={commonProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
              </a>
            )}
            {commonProfile.socials.linkedin && (
              <a
                href={commonProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={18} />
              </a>
            )}
            {commonProfile.socials.email && (
              <a
                href={`mailto:${commonProfile.socials.email}`}
                className="footer-social-icon"
                aria-label="Email"
              >
                <IconMail size={18} />
              </a>
            )}
          </div>
          <span className="footer-email-text">{commonProfile.socials.email}</span>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} {commonProfile.name}. All rights reserved.
          </p>
          <p className="footer-built-with">
            Dual-Audience Portfolio • Built with React & Modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
