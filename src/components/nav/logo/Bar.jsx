import React from "react";
import PropTypes from "prop-types";

const Bar = (props) => {
  return <div className={`w-1.5 h-6 bg-purple rounded-sm ${props.className || ""}`}></div>;
};

Bar.propTypes = {
  className: PropTypes.string,
};

export default Bar;
