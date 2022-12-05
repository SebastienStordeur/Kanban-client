import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../store/theme-context";

const Subtask = ({ subtask, setSubtasks, index }) => {
  const { _id, title, isCompleted } = subtask;
  const theme = useContext(ThemeContext);
  let subtaskIsCompleted = isCompleted;

  const updateSubtask = async () => {
    isCompleted = !isCompleted;
    /*     console.log(isCompleted);
    setSubtasks((prev) => ({
      ...prev,
      [index]: ...prev, isCompleted,
    })); */
  };

  return (
    <article
      className={`${
        theme.theme === "dark" ? " bg-veryDarkGrey text-white" : "bg-lightGrey"
      } flex items-center h-10 mb-2 px-4 rounded-md`}
    >
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={updateSubtask}
      />
      <h3 className="text-xs ml-4">{title}</h3>
    </article>
  );
};

Subtask.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default Subtask;
