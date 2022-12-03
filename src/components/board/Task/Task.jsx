import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import EditSubTasksForm from "../../forms/edit-subtasks/EditSubtasksForm";
import { getBoardRequest } from "../../../services/requests/GetBoardRequest";

const Task = ({ task, setBoard }) => {
  const { title, subtasks } = task;
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const [editTaskIsOpen, setEditTaskIsOpen] = useState(false);

  const completedTasks = subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  const openTaskForm = () => {
    setEditTaskIsOpen((prevValue) => !prevValue);
    if (editTaskIsOpen) {
      getBoardRequest(id, auth.token, setBoard);
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
          {title}
        </h3>
        {subtasks.length >= 1 && (
          <p className="text-xs text-mediumGrey">
            {completedTasks.length} on {subtasks.length} subtasks
          </p>
        )}
      </article>
      {editTaskIsOpen && (
        <EditSubTasksForm task={task} onClick={openTaskForm} />
      )}
    </React.Fragment>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    columnId: PropTypes.string,
    subtasks: PropTypes.array,
  }),
  setBoard: PropTypes.func,
};

export default React.memo(Task);
