import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import EditSubTasksForm from "../../forms/edit-subtasks/EditSubtasksForm";

const Task = (props) => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const [editTaskIsOpen, setEditTaskIsOpen] = useState(false);

  const completedTasks = props.task.subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  const openTaskForm = () => {
    setEditTaskIsOpen((prevValue) => !prevValue);
    if (editTaskIsOpen) {
      axios
        .get(`http://localhost:8000/board/${id}`, {
          headers: { Authorization: `Bearer ${auth.token}` },
        })
        .then((res) => props.setBoard(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <React.Fragment>
      <article
        onClick={openTaskForm}
        className={`${
          theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
        } flex flex-col justify-center text-left w-72 h-24 font-bold rounded-lg px-4 py-6 my-6 cursor-pointer`}
      >
        <h3
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } tracking-wide text-sm`}
        >
          {props.task.title}
        </h3>
        {props.task.subtasks.length >= 1 && (
          <p className="text-xs text-mediumGrey">
            {completedTasks.length} on {props.task.subtasks.length} subtasks
          </p>
        )}
      </article>
      {editTaskIsOpen && (
        <EditSubTasksForm task={props.task} onClick={openTaskForm} />
      )}
    </React.Fragment>
  );
};

export default React.memo(Task);
