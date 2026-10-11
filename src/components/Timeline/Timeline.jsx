import React from "react";
import "./Timeline.css";
import { developerProfile } from "../../data/portfolioData";
import { IconTrophy, IconCode } from "../common/Icons";

const Timeline = ({
  items = developerProfile.timeline,
  sectionId = "timeline",
  eyebrow = "Milestones",
  title = "Journey & Highlights",
  subtitle = "Key steps across my academic education, technical growth, and leadership experience.",
}) => {
  const getBadgeIcon = (type) => {
    switch (type) {
      case "sports":
      case "leadership":
        return <IconTrophy size={14} />;
      case "education":
      case "technical":
      case "learning":
      default:
        return <IconCode size={14} />;
    }
  };

  return (
    <section id={sectionId} className="section-wrapper timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <IconCode size={14} />
            <span>{eyebrow}</span>
          </div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="timeline-track-container">
          <div className="timeline-line" aria-hidden="true" />

          <div className="timeline-items-list">
            {items.map((item, index) => (
              <div key={index} className="timeline-row">
                <div className="timeline-marker-col">
                  <div className={`timeline-node node-${item.type}`}>
                    {getBadgeIcon(item.type)}
                  </div>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className={`timeline-badge-pill type-${item.type}`}>
                      {item.badge}
                    </span>
                    <span className="timeline-year">{item.year}</span>
                  </div>

                  <h3 className="timeline-item-title">{item.title}</h3>
                  <p className="timeline-item-org">{item.organization}</p>
                  <p className="timeline-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
