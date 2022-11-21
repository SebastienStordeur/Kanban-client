import React from "react";

const Backdrop = (props) => {
  return (
    <div id="backdrop" className="fixed w-full h-screen top-0 bg-black bg-opacity-75" onClick={props.onClick}></div>
  );
};

export default Backdrop;
