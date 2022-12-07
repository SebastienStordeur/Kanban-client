import React, { useState } from "react";
import PropTypes from "prop-types";
import board from "../../assets/icons/purpleBoard.svg";
import { AddBoardForm } from "../forms";

const AddBoard = (props) => {
  const [addBoardIsOpen, setAddBoardIsOpen] = useState(false);

  const toggleFormHandler = () => {
    setAddBoardIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div
        className="flex items-center w-60 h-12 text-purple cursor-pointer px-6"
        onClick={toggleFormHandler}
      >
        <img src={board} alt="" className="text-purple" />
        <h2 className="font-bold ml-5">+ Create New Board</h2>
      </div>
      {addBoardIsOpen && (
        <AddBoardForm onClick={toggleFormHandler} onAdd={props.onAdd} />
      )}
    </React.Fragment>
  );
};

AddBoard.propTypes = {
  onClick: PropTypes.func,
};

export default AddBoard;
