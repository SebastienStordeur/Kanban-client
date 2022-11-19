import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  switchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  let themeUpdated;

  const switchTheme = () => {
    if (theme === "light") return (themeUpdated = "dark");
    if (theme === "dark") return (themeUpdated = "light");
    setTheme(themeUpdated);
    localStorage.setItem("theme", theme);
  };

  const defaultValue = {
    theme,
    switchTheme,
  };

  return <ThemeContext.Provider value={defaultValue}>{props.children}</ThemeContext.Provider>;
};
