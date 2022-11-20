import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";
import Subtask from "../../board/Task/Subtask";
import Modal from "../../UI/Modal";

const EditTaskForm = (props) => {
  console.log("editform", props);
  const theme = useContext(ThemeContext);
  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
      <h2 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>
        {props.task.title}
      </h2>
      <p className="text-sm my-6">{props.task.description}</p>
      {props.task.subtasks.map((subtask) => {
        return <Subtask key={subtask.id} subtask={subtask} />;
      })}
    </Modal>
  );
};

export default EditTaskForm;
