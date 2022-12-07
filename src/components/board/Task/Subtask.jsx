import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../store/theme-context";

const Subtask = ({ subtask, setSubtasks, index }) => {
  const theme = useContext(ThemeContext);
  let subtaskIsCompleted = subtask.isCompleted;

  const updateSubtask = async () => {
    subtaskIsCompleted = !subtask.isCompleted;
    setSubtasks((sub) =>
      sub.map((item, i) => {
        return i === index
          ? { ...item, isCompleted: subtaskIsCompleted }
          : item;
      })
    );
  };

  return (
    <article
      className={`${
        theme.theme === "dark" ? " bg-veryDarkGrey text-white" : "bg-lightGrey"
      } flex items-center h-10 mb-2 px-4 rounded-md`}
    >
      <input
        type="checkbox"
        defaultChecked={subtask.isCompleted}
        onChange={updateSubtask}
      />
      <h3 className="text-xs ml-4">{subtask.title}</h3>
    </article>
  );
};

Subtask.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default Subtask;
