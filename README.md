# Manish Bhuva — Dual-Audience Portfolio Website

A modern, high-performance web portfolio built on a single domain to support **two tailored audience experiences**:
1. **Route `/` — Software Developer Portfolio** (Canonical homepage for tech recruiters and hiring managers)
2. **Route `/sports` — Sports & Leadership Portfolio** (Dedicated landing page for sports organizations, athletic directors, and event committees)

Built with **React 19**, **React Router**, **Vite**, **GSAP**, and **Vanilla CSS**.

---

## 🧭 Routes Overview

| Route | Primary Audience | Key Sections & Focus |
| :--- | :--- | :--- |
| **`/`** | Software Engineering Recruiters | Hero (`Full-Stack Developer`), Clean About, Categorized Technical Skills, Featured Projects (Airbnb Clone, Chat App, Weather App), Case Studies, Milestones, Contact. (Subtle sports footnote). |
| **`/sports`** | Sports Management & Athletic Committees | Hero (`Sports, Team Leadership & Event Operations`), Volleyball Championship Captaincy, Core Responsibilities, Sports Management Focus Domains, Sports Technology Concepts, Transferable Technical Advantage, Contact. |
| **`/developer`** | Optional Alias | Automatically redirects cleanly to canonical `/`. |

Both portfolios share the same dark aesthetic, design tokens, responsive navigation bar, and contact backend—while maintaining independent messaging and navigation priorities.

---

## 🚀 Quick Start

### 1. Development Server
Run the local Vite development server with Hot Module Replacement (HMR):

```bash
npm.cmd run dev
# or:
npm run dev
```
Open `http://localhost:5173/` for Developer portfolio or `http://localhost:5173/sports` for Sports portfolio.

### 2. Linting
Verify code health and syntax rules (passes with 0 errors):

```bash
npm.cmd run lint
```

### 3. Production Build & Deployment Preview
```bash
npm.cmd run build
npm.cmd run preview
```
SPA routing rules (`public/_redirects` and `vercel.json`) are already pre-configured so that direct visits to `/sports` and browser refreshes work out of the box on Netlify, Vercel, and static hosts.

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── _redirects              # Netlify/static hosting SPA rewrite (/* /index.html 200)
│   ├── favicon.svg             # Monogram cyan brand favicon
│   └── resume.pdf              # (Optional) Place your verified resume PDF here
├── src/
│   ├── assets/                 # Project screenshots and illustrations
│   │   ├── airbnb1.png
│   │   ├── chat.png
│   │   └── weather.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── Icons.jsx       # Scalable, accessible SVG icon components
│   │   │   ├── HeroVisual.jsx  # Monogram executive initials visual (replaces cartoon businessman)
│   │   │   └── ScrollToTop.jsx # Resets scroll position on route transitions
│   │   ├── Nav/                # Sticky header, route-aware links & mobile drawer
│   │   ├── home/               # Hero section, typing animation, CTAs & cross-links
│   │   ├── About/              # Clean about, education card & skills matrix
│   │   ├── Projects/           # Dynamic projects grid, filter tabs & case study modal
│   │   ├── Sports/             # Volleyball captaincy, sports domains & tech concepts
│   │   ├── Timeline/           # Configurable milestones component
│   │   ├── Contact/            # Form with validation, Formspree & email cards
│   │   └── Footer/             # Audience cross-nav banner, quick links & copyright
│   ├── data/
│   │   └── portfolioData.js    # ⭐ CENTRAL DATA CONFIGURATION (Edit all content here!)
│   ├── pages/
│   │   ├── DeveloperHome.jsx   # Page component for Route /
│   │   └── SportsHome.jsx      # Page component for Route /sports
│   ├── App.jsx                 # Router configuration
│   ├── index.css               # Design system tokens and utilities
│   └── main.jsx
├── vercel.json                 # Vercel SPA rewrite configuration
├── index.html                  # SEO meta tags, OpenGraph, title & typography
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Update Content (Central Data File)

All text, projects, sports records, skills, and links are controlled centrally in **[src/data/portfolioData.js](file:///e:/Portfolio/src/data/portfolioData.js)**. You do not need to touch layout JSX to add or edit content.

### 1. Update Common Profile (Name, Links, Education, Resume)
Locate `commonProfile` in [src/data/portfolioData.js](file:///e:/Portfolio/src/data/portfolioData.js):

```javascript
export const commonProfile = {
  name: "Manish Bhuva",
  initials: "MB",
  socials: {
    github: "https://github.com/Manish1530",
    linkedin: "https://linkedin.com/in/manish-bhuva",
    email: "manishbhuva1530@gmail.com",
  },
  education: {
    degree: "B.Tech in Computer Engineering",
    institution: "Engineering College / University", // Replace with your college name
    graduationYear: "2025",
    cgpa: "7.3 / 10.0",
    coursework: [ ... ],
  },
  // To enable resume download, place resume.pdf in /public and set hasResume: true
  resume: {
    hasResume: false,
    url: "/resume.pdf",
    label: "Download Resume",
  },
};
```

---

### 2. Add or Edit Developer Projects
In [src/data/portfolioData.js](file:///e:/Portfolio/src/data/portfolioData.js), edit the `developerProfile.projects` array:

```javascript
{
  id: "new-web-app",
  title: "Full-Stack Task Manager",
  category: "Full Stack", // "Full Stack" | "Frontend" | "Backend"
  shortDescription: "A collaborative Kanban workflow tool with authentication.",
  image: null, // Import an image from src/assets or set to null for fallback
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  featured: true,
  year: "2025",
  githubUrl: "https://github.com/Manish1530/task-manager", // Empty string hides Code button
  liveUrl: "https://task-manager-demo.com", // Empty string hides Live Demo button
  caseStudy: {
    problem: "Teams struggled with distributed task visibility.",
    whatIBuilt: "Constructed real-time boards with role-based permissions.",
    keyFeatures: [
      "Drag-and-drop task reordering",
      "JWT cookie authorization",
    ],
    techImplementation: "Express.js REST controllers with MongoDB compound indexes.",
    learnings: "Optimized complex nested database queries."
  }
}
```

---

### 3. Update Technical Skills
Locate `developerProfile.skills` in [src/data/portfolioData.js](file:///e:/Portfolio/src/data/portfolioData.js). To add or reorder skills, edit the simple strings:

```javascript
{
  category: "Frontend Development",
  skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Modern Styling", "TypeScript"],
}
```
*(Notice: No arbitrary skill level badges—skills render cleanly with unified badges).*

---

### 4. Update Sports Leadership & Achievements
Locate `sportsProfile.leadership` in [src/data/portfolioData.js](file:///e:/Portfolio/src/data/portfolioData.js):

```javascript
leadership: {
  title: "Volleyball Team Captain",
  subtitle: "Championship Team — Hostel Sports Tournament",
  period: "Collegiate Sports Tournament (2024)",
  badge: "Champion & Captain",
  summary: "Led the hostel volleyball team during a competitive tournament...",
  verifiedAchievements: [
    "Tournament Championship Trophy winner in multi-team collegiate competition",
    "Coordinated full squad preparation, match-day strategy, and rotational lineup"
  ],
  responsibilities: [
    {
      title: "Team Selection & Tactical Roles",
      description: "Assessed teammate strengths for optimal rotational coverage."
    },
    // Add or edit responsibilities
  ],
  keyTakeaway: "Championships are won in practice schedules and selfless coordination..."
}
```

---

### 5. Add Sports Technology Concepts or Analytics Projects
In `sportsProfile.futureProjects`:

```javascript
{
  id: "cricket-analytics",
  title: "Match Performance Analytics Dashboard",
  badge: "Concept & In-Development",
  description: "Visualizing set-by-set efficiency ratios, spike metrics, and point runs.",
  targetTech: ["React", "Chart.js", "Python"],
  githubUrl: "",
  liveUrl: ""
}
```

---

### 6. Replace Initials with a Real Photo (Optional)
If you have a high-resolution professional headshot:
1. Place it in `src/assets/portrait.jpg`
2. Import it at the top of `src/data/portfolioData.js`:
   ```javascript
   import portraitImg from '../assets/portrait.jpg';
   ```
3. Set `commonProfile.avatar = portraitImg;`.
If `avatar` is `null`, the website automatically displays the sleek, initials-based monogram graphic (`MB`).

---

## 🎨 Design System

- **Background Primary:** `#0B0F14`
- **Background Secondary:** `#101620`
- **Elevated Card Surface:** `#131A24`
- **Developer Accent (Cyan):** `#78EAF2`
- **Sports Accent (Gold/Amber):** `#FBBF24` / `#F59E0B`
- **Primary Text:** `#F1F5F9`
- **Supporting Text:** `#94A3B8`
- **Borders:** `rgba(255, 255, 255, 0.08)` and `rgba(120, 234, 242, 0.25)`

---

## 📄 License & Ownership
Personal developer & sports leadership portfolio for **Manish Bhuva**.
