import React from "react";
import { Container } from "react-bootstrap";
import skills from "../../data/skills";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const HomeSkills = () => {
  const { t } = useLanguage();
  const { themeStyle } = useTheme();
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => {
            const isLight = themeStyle.card === "#fff";
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition duration-200 transform hover:scale-105 ${
                  isLight
                    ? "bg-white border-black hover:bg-gray-100"
                    : "border-gray-600 bg-black/60 hover:bg-blue-900/30"
                }`}
                style={{ minHeight: 60 }}
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
