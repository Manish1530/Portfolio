import React, { useEffect } from "react";
import Home from "../components/home/Home";
import About from "../components/About/About";
import Project from "../components/Projects/Project";
import Timeline from "../components/Timeline/Timeline";
import Contact from "../components/Contact/Contact";
import { developerProfile } from "../data/portfolioData";

const DeveloperHome = () => {
  useEffect(() => {
    document.title = developerProfile.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", developerProfile.meta.description);
    }
  }, []);

  return (
    <>
      <Home mode="developer" />
      <About />
      <Project />
      <Timeline
        items={developerProfile.timeline}
        sectionId="timeline"
        eyebrow="Milestones"
        title="Journey & Milestones"
        subtitle="Academic education, full-stack software development milestones, and team leadership experience."
      />
      <Contact mode="developer" />
    </>
  );
};

export default DeveloperHome;
