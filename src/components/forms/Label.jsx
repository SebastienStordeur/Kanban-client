import React from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className='"font-bold text-xs mb-2'>
      {props.children}
    </label>
  );
};

export default Label;
