import React from "react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";

const SidePanel = () => {
  return (
    <div className="h-screen w-64 ">
      <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">ALL BOARDS (3)</h2>
      <Board />
      <AddBoard />

      <ThemeSwitch />
    </div>
  );
};

export default SidePanel;
