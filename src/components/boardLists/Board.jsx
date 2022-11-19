import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import board from "../../assets/icons/board.svg";
import greyBoard from "../../assets/icons/greyBoard.svg";

const Board = (props) => {
  return (
    <div className="w-60 h-12 text-black cursor-pointer pr-6">
      <NavLink
        to={`/board/${props.board.id}`}
        className={({ isActive }) =>
          isActive
            ? "bg-purple text-white h-full w-full flex items-center pl-6 rounded-r-3xl"
            : `text-mediumGrey bg-white h-full w-full flex items-center pl-6`
        }
        children={({ isActive }) => {
          const image = isActive ? board : greyBoard;
          return (
            <>
              <img src={image} alt="" />
              <h2 className="font-bold ml-5">{props.board.title}</h2>
            </>
          );
        }}
      />
    </div>
  );
};

export default Board;
