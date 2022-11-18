import React from "react";
import Navbar from "../nav/Navbar";

const Header = (props) => {
  return (
    <header id="header" className="h-16 bg-white">
      <Navbar setTaskIsOpen={props.setTaskIsOpen} />
    </header>
  );
};

export default Header;
