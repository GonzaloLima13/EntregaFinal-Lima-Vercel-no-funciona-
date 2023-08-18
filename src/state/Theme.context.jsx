import React, { useContext, createContext } from "react";

const defaultTheme = {
  theme: "dark",
};

const ThemeContext = createContext(defaultTheme);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const themeConfig = {
    theme: "dark",
  };

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};