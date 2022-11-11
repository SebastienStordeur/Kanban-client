import React from "react";
import Bar from "./Bar";

const Logo = () => {
  return (
    <div className="flex justify-around w-6 h-6 overflow-hidden">
      <Bar />
      <Bar className="opacity-75" />
      <Bar className="opacity-50" />
    </div>
  );
};

export default Logo;
