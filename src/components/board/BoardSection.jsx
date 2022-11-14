import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Task from "./Task/Task";
import Column from "./Column/Column";

const BoardSection = () => {
  const [board, setBoard] = useState(null);
  const boardId = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/board/${boardId.id}`)
      .then((res) => {
        console.log(res);
        setBoard(res.data);
      })
      .catch((err) => console.log("an error occured " + err));
  }, []);

  console.log(board);
  return (
    <section id="board-section" className="px-2.5 w-full h-screen bg-lightGrey flex font-bold text-mediumGrey text-lg">
      {board &&
        board.columns.map((column) => {
          const filteredTasks = board.tasks.filter((task) => task.columnId === column.id);
          return <Column key={column.id} column={column} tasks={filteredTasks} />;
        })}

      {/* {board && board.tasks.map((task) => <Task task={task} key={task.id} />)} */}
    </section>
  );
};

export default BoardSection;
