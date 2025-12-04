import React, { useEffect, useRef } from "react";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { Container } from "react-bootstrap";

const HomeCertificate = () => {
  const { t } = useLanguage();
  const { theme, themeStyle } = useTheme();
  const certificateRef = useRef(null);
  const certificates = [
    "Coursera 8GX6S570Q39I.pdf",
    "Coursera BX4MREGS3NGX.pdf",
    "Coursera EHQ7N3VH8QFN.pdf",
    "Coursera JUX0NZXL8PK3.pdf",
    "f443706d-d8e7-4286-97c0-621472fc0cfa.pdf",
    "chung_nhan_hoc_bong.pdf",
    "Coursera VYUA2QPU9D4H.pdf",
    "CertificateOfCompletion_Build AI Agents and Automate Workflows with n8n.pdf",
    "EF SET Certificate.pdf",
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const certificateCards =
              entry.target.querySelectorAll(".certificate-card");
            certificateCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = certificateRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Container className="mt-40 mb-30">
      <div className="" ref={certificateRef}>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          {t("page.certificate")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-15">
          {certificates.map((file) => (
            <div
              key={file}
              className="certificate-card rounded-lg border border-gray-600 bg-black/60 flex flex-col items-center justify-center p-2 transition-all duration-300 hover:scale-105"
              style={{
                minHeight: 220,
                opacity: 0,
                transform: "translateY(30px)",
                transition:
                  "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0, 123, 255, 0.5)";
                e.currentTarget.style.borderColor = "#007bff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "#6b7280";
              }}
            >
              <embed
                src={`/ceti/${file}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                width="100%"
                height="200px"
                style={{ borderRadius: 8, background: "#222" }}
              />
              <button
                className="mt-2 w-full py-2 rounded font-semibold transition"
                style={
                  theme === "dark"
                    ? {
                        background: "#181818",
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: "#fff",
                        color: "#181818",
                        border: "1px solid #181818",
                      }
                }
                onClick={() => window.open(`/ceti/${file}`, "_blank")}
              >
                {t("certiDetail")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeCertificate;
