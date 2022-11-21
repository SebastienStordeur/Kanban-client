import React, { useState } from "react";
import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";
import AddBoardForm from "../components/forms/create-board/AddBoardForm";
import CreateTaskForm from "../components/forms/create-task/CreateTaskForm";
import Header from "../components/layout/Header";

const BoardPage = (props) => {
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Header taskIsOpen={addTaskIsOpen} setTaskIsOpen={setAddTaskIsOpen} />
      <main id="main" className="flex h-[calc(100vh-64px)] overflow-hidden">
        <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
        <BoardSection />
        {/* {props.boardIsOpen && <AddBoardForm />} */}
        {addTaskIsOpen && <CreateTaskForm />}
      </main>
    </React.Fragment>
  );
};

export default BoardPage;
