import React from "react";
import PropTypes from "prop-types";

const InputValidator = (props) => {
  return <div className="flex flex-col mt-6">{props.children}</div>;
};

InputValidator.propTypes = {
  children: PropTypes.array,
};

export default InputValidator;
