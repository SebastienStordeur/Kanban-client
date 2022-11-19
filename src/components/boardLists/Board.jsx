import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import board from "../../assets/icons/board.svg";
import greyBoard from "../../assets/icons/greyBoard.svg";
import { ThemeContext } from "../../store/theme-context";

const Board = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-60 h-12 text-black cursor-pointer pr-6">
      <NavLink
        to={`/board/${props.board.id}`}
        className={({ isActive }) =>
          isActive
            ? "bg-purple text-white h-full w-full flex items-center pl-6 rounded-r-3xl"
            : `${
                theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
              } text-mediumGrey h-full w-full flex items-center pl-6`
        }
        children={({ isActive }) => {
          const image = isActive ? board : greyBoard;
          return (
            <>
              <img src={image} alt="Board Icon" />
              <h2 className="font-bold ml-5">{props.board.title}</h2>
            </>
          );
        }}
      />
    </div>
  );
};

export default Board;
