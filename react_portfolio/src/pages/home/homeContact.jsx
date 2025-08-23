import React, { useRef, useEffect } from "react";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const HomeContact = () => {
  const { t } = useLanguage();
  const { theme, themeStyle } = useTheme();
  const contactRef = useRef(null);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("validation.nameMin") || "Name must be at least 2 characters")
      .required(t("validation.nameRequired") || "Name is required"),
    email: Yup.string()
      .email(t("validation.emailInvalid") || "Invalid email address")
      .required(t("validation.emailRequired") || "Email is required"),
    phone: Yup.string()
      .matches(
        /^[0-9+\-\s()]+$/,
        t("validation.phoneInvalid") || "Invalid phone number"
      )
      .min(
        10,
        t("validation.phoneMin") || "Phone number must be at least 10 digits"
      )
      .required(t("validation.phoneRequired") || "Phone number is required"),
    message: Yup.string()
      .min(
        10,
        t("validation.messageMin") || "Message must be at least 10 characters"
      )
      .required(t("validation.messageRequired") || "Message is required"),
  });

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const formContainer = entry.target.querySelector(".contact-form");
            if (formContainer) {
              setTimeout(() => {
                formContainer.style.opacity = "1";
                formContainer.style.transform = "translateY(0)";
              }, 200);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    setTimeout(() => {
      alert(t("contact.successMessage") || "Message sent successfully!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Container className="py-8">
      <div ref={contactRef}>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          {t("page.contact")}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #007bff",
              marginLeft: 12,
            }}
          ></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div
            className="contact-form rounded-lg border p-8 transition-all duration-300 hover:scale-105"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition:
                "opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
              borderColor: theme === "dark" ? "#404040" : "#e0e0e0",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(0, 123, 255, 0.3)";
              e.currentTarget.style.borderColor = "#007bff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.borderColor =
                theme === "dark" ? "#404040" : "#e0e0e0";
            }}
          >
            <div className="mb-6 text-center">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: theme === "dark" ? "#ffffff" : "#333333" }}
              >
                {t("contact.title") || "Get In Touch"}
              </h3>
              <p
                className="text-sm"
                style={{ color: theme === "dark" ? "#cccccc" : "#666666" }}
              >
                {t("contact.subtitle") ||
                  "I'd love to hear from you! Send me a message and I'll respond as soon as possible."}
              </p>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: theme === "dark" ? "#ffffff" : "#333333",
                        }}
                      >
                        {t("contact.name") || "Full Name"} *
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#2a2a2a" : "#f8f9fa",
                          borderColor:
                            errors.name && touched.name
                              ? "#ef4444"
                              : theme === "dark"
                              ? "#404040"
                              : "#e0e0e0",
                          color: theme === "dark" ? "#ffffff" : "#333333",
                        }}
                        placeholder={
                          t("contact.namePlaceholder") || "Enter your full name"
                        }
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: theme === "dark" ? "#ffffff" : "#333333",
                        }}
                      >
                        {t("contact.email") || "Email Address"} *
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#2a2a2a" : "#f8f9fa",
                          borderColor:
                            errors.email && touched.email
                              ? "#ef4444"
                              : theme === "dark"
                              ? "#404040"
                              : "#e0e0e0",
                          color: theme === "dark" ? "#ffffff" : "#333333",
                        }}
                        placeholder={
                          t("contact.emailPlaceholder") ||
                          "Enter your email address"
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                      style={{
                        color: theme === "dark" ? "#ffffff" : "#333333",
                      }}
                    >
                      {t("contact.phone") || "Phone Number"} *
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#2a2a2a" : "#f8f9fa",
                        borderColor:
                          errors.phone && touched.phone
                            ? "#ef4444"
                            : theme === "dark"
                            ? "#404040"
                            : "#e0e0e0",
                        color: theme === "dark" ? "#ffffff" : "#333333",
                      }}
                      placeholder={
                        t("contact.phonePlaceholder") ||
                        "Enter your phone number"
                      }
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{
                        color: theme === "dark" ? "#ffffff" : "#333333",
                      }}
                    >
                      {t("contact.message") || "Message"} *
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#2a2a2a" : "#f8f9fa",
                        borderColor:
                          errors.message && touched.message
                            ? "#ef4444"
                            : theme === "dark"
                            ? "#404040"
                            : "#e0e0e0",
                        color: theme === "dark" ? "#ffffff" : "#333333",
                      }}
                      placeholder={
                        t("contact.messagePlaceholder") ||
                        "Tell me about your project or just say hello!"
                      }
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: "#007bff",
                        color: "#ffffff",
                        border: "none",
                        boxShadow: "0 4px 6px rgba(0, 123, 255, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.boxShadow =
                            "0 6px 20px rgba(0, 123, 255, 0.4)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 4px 6px rgba(0, 123, 255, 0.3)";
                      }}
                    >
                      {isSubmitting
                        ? t("contact.sending") || "Sending..."
                        : t("contact.send") || "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeContact;
