import React from "react";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { Container } from "react-bootstrap";

const HomeCertificate = () => {
  const { t } = useLanguage();
  const { theme, themeStyle } = useTheme();
  0;
  const certificates = [
    "Coursera 8GX6S570Q39I.pdf",
    "Coursera BX4MREGS3NGX.pdf",
    "Coursera EHQ7N3VH8QFN.pdf",
    "Coursera JUX0NZXL8PK3.pdf",
    "f443706d-d8e7-4286-97c0-621472fc0cfa.pdf",
  ];

  return (
    <Container>
      <div className="mt-5">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((file, idx) => (
            <div
              key={file}
              className="rounded-lg border border-gray-600 bg-black/60 flex flex-col items-center justify-center p-2 hover:shadow-lg transition"
              style={{ minHeight: 220 }}
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
