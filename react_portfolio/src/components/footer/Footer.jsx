import React from "react";
import { useLanguage } from "../../context/languageContext";
import { FaGithub, FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaCode } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { useTheme } from "../../context/themeContext";

const Footer = () => {
  const { t } = useLanguage();
  const { theme, themeStyle } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="mt-5"
      style={{ 
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa',
        color: themeStyle.text,
        borderTop: `2px solid ${theme === 'dark' ? '#333' : '#dee2e6'}`
      }}
    >
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{ color: '#007bff' }}>
              <span className="text-primary">My</span>Portfolio
            </h5>
            <p className="mb-3" style={{ color: themeStyle.text, lineHeight: '1.6' }}>
              {t("footer.description") || "Passionate developer creating innovative solutions with modern technologies. Always eager to learn and take on new challenges."}
            </p>
            <div className="d-flex gap-3">
              <a 
                href="https://github.com/nguyen-gia-huy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none p-2 rounded-circle"
                style={{ 
                  backgroundColor: theme === 'dark' ? '#333' : '#e9ecef',
                  color: themeStyle.text,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#007bff';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme === 'dark' ? '#333' : '#e9ecef';
                  e.target.style.color = themeStyle.text;
                }}
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.facebook.com/giahuykakaha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none p-2 rounded-circle"
                style={{ 
                  backgroundColor: theme === 'dark' ? '#333' : '#e9ecef',
                  color: themeStyle.text,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1877f2';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme === 'dark' ? '#333' : '#e9ecef';
                  e.target.style.color = themeStyle.text;
                }}
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.coursera.org/user/aa2e503bd6e8da3d486140157fd24c65" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none p-2 rounded-circle"
                style={{ 
                  backgroundColor: theme === 'dark' ? '#333' : '#e9ecef',
                  color: themeStyle.text,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0056d3';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme === 'dark' ? '#333' : '#e9ecef';
                  e.target.style.color = themeStyle.text;
                }}
              >
                <SiCoursera size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#007bff' }}>
              {t("footer.quickLinks") || "Quick Links"}
            </h6>
            <ul className="list-unstyled">
              {[
                { id: "home", label: t("nav.home") },
                { id: "about", label: t("nav.about") },
                { id: "skills", label: t("nav.skills") },
                { id: "certificates", label: t("nav.certificates") },
                { id: "projects", label: t("nav.projects") }
              ].map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-decoration-none"
                    style={{ 
                      color: themeStyle.text,
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#007bff'}
                    onMouseLeave={(e) => e.target.style.color = themeStyle.text}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#007bff' }}>
              {t("footer.technologies") || "Technologies"}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {["React", "JavaScript", "Node.js", "Bootstrap", "CSS", "HTML", "Git", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    backgroundColor: theme === 'dark' ? '#333' : '#e9ecef',
                    color: themeStyle.text,
                    border: `1px solid ${theme === 'dark' ? '#555' : '#dee2e6'}`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#007bff' }}>
              {t("footer.contact") || "Contact Info"}
            </h6>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: '#007bff' }} />
                <small style={{ color: themeStyle.text }}>
                  nguyenhuy3112005@gmail.com
                </small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPhone style={{ color: '#007bff' }} />
                <small style={{ color: themeStyle.text }}>
                  0823578239
                </small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt style={{ color: '#007bff' }} />
                <small style={{ color: themeStyle.text }}>
                  Ho Chi Minh City, Vietnam
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div 
        className="py-3"
        style={{ 
          backgroundColor: theme === 'dark' ? '#111' : '#e9ecef',
          borderTop: `1px solid ${theme === 'dark' ? '#333' : '#dee2e6'}`
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small style={{ color: themeStyle.text }}>
                © {currentYear} MyPortfolio. {t("footer.rights") || "All rights reserved."}
              </small>
            </div>
            <div className="col-md-6 text-md-end">
              <small style={{ color: themeStyle.text }}>
                {t("footer.madeWith") || "Made with"} <FaCode style={{ color: '#e74c3c' }} /> {t("footer.by") || "by"} Nguyen Gia Huy
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
