import React from "react";
import PropTypes from "prop-types";

const Backdrop = (props) => {
  return (
    <div
      id="backdrop"
      className={`fixed w-full h-screen top-0 bg-black bg-opacity-75 ${
        props.className || ""
      }`}
      onClick={props.onClick}
    ></div>
  );
};

Backdrop.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Backdrop;
