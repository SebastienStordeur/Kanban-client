import React, { useState } from "react";
import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";
import AddBoardForm from "../components/forms/create-board/AddBoardForm";
import CreateTaskForm from "../components/forms/create-task/CreateTaskForm";
import DeleteBoardForm from "../components/forms/delete-board/DeleteBoardForm";
import Header from "../components/layout/Header";

const BoardPage = (props) => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [deleteBoardIsOpen, setDeleteBoardIsOpen] = useState(false);
  return (
    <>
      <Header taskIsOpen={addTaskIsOpen} setTaskIsOpen={setAddTaskIsOpen} />
      <main id="main" className="flex h-[calc(100vh-64px)] overflow-hidden">
        <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
        <BoardSection />
        {props.boardIsOpen && <AddBoardForm />}
        {addTaskIsOpen && <CreateTaskForm />}
        {deleteBoardIsOpen && <DeleteBoardForm />}
      </main>
    </>
  );
};

export default BoardPage;
