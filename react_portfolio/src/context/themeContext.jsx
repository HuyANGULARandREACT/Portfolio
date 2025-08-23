import React, { createContext, useContext, useState, useMemo } from "react";

const themes = {
  light: {
    background: "#ffffff",
    text: "#222222",
  },
  dark: {
    background: "#181818",
    text: "#f5f5f5",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      themeStyle: themes[theme],
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
