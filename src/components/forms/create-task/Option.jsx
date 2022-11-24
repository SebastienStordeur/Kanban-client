import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

const Option = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <li
      value={props.value}
      id={props.id}
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey text-white" : "bg-lightGrey"
      } h-10 border-lines px-4 flex items-center text-sm`}
      onClick={() => props.onClick(props.value, props.id)}
    >
      {props.value}
    </li>
  );
};

export default React.memo(Option);
