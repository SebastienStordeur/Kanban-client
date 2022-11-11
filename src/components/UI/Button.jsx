import React from "react";

const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center text-white cursor-pointer ${props.className || ""}`}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
