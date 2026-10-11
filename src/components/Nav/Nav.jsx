import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { commonProfile } from "../../data/portfolioData";
import { IconGithub, IconLinkedin } from "../common/Icons";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isSports = location.pathname.startsWith("/sports");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  // Route-specific navigation links
  const devNavItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "timeline", label: "Milestones" },
    { to: "contact", label: "Contact" },
  ];

  const sportsNavItems = [
    { to: "home", label: "Home" },
    { to: "leadership", label: "Leadership" },
    { to: "domains", label: "Focus Areas" },
    { to: "sports-projects", label: "Sports Tech" },
    { to: "timeline", label: "Milestones" },
    { to: "contact", label: "Contact" },
  ];

  const activeNavItems = isSports ? sportsNavItems : devNavItems;

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""} ${isSports ? "nav-sports-mode" : ""}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <RouterLink
          to={isSports ? "/sports" : "/"}
          className="nav-brand"
          onClick={closeMenu}
          title="Return to top"
        >
          <span className="brand-logo-badge">{commonProfile.initials}</span>
          <div className="brand-name-group">
            <span className="brand-name">
              {commonProfile.name.toUpperCase()}
              <span className="brand-dot">.</span>
            </span>
            <span className="brand-portfolio-tag">
              {isSports ? "SPORTS & LEADERSHIP" : "FULL-STACK DEV"}
            </span>
          </div>
        </RouterLink>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links">
            {activeNavItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="nav-link-active"
                  className="nav-link"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          {/* Subtle Cross-Portfolio Switcher */}
          <RouterLink
            to={isSports ? "/" : "/sports"}
            className="nav-mode-switcher"
            title={isSports ? "Switch to Developer Portfolio" : "Switch to Sports Leadership Portfolio"}
          >
            <span>{isSports ? "Developer Portfolio" : "Sports Profile"}</span>
            <span className="switcher-arrow">↗</span>
          </RouterLink>

          <div className="nav-social-icons">
            {commonProfile.socials.github && (
              <a
                href={commonProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="GitHub Profile"
              >
                <IconGithub size={18} />
              </a>
            )}
            {commonProfile.socials.linkedin && (
              <a
                href={commonProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin size={18} />
              </a>
            )}
          </div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-cta-btn"
          >
            Contact
          </ScrollLink>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-backdrop ${mobileOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="brand-name-group">
            <span className="brand-name">
              {commonProfile.name}
              <span className="brand-dot">.</span>
            </span>
            <span className="brand-portfolio-tag">
              {isSports ? "SPORTS & LEADERSHIP" : "SOFTWARE DEVELOPER"}
            </span>
          </div>
          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Route switcher inside mobile menu */}
        <div className="mobile-switcher-box">
          <RouterLink
            to={isSports ? "/" : "/sports"}
            className="mobile-mode-switcher-btn"
            onClick={closeMenu}
          >
            <span>{isSports ? "Switch to Developer Portfolio" : "Switch to Sports Leadership"}</span>
            <span className="switcher-arrow">↗</span>
          </RouterLink>
        </div>

        <ul className="mobile-nav-links">
          {activeNavItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="mobile-link-active"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-socials">
            {commonProfile.socials.github && (
              <a
                href={commonProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
                <span>GitHub</span>
              </a>
            )}
            {commonProfile.socials.linkedin && (
              <a
                href={commonProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
