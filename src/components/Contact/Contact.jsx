import React, { useState } from "react";
import "./Contact.css";
import { commonProfile, contactConfig } from "../../data/portfolioData";
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconCheck,
  IconDownload,
  IconArrowRight,
} from "../common/Icons";

const Contact = ({ mode = "developer" }) => {
  const isDev = mode === "developer";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(commonProfile.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus("submitting");
    setStatusMessage("");

    try {
      if (contactConfig.formspreeEndpoint) {
        const response = await fetch(contactConfig.formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || (isDev ? "Software Portfolio Inquiry" : "Sports Leadership Inquiry"),
            message: formData.message,
          }),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setStatusMessage("Thank you! Your message was delivered successfully. I will get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSubmitStatus("error");
          setStatusMessage(
            "Service notice: Could not deliver via Formspree right now. Please use the direct email link on the left to get in touch."
          );
        }
      } else {
        window.location.href = `mailto:${commonProfile.socials.email}?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        setSubmitStatus("success");
        setStatusMessage("Opening your default mail client with your prefilled message.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "Network connection issue. Please click the direct email link or copy the email address below to send your message."
      );
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <IconMail size={14} />
            <span>{isDev ? "Get in Touch" : "Sports & Operational Inquiries"}</span>
          </div>
          <h2 className="section-title">{contactConfig.sectionTitle}</h2>
          <p className="section-subtitle">
            {isDev
              ? "Whether you're hiring for a junior full-stack role, discussing a software project, or exploring opportunities—I'd love to hear from you."
              : "Interested in discussing tournament operations, team leadership, or sports management opportunities? Reach out below."}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's start a conversation</h3>
            <p className="panel-text">
              {isDev
                ? "I am eager to discuss full-stack engineering roles, internships, frontend development, and collaborative software projects."
                : "I welcome discussions around tournament coordination, athletic team operations, sports technology tools, and sports management opportunities."}
            </p>

            {/* Email Card with Copy Button */}
            <div className="direct-email-card">
              <div className="email-icon-box">
                <IconMail size={22} />
              </div>
              <div className="email-details">
                <span className="email-label">Direct Email</span>
                <a
                  href={`mailto:${commonProfile.socials.email}`}
                  className="email-link"
                >
                  {commonProfile.socials.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-email-btn"
                aria-label="Copy email address"
              >
                {copiedEmail ? <IconCheck size={16} /> : "Copy"}
              </button>
            </div>

            {/* Social Channels */}
            <div className="contact-channels-list">
              <span className="channels-title">Online Profiles & Networks:</span>
              <div className="channels-row">
                {commonProfile.socials.github && (
                  <a
                    href={commonProfile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                  >
                    <IconGithub size={20} />
                    <div className="channel-text">
                      <span className="channel-name">GitHub</span>
                      <span className="channel-desc">Code & repos</span>
                    </div>
                  </a>
                )}

                {commonProfile.socials.linkedin && (
                  <a
                    href={commonProfile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                  >
                    <IconLinkedin size={20} />
                    <div className="channel-text">
                      <span className="channel-name">LinkedIn</span>
                      <span className="channel-desc">Professional</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Resume Callout if Available */}
            {commonProfile.resume.hasResume && (
              <div className="contact-resume-card">
                <div>
                  <h4 className="resume-card-title">Curriculum Vitae</h4>
                  <p className="resume-card-desc">Download a copy of my verified resume PDF.</p>
                </div>
                <a
                  href={commonProfile.resume.url}
                  download
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDownload size={16} />
                  <span>Resume</span>
                </a>
              </div>
            )}

            {/* Status Indicator */}
            <div className="contact-status-box">
              <span className="status-dot-green" />
              <span>{contactConfig.location}</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send a Direct Message</h3>
            <p className="panel-text">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={`form-input ${formErrors.name ? "input-error" : ""}`}
                  disabled={submitStatus === "submitting"}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className={`form-input ${formErrors.email ? "input-error" : ""}`}
                  disabled={submitStatus === "submitting"}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject / Topic (Optional)
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={isDev ? "Job opportunity, internship, project discussion..." : "Tournament management, leadership role, collaboration..."}
                  className="form-input"
                  disabled={submitStatus === "submitting"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`form-textarea ${formErrors.message ? "input-error" : ""}`}
                  disabled={submitStatus === "submitting"}
                ></textarea>
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="status-alert alert-success">
                  <IconCheck size={18} className="alert-icon" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-alert alert-error">
                  <p>{statusMessage}</p>
                  <a
                    href={`mailto:${commonProfile.socials.email}?subject=Portfolio Contact&body=${encodeURIComponent(
                      formData.message
                    )}`}
                    className="alert-fallback-link"
                  >
                    Send directly via Mail App &rarr;
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                disabled={submitStatus === "submitting"}
              >
                {submitStatus === "submitting" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <IconArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;