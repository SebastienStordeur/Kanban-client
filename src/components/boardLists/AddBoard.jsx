import React from "react";
import board from "../../assets/icons/purpleBoard.svg";

const AddBoard = (props) => {
  return (
    <div className="flex items-center w-60 h-12 text-purple cursor-pointer px-6" onClick={props.onClick}>
      <img src={board} alt="" className="text-purple" />
      <h2 className="font-bold ml-5">+ Create New Board</h2>
    </div>
  );
};

export default AddBoard;
