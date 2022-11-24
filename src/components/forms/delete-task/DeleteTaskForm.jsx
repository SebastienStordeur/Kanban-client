import axios from "axios";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../store/theme-context";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";

const ModalOverlay = (props) => {
  const { id } = useParams();
  const theme = useContext(ThemeContext);

  const deleteTask = () => {
    axios
      .delete(`http://localhost:8000/board/task/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-left mx-auto rounded-md z-20">
      <h2 className="text-red font-bold text-lg">Delete this task?</h2>
      <p className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-medium text-xs my-6`}>
        Are you sure you want to delete the ‘{props.title}’ task and its subtasks? This action cannot be reversed.
      </p>
      <Button className="bg-red text-white mb-2" onClick={deleteTask}>
        Delete
      </Button>
      <Button className="bg-purple bg-opacity-10 text-purple" onClick={props.onClick}>
        Cancel
      </Button>
    </Modal>
  );
};

const DeleteTaskForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop className="z-10" onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick} title={props.title} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default DeleteTaskForm;
