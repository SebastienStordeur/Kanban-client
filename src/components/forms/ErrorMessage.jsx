import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  return <p className="text-red font-bold text-sm">{props.children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

export default ErrorMessage;
