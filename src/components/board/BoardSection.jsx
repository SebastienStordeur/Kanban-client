import React, { useContext, useState } from "react";

import { ThemeContext } from "../../store/theme-context";

import Column from "./Column/Column";
import EmptyBoard from "./emptyBoard/EmptyBoard";
import DeleteBoardForm from "../forms/delete-board/DeleteBoardForm";

const BoardSection = (props) => {
  const theme = useContext(ThemeContext);
  const [deleteBoardIsOpen, setDeleteBoardIsOpen] = useState(false);

  const closeDeleteModal = () => {
    setDeleteBoardIsOpen(false);
  };

  return (
    <section
      id="board-section"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } px-2.5 w-full h-[calc(100vh-64px)] overflow-hidden flex font-bold text-mediumGrey text-lg`}
    >
      {props.board &&
        props.board.columns?.map((column) => {
          const filteredTasks = props.board.tasks.filter((task) => task.columnId === column.id);
          return <Column key={column.id} column={column} tasks={filteredTasks} />;
        })}
      {props.board && props.board.columns.length === 0 && <EmptyBoard />}
      {props.access && (
        <p className="flex justify-center items-center w-full">You don't have the rights to access this board</p>
      )}
      {deleteBoardIsOpen && <DeleteBoardForm title={board.title} onClick={closeDeleteModal} />}
    </section>
  );
};

export default BoardSection;
