import React from "react";
import Button from "../UI/Button";
import Logo from "./logo/Logo";

import { useLocation, useParams } from "react-router-dom";

const Navbar = (props) => {
  const id = useParams();
  const location = useLocation();
  console.log(location.pathname, "id", id);
  const openAddTaskForm = () => {
    props.setTaskIsOpen(true);
  };

  return (
    <nav className="flex justify-between items-center h-full px-4">
      <Logo />
      {/* {location.pathname === `/board/${id}` && ( */}
      <Button className="w-40 bg-purple text-white" onClick={openAddTaskForm}>
        + Add New Task
      </Button>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
