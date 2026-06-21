const projects = [
  {
    id: "pharmatrack",
    title: "PharmaTrack",
    icon: "local_pharmacy",
    images: [],
    imageCount: 8,
    description: "Full-stack pharmacy management system with a Spring Boot REST API backend and a React frontend. Handles inventory, prescriptions, and pharmacy operations.",
    tags: ["java", "springboot", "react"],
    cols: 8,
    link: "https://github.com/loftyyyy/PharmaTrack",
    demoLink: null,
    role: "Full-Stack Developer",
    status: "Completed",
    highlights: [
      "Designed multi-role RBAC (pharmacist, admin, manager) with Spring Security",
      "Built inventory tracking with low-stock alerting and audit trail logging",
      "REST API consumed by a React frontend with protected route guards",
    ],
    metric: null,
    longDesc: "A pharmacy management system built with Spring Boot and React. Implements role-based access control, real-time inventory tracking with alert thresholds, and a full audit trail for controlled substance dispensing. Designed with a service-layer architecture separating domain logic from persistence.",
  },
  {
    id: "lsrs",
    title: "LSRS",
    icon: "storefront",
    images: [],
    imageCount: 7,
    description: "Full-stack gown and suit rental management system with deposit/rental invoice workflows, status transitions, and late fee reconciliation.",
    tags: ["laravel", "php", "tailwind"],
    cols: 4,
    link: "https://lsrs-2a3261dcc58d.herokuapp.com/",
    demoLink: "https://lsrs-2a3261dcc58d.herokuapp.com/",
    role: "Full-Stack Developer",
    status: "Completed",
    highlights: [
      "Engineered reservation lifecycle state machine: Pending \u2192 Confirmed \u2192 Active \u2192 Completed \u2192 Returned",
      "Separated deposit and invoice flows with inventory variant pricing as single source of truth",
      "Wrote PHPUnit feature tests covering reservation, return, and conflict detection flows",
    ],
    metric: null,
    longDesc: "A Laravel-based rental management system for a gown and suit shop. Built a full reservation lifecycle with conflict detection, variant-based pricing (size, color, package), deposit vs. invoice separation, and a Blade/Tailwind admin dashboard. Covered with PHPUnit feature tests.",
  },
  {
    id: "malvote",
    title: "MalVote",
    icon: "security",
    images: [],
    imageCount: 6,
    description: "Android APK malware classifier using a soft voting ensemble (Random Forest, Extra Trees, XGBoost, LightGBM) achieving 96.05% accuracy across 5 threat classes. Features a FastAPI backend with real-time SSE log streaming and a React dashboard for drag-and-drop APK analysis.",
    tags: ["python", "fastapi", "react", "ml"],
    cols: 4,
    link: "https://github.com/loftyyyy/MalwareClassification.streamlit",
    demoLink: "https://malwareclassification-streamlit.onrender.com/",
    role: "ML Engineer & Backend Developer",
    status: "Completed",
    highlights: [
      "Corrected data leakage in baseline (ROA before split \u2192 after split), improving result validity from ~99.8% to honest ~95.7%",
      "Ensemble: LightGBM feature selection \u2192 Optuna-tuned LightGBM + XGBoost stacking",
      "Replaced Streamlit prototype with a FastAPI + React dashboard for model inference",
    ],
    metric: "96.05% accuracy",
    longDesc: "Research-grade Android malware classifier trained on the CICMalDroid2020 dataset, benchmarked against Ansori et al. (94.57% baseline). Identified and corrected data leakage in the baseline pipeline. Final model uses LightGBM split-gain feature selection, Optuna hyperparameter tuning, and XGBoost stacking. Served via a FastAPI inference API with a React dashboard.",
  },
  {
    id: "19wpm",
    title: "19wpm",
    icon: "keyboard",
    images: [],
    imageCount: 7,
    description: "Full-stack typing test application with a Spring Boot backend featuring JWT authentication, OAuth2 social login, Redis-based token blocklisting, and Bucket4j rate limiting. React frontend with TypeScript.",
    tags: ["java", "springboot", "react", "typescript"],
    cols: 8,
    link: "https://github.com/loftyyyy/19wpm",
    demoLink: "https://19wpm.vercel.app/",
    role: "Full-Stack Developer",
    status: "Active",
    highlights: [
      "JWT auth with Redis-backed token blocklisting and refresh token rotation",
      "OAuth2 via GitHub and Google; rate limiting with Bucket4j and Caffeine",
      "Word difficulty tiers generated via wordfreq pipeline (Easy / Medium / Hard / Expert, ~14K words)",
    ],
    metric: "< 100ms p99 on all typed endpoints",
    longDesc: "A Monkeytype-inspired typing test built with Spring Boot and React/TypeScript. Implements stateless JWT auth with Redis token blocklisting, OAuth2 via GitHub/Google, per-user rate limiting, and a word difficulty pipeline using Python's wordfreq library. Features WPM burst charting, typing replay, and a results dashboard backed by PostgreSQL with Flyway migrations.",
  },
  {
    id: "relay",
    title: "Relay",
    icon: "message",
    images: [],
    imageCount: 3,
    description: "Real-time chat application with a Spring Boot WebSocket (STOMP) backend featuring JWT-authenticated handshakes, presence tracking, and unique username enforcement. React/TypeScript frontend with Zustand state management.",
    tags: ["java", "springboot", "react", "typescript", "websocket"],
    cols: 8,
    link: "https://github.com/loftyyyy/relay",
    demoLink: "https://relay-three-phi.vercel.app/",
    role: "Full-Stack Developer",
    status: "Active",
    highlights: [
      "STOMP over WebSocket with custom JWT handshake interceptor for connection-time authentication",
      "Principal-based user identity binding via custom HandshakeHandler for per-user message routing",
      "In-memory presence registry enforcing unique usernames and tracking online/offline state per session",
    ],
    metric: "Real-time message delivery via STOMP pub/sub broker",
    longDesc: "A real-time chat application built with Spring Boot WebSocket (STOMP/SockJS) and a React 18/TypeScript/Zustand frontend. Authentication happens at the WebSocket handshake itself — a custom JwtHandshakeInterceptor validates the JWT from the connection URI before the upgrade completes, and a custom HandshakeHandler binds the verified identity to a Principal so Spring can route user-specific messages via /user destinations. Features room-based broadcast channels, connection-time presence tracking, and unique username enforcement across active sessions.",
  },
];

const skills = {
  categories: [
    {
      name: "Languages",
      items: ["Java", "PHP", "Python","Go", "C++" ,"C#"],
    },
    {
      name: "Tools &amp; Frameworks",
      items: ["Vim", "MySQL", "PostgreSQL", "Redis", "Git", "GitHub", "SpringBoot", "Laravel", "Tailwind" ],
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

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  const track = projectsGrid.querySelector(".carousel-track");
  if (!track) return;

  const statusClass = (s) => s.toLowerCase().replace(/\s+/g, "-");

  track.innerHTML = projects
    .map(
      (p) => `
    <div class="carousel-slide" role="listitem">
      <div class="bg-surface-container-high rounded-lg overflow-hidden ${p.cols === 8 ? "card--featured" : ""}" style="display:flex;flex-direction:column;flex:1;">
        <div class="p-8" style="display:flex;flex-direction:column;flex:1;">
          <div class="flex items-start justify-between gap-4" style="margin-bottom:4px;">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined" style="color:var(--primary);font-size:1.5rem;">${p.icon}</span>
              <h3 class="font-h2 text-h2 text-on-background">${p.title}</h3>
            </div>
            <span class="status-pill status-pill--${statusClass(p.status)}">${p.status}</span>
          </div>
          <p class="role-label" style="margin-bottom:16px;">${p.role}</p>
          <hr class="card-divider" />
          <p class="font-code text-body-md text-on-surface-variant line-clamp-2" style="margin-bottom:12px;">${p.description}</p>
          <ul class="highlight-list">
            ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
          ${p.metric ? `<div style="margin-top:16px;margin-bottom:16px;"><span class="metric-pill">${p.metric}</span></div>` : ""}
          <div class="flex flex-wrap gap-2" style="margin-bottom:16px;">
            ${p.tags.map((t) => `<span class="px-2 py-1 bg-surface text-tertiary font-code text-[11px] border border-tertiary/20">&lt;${t} /&gt;</span>`).join("")}
          </div>
          <hr class="card-divider" />
          <div class="flex flex-wrap gap-6 items-center" style="margin-top:auto;">
            <a target="_blank" href="${p.link}" class="card-link">↗ VIEW PROJECT</a>
            ${p.demoLink ? `<a target="_blank" href="${p.demoLink}" class="card-link">↗ LIVE DEMO</a>` : ""}
            <button class="card-link details-btn" data-project-id="${p.id}">DETAILS →</button>
          </div>
        </div>
      </div>
    </div>`
    )
    .join("");

  track.querySelectorAll(".details-btn").forEach((btn) => {
    const p = projects.find((proj) => proj.id === btn.dataset.projectId);
    if (!p || !p.imageCount) return;
    const preload = () => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `assets/projects/${p.id}/${p.id}-1.webp`;
      document.head.appendChild(link);
    };
    btn.addEventListener("mouseenter", preload, { once: true });
    btn.addEventListener("touchstart", preload, { once: true });
  });
}

function openModal(projectId) {
  const p = projects.find((proj) => proj.id === projectId);
  if (!p) return;

  const statusClass = (s) => s.toLowerCase().replace(/\s+/g, "-");

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", p.title);

  const closeModal = () => {
    if (overlay.parentElement) overlay.parentElement.removeChild(overlay);
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", onKeyDown);

  overlay.innerHTML = `
    <div class="modal-content">
      <div class="terminal-frame" style="margin:0;border-radius:0;border-left:none;border-right:none;border-top:none;">
        <div class="terminal-header">
          <span style="width:8px;height:8px;border-radius:50%;background-color:var(--primary);display:inline-block;"></span>
          <span style="width:8px;height:8px;border-radius:50%;background-color:var(--secondary);display:inline-block;"></span>
          <span style="width:8px;height:8px;border-radius:50%;background-color:var(--tertiary);display:inline-block;"></span>
          <span class="font-code" style="font-size:11px;color:var(--text-muted);margin-left:6px;">${p.title}</span>
        </div>
        <div class="terminal-img-wrapper" id="modal-carousel-container"></div>
      </div>
      <div class="p-8">
        <div class="flex items-center gap-3 flex-wrap" style="margin-bottom:12px;">
          <span class="status-pill status-pill--${statusClass(p.status)}">${p.status}</span>
          <span class="role-label">${p.role}</span>
        </div>
        <h3 class="font-h2 text-h2 text-on-background" style="margin-bottom:16px;">${p.title}</h3>
        <p class="font-code text-body-md text-on-surface-variant" style="margin-bottom:12px;">${p.description}</p>
        <p class="font-code text-body-md text-on-surface-variant" style="margin-bottom:16px;">${p.longDesc}</p>
        <ul class="highlight-list">
          ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
        ${p.metric ? `<div style="margin-top:16px;margin-bottom:16px;"><span class="metric-pill">${p.metric}</span></div>` : ""}
        <div class="flex flex-wrap gap-2" style="margin-bottom:16px;">
          ${p.tags.map((t) => `<span class="px-2 py-1 bg-surface text-tertiary font-code text-[11px] border border-tertiary/20">&lt;${t} /&gt;</span>`).join("")}
        </div>
        <hr class="card-divider" />
        <div class="flex flex-wrap gap-6">
          <a target="_blank" href="${p.link}" class="card-link">↗ VIEW PROJECT</a>
          ${p.demoLink ? `<a target="_blank" href="${p.demoLink}" class="card-link">↗ LIVE DEMO</a>` : ""}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const carouselEl = overlay.querySelector("#modal-carousel-container");
  if (carouselEl) {
    const imgs = getProjectImages(p);
    new ModalImageCarousel(carouselEl, imgs, p.icon);
  }
}

function getProjectImages(p) {
  const imgs = [];
  for (let n = 1; n <= p.imageCount; n++) {
    imgs.push(`assets/projects/${p.id}/${p.id}-${n}.webp`);
  }
  return imgs;
}

class ModalImageCarousel {
  constructor(container, images, icon) {
    this.container = container;
    this.images = images;
    this.icon = icon;
    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    if (images.length === 0) return;
    this.build();
  }

  build() {
    const multi = this.images.length > 1;
    this.container.innerHTML = `
      <div class="modal-carousel">
        <div class="modal-carousel-track-wrapper">
          <div class="modal-carousel-track">
            ${this.images.map((src, i) => `
              <div class="modal-carousel-slide">
                <img src="${src}" alt="" class="modal-carousel-img"${i === 0 ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"'} />
                <div class="image-fallback">
                  <span class="material-symbols-outlined" style="font-size:2.5rem;">${this.icon}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
        ${multi ? `
          <button class="modal-carousel-btn modal-carousel-prev" aria-label="Previous image">&#8592;</button>
          <button class="modal-carousel-btn modal-carousel-next" aria-label="Next image">&#8594;</button>
          <div class="modal-carousel-dots">
            ${this.images.map((_, i) => `
              <button class="modal-carousel-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `;

    this.track = this.container.querySelector(".modal-carousel-track");
    this.slides = [...this.track.children];
    this.wrapper = this.container.querySelector(".modal-carousel-track-wrapper");
    this.slideWidth = this.wrapper.getBoundingClientRect().width;
    this.prevBtn = this.container.querySelector(".modal-carousel-prev");
    this.nextBtn = this.container.querySelector(".modal-carousel-next");
    this.dots = this.container.querySelectorAll(".modal-carousel-dot");

    this.slides.forEach((slide) => {
      slide.style.flex = `0 0 ${this.slideWidth}px`;
    });

    this.slides.forEach((slide) => {
      const img = slide.querySelector(".modal-carousel-img");
      if (img) {
        img.addEventListener("error", function () {
          this.style.display = "none";
          const fb = slide.querySelector(".image-fallback");
          if (fb) fb.classList.add("show");
        });
      }
    });

    if (!multi) return;

    this.prevBtn.addEventListener("click", () => this.goTo(this.currentIndex - 1));
    this.nextBtn.addEventListener("click", () => this.goTo(this.currentIndex + 1));
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => this.goTo(parseInt(dot.dataset.index)));
    });

    this.track.addEventListener("pointerdown", (e) => this.onDragStart(e));
    this.track.addEventListener("pointermove", (e) => this.onDragMove(e));
    this.track.addEventListener("pointerup", () => this.onDragEnd());
    this.track.addEventListener("pointercancel", () => this.onDragEnd());
    this.track.style.touchAction = "pan-y";
  }

  goTo(index) {
    const len = this.images.length;
    if (index < 0) index = len - 1;
    else if (index >= len) index = 0;
    this.currentIndex = index;
    this.currentTranslate = -index * this.slideWidth;
    this.prevTranslate = this.currentTranslate;
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    this.dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  onDragStart(e) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.track.classList.add("dragging");
    this.track.style.cursor = "grabbing";
  }

  onDragMove(e) {
    if (!this.isDragging) return;
    this.currentTranslate = this.prevTranslate + e.clientX - this.startX;
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.track.classList.remove("dragging");
    this.track.style.cursor = "";
    const step = this.slideWidth;
    let idx = Math.round(-this.currentTranslate / step);
    idx = Math.max(0, Math.min(idx, this.images.length - 1));
    this.goTo(idx);
  }
}

class ProjectCarousel {
  constructor(container) {
    this.container = container;
    this.viewport = container.querySelector(".carousel-viewport");
    this.track = container.querySelector(".carousel-track");
    this.slides = [...this.track.children];
    this.prevBtn = container.querySelector("#carousel-prev");
    this.nextBtn = container.querySelector("#carousel-next");
    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.gap = 32;
    this.resizeTimer = null;

    if (this.slides.length === 0) return;
    this.init();
  }

  getSlidesPerView() {
    return window.innerWidth < 768 ? 1 : 2;
  }

  getMaxIndex() {
    return Math.max(0, this.slides.length - this.getSlidesPerView());
  }

  init() {
    this.calcDimensions();
    this.applySlideWidths();
    this.setPosition(false);
    this.bindEvents();
  }

  calcDimensions() {
    const vw = this.viewport.getBoundingClientRect().width;
    const n = this.getSlidesPerView();
    this.slideWidth = (vw - this.gap * (n - 1)) / n;
  }

  applySlideWidths() {
    this.slides.forEach((s) => {
      s.style.flex = `0 0 ${this.slideWidth}px`;
    });
  }

  setPosition(animate) {
    if (!animate) this.track.classList.add("dragging");
    else this.track.classList.remove("dragging");
    this.currentTranslate = -this.currentIndex * (this.slideWidth + this.gap);
    this.prevTranslate = this.currentTranslate;
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    this.updateButtons();
  }

  updateButtons() {
    const max = this.getMaxIndex();
    this.prevBtn.disabled = false;
    this.nextBtn.disabled = false;
  }

  goTo(index) {
    const max = this.getMaxIndex();
    if (index < 0) index = max;
    else if (index > max) index = 0;
    this.currentIndex = index;
    this.setPosition(true);
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  bindEvents() {
    this.track.addEventListener("pointerdown", (e) => this.onDragStart(e));
    this.track.addEventListener("pointermove", (e) => this.onDragMove(e));
    this.track.addEventListener("pointerup", () => this.onDragEnd());
    this.track.addEventListener("pointercancel", () => this.onDragEnd());
    this.track.style.touchAction = "pan-y";

    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    this.viewport.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        this.next();
        e.preventDefault();
      }
    });

    const onResize = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.calcDimensions();
        this.applySlideWidths();
        const max = this.getMaxIndex();
        if (this.currentIndex > max) this.currentIndex = max;
        this.setPosition(false);
      }, 80);
    };
    window.addEventListener("resize", onResize);

    this.track.addEventListener("click", (e) => {
      const btn = e.target.closest(".details-btn");
      if (btn) {
        e.preventDefault();
        openModal(btn.dataset.projectId);
      }
    });
  }

  onDragStart(e) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.track.classList.add("dragging");
    this.track.style.cursor = "grabbing";
  }

  onDragMove(e) {
    if (!this.isDragging) return;
    const delta = e.clientX - this.startX;
    this.currentTranslate = this.prevTranslate + delta;
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.track.classList.remove("dragging");
    this.track.style.cursor = "";

    const step = this.slideWidth + this.gap;
    let idx = Math.round(-this.currentTranslate / step);
    idx = Math.max(0, Math.min(idx, this.getMaxIndex()));
    this.currentIndex = idx;
    this.setPosition(true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    new ProjectCarousel(projectsGrid);
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
