import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../store/theme-context";

const Modal = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <article
      className={`${
        theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
      } w-full mx-auto max-w-[480px] p-6 rounded-lg ${props.className || ""}`}
    >
      {props.children}
    </article>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
};

export default Modal;
