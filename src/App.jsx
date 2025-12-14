// App.jsx
import React from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import projects from "./data/projects";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./pages/Projects";
import avatar from "./assets/img1.png";

import { Routes, Route, Link } from "react-router-dom";

// ------------------------------------------------------------
// DOWNLOAD RESUME
// ------------------------------------------------------------
function downloadResume() {
  // 1. Format the projects list dynamically from your data
  const projectsList = projects.map(p => 
    `• ${p.title}\n   ${p.desc}\n   Tech: ${p.tech ? p.tech.join(", ") : "N/A"}`
  ).join("\n\n");

  // 2. Build the full resume string
  const text = `HANS NEKO R. DOMINGUITO
Computer Science Student

CONTACT INFO
------------------------------------------------------------
Email:    dominguitohans16@gmail.com
Phone:    +63 9055035202
Location: Philippines

PROFILE
------------------------------------------------------------
I’m a passionate Computer Science student who enjoys creating meaningful,
efficient, and intuitive digital experiences. My work spans across multiple
areas of technology — including web development, mobile applications,
UI/UX interface design, databases, and machine learning integration.

SKILLS
------------------------------------------------------------
Frontend: React, HTML, CSS, JavaScript
Mobile:   Android Studio, Flutter, Kotlin
Backend:  PHP, Node.js
Database: MySQL, Supabase
Other:    TensorFlow Lite, System Design

EDUCATION
------------------------------------------------------------
Bachelor of Science in Computer Science (Expected 2026)

Relevant Coursework:
- Operating Systems
- Data Structures & Algorithms
- Mobile Computing
- Software Engineering

PROJECTS
------------------------------------------------------------
${projectsList}
`;

  // 3. Create the file and trigger download
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Hans_Dominguito_Resume.txt"; 
  a.click();
  URL.revokeObjectURL(url);
}

// ------------------------------------------------------------
// HOME PAGE
// ------------------------------------------------------------
function Home() {
  return (
    <div className="content">

      {/* LEFT SIDE */}
      <div className="left">
        {/* INTRO */}
        <section id="about" className="intro">
          <h2>Hi I'm Hans Neko R. Dominguito</h2>
          <p>
            I’m a passionate Computer Science student who enjoys creating meaningful,
            efficient, and intuitive digital experiences. My work spans across multiple
            areas of technology — including web development, mobile applications,
            UI/UX interface design, databases, and machine learning integration.
            I enjoy solving real-world problems through software and continuously
            exploring modern tools and frameworks to expand my skill set.
          </p>
          <p style={{ marginTop: "10px" }}>
            Beyond development, I value clean architecture, maintainable code, and
            user-centered design. I thrive in learning environments, love working on
            projects that challenge me technically, and enjoy collaborating with others to
            bring ideas to life. My goal is to become a versatile full-stack developer
            capable of building reliable systems from the frontend to the backend.
          </p>
        </section>

        {/* SKILLS */}
        <section className="skills">
          <h3>Skills</h3>
          <div className="chip-group">
            {["HTML", "CSS", "JavaScript", "React", "Flutter", "Kotlin"].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </section>

        {/* PROJECT PREVIEW */}
        <section id="projects" className="projects">
          <h3>Projects</h3>
          <div className="project-grid">
            {projects.map(p => (
              <Link to={`/projects/${p.id}`} key={p.id} className="project-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* RIGHT SIDE */}
      <aside className="right">
        {/* AVATAR */}
        <div className="avatar-box">
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
          />
        </div>

        {/* PROFILE */}
        <div className="profile">
          <h3>Hans Neko R. Dominguito</h3>
          <p className="role">Computer Science Student</p>
          <button className="resume-btn" onClick={downloadResume}>
            Download Resume
          </button>
        </div>

        {/* QUALIFICATIONS */}
        <div className="qualifications">
          <h4>Qualifications</h4>
          <p>Bachelor of Science in Computer Science (expected 2026)</p>
          
          <p style={{ marginTop: "8px" }}><strong>Core Expertise:</strong></p>
          <ul style={{ marginLeft: "20px", color: "#9aa6b2", lineHeight: "1.7" }}>
            <li>Frontend Development – React, HTML, CSS, JavaScript</li>
            <li>Mobile Development – Android Studio, Flutter</li>
            <li>Backend Development – PHP, Node.js</li>
            <li>Database Design – MySQL, Supabase</li>
            <li>Machine Learning Integration – TensorFlow Lite</li>
            <li>System Design & Software Architecture</li>
          </ul>

          <p style={{ marginTop: "8px" }}><strong>Relevant Coursework:</strong></p>
          <ul style={{ marginLeft: "20px", color: "#9aa6b2", lineHeight: "1.7" }}>
            <li>Operating Systems</li>
            <li>Data Structures & Algorithms</li>
            <li>Mobile Computing</li> 
            <li>Software Engineering</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:dominguitohans16@gmail.com">dominguitohans16@gmail.com</a></p>
          <p>Phone: <a href="tel:+639055035202">+63 9055035202</a></p>
          <p>Location: Philippines</p>
        </div>
      </aside>

    </div>
  );
}

// ------------------------------------------------------------
// MAIN APP
// ------------------------------------------------------------
export default function App() {
  return (
    <div className="wrapper">

      {/* NAVIGATION */}
      <header className="navbar">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/projects" className="nav-item">Projects</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}