import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../../../store/theme-context";
import Subtask from "../../board/Task/Subtask";
import { Modal, Button } from "../../UI/index";
import Backdrop from "../Backdrop/Backdrop";
import DeleteTaskForm from "../delete-task/DeleteTaskForm";
import Title from "../Title";

const ModalOverlay = ({ task, onClick, setSubtasks }) => {
  const { _id, title, description, subtasks } = task;
  const theme = useContext(ThemeContext);
  const [deleteTaskIsOpen, setDeleteTaskIsOpen] = useState(false);

  const openDeleteForm = () => {
    setDeleteTaskIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <div className="flex">
            <Button className="w-32 bg-red text-white" onClick={openDeleteForm}>
              Delete Task
            </Button>
          </div>
        </div>
        <p
          className={`${
            theme.theme === "dark" ? "text-white" : ""
          } text-sm my-6`}
        >
          {description}
        </p>
        {subtasks.map((subtask, index) => {
          return (
            <Subtask
              key={subtask._id}
              subtask={subtask}
              setSubtasks={setSubtasks}
              index={index}
            />
          );
        })}
      </Modal>
      {deleteTaskIsOpen && (
        <DeleteTaskForm
          id={_id}
          title={title}
          onClick={openDeleteForm}
          onClose={onClick}
        />
      )}
    </React.Fragment>
  );
};

const EditSubTasksForm = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          task={props.task}
          onClick={props.onClick}
          setSubtasks={props.setSubtasks}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default EditSubTasksForm;
