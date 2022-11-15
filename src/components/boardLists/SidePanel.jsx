import React, { useEffect, useState } from "react";
import axios from "Axios";

import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";

const SidePanel = () => {
  const token = localStorage.getItem("token");
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/board", {
        params: {
          userId: 8,
        },

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBoards(res.data);
      })
      .catch((err) => {
        console.log("Somethibg went wrong " + err);
      });
  }, []);

  return (
    <section className="hidden md:flex flex-col justify-between w-64 bg-white">
      <div>
        <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">ALL BOARDS ({boards.length})</h2>
        {boards.map((board) => (
          <Board board={board} key={board.id} />
        ))}
        <AddBoard />
      </div>
      <ThemeSwitch />
    </section>
  );
};

export default SidePanel;
