import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/theme-context";
import { motion } from "framer-motion";

import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";

const ThemeSwitch = () => {
  const theme = useContext(ThemeContext);
  const [themeBoolean, setThemeBoolean] = useState(false);

  const toggleSwitch = () => {
    setThemeBoolean((prev) => !prev);
    theme.switchTheme();
  };

  return (
    <div
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } flex items-center justify-center h-12 mb-4`}
    >
      <img src={Sun} alt="Light theme" />
      <div
        className="switch flex items-center w-10 h-5 bg-purple rounded-2xl mx-6 cursor-pointer"
        data-theme={themeBoolean}
        onClick={toggleSwitch}
      >
        <motion.div className="w-3.5 h-3.5 bg-white mx-0.5 rounded-full" layout /* transition={spring} */ />
      </div>
      <img src={Moon} alt="Dark theme" />
    </div>
  );
};

export default ThemeSwitch;
