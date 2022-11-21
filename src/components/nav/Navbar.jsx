import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import CreateTaskForm from "../forms/create-task/CreateTaskForm";
import Button from "../UI/Button";
import Logo from "./logo/Logo";

const Navbar = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);

  const openAddTaskForm = () => {
    setAddTaskIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <nav className="flex justify-between items-center h-full px-4">
        <Logo />
        {location.pathname === `/board/${id}` && (
          <Button className="w-40 bg-purple text-white hover:bg-opacity-50" onClick={openAddTaskForm}>
            + Add New Task
          </Button>
        )}
      </nav>
      {addTaskIsOpen && <CreateTaskForm board={props.board} onClick={openAddTaskForm} />}
    </React.Fragment>
  );
};

export default Navbar;
