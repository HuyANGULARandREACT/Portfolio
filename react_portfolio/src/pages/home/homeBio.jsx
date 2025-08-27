import React from "react";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import CodingAnimation from "../../components/CodingAnimation";
const HomeBio = () => {
  const { t } = useLanguage();
  const { themeStyle } = useTheme();

  React.useEffect(() => {
    function onVisible(element, callback) {
      if (!element) return;
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.disconnect();
          }
        });
      });
      observer.observe(element);
    }

    // Delay to ensure elements are rendered
    setTimeout(() => {
      const bioText = document.getElementById("bio-text");
      const bioAvatar = document.getElementById("bio-avatar");
      if (bioText) onVisible(bioText, () => (bioText.style.opacity = 1));
      if (bioAvatar) onVisible(bioAvatar, () => (bioAvatar.style.opacity = 1));
    }, 100);
  }, []);

  return (
    <Container className="mb-5">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 mt-5">
        {t("page.aboutme")}
        <span
          style={{
            flex: 1,
            borderBottom: "3px solid #007bff",
            marginLeft: 12,
          }}
        ></span>
      </h2>
      <div className="">
        <div className="flex flex-col lg:flex-row justify-around gap-6">
          <div
            className="relative flex items-center justify-center animate-fade-in-right-bio lg:w-1/2 "
            style={{ marginTop: "0rem", opacity: 0 }}
            id="bio-avatar"
          >
            <span className="avatar-glow"></span>
            <img
              src="/image-Photoroom.png"
              alt="User"
              className="w-[50vw] h-[50vh] lg:w-[20vw] lg:h-[50vh] rounded-full shadow-lg border-4 border-blue-600 object-cover relative z-10"
            />
          </div>
          <div
            style={{ color: themeStyle.text, opacity: 0 }}
            className="animate-fade-in-left-bio lg:w-1/2"
            id="bio-text"
          >
            <h4 className="p-5">{t("bio")}</h4>
            <div className="flex flex-col items-start gap-2 p-5">
              <div className="flex items-center gap-2">
                <FaGithub />
                <Link
                  to="https://github.com/nguyen-gia-huy"
                  style={{ color: themeStyle.text }}
                >
                  https://github.com/nguyen-gia-huy
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebook />
                <Link
                  to="https://www.facebook.com/giahuykakaha"
                  style={{ color: themeStyle.text }}
                >
                  https://www.facebook.com/giahuykakaha
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <SiCoursera />
                <Link
                  to="https://www.coursera.org/user/aa2e503bd6e8da3d486140157fd24c65"
                  style={{ color: themeStyle.text }}
                >
                  https://www.coursera.org/user/aa2e503bd6e8da3d486140157fd24c65
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <style>{`
.avatar-glow {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 66vw;
height: 60vh;
border-radius: 9999px;
background: radial-gradient(circle, rgba(0,123,255,0.35) 0%, rgba(0,123,255,0.10) 60%, transparent 100%);
filter: blur(24px);
z-index: 0;
pointer-events: none;
}

@media (min-width: 1024px) {
  .avatar-glow {
    width: 36vw;
    height: 60vh;
  }
}

@keyframes fadeInLeftBio {
0% { opacity: 0; transform: translateX(-60px); }
100% { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRightBio {
0% { opacity: 0; transform: translateX(60px); }
100% { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-left-bio {
animation: fadeInLeftBio 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
.animate-fade-in-right-bio {
animation: fadeInRightBio 1s cubic-bezier(0.4,0,0.2,1) forwards;
}
`}</style>
    </Container>
  );
};

export default HomeBio;
