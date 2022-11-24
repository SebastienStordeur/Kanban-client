import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../store/theme-context";

const Textarea = forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <textarea
      className={`${
        theme.theme === "dark" ? "bg-darkGrey text-white placeholder:text-white" : "placeholder:text-black"
      } h-28 p-2 border rounded-sm resize-none outline-none border-lines text-sm placeholder:text-sm placeholder:opacity-25`}
      id={props.id}
      ref={ref}
      placeholder={props.placeholder}
    ></textarea>
  );
});

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
