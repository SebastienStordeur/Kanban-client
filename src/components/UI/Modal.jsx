import React from "react";

const Modal = (props) => {
  return (
    <article className={`w-full bg-white mx-auto max-w-[480px] p-6 rounded-lg ${props.className || ""}`}>
      {props.children}
    </article>
  );
};
export default Modal;
