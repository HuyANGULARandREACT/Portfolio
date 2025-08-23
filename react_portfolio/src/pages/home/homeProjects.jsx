import React from "react";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const HomeProjects = () => {
  const { t } = useLanguage();
  const { themeStyle } = useTheme();
  return (
    <Container>
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
      <div
        className="mt-5 p-5 border-2 rounded"
        style={{ color: themeStyle.text }}
      >
        <p className="mt-4 text-lg">
          
        </p>
      </div>
    </Container>
  );
};

export default HomeProjects;
