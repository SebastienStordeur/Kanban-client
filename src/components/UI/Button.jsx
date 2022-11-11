import React from "react";

const Button = (props) => {
  return (
    <button className={`flex justify-center items-center text-white ${props.className || ""}`}>{props.children}</button>
  );
};

export default React.memo(Button);
