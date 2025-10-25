import React, { useRef, useEffect } from "react";
import { useLanguage } from "../../context/languageContext";
import { Container } from "react-bootstrap";

const WorkExp = () => {
  const { t } = useLanguage();
  const workExpRef = useRef(null);

  // Get work experience data from translation
  const workExperience = t("workExperience") || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const workCards = entry.target.querySelectorAll(".work-card");
            workCards.forEach((card, index) => {
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

    const currentRef = workExpRef.current;
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
    <Container className="mt-15 mb-15">
      <div ref={workExpRef}>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          {t("page.workExp")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>

        <div className="space-y-8 mt-15 ">
          {workExperience.map((work) => (
            <div
              key={work.id}
              className="work-card bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-6 md:p-8 hover:shadow-xl transition-all duration-500 transform"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {work.position}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">
                    {work.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {work.duration}
                    </span>
                    <span className="hidden sm:block text-gray-500">•</span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {work.location}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    {work.duration.includes("Present") ||
                    work.duration.includes("Hiện tại")
                      ? "Current"
                      : "Completed"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {work.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("language") === "vi"
                    ? "Trách nhiệm chính"
                    : "Key Responsibilities"}
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {work.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm md:text-base">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  {t("language") === "vi"
                    ? "Công nghệ sử dụng"
                    : "Technologies Used"}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {work.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Achievements */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("language") === "vi" ? "Thành tựu" : "Key Achievements"}
                </h5>
                <ul className="space-y-2">
                  {work.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm md:text-base">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {workExperience.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
              />
            </svg>
            <p className="text-gray-400 text-lg">
              {t("language") === "vi"
                ? "Chưa có kinh nghiệm làm việc nào được thêm."
                : "No work experience added yet."}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default WorkExp;
