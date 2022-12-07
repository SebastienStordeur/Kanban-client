import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import EditSubTasksForm from "../../forms/edit-subtasks/EditSubtasksForm";
import { getBoardRequest } from "../../../services/requests/GetBoardRequest";
import { editSubtasksRequest } from "../../../services/requests/EditSubtasksRequest";
import { Button } from "../../UI";
import { EditTaskForm } from "../../forms";

const Task = ({ task, columns, setBoard }) => {
  let { title, subtasks } = task;
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const [editTaskIsOpen, setEditTaskIsOpen] = useState(false);
  const [editSubtaskIsOpen, setEditSubtaskIsOpen] = useState(false);
  const [updateSubtasks, setUpdateSubtasks] = useState(subtasks);

  const completedTasks = task.subtasks.filter(
    (subtask) => subtask.isCompleted === true
  );

  const toggleTaskForm = () => {
    setEditTaskIsOpen((prev) => !prev);
    if (editTaskIsOpen) {
      getBoardRequest(id, auth.token, setBoard);
    }
  };

  const openSubtaskForm = () => {
    setEditSubtaskIsOpen((prevValue) => !prevValue);
    if (editSubtaskIsOpen) {
      editSubtasksRequest(task._id, updateSubtasks, auth.token, id, setBoard);
      getBoardRequest(id, auth.token, setBoard);
    }
  };

  return (
    <React.Fragment>
      <article
        className={`${
          theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
        } relative flex flex-col justify-center text-left w-72 h-24 font-bold rounded-lg px-4 py-6 my-6 cursor-pointer`}
      >
        <Button
          className="absolute top-0 right-0 z-10 w-10"
          onClick={toggleTaskForm}
        >
          EDIT
        </Button>
        <div onClick={openSubtaskForm}>
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
        </div>
      </article>
      {editSubtaskIsOpen && (
        <EditSubTasksForm
          task={task}
          onClick={openSubtaskForm}
          setSubtasks={setUpdateSubtasks}
        />
      )}
      {editTaskIsOpen && (
        <EditTaskForm onClick={toggleTaskForm} task={task} columns={columns} />
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
