// About.jsx
import React from "react";
import avatar from "../assets/img1.png";

export default function About() {
  return (
    <div className="content" style={{ padding: "20px" }}>
      <div className="left">
        <section className="intro">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer who enjoys building clean, efficient, and user-friendly
            applications. My interests include mobile development, web interfaces, UI/UX design,
            and machine learning. I love solving problems and continuously learning new
            technologies to improve my craft.
          </p>

          <p style={{ marginTop: "10px" }}>
            Outside of programming, I enjoy exploring new tools, playing games, and researching 
            modern tech trends. My goal is to become a well-rounded engineer capable of creating 
            meaningful and impactful software solutions.
          </p>
        </section>

        <section className="skills" style={{ marginTop: "20px" }}>
          <h3>What I Do</h3>
          <ul style={{ color: "#9aa6b2", marginLeft: "20px", lineHeight: "1.8" }}>
            <li>Mobile app development (Android Studio, Flutter)</li>
            <li>Full-stack web development (React, PHP, MySQL)</li>
            <li>UI/UX design and interactive prototypes</li>
            <li>TFLite ML model integration for mobile apps</li>
            <li>Game development for academic projects</li>
          </ul>
        </section>
      </div>

      <aside className="right">
        <div className="avatar-box">
          <img
          src={avatar}
            alt="avatar"
            className="avatar"
          />
        </div>

        <div className="profile">
          <h3>Hans Neko R. Dominguito</h3>
          <p className="role">Developer • Student • Designer</p>
        </div>

        <div className="qualifications">
          <h4>Background</h4>
          <p>Bachelor of Science in Computer Science</p>
          <p>Experience in mobile, web & ML integration</p>
        </div>
      </aside>
    </div>
  );
}
