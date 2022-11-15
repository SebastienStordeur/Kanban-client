import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      type={`${props.type || "text"}`}
      id={props.id}
      ref={ref}
      autoComplete="off"
      className={`px-2 border rounded-sm placeholder:text-xs placeholder:text-black placeholder:opacity-25 ${
        props.className || ""
      }`}
      placeholder={props.placeholder}
    />
  );
});

export default React.memo(Input);
