import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  switchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  let themeUpdated;

  const switchTheme = () => {
    if (theme === "light") themeUpdated = "dark";
    if (theme === "dark") themeUpdated = "light";
    setTheme(themeUpdated);
    localStorage.setItem("theme", themeUpdated);
  };

  const defaultValue = {
    theme: theme,
    switchTheme,
  };

  return <ThemeContext.Provider value={defaultValue}>{props.children}</ThemeContext.Provider>;
};
