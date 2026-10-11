import React from "react";
import "./home.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { commonProfile, developerProfile, sportsProfile } from "../../data/portfolioData";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowRight,
  IconDownload,
} from "../common/Icons";
import HeroVisual from "../common/HeroVisual";

const Home = ({ mode = "developer" }) => {
  const isDev = mode === "developer";
  const heroData = isDev ? developerProfile.hero : sportsProfile.hero;

  return (
    <section id="home" className={`hero-section ${isDev ? "hero-dev-theme" : "hero-sports-theme"}`}>
      <div className="hero-glow-backdrop" aria-hidden="true" />
      <div className="container hero-container">
        {/* Left Column: Bio & Calls to Action */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span>{heroData.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            {isDev ? (
              <>
                Hi, I'm <span className="hero-name-highlight">{commonProfile.name}</span>.
                <span className="hero-headline-sub">{heroData.headline}</span>
              </>
            ) : (
              <>
                {commonProfile.name}: <br />
                <span className="hero-headline-sub hero-sports-highlight">
                  {heroData.headline}
                </span>
              </>
            )}
          </h1>

          {/* Typing Focus Animation - Complete readable phrases, no layout shifts */}
          <div className="hero-dynamic-subtitle">
            <span className="static-prefix">{isDev ? "Core Focus: " : "Key Focus: "}</span>
            <TypeAnimation
              sequence={heroData.typingSequences}
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <p className="hero-description">{heroData.supportingCopy}</p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            {isDev ? (
              <>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-primary"
                >
                  <span>View Projects</span>
                  <IconArrowRight size={16} />
                </ScrollLink>

                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-secondary"
                >
                  <span>About Me</span>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-ghost"
                >
                  <span>Contact</span>
                  <IconArrowRight size={14} />
                </ScrollLink>
              </>
            ) : (
              <>
                <ScrollLink
                  to="leadership"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-primary btn-sports-primary"
                >
                  <span>Leadership Experience</span>
                  <IconArrowRight size={16} />
                </ScrollLink>

                <ScrollLink
                  to="domains"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-secondary"
                >
                  <span>Areas of Interest</span>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="btn-ghost"
                >
                  <span>Contact</span>
                  <IconArrowRight size={14} />
                </ScrollLink>
              </>
            )}
          </div>

          {/* Social Links & Work Status / Resume */}
          <div className="hero-footer-links">
            <div className="hero-social-list">
              {commonProfile.socials.github && (
                <a
                  href={commonProfile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <IconGithub size={18} />
                </a>
              )}
              {commonProfile.socials.linkedin && (
                <a
                  href={commonProfile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <IconLinkedin size={18} />
                </a>
              )}
              {commonProfile.socials.email && (
                <a
                  href={`mailto:${commonProfile.socials.email}`}
                  className="hero-social-btn"
                  aria-label={`Email ${commonProfile.name}`}
                  title="Send Email"
                >
                  <IconMail size={18} />
                </a>
              )}
            </div>

            {/* Resume button only if resume exists */}
            {commonProfile.resume.hasResume ? (
              <a
                href={commonProfile.resume.url}
                download
                className="hero-resume-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDownload size={15} />
                <span>{commonProfile.resume.label}</span>
              </a>
            ) : (
              <span className="hero-status-pill">
                <span className="status-indicator-dot" />
                <span>{commonProfile.workStatusText}</span>
              </span>
            )}

            {/* Subtle Cross-Portfolio Switcher in Hero */}
            <RouterLink
              to={isDev ? "/sports" : "/"}
              className="hero-cross-link"
              title={isDev ? "Switch to Sports Portfolio" : "Switch to Developer Portfolio"}
            >
              <span>{isDev ? "Sports & Leadership ↗" : "Developer Portfolio ↗"}</span>
            </RouterLink>
          </div>
        </div>

        {/* Right Column: Understated Monogram Card (Replaces cartoon businessman) */}
        <div className="hero-visual-wrapper">
          <HeroVisual mode={mode} />
        </div>
      </div>
    </section>
  );
};

export default Home;
