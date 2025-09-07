import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "system") {
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkQuery.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      // listen for system change
      const handleChange = (e) => {
        if (e.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      };
      darkQuery.addEventListener("change", handleChange);

      return () => darkQuery.removeEventListener("change", handleChange);
    }

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
