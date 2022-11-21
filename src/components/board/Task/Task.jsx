import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../store/theme-context";
import EditTaskForm from "../../forms/edit-task/EditTaskForm";

const Task = (props) => {
  const theme = useContext(ThemeContext);
  const [editTaskIsOpen, setTaskIsOpen] = useState(false);
  const completedTasks = props.task.subtasks.filter((subtask) => subtask.isCompleted === true);

  const openTaskForm = () => {
    setTaskIsOpen((prevValue) => !prevValue);
  };

  return (
    <React.Fragment>
      <article
        onClick={openTaskForm}
        className={`${
          theme.theme === "dark" ? "bg-darkGrey" : "bg-white"
        } flex flex-col justify-center text-left w-72 h-24 font-bold rounded-lg px-4 py-6 my-6 cursor-pointer`}
      >
        <h3 className={`${theme.theme === "dark" ? "text-white" : "text-black"} tracking-wide text-sm`}>
          {props.task.title}
        </h3>
        {props.task.subtasks.length >= 1 && (
          <p className="text-xs text-mediumGrey">
            {completedTasks.length} on {props.task.subtasks.length} subtasks
          </p>
        )}
      </article>
      {editTaskIsOpen && <EditTaskForm task={props.task} onClick={openTaskForm} />}
    </React.Fragment>
  );
};

export default React.memo(Task);
