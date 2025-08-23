import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { MdOutlineNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { PiSunHorizonBold } from "react-icons/pi";

const NavBar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const { toggleTheme, themeStyle, theme } = useTheme();
  const [activeSection, setActiveSection] = React.useState("home");
  const navBg = theme === "light" ? "#f8f9fa" : "#23272b";

  React.useEffect(() => {
    const sections = ["home", "about", "skills", "certificates", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const getLinkStyle = (sectionId) => ({
    color: themeStyle.text,
    textDecoration: activeSection === sectionId ? "underline" : "none",
    textUnderlineOffset: "4px",
    fontWeight: activeSection === sectionId ? "bold" : "normal",
    cursor: "pointer",
  });

  return (
    <Navbar
      expand="lg"
      className="h-[7vh] fixed-top"
      style={{ background: navBg, zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: themeStyle.text }}>
          {t("name")}
        </Navbar.Brand>

        <div>
          {" "}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <span
                onClick={() => scrollToSection("home")}
                style={getLinkStyle("home")}
              >
                {t("nav.home")}
              </span>
              <span
                onClick={() => scrollToSection("about")}
                style={getLinkStyle("about")}
              >
                {t("nav.about")}
              </span>
              <span
                onClick={() => scrollToSection("skills")}
                style={getLinkStyle("skills")}
              >
                {t("nav.skills")}
              </span>
              <span
                onClick={() => scrollToSection("certificates")}
                style={getLinkStyle("certificates")}
              >
                {t("nav.certificates")}
              </span>

              <span
                onClick={() => scrollToSection("projects")}
                style={getLinkStyle("projects")}
              >
                {t("nav.projects")}
              </span>
              <span
                onClick={() => scrollToSection("contact")}
                style={getLinkStyle("contact")}
              >
                {t("nav.contact")}
              </span>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div>
          <button
            onClick={toggleLanguage}
            style={{
              marginRight: 16,
              color: themeStyle.text,
              background: "transparent",
              border: "none",
            }}
          >
            {language === "en" ? "EN" : "VI"}
          </button>
          <button
            onClick={toggleTheme}
            style={{
              marginRight: 16,
              color: themeStyle.text,
              background: "transparent",
              border: "none",
            }}
          >
            {theme === "light" ? <MdOutlineNightlight /> : <PiSunHorizonBold />}
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
