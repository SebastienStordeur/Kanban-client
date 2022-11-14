import React from "react";
import board from "../../assets/icons/board.svg";

const Board = (props) => {
  return (
    <div className="w-60 h-12 bg-purple text-white cursor-pointer px-6">
      <a href={`/board/${props.board.id}`} className="h-full w-full flex items-center">
        <img src={board} alt="" />
        <h2 className="font-bold ml-5">{props.board.title}</h2>
      </a>
    </div>
  );
};

export default Board;
