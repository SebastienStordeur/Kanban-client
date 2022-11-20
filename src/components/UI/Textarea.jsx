import React, { forwardRef, useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const Textarea = forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <textarea
      className={`${
        theme.theme === "dark" ? "bg-darkGrey text-white placeholder:text-white" : "placeholder:text-black"
      } h-28 p-2 border rounded-sm resize-none outline-none border-lines text-xs placeholder:text-xs placeholder:opacity-25`}
      id={props.id}
      ref={ref}
      placeholder={props.placeholder}
    ></textarea>
  );
});

export default Textarea;
