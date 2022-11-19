import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "./auth-context";

export const BoardContext = React.createContext({
  boards: [],
  getBoards: () => {},
});

export const BoardContextProvider = (props) => {
  const auth = useContext(AuthContext);
  const [boards, setBoards] = useState([]);

  const getBoards = () => {
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
  };

  const defaultValue = {
    boards,
    getBoards,
  };

  return <BoardContext.Provider value={defaultValue}>{props.children}</BoardContext.Provider>;
};
