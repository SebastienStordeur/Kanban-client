import React from "react";

const Bar = (props) => {
  return <div className={`w-1.5 h-6 bg-purple rounded-sm ${props.className || ""}`}></div>;
};

export default Bar;
