import React, { createContext, useContext, useState, useMemo } from "react";
import en from "../data/Locales/en.js";
import vi from "../data/Locales/vi.js";

const translations = { en, vi };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"));
  };

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: (key) => translations[language][key] || key,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
