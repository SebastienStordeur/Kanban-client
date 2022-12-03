import axios from "axios";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";

const Subtask = ({ subtask }) => {
  const { _id, title, isCompleted } = subtask;
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  let subtaskIsCompleted = isCompleted;

  const updateSubtask = async () => {
    subtaskIsCompleted = !subtaskIsCompleted;
    axios
      .put(
        `http://localhost:8000/task/subtask/${_id}`,
        {
          id: _id,
          isCompleted: subtaskIsCompleted,
        },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
