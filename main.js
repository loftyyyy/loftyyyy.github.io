const projects = [
  {
    title: "PharmaTrack",
    description: "Full-stack pharmacy management system with a Spring Boot REST API backend and a React frontend. Handles inventory, prescriptions, and pharmacy operations.",
    icon: "local_pharmacy",
    tags: ["java", "springboot", "react"],
    cols: 8,
    link: "https://github.com/loftyyyy/PharmaTrack",
  },
  {
    title: "LSRS",
    description: "Full-stack gown and suit rental management system with deposit/rental invoice workflows, status transitions, and late fee reconciliation.",
    icon: "storefront",
    tags: ["laravel", "php", "tailwind"],
    cols: 4,
    link: "https://lsrs-2a3261dcc58d.herokuapp.com/",
  },
  {
    title: "MalVote",
    description: "Android APK malware classifier using a soft voting ensemble (Random Forest, Extra Trees, XGBoost, LightGBM) achieving 96.05% accuracy across 5 threat classes. Features a FastAPI backend with real-time SSE log streaming and a React dashboard for drag-and-drop APK analysis.",
    icon: "security",
    tags: ["python", "fastapi", "react", "ml"],
    cols: 4,
    link: "https://malwareclassification-streamlit.onrender.com/",
  },
  {
    title: "19wpm",
    description: "Full-stack typing test application with a Spring Boot backend featuring JWT authentication, OAuth2 social login, Redis-based token blocklisting, and Bucket4j rate limiting. React frontend with TypeScript.",
    icon: "keyboard",
    tags: ["java", "springboot", "react", "typescript"],
    cols: 8,
    link: "https://github.com/loftyyyy/19wpm",
  },
];

const skills = {
  categories: [
    {
      name: "Languages",
      items: ["Java", "PHP", "Python", "Go"],
    },
    {
      name: "Tools &amp; Frameworks",
      items: ["Vim", "PostgreSQL", "Redis", "Git", "GitHub", "SpringBoot", "Laravel", "Tailwind" ],
    },
    {
      name: "Concepts",
      items: ["Dist Systems", "Sys Design", "Concurrency", "Algorithms", "Authentication and Authorization", "Caching"],
    },
  ],
};

const certifications = [
  {
    title: "IT Specialist - Cybersecurity",
    issuer: "Certiport, a Pearson VUE business",
    year: 2025,
    link: "https://www.credly.com/badges/d3b6d6ce-0b85-49cf-bd5e-19d04fddbaaf"
  },
  {
    title: "IT Specialist - Databases",
    issuer: "Certiport, a Pearson VUE business",
    year: 2025,
    link: "https://www.credly.com/badges/3f14ab8f-b869-40cf-b693-2f3dba86d821"
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    year: 2025,
    link: "https://www.credly.com/badges/ddf5cbea-5832-42af-8e2c-2e1d428f6de2"
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    year: 2025,
    link: "https://www.credly.com/badges/769ae05b-6638-4e56-b58b-1b73a42e7c10"
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    year: 2026,
    link: "https://www.credly.com/badges/19b4ab69-3aa1-4b18-b487-e4c7161adef5"
  },
  {
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM SkillsBuild",
    year: 2026,
    link: "https://www.credly.com/badges/86e0b3a1-0ea4-4112-8c1a-3637403b68e1"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: 2025,
    link: "https://www.credly.com/badges/49584a9b-0b00-4a98-bf19-f29a35532507",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = projects
      .map(
        (p) => `
      <div class="md:col-span-${p.cols} group bg-surface-container-high border-l-4 border-primary hover:border-secondary transition-all duration-300 rounded-lg${p.cols === 8 ? " overflow-hidden" : ""}">
        <div class="p-8">
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-h2 text-h2 text-on-background">${p.title}</h3>
            <a target="_blank" href="${p.link}" class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="${p.icon}">${p.icon}</a>
          </div>
          <p class="font-code text-body-md text-on-surface-variant mb-6">${p.description}</p>
          <div class="flex flex-wrap gap-2">
            ${p.tags.map((t) => `<span class="px-2 py-1 bg-surface text-tertiary font-code text-xs border border-tertiary/20">&lt;${t} /&gt;</span>`).join("")}
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = skills.categories
      .map(
        (c) => `
      <div class="space-y-6">
        <h4 class="font-code text-primary uppercase text-sm font-bold border-b border-outline-variant pb-2">${c.name}</h4>
        <div class="flex flex-wrap gap-3">
          ${c.items.map((s) => `<span class="font-code text-body-md border border-primary/40 px-3 py-1">${s}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  const certsGrid = document.getElementById("certifications-grid");
  if (certsGrid) {
    certsGrid.innerHTML = certifications
      .map(
        (c) => `
      <div class="group bg-surface-container-high border-l-4 border-primary hover:border-secondary transition-all duration-300 rounded-lg p-8">
        <div class="flex justify-between items-start">
          <div class="space-y-2">
            <h3 class="font-h2 text-2xl text-on-background">${c.title}</h3>
            <p class="font-code text-sm text-on-surface-variant">${c.issuer} &mdash; ${c.year}</p>
          </div>
          <a class="text-secondary hover:scale-110 transition-transform" target="_blank" href="${c.link}">
            <span class="material-symbols-outlined" data-icon="verified">verified</span>
          </a>
        </div>
      </div>`
      )
      .join("");
  }
});
