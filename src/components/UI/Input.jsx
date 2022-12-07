import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
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
        theme.theme === "dark"
          ? "bg-darkGrey text-white placeholder:text-white"
          : "bg-white placeholder:text-black"
      } px-2 border rounded-sm h-10 border-lines placeholder:text-sm text-sm placeholder:opacity-25 ${
        props.className || ""
      }`}
      placeholder={props.placeholder}
      /* value={props.value} */
      defaultValue={props.value}
      onChange={props.onChange}
    />
  );
});

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default React.memo(Input);
