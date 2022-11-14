import React from "react";
import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";

const ThemeSwitch = () => {
  return (
    <div className="flex items-center justify-center bg-lightGrey mx-3 h-12 mb-4">
      <img src={Sun} alt="Light theme" />
      ThemeSwitch
      <img src={Moon} alt="Dark theme" />
    </div>
  );
};

export default ThemeSwitch;
