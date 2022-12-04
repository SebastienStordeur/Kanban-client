import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import { ThemeContext } from "../../../store/theme-context";
import Subtask from "../../board/Task/Subtask";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../../UI/Button";
import DeleteTaskForm from "../delete-task/DeleteTaskForm";
import EditTaskForm from "../edit-task/EditTaskForm";

const ModalOverlay = (props) => {
  console.log("props", props);
  const theme = useContext(ThemeContext);
  const [deleteTaskIsOpen, setDeleteTaskIsOpen] = useState(false);
  const [editTaskIsOpen, setEditTaskIsOpen] = useState(false);

  const openDeleteForm = () => {
    setDeleteTaskIsOpen((prev) => !prev);
  };

  const openEditTaskForm = () => {
    setEditTaskIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
        <div className="flex justify-between items-center">
          <h2
            className={`${
              theme.theme === "dark" ? "text-white" : "text-black"
            } font-bold text-lg`}
          >
            {props.task.title}
          </h2>
          <div className="flex">
            <Button className="w-32 bg-red text-white" onClick={openDeleteForm}>
              Delete Task
            </Button>
            <Button className="bg-purple text-white" onClick={openEditTaskForm}>
              Edit Task
            </Button>
          </div>
        </div>
        <p
          className={`${
            theme.theme === "dark" ? "text-white" : ""
          } text-sm my-6`}
        >
          {props.task.description}
        </p>
        {props.task.subtasks.map((subtask) => {
          return <Subtask key={subtask._id} subtask={subtask} />;
        })}
      </Modal>
      {deleteTaskIsOpen && (
        <DeleteTaskForm
          id={props.task.id}
          title={props.task.title}
          onClick={openDeleteForm}
          onClose={props.onClick}
        />
      )}
      {editTaskIsOpen && (
        <EditTaskForm task={props.task} onClick={openEditTaskForm} />
      )}
    </React.Fragment>
  );
};

const EditSubTasksForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay task={props.task} onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default EditSubTasksForm;
