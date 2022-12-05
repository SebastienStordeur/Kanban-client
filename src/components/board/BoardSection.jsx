import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../store/theme-context";
import Column from "./Column/Column";
import EmptyBoard from "./emptyBoard/EmptyBoard";

const BoardSection = ({ access, board, setBoard }) => {
  const { columns, tasks } = board;
  const theme = useContext(ThemeContext);
  return (
    <section
      id="board-section"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } px-2.5 w-full h-[calc(100vh-64px)] overflow-hidden flex font-bold text-mediumGrey text-lg`}
    >
      {board &&
        columns.length > 0 &&
        columns.map((column) => {
          const tasksList = tasks.filter((task) => {
            return task.columnId === column._id;
          });
          return (
            <Column
              key={column._id}
              column={column}
              tasks={tasksList}
              setBoard={setBoard}
            />
          );
        })}
      {board && columns.length === 0 && <EmptyBoard board={board} />}
      {access && (
        <p className="flex justify-center items-center w-full">
          You don't have the rights to access this board
        </p>
      )}
    </section>
  );
};

BoardSection.propTypes = {
  access: PropTypes.bool,
  board: PropTypes.shape({
    columns: PropTypes.array,
    tasks: PropTypes.array,
  }),
  setBoard: PropTypes.func,
};

export default BoardSection;
