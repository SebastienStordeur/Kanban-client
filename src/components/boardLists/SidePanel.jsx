import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../store/auth-context";

import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";
import { BoardContext } from "../../store/boards-context";

const SidePanel = (props) => {
  const auth = useContext(AuthContext);
  const board = useContext(BoardContext);

  const openAddBoardHandler = () => {
    props.addBoardIsOpen((prev) => !prev);
  };

  useEffect(() => {
    board.getBoards();
  }, []);

  return (
    <section className="hidden md:flex flex-col justify-between w-64 bg-white">
      <div>
        <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">
          ALL BOARDS ({board.boards.length})
        </h2>
        {board.boards.map((board) => (
          <Board board={board} key={board.id} />
        ))}
        {auth.isAuthenticated && <AddBoard onClick={openAddBoardHandler} />}
      </div>
      <ThemeSwitch />
    </section>
  );
};

export default SidePanel;
