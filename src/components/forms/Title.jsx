import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const Title = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <h2
      className={`${
        theme.theme === "dark" ? "text-white" : "text-black"
      } font-bold text-lg`}
    >
      {props.children}
    </h2>
  );
};

export default Title;
