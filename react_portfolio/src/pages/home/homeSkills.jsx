import React from "react";
import { Container } from "react-bootstrap";
import skills from "../../data/skills";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const HomeSkills = () => {
  const { t } = useLanguage();
  const { themeStyle } = useTheme();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll(".skill-card");
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 100); // Stagger animation by 100ms for each card
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      observer.observe(skillsContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <div className="mt-5">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          {t("page.skills")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-15"
          id="skills-container"
        >
          {skills.map((skill, idx) => {
            const isLight = themeStyle.card === "#fff";
            return (
              <div
                key={idx}
                className={`skill-card flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-500 transform hover:scale-105 ${
                  isLight
                    ? "bg-white border-black hover:bg-gray-100"
                    : "border-gray-600 bg-black/60 hover:bg-blue-900/30"
                }`}
                style={{
                  minHeight: 60,
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {skill.icon.startsWith("<") ? (
                  <span
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                    style={{ fontSize: 28 }}
                  />
                ) : (
                  <span style={{ fontSize: 28 }}>{skill.icon}</span>
                )}
                <span className="text-lg font-medium">{skill.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default HomeSkills;
