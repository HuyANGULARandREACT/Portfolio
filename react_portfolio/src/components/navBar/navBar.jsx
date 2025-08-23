import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineNightlight } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { PiSunHorizonBold } from "react-icons/pi";

const NavBar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const { toggleTheme, themeStyle, theme } = useTheme();
  const location = useLocation();
  const navBg = theme === "light" ? "#f8f9fa" : "#23272b";
  const getLinkStyle = (href) => ({
    color: themeStyle.text,
    textDecoration: location.pathname === href ? "underline" : "none",
    textUnderlineOffset: "4px",
    fontWeight: location.pathname === href ? "bold" : "normal",
  });
  return (
    <Navbar expand="lg" style={{ background: navBg }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: themeStyle.text }}>
          {t("name")}
        </Navbar.Brand>

        <div>
          {" "}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Link to="/" style={getLinkStyle("/")}>
                {t("nav.home")}
              </Link>
              <Link to="/about" style={getLinkStyle("/about")}>
                {t("nav.about")}
              </Link>
              <Link to="/skills" style={getLinkStyle("/skills")}>
                {t("nav.skills")}
              </Link>
              <Link to="/certificates" style={getLinkStyle("/certificates")}>
                {t("nav.certificates")}
              </Link>
              
              <Link to="/projects" style={getLinkStyle("/projects")}>
                {t("nav.projects")}
              </Link>
              <Link to="/contact" style={getLinkStyle("/contact")}>
                {t("nav.contact")}
              </Link>
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
