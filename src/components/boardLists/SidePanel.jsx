import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../store/auth-context";

import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import AddBoard from "./AddBoard";
import Board from "./Board";

const SidePanel = () => {
  const auth = useContext(AuthContext);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/board", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => setBoards(res.data))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className="hidden md:flex flex-col justify-between w-64 bg-white">
      <div>
        <h2 className="font-bold text-sm tracking-widest text-mediumGrey px-6 mb-5">ALL BOARDS ({boards.length})</h2>
        {boards.map((board) => (
          <Board board={board} key={board.id} />
        ))}
        {auth.isAuthenticated && <AddBoard />}
      </div>
      <ThemeSwitch />
    </section>
  );
};

export default SidePanel;
