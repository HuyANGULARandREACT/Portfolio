import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const HomeProjects = () => {
  const { t } = useLanguage();
  const { theme, themeStyle } = useTheme();
  const projectRef = useRef(null);

  // Get projects from translation data
  const projects = t("projects") || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll(".project-card");
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = projectRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Container>
      <div ref={projectRef}>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 mt-5">
          {t("nav.projects")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-15">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card rounded-lg border flex flex-col overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                minHeight: 350,
                opacity: 0,
                transform: "translateY(30px)",
                transition:
                  "opacity 0.6s ease, transform 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
                borderColor: theme === "dark" ? "#404040" : "#e0e0e0",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  e.currentTarget.style.transform.includes("translateY")
                    ? e.currentTarget.style.transform.replace(
                        "translateY(0)",
                        "translateY(0) scale(1.05)"
                      )
                    : "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0, 123, 255, 0.5)";
                e.currentTarget.style.borderColor = "#007bff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  e.currentTarget.style.transform.includes("translateY")
                    ? e.currentTarget.style.transform.replace(
                        "translateY(0) scale(1.05)",
                        "translateY(0)"
                      )
                    : "scale(1)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor =
                  theme === "dark" ? "#404040" : "#e0e0e0";
              }}
            >
              {/* Project Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Project Info */}
              <div className="p-4 flex-1 flex flex-col">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: theme === "dark" ? "#ffffff" : "#333333" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm mb-3 flex-1"
                  style={{ color: theme === "dark" ? "#cccccc" : "#666666" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#007bff20" : "#007bff10",
                        color: "#007bff",
                        border: "1px solid #007bff30",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-2">
               
                  <button
                    className="flex-1 py-2 px-3 rounded font-medium transition-all duration-200 hover:opacity-80"
                    style={
                      theme === "dark"
                        ? {
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            border: "1px solid #ffffff",
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "#333333",
                            border: "1px solid #333333",
                          }
                    }
                    onClick={() => window.open(project.codeLink, "_blank")}
                  >
                    View Code
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeProjects;
