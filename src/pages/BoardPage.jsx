import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";
import Header from "../components/layout/Header";
import { AuthContext } from "../store/auth-context";
import { getBoardRequest } from "../services/requests/GetBoardRequest";

const BoardPage = (props) => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const [board, setBoard] = useState(null);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    getBoardRequest(id, auth.token, setBoard, setAccessDenied);
  }, [id]);

  console.log(board);
  return (
    <React.Fragment>
      {board && <Header board={board} setBoard={setBoard} />}
      <main id="main" className="flex h-[calc(100vh-64px)]">
        <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
        {board && (
          <BoardSection
            board={board}
            setBoard={setBoard}
            access={accessDenied}
          />
        )}
      </main>
    </React.Fragment>
  );
};

export default BoardPage;
