import React, { forwardRef, useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const Input = forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <input
      type={`${props.type || "text"}`}
      id={props.id}
      ref={ref}
      autoComplete="off"
      className={`${
        theme.theme === "dark" ? "bg-darkGrey text-white placeholder:text-white" : "bg-white placeholder:text-black"
      } px-2 border rounded-sm h-10 border-lines placeholder:text-sm placeholder:opacity-25 ${props.className || ""}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
});

export default React.memo(Input);
