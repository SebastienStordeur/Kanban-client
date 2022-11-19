import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import Navbar from "../nav/Navbar";

const Header = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <header id="header" className={`${theme.theme === "dark" ? "bg-darkGrey" : "bg-white"} h-16`}>
      <Navbar setTaskIsOpen={props.setTaskIsOpen} />
    </header>
  );
};

export default Header;
