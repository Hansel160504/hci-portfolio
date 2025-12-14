import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div 
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 
        style={{
          color: "#e6eef6",
          marginBottom: "25px",
          fontSize: "28px",
          fontWeight: "600",
        }}
      >
        My Projects
      </h2>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
          alignItems: "start", // Ensures cards don't stretch weirdly if heights differ
        }}
      >
        {projects.map((p) => (
          <Link
            to={`/projects/${p.id}`}
            key={p.id}
            style={{
              textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.07)",
              transition: "0.25s ease",
              display: "flex",
              flexDirection: "column",
            }}
            className="project-hover"
          >
            {p.image && (
              <div
                style={{
                  width: "100%",
                  // LOGIC: If mobile, use Portrait (3/4). If web, use Landscape (16/9)
                  aspectRatio: p.isMobile ? "3/4" : "16/9",
                  overflow: "hidden",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  // Make background lighter for mobile to add depth
                  background: p.isMobile 
                    ? "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)" 
                    : "#0f172a",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)"
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    // 'contain' ensures the whole screenshot fits inside the box
                    objectFit: "contain", 
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            )}

            <h3
              style={{
                color: "#e6eef6",
                marginBottom: "8px",
                fontSize: "20px",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                color: "#9aa6b2",
                lineHeight: "1.6",
              }}
            >
              {p.desc}
            </p>

            <span
              style={{
                color: "#76a9fa",
                marginTop: "15px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              View project →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}