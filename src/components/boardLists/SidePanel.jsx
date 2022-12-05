import React, { useContext, useEffect, useState } from "react";
import { getBoardsRequest } from "../../services/requests/GetBoardsRequest";
import { AuthContext } from "../../store/auth-context";
import { ThemeContext } from "../../store/theme-context";
import AddBoardForm from "../forms/create-board/AddBoardForm";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";

const SidePanel = () => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const [boards, setBoards] = useState([]);
  const [addBoardIsOpen, setAddBoardIsOpen] = useState(false);

  const openAddBoardHandler = () => {
    setAddBoardIsOpen((prev) => !prev);
  };

  useEffect(() => {
    getBoardsRequest(auth.token, setBoards);
  }, []);

  return (
    <React.Fragment>
      <section
        className={`${
          theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
        } hidden md:flex flex-col justify-between w-64`}
      >
        <div>
          <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">
            ALL BOARDS ({boards.length})
          </h2>
          {boards.map((board) => (
            <Board id={board._id} title={board.title} key={board._id} />
          ))}
          {auth.isAuthenticated && <AddBoard onClick={openAddBoardHandler} />}
        </div>
        <div className="px-3">
          <ThemeSwitch />
        </div>
      </section>
      {addBoardIsOpen && (
        <AddBoardForm onClick={openAddBoardHandler} onAdd={setBoards} />
      )}
    </React.Fragment>
  );
};

export default SidePanel;
