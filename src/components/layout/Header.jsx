import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../store/theme-context";
import Navbar from "../nav/Navbar";

const Header = ({ board, setBoard }) => {
  const theme = useContext(ThemeContext);
  return (
    <header
      id="header"
      className={`${theme.theme === "dark" ? "bg-darkGrey" : "bg-white"} h-16`}
    >
      <Navbar board={board} setBoard={setBoard} />
    </header>
  );
};

Header.propTypes = {
  setBoard: PropTypes.func,
};

export default Header;
