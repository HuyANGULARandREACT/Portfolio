import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeBio from "./homeBio";
import HomeSkills from "./homeSkills";
import HomeCertificate from "./homeCertificate";
import { useLanguage } from "../../context/languageContext";
import CodingAnimation from "../../components/CodingAnimation";
import HomeProjects from "./homeProjects";
const Home = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Container>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 mt-5">
          {t("page.greeting")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>
        <div className="flex items-center ">
          <h4 className="p-5">{t("greeting")}</h4>
          <div className="hidden md:block">
            <CodingAnimation />
          </div>
        </div>
      </Container>
      <HomeBio />
      <HomeSkills />
      <HomeCertificate />
      <HomeProjects />
    </Container>
  );
};

export default Home;
