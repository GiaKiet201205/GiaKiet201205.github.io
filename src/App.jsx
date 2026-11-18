import { useState, useEffect } from "react";
import "./App.css";
import { CONTENT } from "./content";

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

const projectIconPaths = {
  "training-center": <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-5h6v5M8 7h1m6 0h1M8 11h1m6 0h1" /></>,
  "misinformation-simulator": <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m11 7-5 9m7-9 5 9M7 18h10" /></>,
  "university-admissions": <><path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7m4-2v8" /></>,
  "product-testing": <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2m-6 9 2 2 4-5" /></>,
  "ssb": <><rect x="4" y="3" width="16" height="16" rx="3" /><path d="M4 11h16M8 7h8M7 19v2m10-2v2M8 15h1m6 0h1" /></>,
  "fashion-store": <><path d="M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2" /></>,
};

function ProjectIcon({ id }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true" focusable="false">
      {projectIconPaths[id] ?? <path d="m8 5-7 7 7 7m8-14 7 7-7 7" />}
    </svg>
  );
}

function Avatar({ src, alt }) {
  return (
    <div className="avatar-wrap">
      <div className="avatar-inner">
        {src ? (
          <img src={src} alt={alt} width="100" height="100" />
        ) : (
          <span className="avatar-emoji">💻</span>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "vi" ? "vi" : "en";
    } catch {
      return "en";
    }
  });
  const { info, workExperience, projects, ui } = CONTENT[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = ui.pageTitle;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Switching also works when browser storage is unavailable.
    }
  }, [language, ui.pageTitle]);

  return (
    <div className="page">
      <div className="language-switch" role="group" aria-label={ui.language}>
        {[{ code: "en", label: "EN", name: "English" },
          { code: "vi", label: "VI", name: "Tiếng Việt" }].map((option) => (
          <button key={option.code} type="button" lang={option.code}
            aria-label={option.name} aria-pressed={language === option.code}
            onClick={() => setLanguage(option.code)}>
            {option.label}
          </button>
        ))}
      </div>
      <div className="layout">
        <aside className="left-panel">
          <Avatar src={info.avatar} alt={ui.avatarAlt} />
          <h1 className="name">{info.name}</h1>
          <div className="role-pill">
            <span className="role-dot" aria-hidden="true" />
            <span className="role-label">{info.role}</span>
          </div>
          {info.bio && (
            <div className="bio">
              {ui.aboutMe && <h2 className="bio-heading">{ui.aboutMe}</h2>}
              <p>{info.bio}</p>
            </div>
          )}
          <section className="experience-section" aria-labelledby="experience-heading">
            <h2 className="bio-heading" id="experience-heading">{ui.workExperience}</h2>
            <div className="experience-list">
              {workExperience.map((job) => (
                <article className="experience-card" key={job.id}>
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-company">{job.company}</p>
                    </div>
                    <p className="experience-period">{job.period}</p>
                  </div>
                  <ul className="experience-details">
                    {job.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>
          <div className="sep-line"><span>{ui.contact}</span></div>
          <div className="social-list">
            {info.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-item">
                <span className="s-ic">{icons[s.icon]}</span>
                <span className="s-lbl">{s.label}</span><span className="s-arr">↗</span>
              </a>
            ))}
          </div>
          <div className="sep-line"><span>{ui.techStack}</span></div>
          <div className="chip-wrap">
            {info.skills.map((s, i) => <span key={s} className="chip" style={{ animationDelay: `${i * 0.05}s` }}>{s}</span>)}
          </div>
          <div className="school-box"><span>🎓</span><div>
            <div className="school-name">{ui.school}</div>
            <div className="school-sub">{ui.major}</div>
          </div></div>
        </aside>
        <main className="right-panel">
          <div className="rp-top">
            <div className="breadcrumb"><span>{ui.portfolio}</span><span className="bc-dot">/</span><span className="bc-hi">{ui.projects}</span></div>
            <div className="live-tag"><span className="live-dot" />{ui.developer}</div>
          </div>
          <div className="sec-head"><span className="sec-num">01</span><span className="sec-title">{ui.projectHeading}</span></div>
          {projects.map((project) => (
            <div key={project.id} className="hero-card" style={{ marginBottom: "36px" }}>
              <div className="hero-head">
                <div className="hero-icon"><ProjectIcon id={project.id} /></div>
                <div className="hero-meta-wrap">
                  <div className="hero-course">{project.course}</div>
                  <h2 className="hero-name">{project.name}</h2>
                  <div className="hero-tagline">{project.tagline}</div>
                </div>
              </div>
              <p className="hero-desc">{project.description}</p>
              <div className="tech-row">{project.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}</div>
              <div className="metrics">{project.metrics.map((m) => (
                <div key={m.label} className="metric"><div className="metric-val">{m.value}</div><div className="metric-lbl">{m.label}</div></div>
              ))}</div>
              {project.repository && (
                <div className="hero-btns">
                  {(project.repositories ?? [{ label: ui.repository, href: project.repository }]).map((repository) => (
                    <a key={repository.href} href={repository.href} className="btn-ghost" target="_blank" rel="noreferrer">{icons.github} {repository.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
