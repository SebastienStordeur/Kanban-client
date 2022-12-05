import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CreateTaskForm from "../forms/create-task/CreateTaskForm";
import DeleteBoardForm from "../forms/delete-board/DeleteBoardForm";
import EditBoardForm from "../forms/edit-board/EditBoardForm";
import Button from "../UI/Button";
import Logo from "./logo/Logo";

const Navbar = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [editBoardIsOpen, setEditBoardIsOpen] = useState(false);
  const [deleteBoardIsOpen, setDeleteBoardIsOpen] = useState(false);

  const openAddTaskForm = () => {
    setAddTaskIsOpen((prev) => !prev);
  };

  const openEditBoard = () => {
    setEditBoardIsOpen((prev) => !prev);
  };

  const openDeleteBoard = () => {
    setDeleteBoardIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <nav className="flex justify-between items-center h-full px-4">
        <Logo />
        <div className="flex items-center px-2">
          {location.pathname === `/board/${id}` && (
            <React.Fragment>
              <Button
                className="w-40 bg-purple text-white hover:bg-opacity-50"
                onClick={openAddTaskForm}
              >
                + Add New Task
              </Button>
              <Button
                className="w-20 px-2 ml-4 bg-purple text-white hover:bg-opacity-50"
                onClick={openEditBoard}
              >
                Edit Board
              </Button>
              <Button
                className="bg-red text-white w-24 px-2 ml-4"
                onClick={openDeleteBoard}
              >
                Delete Board
              </Button>
            </React.Fragment>
          )}
        </div>
      </nav>
      {deleteBoardIsOpen && location.pathname === `/board/${id}` && (
        <DeleteBoardForm onClick={openDeleteBoard} title={props.board.title} />
      )}
      {editBoardIsOpen && location.pathname === `/board/${id}` && (
        <EditBoardForm board={props.board} onClick={openEditBoard} />
      )}
      {addTaskIsOpen && location.pathname === `/board/${id}` && (
        <CreateTaskForm
          board={props.board}
          setBoard={props.setBoard}
          onClick={openAddTaskForm}
        />
      )}
    </React.Fragment>
  );
};

Navbar.propTypes = {
  access: PropTypes.bool,
  setBoard: PropTypes.func,
};

export default Navbar;
