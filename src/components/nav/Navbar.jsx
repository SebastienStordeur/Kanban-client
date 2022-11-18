import React from "react";
import Button from "../UI/Button";
import Logo from "./logo/Logo";

const Navbar = (props) => {
  const openAddTaskForm = () => {
    props.setTaskIsOpen(true);
  };

  return (
    <nav className="flex justify-between items-center h-full px-4">
      <Logo />
      <Button className="w-40 bg-purple text-white" onClick={openAddTaskForm}>
        + Add New Task
      </Button>
    </nav>
  );
};

export default Navbar;
