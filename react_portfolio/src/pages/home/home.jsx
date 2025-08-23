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
       <div
          className="transition-section"
          style={{
            marginTop: "120px",
            height: "200px",
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(0,123,255,0.05) 0%, rgba(40,167,69,0.05) 100%)",
            fontFamily: "'Fira Code', 'Courier New', monospace",
          }}
        >
          {/* Floating Code Symbols */}
          <div className="code-symbols-container">
            {[
              "<",
              ">",
              "{",
              "}",
              "(",
              ")",
              ";",
              "=",
              "+",
              "-",
              "*",
              "/",
              "&&",
              "||",
              "!=",
            ].map((symbol, i) => (
              <div
                key={i}
                className="code-symbol"
                style={{
                  position: "absolute",
                  fontSize: Math.random() * 12 + 14 + "px",
                  color: `rgba(${
                    Math.random() > 0.5 ? "0,123,255" : "40,167,69"
                  }, 0.6)`,
                  fontWeight: "bold",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animation: `codeFloat${(i % 3) + 1} ${
                    3 + Math.random() * 2
                  }s infinite ease-in-out`,
                  animationDelay: Math.random() * 2 + "s",
                }}
              >
                {symbol}
              </div>
            ))}
          </div>

          {/* Animated Code Lines */}
          <div className="code-lines">
            <div className="code-line code-line-1">
              <span className="keyword">const</span>{" "}
              <span className="variable">portfolio</span> ={" "}
              <span className="string">'awesome'</span>;
            </div>
            <div className="code-line code-line-2">
              <span className="keyword">function</span>{" "}
              <span className="function">createMagic</span>() {"{"}
            </div>
            <div className="code-line code-line-3">
              <span className="keyword">return</span>{" "}
              <span className="string">'✨ Innovation ✨'</span>;
            </div>
          </div>

          {/* Binary Code Rain */}
          <div className="binary-rain">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="binary-column"
                style={{
                  position: "absolute",
                  left: 10 + i * 12 + "%",
                  animation: `binaryRain ${2 + Math.random()}s infinite linear`,
                  animationDelay: Math.random() * 2 + "s",
                }}
              >
                {Math.random().toString(2).substring(2, 8)}
              </div>
            ))}
          </div>

          {/* Terminal Cursor */}
          <div className="terminal-cursor">
            <span className="prompt">$</span>{" "}
            <span className="command">npm run build</span>
            <span className="cursor">_</span>
          </div>
        </div>
      <Container className="mt-20 mb-50" id="home">
        <h2 className="text-3xl font-bold  flex items-center gap-2 mt-5">
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

      {/* Transition Section with Coding-themed Animated Effects */}

      <style>{`
        @keyframes codeFloat1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(10px) rotate(15deg); opacity: 1; }
          50% { transform: translateY(-30px) translateX(-5px) rotate(-10deg); opacity: 0.8; }
          75% { transform: translateY(-15px) translateX(8px) rotate(5deg); opacity: 1; }
        }
        @keyframes codeFloat2 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-25px) scale(1.1); opacity: 1; }
        }
        @keyframes codeFloat3 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-10px) rotate(10deg); opacity: 1; }
          66% { transform: translateY(-20px) rotate(-5deg); opacity: 0.9; }
        }
        
        .code-line {
          position: absolute;
          font-size: 14px;
          font-family: 'Fira Code', monospace;
          opacity: 0;
        }
        .code-line-1 {
          top: 20%;
          left: 10%;
          animation: codeSlideIn 3s infinite ease-in-out;
        }
        .code-line-2 {
          top: 50%;
          right: 15%;
          animation: codeSlideIn 3s infinite ease-in-out;
          animation-delay: 1s;
        }
        .code-line-3 {
          bottom: 30%;
          left: 25%;
          animation: codeSlideIn 3s infinite ease-in-out;
          animation-delay: 2s;
        }
        
        .keyword { color: #ff6b6b; font-weight: bold; }
        .variable { color: #4ecdc4; }
        .function { color: #45b7d1; }
        .string { color: #96ceb4; }
        
        @keyframes codeSlideIn {
          0% { opacity: 0; transform: translateX(-30px); }
          20% { opacity: 1; transform: translateX(0); }
          80% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(30px); }
        }
        
        .binary-column {
          color: rgba(0,255,0,0.4);
          font-family: 'Courier New', monospace;
          font-size: 12px;
          font-weight: bold;
          writing-mode: vertical-rl;
        }
        
        @keyframes binaryRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(250px); opacity: 0; }
        }
        
        .terminal-cursor {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Fira Code', monospace;
          font-size: 16px;
          color: #00ff00;
        }
        
        .prompt { color: #ffeb3b; font-weight: bold; }
        .command { color: #00bcd4; margin-left: 8px; }
        .cursor {
          animation: blink 1s infinite;
          color: #00ff00;
          font-weight: bold;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <div id="about" style={{ minHeight: "60vh" }}>
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
      <div id="skills" style={{ minHeight: "60vh" }}>
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
      <div id="certificates" style={{ minHeight: "60vh" }}>
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
      <div id="projects" style={{ minHeight: "60vh" }}>
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
