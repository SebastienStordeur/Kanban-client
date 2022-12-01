import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import Column from "./Column/Column";
import EmptyBoard from "./emptyBoard/EmptyBoard";

const BoardSection = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <section
      id="board-section"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } px-2.5 w-full h-[calc(100vh-64px)] overflow-hidden flex font-bold text-mediumGrey text-lg`}
    >
      {props.board &&
        props.board.columns.length > 0 &&
        props.board.columns.map((column) => {
          const tasks = props.board.tasks.filter((task) => {
            return task.columnId === column._id;
          });
          return (
            <Column
              key={column._id}
              column={column}
              tasks={tasks}
              setBoard={props.setBoard}
            />
          );
        })}
      {props.board && props.board.columns.length === 0 && <EmptyBoard />}
      {props.access && (
        <p className="flex justify-center items-center w-full">
          You don't have the rights to access this board
        </p>
      )}
    </section>
  );
};

export default BoardSection;
