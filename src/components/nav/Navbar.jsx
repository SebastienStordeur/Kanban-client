import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Button from "../UI/Button";
import Logo from "./logo/Logo";

const Navbar = (props) => {
  const { id } = useParams();
  const location = useLocation();

  const openAddTaskForm = () => {
    props.setTaskIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center h-full px-4">
      <Logo />
      {location.pathname === `/board/${id}` && (
        <Button className="w-40 bg-purple text-white mt-0 hover:bg-opacity-50" onClick={openAddTaskForm}>
          + Add New Task
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
