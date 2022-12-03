import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../store/theme-context";
import Navbar from "../nav/Navbar";

const Header = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <header
      id="header"
      className={`${theme.theme === "dark" ? "bg-darkGrey" : "bg-white"} h-16`}
    >
      <Navbar
        board={props.board}
        setBoard={props.setBoard}
        access={props.access}
      />
    </header>
  );
};

Header.propTypes = {
  access: PropTypes.bool,
  setBoard: PropTypes.func,
};

export default Header;
