"use client";

import { useState, useEffect } from "react";

type ThemeMode = "light-mode" | "dark-mode" | "cruelty-mode";

interface Project {
  title: string;
  subtitle: string;
  isAi: boolean;
  status: "Completed" | "Pending";
  description: string;
  tags: string[];
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("dark-mode");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = "dark-mode";
    }
  }, []);

  const changeTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const languages = ["Python", "JavaScript", "TypeScript", "C", "Java", "SQL", "Rust", "OCAML"];

  const projects: Project[] = [
    {
      title: "PDL",
      subtitle: "High-resolution image archiving",
      isAi: true,
      status: "Completed",
      description: "Hosted on a free-tier Oracle instance. Includes sub-second semantic queries and 99.9% uptime over 25k+ records.",
      tags: ["VueJS", "Springboot", "ONNX", "Postgres Vector", "HNSW"],
    },
    {
      title: "Komee",
      subtitle: "Online reading and writing platform",
      isAi: false,
      status: "Pending",
      description: "Reading community platform with surreal-db recommendations and Tauri desktop client integrations.",
      tags: ["Rust", "Surreal DB", "VueJS", "Tauri", "Vector Search"],
    },
    {
      title: "ColorMatch",
      subtitle: "Makeup color matching suite",
      isAi: false,
      status: "Completed",
      description: "ML pipeline utilizing CIELAB color space processing and K-means clustering to map variations.",
      tags: ["Flask", "React", "PostgreSQL", "Python", "K-means"],
    },
  ];

  return (
    <>
      <div className="crt-overlay" />
      
      <div className="view-wrapper">
        
        {/* Toggles */}
        <div className="controls">
          <button className="btn btn-outline" onClick={() => changeTheme("light-mode")}>Light</button>
          <button className="btn btn-outline" onClick={() => changeTheme("dark-mode")}>Dark</button>
          <button className="btn btn-outline btn-cruelty-toggle" onClick={() => changeTheme("cruelty-mode")}>Cruelty</button>
        </div>

        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Nikita Semenov</h1>
          <p className="subtitle">Computer Science Student at Université de Bordeaux &amp; Software Developer</p>
          
          <div className="contact-info">
            <a href="mailto:mrkitnik@gmail.com" className="contact-link">mrkitnik@gmail.com</a>
            <a href="tel:+33611593271" className="contact-link">+33 6 11 59 32 71</a>
            <a href="https://linkedin.com/in/nikita-semenov-student" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://github.com/minorflunky" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </div>
        </header>

        <div className="grid grid-sidebar">
          
          {/* Main Column */}
          <main>
            
            <section className="section-block">
              <h2 className="section-title">Experience</h2>
              <div>
                
                <div className="chrono-item">
                  <div className="experience-meta">
                    <span className="job-title">Co-Founder &amp; CTO — Tozbe</span>
                    <span className="job-date">Jun 2023 – Apr 2025</span>
                  </div>
                  <ul className="bullet-list">
                    <li>Built React Native TypeScript mobile app for public safety within Berkeley SkyDeck accelerator.</li>
                    <li>Architected Node.js backend with PostgreSQL and AWS S3.</li>
                    <li>Led cross-functional software/hardware development.</li>
                  </ul>
                </div>

                <div className="chrono-item">
                  <div className="experience-meta">
                    <span className="job-title">Software Engineering Intern — DeepEye Medical GmbH</span>
                    <span className="job-date">May 2024 – Nov 2024</span>
                  </div>
                  <ul className="bullet-list">
                    <li>Developed Zeiss Forum medical imaging platform integration tools.</li>
                    <li>Reduced load times by 65% and increased unit testing coverage from 20% to 89%.</li>
                    <li>Implemented computer vision pipelines processing DICOM OCT scan files.</li>
                  </ul>
                </div>

                <div className="chrono-item">
                  <div className="experience-meta">
                    <span className="job-title">Junior Systems Architect — Dialogs with Universe GmbH</span>
                    <span className="job-date">Jun 2023 – Jan 2024</span>
                  </div>
                  <ul className="bullet-list">
                    <li>Built translation utilities reducing software localization intervals by 50%.</li>
                    <li>Assisted on classification fine-tuning, contributing to a 40% reduction in support tickets.</li>
                  </ul>
                </div>

                <div className="chrono-item">
                  <div className="experience-meta">
                    <span className="job-title">Software Developer Intern — Alliance Française</span>
                    <span className="job-date">Mar 2022 – Apr 2022</span>
                  </div>
                  <ul className="bullet-list">
                    <li>Developed automated optical character recognition scripts digitizing historical files.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="section-block">
              <h2 className="section-title">Projects</h2>
              <div className="grid">
                {projects.map((project, i) => (
                  <article className="card" key={i}>
                    <div className="experience-meta">
                      <span className="job-title" style={{ fontSize: "1.1rem" }}>{project.title}</span>
                      {project.isAi ? (
                        <span className="ai-tag">AI Search</span>
                      ) : (
                        <span className={`status-badge ${project.status === "Completed" ? "status-completed" : "status-pending"}`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                      {project.description}
                    </p>
                    <div className="tags-container">
                      {project.tags.map((tag, j) => (
                        <span className="tag" key={j}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside>
            
            {/* Skills */}
            <section className="section-block">
              <h3 className="section-title">Skills</h3>
              
              <div style={{ marginBottom: "var(--space-md)" }}>
                <div className="label-text" style={{ marginBottom: "0.25rem" }}>Languages</div>
                <div className="tags-container">
                  {languages.map((lang, idx) => (
                    <span className="tag" key={idx}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "var(--space-md)" }}>
                <div className="label-text" style={{ marginBottom: "0.25rem" }}>Stack</div>
                <div className="tags-container">
                  <span className="tag">React.js</span>
                  <span className="tag">React Native</span>
                  <span className="tag">Angular</span>
                  <span className="tag">VueJS</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Springboot</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Docker</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="section-block">
              <h3 className="section-title">Education</h3>
              <div style={{ marginBottom: "var(--space-sm)" }}>
                <p style={{ fontWeight: 600 }}>Université de Bordeaux</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>BSc in Computer Science</p>
                <p className="job-date">Expected 2026</p>
              </div>
              <div>
                <p style={{ fontWeight: 600 }}>International A Level</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>4 A grades</p>
                <p className="job-date">Jun 2022</p>
              </div>
            </section>

            {/* Languages & Awards */}
            <section className="section-block">
              <h3 className="section-title">Context</h3>
              <div style={{ marginBottom: "var(--space-sm)" }}>
                <div className="label-text">Languages</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  English (C2) / French (B2) / Russian (Native)
                </p>
              </div>
              <div>
                <div className="label-text">Awards</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  BPhO Senior Physics Challenge (Bronze) <br />
                  UKMT Senior Math Challenge (Bronze)
                </p>
              </div>
            </section>

            {/* Volunteering */}
            <section className="section-block">
              <h3 className="section-title">Volunteering</h3>
              <div>
                <p style={{ fontWeight: 600 }}>Almaty Womens Shelter</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Computer Science Tutor (Python / Scratch Basics)
                </p>
              </div>
            </section>

          </aside>

        </div>
      </div>
    </>
  );
}