import React from "react";
import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";
import AddBoardForm from "../components/forms/create-board/AddBoardForm";
import CreateTaskForm from "../components/forms/create-task/CreateTaskForm";

const BoardPage = (props) => {
  return (
    <main id="main" className="flex h-[calc(100vh-64px)]">
      <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
      <BoardSection />
      {props.boardIsOpen && <AddBoardForm />}
      {props.taskIsOpen && <CreateTaskForm />}
    </main>
  );
};

export default BoardPage;
