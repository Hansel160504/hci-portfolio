import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <h2 style={{ padding: "20px", color: "white" }}>Project not found.</h2>;
  }

  // Helper variable to make code cleaner
  const isMobile = project.isMobile;

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "#e6eef6",
      }}
    >
      {/* Back Button */}
      <Link 
        to="/projects" 
        style={{ 
          color: "#76a9fa", 
          textDecoration: "none", 
          display: "inline-block", 
          marginBottom: "20px",
          fontWeight: "500"
        }}
      >
        ← Back to Projects
      </Link>

      {/* PROJECT IMAGE CONTAINER */}
      {project.image && (
        <div
          style={{
            width: "100%",
            // LOGIC: Mobile needs vertical space (550px), Web needs a banner (350px)
            height: isMobile ? "550px" : "350px",
            
            // LOGIC: Use the same gradient for mobile as your main list
            background: isMobile 
              ? "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)" 
              : "rgba(255,255,255,0.05)",
              
            borderRadius: "16px",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              // LOGIC: 
              // If Mobile: Height is 100% of the container, Width is auto (keeps ratio)
              // If Web: Width is 100%, Height is 100% (fills banner)
              height: isMobile ? "90%" : "100%",
              width: isMobile ? "auto" : "100%",
              
              // 'contain' shows the whole phone. 'cover' fills the banner.
              objectFit: isMobile ? "contain" : "cover",
              
              borderRadius: isMobile ? "12px" : "0",
              boxShadow: isMobile ? "0 20px 40px rgba(0,0,0,0.4)" : "none"
            }}
          />
        </div>
      )}

      {/* PROJECT TITLE */}
      <h2 style={{ fontSize: "32px", marginBottom: "10px", fontWeight: "600" }}>
        {project.title}
      </h2>

      {/* SHORT DESCRIPTION */}
      <p style={{ color: "#9aa6b2", marginBottom: "30px", fontSize: "18px", lineHeight: "1.6" }}>
        {project.desc}
      </p>

      {/* LONG DESCRIPTION */}
      {project.longDesc && (
        <div style={{ marginBottom: "35px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "15px", color: "#e6eef6" }}>Overview</h3>
          <p style={{ color: "#9aa6b2", lineHeight: "1.7", whiteSpace: "pre-line" }}>
            {project.longDesc}
          </p>
        </div>
      )}

      {/* FEATURES */}
      <div style={{ marginBottom: "35px" }}>
        <h3 style={{ fontSize: "22px", marginBottom: "15px", color: "#e6eef6" }}>Key Features</h3>
        <ul
          style={{
            marginLeft: "20px",
            color: "#9aa6b2",
            lineHeight: "1.8",
          }}
        >
          {project.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* TECH USED */}
      <div>
        <h3 style={{ fontSize: "22px", marginBottom: "15px", color: "#e6eef6" }}>Technologies</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {project.tech?.map((t, i) => (
            <span 
              key={i}
              style={{
                background: "rgba(118, 169, 250, 0.1)",
                color: "#76a9fa",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                border: "1px solid rgba(118, 169, 250, 0.2)"
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}