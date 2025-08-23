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
import useLazyLoad from "../../hooks/useLazyLoad";
const Home = () => {
  const { t } = useLanguage();

  // Lazy load components
  const shouldLoadAbout = useLazyLoad("about", 0.2);
  const shouldLoadSkills = useLazyLoad("skills", 0.2);
  const shouldLoadCertificates = useLazyLoad("certificates", 0.2);
  const shouldLoadProjects = useLazyLoad("projects", 0.2);
  const shouldLoadContact = useLazyLoad("contact", 0.2);

  return (
    <Container>
      <Container className="mt-60 mb-60" id="home">
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
        <div className="flex items-center mt-15">
          <h4
            className="p-5 animate-fade-in-left"
            style={{ opacity: 0 }}
            id="greeting-text"
          >
            {t("greeting")}
          </h4>
          <div
            className="hidden md:block animate-fade-in-right"
            style={{ opacity: 0 }}
            id="greeting-anim"
          >
            <CodingAnimation />
          </div>
        </div>
        <style>{`
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left {
            animation: fadeInLeft 1s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          .animate-fade-in-right {
            animation: fadeInRight 1s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
        <script>{`
          function onVisible(element, callback) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  callback();
                  observer.disconnect();
                }
              });
            });
            observer.observe(element);
          }
          window.addEventListener('DOMContentLoaded', function() {
            var greeting = document.getElementById('greeting-text');
            var anim = document.getElementById('greeting-anim');
            if (greeting) {
              onVisible(greeting, () => greeting.style.opacity = 1);
            }
            if (anim) {
              onVisible(anim, () => anim.style.opacity = 1);
            }
          });
        `}</script>
      </Container>
      <div id="about" style={{ minHeight: "100vh" }}>
        {shouldLoadAbout ? (
          <HomeBio />
        ) : (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading About...
          </div>
        )}
      </div>
      <div id="skills" style={{ minHeight: "100vh" }}>
        {shouldLoadSkills ? (
          <HomeSkills />
        ) : (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading Skills...
          </div>
        )}
      </div>
      <div id="certificates" style={{ minHeight: "100vh" }}>
        {shouldLoadCertificates ? (
          <HomeCertificate />
        ) : (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading Certificates...
          </div>
        )}
      </div>
      <div id="projects" style={{ minHeight: "100vh" }}>
        {shouldLoadProjects ? (
          <HomeProjects />
        ) : (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading Projects...
          </div>
        )}
      </div>
      <div
        id="contact"
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {shouldLoadContact ? (
          <h2>Contact Section Coming Soon...</h2>
        ) : (
          <div>Loading Contact...</div>
        )}
      </div>
    </Container>
  );
};

export default Home;
