import React, { useEffect } from "react";
import Home from "../components/home/Home";
import Sports from "../components/Sports/Sports";
import Timeline from "../components/Timeline/Timeline";
import Contact from "../components/Contact/Contact";
import { sportsProfile } from "../data/portfolioData";

const SportsHome = () => {
  useEffect(() => {
    document.title = sportsProfile.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", sportsProfile.meta.description);
    }
  }, []);

  return (
    <>
      <Home mode="sports" />
      <Sports />
      <Timeline
        items={sportsProfile.timeline}
        sectionId="timeline"
        eyebrow="Sports & Academic Milestones"
        title="Athletic & Leadership Journey"
        subtitle="Collegiate volleyball championship captaincy, tournament management, and engineering foundation."
      />
      <Contact mode="sports" />
    </>
  );
};

export default SportsHome;
