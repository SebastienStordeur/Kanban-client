import axios from "axios";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { deleteTaskRequest } from "../../../services/requests/DeleteTaskRequest";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import { Button, Modal } from "../../UI/index";
import Backdrop from "../Backdrop/Backdrop";

const ModalOverlay = (props) => {
  console.log(props);
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const deleteTask = () => {
    deleteTaskRequest(id, props.id, auth.token, props.onClick, props.onClose);
    /* axios
      .delete(`http://localhost:8000/task/${props.id}`, {
        params: { id: props.id },
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(() => {
        props.onClick();
        props.onClose();
      })
      .catch((err) => console.error(err)); */
  };
  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-left mx-auto rounded-md z-20">
      <h2 className="text-red font-bold text-lg">Delete this task?</h2>
      <p
        className={`${
          theme.theme === "dark" ? "text-white" : "text-black"
        } font-medium text-xs my-6`}
      >
        Are you sure you want to delete the ‘{props.title}’ task and its
        subtasks? This action cannot be reversed.
      </p>
      <Button className="bg-red text-white mb-2" onClick={deleteTask}>
        Delete
      </Button>
      <Button
        className="bg-purple bg-opacity-10 text-purple"
        onClick={props.onClick}
      >
        Cancel
      </Button>
    </Modal>
  );
};

const DeleteTaskForm = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop className="z-10" onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          id={props.id}
          onClick={props.onClick}
          title={props.title}
          onClose={props.onClose}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default DeleteTaskForm;
