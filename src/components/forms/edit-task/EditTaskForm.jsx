import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { ThemeContext } from "../../../store/theme-context";
import Subtask from "../../board/Task/Subtask";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";

const ModalOverlay = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
      <h2 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>
        {props.task.title}
      </h2>
      <p className={`${theme.theme === "dark" ? "text-white" : ""} text-sm my-6`}>{props.task.description}</p>
      {props.task.subtasks.map((subtask) => {
        return <Subtask key={subtask.id} subtask={subtask} />;
      })}
    </Modal>
  );
};

const EditTaskForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay task={props.task} />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};
export default EditTaskForm;
