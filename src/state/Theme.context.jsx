import { useContext, createContext } from "react";

const ThemeContext = createContext([]);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }} displayName="ThemeContext">
      {children}
    </ThemeContext.Provider>
  );
};
