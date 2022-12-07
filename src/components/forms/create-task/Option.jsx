import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

const Option = ({ id, value, onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <li
      value={value}
      id={id}
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey text-white" : "bg-lightGrey"
      } h-10 border-lines px-4 flex items-center text-sm`}
      onClick={() => onClick(value, id)}
    >
      {value}
    </li>
  );
};

export default React.memo(Option);
