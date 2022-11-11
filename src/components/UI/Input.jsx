import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type={`${props.type || "text"}`} id={props.id} ref={ref} autoComplete="off" />;
});

export default React.memo(Input);
