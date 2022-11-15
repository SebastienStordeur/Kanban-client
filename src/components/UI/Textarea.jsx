import React, { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      className="h-28 px-2 border rounded-sm resize-none outline-none text-xs placeholder:text-xs placeholder:text-black placeholder:opacity-25"
      id={props.id}
      ref={ref}
      placeholder={props.placeholder}
    ></textarea>
  );
});

export default Textarea;
