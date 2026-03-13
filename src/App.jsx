import { useState, useEffect } from "react";
import "./App.css";

const MY_INFO = {
  name: "Võ Lâm Gia Kiệt",
  role: "Software Engineering Student",
  avatar: "/QD000584.jpg",
  bio: "3rd-year IT student (K23) at Sai Gon University. I enjoy solving practical problems through code—whether it's building full-stack applications, writing automation tests, or optimizing complex algorithms. I also have experience teaching STEM, which helps me communicate technical concepts clearly.",
  social: [
    {
      label: "Resume",
      href: "/GiaKiet_Resume.pdf",
      icon: "external",
    },
    {
      label: "GitHub",
      href: "https://github.com/GiaKiet201205",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ki%E1%BB%87t-v%C3%B5-3b890a3b5/",
      icon: "linkedin",
    },
    {
      label: "volamgiakiet@gmail.com",
      href: "mailto:volamgiakiet@gmail.com",
      icon: "email",
    },
  ],
  skills: [
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "MySQL",
    "Cypress",
    "LangChain",
    "Linux",
  ],
};

const PROJECTS = [
  {
    icon: "🧠",
    name: "SmartDoc AI",
    tagline: "Intelligent Document Q&A System",
    course: "Open Source Software Dev · Spring 2026",
    description:
      "A local Retrieval-Augmented Generation (RAG) system built to analyze and query PDF documents. By utilizing Qwen2.5:7b via Ollama and FAISS for vector search, it provides accurate, privacy-focused answers without relying on paid external APIs.",
    tech: ["Python", "LangChain", "FAISS", "Qwen2.5", "Ollama", "Streamlit"],
    metrics: [
      { value: "100%", label: "Local Privacy" },
      { value: "50+", label: "Languages" },
      { value: "85%", label: "Retrieval Acc" },
      { value: "Zero", label: "API Cost" },
    ],
  },
  {
    icon: "🧪",
    name: "Apple Device Management",
    tag: "Software Testing & QA",
    course: "Software Testing · Fall 2025",
    description:
      "Conducted comprehensive software testing for a full-stack web application following strict Test-Driven Development (TDD) methodologies. Designed and executed Unit, Integration, Mock, and End-to-End automation tests.",
    tech: [
      "React",
      "Spring Boot",
      "Cypress",
      "Jest",
      "JUnit 5",
      "JaCoCo",
      "CI/CD",
    ],
    metrics: [
      { value: "85%+", label: "Code Coverage" },
      { value: "TDD", label: "Methodology" },
      { value: "E2E", label: "Auto Tested" },
      { value: "CI/CD", label: "Integrated" },
    ],
  },
  {
    icon: "🚚",
    name: "MDVRP Optimizer",
    tagline: "Large-scale Logistics Routing",
    course: "Python Programming · Fall 2025",
    description:
      "Engineered routing optimization solutions for complex logistics datasets. Developed and evaluated algorithmic strategies combining Genetic Algorithms, OR-Tools, and advanced meta-heuristics to maximize route efficiency.",
    tech: [
      "Python",
      "OR-Tools",
      "Genetic Algorithm",
      "Simulated Annealing",
      "Tabu Search",
    ],
    metrics: [
      { value: "2,000", label: "Depots" },
      { value: "3,500", label: "Customers" },
      { value: "3", label: "Hybrid Strategies" },
      { value: "High", label: "Efficiency" },
    ],
  },
  {
    icon: "🚌",
    name: "Smart School Bus (SSB 1.0)",
    tagline: "Tracking & Management System",
    course: "Software Engineering · Fall 2025",
    description:
      "Architected a comprehensive school bus tracking system. Designed detailed system architecture using UML diagrams and implemented robust core functionalities emphasizing OOP principles and the MVC pattern.",
    tech: [
      "React",
      "Java",
      "System Architecture",
      "UML",
      "OOP",
      "SOLID",
      "MVC",
    ],
    metrics: [
      { value: "UML", label: "System Design" },
      { value: "MVC", label: "Architecture" },
      { value: "SOLID", label: "Principles" },
      { value: "OOP", label: "Core Focus" },
    ],
  },
  {
    icon: "🛒",
    name: "Omnichannel POS System",
    tagline: "Clothing Store Management",
    course: "Java Programming · Spring 2025",
    description:
      "Developed a comprehensive retail management system featuring an online e-commerce web platform for customer orders and a secure, offline Point of Sale (POS) desktop application for administrative management.",
    tech: ["Java", "MySQL Workbench", "E-commerce", "Desktop GUI", "RBAC"],
    metrics: [
      { value: "Online", label: "Web Platform" },
      { value: "Offline", label: "POS App" },
      { value: "RBAC", label: "Security" },
      { value: "Sync", label: "Database" },
    ],
  },
];

const icons = {
  github: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.56c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.66h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
    </svg>
  ),
  email: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  external: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

function Avatar({ src }) {
  return (
    <div className="avatar-wrap">
      <div className="avatar-ring" />
      <div className="avatar-inner">
        {src ? (
          <img src={src} alt="avatar" />
        ) : (
          <span className="avatar-emoji">💻</span>
        )}
      </div>
      <span className="avatar-status" />
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 60);
  }, []);

  return (
    <div className={`page ${show ? "show" : ""}`}>
      <div className="layout">
        <aside className="left-panel">
          <Avatar src={MY_INFO.avatar} />
          <h1 className="name">{MY_INFO.name}</h1>
          <div className="role-pill">
            <span className="role-dot" />
            {MY_INFO.role}
          </div>
          <p className="bio">{MY_INFO.bio}</p>

          <div className="sep-line">
            <span>CONTACT</span>
          </div>
          <div className="social-list">
            {MY_INFO.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <span className="s-ic">{icons[s.icon]}</span>
                <span className="s-lbl">{s.label}</span>
                <span className="s-arr">↗</span>
              </a>
            ))}
          </div>

          <div className="sep-line">
            <span>TECH STACK</span>
          </div>
          <div className="chip-wrap">
            {MY_INFO.skills.map((s, i) => (
              <span
                key={s}
                className="chip"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="school-box">
            <span>🎓</span>
            <div>
              <div className="school-name">Sai Gon University</div>
              <div className="school-sub">Information Technology</div>
            </div>
          </div>
        </aside>

        <main className="right-panel">
          <div className="rp-top">
            <div className="breadcrumb">
              <span>portfolio</span>
              <span className="bc-dot">/</span>
              <span className="bc-hi">projects</span>
            </div>
            <div className="live-tag">
              <span className="live-dot" />
              Developer
            </div>
          </div>

          <div className="sec-head">
            <span className="sec-num">01</span>
            <span className="sec-title">Academic & Personal Projects</span>
          </div>

          {/* HIỂN THỊ ĐỒNG ĐỀU TẤT CẢ ĐỒ ÁN BẰNG HERO CARD */}
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="hero-card"
              style={{ marginBottom: "36px" }}
            >
              <div className="hero-bar" />
              <div className="hero-head">
                <div className="hero-icon">{project.icon}</div>
                <div className="hero-meta-wrap">
                  <div className="hero-course">{project.course}</div>
                  <h2 className="hero-name">{project.name}</h2>
                  <div className="hero-tagline">{project.tagline}</div>
                </div>
              </div>

              <p className="hero-desc">{project.description}</p>

              <div className="tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <div className="metric-val">{m.value}</div>
                    <div className="metric-lbl">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="hero-btns">
                <a
                  href="https://github.com/GiaKiet201205"
                  className="btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icons.github} Repository
                </a>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
