import axios from "axios";
import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

const Subtask = (props) => {
  const theme = useContext(ThemeContext);
  let subtaskIsCompleted = props.subtask.isCompleted;

  const updateSubtask = async () => {
    subtaskIsCompleted = !subtaskIsCompleted;
    axios
      .put(`http://localhost:8000/board/subtask/${props.subtask.id}`, {
        id: props.subtask.id,
        isCompleted: subtaskIsCompleted,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <article
      className={`${
        theme.theme === "dark" ? " bg-veryDarkGrey" : "bg-lightGrey"
      } flex items-center h-10 mb-2 px-4 rounded-md`}
    >
      <input type="checkbox" defaultChecked={props.subtask.isCompleted} onChange={updateSubtask}></input>
      <h3 className="text-xs ml-4">{props.subtask.title}</h3>
    </article>
  );
};

export default Subtask;
