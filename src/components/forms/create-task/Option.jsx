import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

const Option = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <li
      value={props.value}
      id={props.id}
      className={`${theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"} h-10`}
      onClick={() => props.onClick(props.value, props.id)}
    >
      {props.value}
    </li>
  );
};

export default React.memo(Option);
