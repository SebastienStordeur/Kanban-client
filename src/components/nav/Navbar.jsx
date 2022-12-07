import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CreateTaskForm, DeleteBoardForm, EditBoardForm } from "../forms";
import Button from "../UI/Button";
import Logo from "./logo/Logo";

const Navbar = ({ board, setBoard }) => {
  const { id } = useParams();
  const location = useLocation();
  const [addTaskIsOpen, setAddTaskIsOpen] = useState(false);
  const [editBoardIsOpen, setEditBoardIsOpen] = useState(false);
  const [deleteBoardIsOpen, setDeleteBoardIsOpen] = useState(false);

  const toggleForm = (toggle) => {
    toggle((prev) => !prev);
  };

  return (
    <React.Fragment>
      <nav className="flex justify-between items-center h-full px-4">
        <Logo />
        <div className="flex items-center px-2">
          {location.pathname === `/board/${id}` && (
            <React.Fragment>
              {board.columns.length > 0 && (
                <Button
                  className="w-40 bg-purple text-white hover:bg-opacity-50"
                  onClick={() => toggleForm(setAddTaskIsOpen)}
                >
                  + Add New Task
                </Button>
              )}
              <Button
                className="w-24 px-2 ml-4 bg-purple text-white hover:bg-opacity-50"
                onClick={() => toggleForm(setEditBoardIsOpen)}
              >
                Edit Board
              </Button>
              <Button
                className="bg-red text-white w-24 px-2 ml-4"
                onClick={() => toggleForm(setDeleteBoardIsOpen)}
              >
                Delete Board
              </Button>
            </React.Fragment>
          )}
        </div>
      </nav>
      {deleteBoardIsOpen && location.pathname === `/board/${id}` && (
        <DeleteBoardForm
          onClick={() => toggleForm(setDeleteBoardIsOpen)}
          title={board.title}
        />
      )}
      {editBoardIsOpen && location.pathname === `/board/${id}` && (
        <EditBoardForm
          board={board}
          onClick={() => toggleForm(setEditBoardIsOpen)}
        />
      )}
      {addTaskIsOpen && location.pathname === `/board/${id}` && (
        <CreateTaskForm
          board={board}
          setBoard={setBoard}
          onClick={() => toggleForm(setAddTaskIsOpen)}
        />
      )}
    </React.Fragment>
  );
};

Navbar.propTypes = {
  setBoard: PropTypes.func,
};

export default Navbar;
