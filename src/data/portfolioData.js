/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Central data source powering both audience-specific experiences:
 * 1. Route /        -> Software Developer Portfolio
 * 2. Route /sports  -> Sports Leadership & Management Portfolio
 * 
 * Update your information here to automatically update both pages.
 */

import airbnbImg from '../assets/airbnb1.png';
import chatImg from '../assets/chat.png';
import weatherImg from '../assets/weather.png';

/* ==========================================================================
   COMMON PROFILE (Shared between Developer and Sports portfolios)
   ========================================================================== */
export const commonProfile = {
  name: "Manish Bhuva",
  nickname: "Manish",
  initials: "MB",
  location: "India",
  openToWork: true,
  workStatusText: "Available for Junior/Fresher Roles, Internships & Opportunities",

  // Set avatar to an image URL/import if a verified professional photo is added.
  // Otherwise, null triggers the elegant initials-based monogram graphic.
  avatar: null,

  // Resume configuration:
  // Place your resume PDF in the /public folder (e.g. /public/resume.pdf)
  // Set hasResume: true once added.
  resume: {
    hasResume: false,
    url: "/resume.pdf",
    label: "Download Resume",
  },

  // Social & contact channels
  socials: {
    github: "https://github.com/Manish1530",
    linkedin: "https://www.linkedin.com/in/manish-bhuva-b21142282",
    email: "manishbhuva294@gmail.com",
  },

  // Education details (editable placeholders)
  education: {
    degree: "B.Tech in Computer Engineering",
    institution: "Gandhinagar Institute of Technology",
    graduationYear: "2026",
    cgpa: "7.3 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
    ],
  },
};

/* ==========================================================================
   ROUTE A: DEVELOPER PORTFOLIO DATA (Route: /)
   ========================================================================== */
export const developerProfile = {
  meta: {
    title: "Manish Bhuva | Full-Stack Developer",
    description:
      "Computer Engineering graduate specializing in Full-Stack Web Development (React, Node.js, Express, MongoDB) and practical web applications.",
  },

  hero: {
    eyebrow: "FULL-STACK DEVELOPER | COMPUTER ENGINEERING",
    headline: "Full-Stack Developer Building Practical Web Applications",
    supportingCopy:
      "I'm a computer engineering graduate interested in building useful web applications, solving practical problems, and continuously improving my software development skills.",
    typingSequences: [
      "Full-Stack Web Development (MERN)",
      2400,
      "Practical, Scalable Web Applications",
      2400,
      "RESTful API & Database Architecture",
      2400,
      "Clean Frontend & Responsive UI",
      2400,
    ],
    ctas: [
      { label: "View Projects", to: "projects", type: "primary" },
      { label: "About Me", to: "about", type: "secondary" },
      { label: "Contact", to: "contact", type: "ghost" },
    ],
  },

  about: {
    title: "About Me",
    eyebrow: "Background & Principles",
    introduction: [
      "I am a passionate software developer with a solid foundation in Computer Engineering and modern web technologies. I focus on creating intuitive, responsive user experiences and architecting reliable, maintainable backend REST APIs.",
      "My development approach centers on writing clean code, understanding data relationships, and solving practical real-world problems through continuous learning.",
    ],
    // Authentic, concise sports note that does not compete with developer identity:
    sportsSupportingNote:
      "Outside software development, I have an interest in sports and experience as a volleyball team captain.",
    currentLearning: [
      "Advanced Full-Stack system design & microservices patterns",
      "Performance optimization & server-side caching",
      "Containerization basics (Docker) & cloud deployments",
    ],
  },

  // Clean technical skills list (no arbitrary skill level badges)
  skills: [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Modern Styling", "Responsive UI/UX"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication / JWT Middleware"],
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB", "Mongoose ODM", "SQL Basics", "Data Modeling"],
    },
    {
      category: "Languages & Problem Solving",
      skills: ["JavaScript", "Java", "Python", "Data Structures & Algorithms"],
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
    },
  ],

  projects: [
    {
      id: "airbnb-clone",
      title: "Airbnb Web Clone",
      category: "Full Stack",
      shortDescription:
        "A full-stack property rental web application featuring listing creation, image handling, interactive reviews, and map-based exploration.",
      image: airbnbImg,
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS / REST", "Bootstrap"],
      featured: true,
      year: "2024",
      githubUrl: "https://github.com/Manish1530",
      liveUrl: "",
      isPlaceholder: false,
      caseStudy: {
        problem:
          "Property discovery and booking platforms require seamless data relationships between user accounts, property listings, reviews, and geographic location tags.",
        whatIBuilt:
          "Built a complete MVC-architecture web application inspired by Airbnb. Designed schema validations, dynamic property exploration, review management, and secure session flows.",
        keyFeatures: [
          "Full CRUD operations for property hosts (create, edit, delete listings)",
          "User authentication and authorization with protected routes",
          "Interactive customer reviews and rating submission system",
          "Responsive, mobile-friendly design for discovery across devices",
        ],
        techImplementation:
          "Architected with Express.js routing, MongoDB / Mongoose data models for relational property-review mappings, and server-side validation using Joi.",
        learnings:
          "Deepened understanding of RESTful routing patterns, stateful cookie sessions, authorization middleware, and database schema referencing.",
      },
    },
    {
      id: "chat-app",
      title: "Real-Time Chat Application",
      category: "Full Stack",
      shortDescription:
        "An instant messaging platform enabling responsive real-time peer communication with instant message delivery and dynamic room channels.",
      image: chatImg,
      technologies: ["React", "Node.js", "Express.js", "Socket.io", "CSS3"],
      featured: true,
      year: "2024",
      githubUrl: "https://github.com/Manish1530",
      liveUrl: "",
      isPlaceholder: false,
      caseStudy: {
        problem:
          "Standard HTTP request-response cycles add latency to messaging applications, requiring bi-directional WebSocket channels for true real-time feedback.",
        whatIBuilt:
          "Constructed a clean, low-latency chat interface with active participant status, instant chat dispatch, and room isolation.",
        keyFeatures: [
          "Bi-directional WebSocket communication for instant message transmission",
          "Channel / room creation for segmented discussions",
          "Clean, scroll-anchored conversation interface",
          "Timestamped message logs and active user presence indicators",
        ],
        techImplementation:
          "Utilized Socket.io client and server instances to handle event broadcasts, disconnections, and dynamic room join/leave triggers.",
        learnings:
          "Gained practical experience with event-driven architectures, WebSocket connection lifecycles, and managing distributed UI state in React.",
      },
    },
    {
      id: "weather-app",
      title: "Dynamic Weather Forecast App",
      category: "Frontend",
      shortDescription:
        "A fast, responsive weather dashboard providing real-time meteorological conditions, temperature metrics, humidity, and forecasts by city.",
      image: weatherImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
      featured: false,
      year: "2024",
      githubUrl: "https://github.com/Manish1530",
      liveUrl: "",
      isPlaceholder: false,
      caseStudy: {
        problem:
          "Users need fast, digestible climate insights without waiting through bloated page loads or confusing weather metrics.",
        whatIBuilt:
          "Developed a lightweight client-side application that fetches live conditions from public weather APIs with robust error handling for invalid cities.",
        keyFeatures: [
          "Real-time city search with live meteorological data extraction",
          "Temperature, wind speed, humidity, and weather condition badges",
          "Graceful handling of unknown locations and network timeouts",
          "Adaptive UI styling reflecting climate conditions",
        ],
        techImplementation:
          "Built using native Fetch API with asynchronous promises, debounced inputs, and dynamic DOM rendering with vanilla CSS transitions.",
        learnings:
          "Solidified asynchronous API integration techniques, edge-case UI error states, and responsive styling without external CSS frameworks.",
      },
    },
  ],

  timeline: [
    {
      type: "education",
      year: "2021 – 2025",
      title: "B.Tech in Computer Engineering",
      organization: "Engineering College / University",
      description:
        "Computer science fundamentals, data structures, algorithms, database systems, and full-stack software development. Maintained academic consistency with a 7.3 CGPA.",
      badge: "Education",
    },
    {
      type: "technical",
      year: "2024",
      title: "Full-Stack Web Development Projects",
      organization: "Independent Engineering",
      description:
        "Built full-stack applications including an Airbnb MVC clone with MongoDB and Express, a real-time WebSocket chat application, and responsive client projects.",
      badge: "Software Engineering",
    },
    {
      type: "leadership",
      year: "Sports Achievement",
      title: "Volleyball Team Captain (Championship)",
      organization: "Collegiate Sports League",
      description:
        "Demonstrated leadership, teamwork, communication, and strategy as captain of the championship-winning team during collegiate sports competitions.",
      badge: "Team Leadership",
    },
  ],
};

/* ==========================================================================
   ROUTE B: SPORTS & LEADERSHIP PORTFOLIO DATA (Route: /sports)
   ========================================================================== */
export const sportsProfile = {
  meta: {
    title: "Manish Bhuva | Sports Leadership & Event Operations",
    description:
      "Sports enthusiast with proven team leadership as Volleyball Championship Captain, interested in sports management, tournament operations, team coordination, and sports technology.",
  },

  hero: {
    eyebrow: "SPORTS MANAGEMENT | TEAM LEADERSHIP | TOURNAMENT OPS",
    headline: "Sports, Team Leadership & Event Operations",
    supportingCopy:
      "I'm interested in sports management, tournament operations, team coordination, and exploring how technology can improve sports experiences.",
    typingSequences: [
      "Volleyball Team Captain (Championship Winner)",
      2400,
      "Tournament Operations & Fixture Management",
      2400,
      "Team Coordination & Tactical Strategy",
      2400,
      "Sports Technology & Analytics Exploration",
      2400,
    ],
    ctas: [
      { label: "Leadership Experience", to: "leadership", type: "primary" },
      { label: "Areas of Interest", to: "domains", type: "secondary" },
      { label: "Contact", to: "contact", type: "ghost" },
    ],
  },

  // Sports Leadership Spotlight
  leadership: {
    title: "Volleyball Team Captain",
    subtitle: "Championship Team — Hostel Sports Tournament",
    period: "Collegiate Sports Tournament",
    badge: "Champion & Captain",
    summary:
      "Led the hostel volleyball team during a competitive multi-team collegiate tournament, coordinated preparation and responsibilities, and contributed to winning the championship.",
    verifiedAchievements: [
      "Tournament Championship Trophy winner in multi-team collegiate competition",
      "Coordinated full squad preparation, match-day strategy, and rotational lineup",
    ],
    responsibilities: [
      {
        title: "Team Selection & Tactical Roles",
        description:
          "Assessed teammate strengths to balance front-line blockers, setters, and spikers for optimal on-court synergy and rotational coverage.",
      },
      {
        title: "Tournament Coordination & Scheduling",
        description:
          "Liaised with organizers and tournament referees for fixture timings, court allocations, and adherence to tournament guidelines.",
      },
      {
        title: "Practice Planning & Match Readiness",
        description:
          "Organized structured drill sessions focusing on service reception, defensive communication, and team stamina.",
      },
      {
        title: "High-Pressure Leadership & Decision-Making",
        description:
          "Called strategic timeouts, adapted rotational play during critical sets, and maintained calm team morale during match deficits.",
      },
    ],
    keyTakeaway:
      "Championships are won in practice schedules and selfless coordination—lessons that translate directly to team coordination, project management, and operational execution.",
  },

  // Focus Domains in Sports Management & Analytics
  areasOfInterest: [
    {
      id: "tournament-ops",
      title: "Tournament & Event Operations",
      description:
        "Structuring multi-stage brackets, venue schedules, match officials coordination, and operational logistics for seamless sporting events.",
      iconName: "trophy",
    },
    {
      id: "team-leadership",
      title: "Team Coordination & Culture",
      description:
        "Fostering trust, transparent role clarity, constructive post-match retrospectives, and mutual accountability across high-intensity environments.",
      iconName: "users",
    },
    {
      id: "sports-analytics",
      title: "Sports Analytics & Insights",
      description:
        "Exploring data-driven player evaluation, match performance analytics, set-by-set efficiency ratios, and statistical visualization.",
      iconName: "chart",
    },
    {
      id: "sports-tech",
      title: "Sports Technology & Platforms",
      description:
        "Engineering digital solutions for fixture publishing, athlete registration, live score broadcasts, and grassroots club management.",
      iconName: "cpu",
    },
  ],

  // Technology as a Supporting Advantage for Sports
  technicalAdvantage: {
    title: "Engineering Foundation as an Operational Advantage",
    description:
      "My background in Computer Engineering provides an analytical and technical perspective on sports operations—enabling systematic scheduling, data organization, and the ability to evaluate or build digital sports management tools.",
    keyStrengths: [
      "Data organization and analytical thinking for performance metrics",
      "Ability to build and customize digital tournament brackets and dashboards",
      "Structured operational planning derived from software engineering principles",
      "Familiarity with modern software tools, databases, and digital workflows",
    ],
  },

  // Future & In-Development Sports Technology Projects
  futureProjects: [
    {
      id: "tournament-manager",
      title: "Sports Tournament Management Platform",
      badge: "Concept & In-Development",
      description:
        "A web platform designed for collegiate and local sports directors to generate double-elimination brackets, schedule court allocations, and manage roster registrations.",
      targetTech: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      id: "player-analytics-hub",
      title: "Volleyball Performance Analytics Dashboard",
      badge: "Concept & In-Development",
      description:
        "An interactive analytics dashboard for tracking spike efficiency, service ace-to-error ratios, and set momentum charts across tournament fixtures.",
      targetTech: ["React", "Chart.js / D3", "Python / FastAPI"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      id: "live-fixture-portal",
      title: "Live Fixtures & Results Tracker",
      badge: "Concept & In-Development",
      description:
        "A lightweight live scorekeeper and standings table for multi-sport leagues, featuring instant mobile score updates and standings calculation.",
      targetTech: ["React", "WebSockets / Socket.io", "Tailored CSS"],
      githubUrl: "",
      liveUrl: "",
    },
  ],

  timeline: [
    {
      type: "sports",
      year: "Tournament Victory",
      title: "Volleyball Team Captain (Championship Winner)",
      organization: "Collegiate / Hostel Sports League",
      description:
        "Led the squad to championship victory through team selection, structured practice routines, tactical rotational adjustments, and on-court leadership.",
      badge: "Sports Leadership",
    },
    {
      type: "education",
      year: "2021 – 2025",
      title: "B.Tech in Computer Engineering",
      organization: "Engineering College / University",
      description:
        "Developed analytical rigor, algorithmic problem solving, database systems knowledge, and digital platform development capabilities.",
      badge: "Academic Foundation",
    },
    {
      type: "learning",
      year: "Ongoing",
      title: "Sports Technology & Analytics Exploration",
      organization: "Self-Directed Research",
      description:
        "Designing tournament bracket architectures, investigating volleyball statistical tracking methodologies, and studying modern event operations.",
      badge: "Domain Exploration",
    },
  ],
};

/* ==========================================================================
   CONTACT CONFIGURATION
   ========================================================================== */
export const contactConfig = {
  sectionTitle: "Let's Connect",
  sectionSubtitle:
    "Whether you're hiring for a software engineering position, discussing a tournament operations role, or exploring a project—I'd love to hear from you.",
  formspreeEndpoint: "https://formspree.io/f/mwprqybo",
  directEmail: "manishbhuva1530@gmail.com",
  location: "Open to Remote & On-Site Opportunities",
};
