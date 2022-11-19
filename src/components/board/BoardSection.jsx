import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Column from "./Column/Column";
import EmptyBoard from "./emptyBoard/EmptyBoard";
import { AuthContext } from "../../store/auth-context";

const BoardSection = () => {
  const id = useParams();
  const auth = useContext(AuthContext);
  const [board, setBoard] = useState(null);
  const [accessDenied, setAccessDenied] = useState(false);
  const boardId = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/board/${boardId.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => setBoard(res.data))
      .catch((err) => {
        if (err.response.status === 403) setAccessDenied(true);
      });
  }, [id]);

  return (
    <section id="board-section" className="px-2.5 w-full h-screen bg-lightGrey flex font-bold text-mediumGrey text-lg">
      {board &&
        board.columns?.map((column) => {
          const filteredTasks = board.tasks.filter((task) => task.columnId === column.id);
          return <Column key={column.id} column={column} tasks={filteredTasks} />;
        })}
      {board && board.columns.length === 0 && <EmptyBoard />}
      {accessDenied && (
        <p className="flex justify-center items-center w-full">You don't have the rights to access this board</p>
      )}
    </section>
  );
};

export default BoardSection;
