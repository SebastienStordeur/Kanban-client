import React from "react";

const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center h-10 w-full rounded-3xl text-sm mt-3 cursor-pointer ${
        props.className || ""
      }`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
