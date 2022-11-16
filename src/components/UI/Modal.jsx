import React from "react";

const Modal = (props) => {
  return <article className="bg-white mx-auto max-w-[480px] p-6 rounded-lg">{props.children}</article>;
};
export default Modal;
