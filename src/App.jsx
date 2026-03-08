import { useState, useEffect } from "react";
import "./App.css";

const MY_INFO = {
  name: "Võ Lâm Gia Kiệt",
  role: "Full Stack Developer ",
  avatar: "/QD000584.jpg",
  bio: "3rd-year IT student (K23) at Sai Gon University. Full-stack developer with teaching experience at tech academies like SaiGonSTEM. Passionate about building scalable web applications integrated with AI—especially RAG systems and NLP. Highly proficient in React, Node.js, Python, and working in Linux environments.",
  social: [
    {
      label: "GitHub",
      href: "https://github.com/GiaKiet201205",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ki\%E1\%BB\%87t-v\%C3\%B5-3b890a3b5/",
      icon: "linkedin",
    },
    {
      label: "volamgiakiet@gmail.com",
      href: "mailto:volamgiakiet@gmail.com",
      icon: "email",
    },
  ],
  skills: [
    "React",
    "Node.js",
    "Python",
    "LangChain",
    "FAISS",
    "Ollama",
    "Linux / Arch",
    "Tailwind CSS",
  ],
};

const PROJECT = {
  name: "SmartDoc AI",
  tagline: "Intelligent Document Q&A System",
  course: "Open Source Software Development · Spring 2026 · SGU",
  description:
    "An advanced, fully localized Retrieval-Augmented Generation (RAG) system designed for intelligent document Q&A. Users can upload PDF files, and the system automatically extracts, splits, and embeds the text to allow natural language querying. Powered by Qwen2.5:7b via Ollama and FAISS vector search, it guarantees 100% data privacy with zero API costs while offering robust support for over 50 languages including English and Vietnamese.",
  tech: [
    "Python",
    "LangChain Framework",
    "FAISS Database",
    "Qwen2.5:7b",
    "Ollama",
    "Streamlit",
    "HuggingFace MPNet",
    "PDFPlumber",
  ],
  github: "https://github.com/username/smartdoc-ai",

  achievements: [
    {
      icon: "📄",
      title: "Automated Document Processing",
      desc: "Utilizes PDFPlumberLoader for accurate text extraction. Applies RecursiveCharacterTextSplitter to break documents into 1000-character chunks with a 100-character overlap to preserve semantic context.",
      tag: "Data Layer",
    },
    {
      icon: "🔢",
      title: "Multilingual Vector Indexing",
      desc: "Converts text chunks into 768-dimensional vectors using the HuggingFace MPNet model. Vectors are stored in a FAISS database enabling hyper-fast, billion-scale cosine similarity searches.",
      tag: "Core Engine",
    },
    {
      icon: "🤖",
      title: "Local LLM Integration",
      desc: "Integrates Qwen2.5:7b via Ollama. It auto-detects the user's language (Vietnamese/English) via the prompt template and dynamically generates concise, context-aware answers without needing an internet connection.",
      tag: "Model Layer",
    },
    {
      icon: "💬",
      title: "Conversational RAG & Memory",
      desc: "Features a persistent session state that tracks conversation history in a user-friendly sidebar. Supports follow-up questions and includes strict state management to clear history or reset the vector store safely.",
      tag: "App Layer",
    },
    {
      icon: "📌",
      title: "Source Citation Tracking",
      desc: "Enhances trustworthiness by providing direct source citations. The system retrieves the exact metadata, allowing users to verify the exact page and paragraph used by the LLM to generate the answer.",
      tag: "Advanced",
    },
    {
      icon: "⚡",
      title: "Hybrid Search Optimization",
      desc: "Built to support advanced RAG features, including Hybrid Search combining dense vector retrieval with BM25 keyword matching to ensure maximum query relevance.",
      tag: "Future Scope",
    },
  ],
  metrics: [
    { value: "85–90%", label: "Retrieval Accuracy" },
    { value: "80–85%", label: "Answer Relevance" },
    { value: "50+", label: "Supported Languages" },
    { value: "100%", label: "Local Data Privacy" },
  ],
};

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
              <div className="school-sub">Information Technology </div>
            </div>
          </div>
        </aside>

        <main className="right-panel">
          <div className="rp-top">
            <div className="breadcrumb">
              <span>portfolio</span>
              <span className="bc-dot">/</span>
              <span className="bc-hi">smartdoc-ai</span>
            </div>
            <div className="live-tag">
              <span className="live-dot" />
              Production Ready
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-bar" />
            <div className="hero-head">
              <div className="hero-icon">🧠</div>
              <div className="hero-meta-wrap">
                <div className="hero-course">{PROJECT.course}</div>
                <h2 className="hero-name">{PROJECT.name}</h2>
                <div className="hero-tagline">{PROJECT.tagline}</div>
              </div>
            </div>

            <p className="hero-desc">{PROJECT.description}</p>

            <div className="tech-row">
              {PROJECT.tech.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="metrics">
              {PROJECT.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <div className="metric-val">{m.value}</div>
                  <div className="metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-btns">
              <a
                href={PROJECT.github}
                className="btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                {icons.github} Repository
              </a>
              <a
                href="/GiaKiet_Resume.pdf"
                className="btn-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </a>
            </div>
          </div>

          <div className="sec-head">
            <span className="sec-num">01</span>
            <span className="sec-title">Core Architecture & Features</span>
          </div>
          <div className="feat-grid">
            {PROJECT.achievements.map((a, i) => (
              <div
                key={i}
                className="feat-card"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="feat-row1">
                  <span className="feat-icon">{a.icon}</span>
                  <span className="feat-tag">{a.tag}</span>
                </div>
                <div className="feat-title">{a.title}</div>
                <div className="feat-desc">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 36 }}>
            <span className="sec-num">02</span>
            <span className="sec-title">Document Processing Flow</span>
          </div>
          <div className="pipeline">
            {[
              { icon: "📤", label: "Load PDF" },
              { icon: "✂️", label: "Split Text" },
              { icon: "🔢", label: "Embed MPNet" },
              { icon: "🗃️", label: "FAISS Store" },
              { icon: "❓", label: "Input Query" },
              { icon: "🔍", label: "Cosine Search" },
              { icon: "🤖", label: "Qwen2.5:7b" },
              { icon: "💡", label: "Response" },
            ].map((s, i, arr) => (
              <div key={s.label} className="pipe-wrap">
                <div className="pipe-step">
                  <div className="pipe-icon">{s.icon}</div>
                  <div className="pipe-lbl">{s.label}</div>
                </div>
                {i < arr.length - 1 && <span className="pipe-arr">→</span>}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
