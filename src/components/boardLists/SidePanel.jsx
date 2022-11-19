import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../store/auth-context";
import { BoardContext } from "../../store/boards-context";
import { ThemeContext } from "../../store/theme-context";

import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";

const SidePanel = (props) => {
  const auth = useContext(AuthContext);
  const board = useContext(BoardContext);
  const theme = useContext(ThemeContext);

  const openAddBoardHandler = () => {
    props.addBoardIsOpen((prev) => !prev);
  };

  useEffect(() => {
    board.getBoards();
  }, []);

  return (
    <section
      className={`${theme.theme === "dark" ? "bg-darkGrey" : "bg-white"} hidden md:flex flex-col justify-between w-64`}
    >
      <div>
        <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">
          ALL BOARDS ({board.boards.length})
        </h2>
        {board.boards.map((board) => (
          <Board board={board} key={board.id} />
        ))}
        {auth.isAuthenticated && <AddBoard onClick={openAddBoardHandler} />}
      </div>
      <div className="px-3">
        <ThemeSwitch />
      </div>
    </section>
  );
};

export default SidePanel;
