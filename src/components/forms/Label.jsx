import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const Label = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <label
      htmlFor={props.htmlFor}
      className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-sm mb-2`}
    >
      {props.children}
    </label>
  );
};

export default Label;
