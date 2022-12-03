import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";
import Header from "../components/layout/Header";
import { AuthContext } from "../store/auth-context";
import EditTaskForm from "../components/forms/edit-task/EditTaskForm";

const BoardPage = (props) => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const [board, setBoard] = useState(null);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/board/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => setBoard(res.data))
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) setAccessDenied(true);
      });
  }, [id]);

  return (
    <React.Fragment>
      <Header board={board} setBoard={setBoard} access={accessDenied} />
      <main id="main" className="flex h-[calc(100vh-64px)]">
        <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
        {/* <EditTaskForm /> */}
        <BoardSection board={board} setBoard={setBoard} access={accessDenied} />
      </main>
    </React.Fragment>
  );
};

export default BoardPage;
