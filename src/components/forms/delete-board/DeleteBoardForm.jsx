import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import { Button, Modal } from "../../UI";
import Backdrop from "../Backdrop/Backdrop";
import { deleteBoardRequest } from "../../../services/requests/DeleteBoardRequest";

const ModalOverlay = (props) => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  const deleteBoard = () => {
    deleteBoardRequest(id, auth.token, navigate);
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-red font-bold text-lg">Delete this board?</h2>
      <p
        className={`${
          theme.theme === "dark" ? "text-white" : ""
        } font-medium text-xs my-6`}
      >
        Are you sure you want to delete the ‘{props.title}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <Button className="bg-red text-white mt-3" onClick={deleteBoard}>
        Delete
      </Button>
      <Button
        className="bg-purple bg-opacity-10 text-purple mt-3"
        onClick={props.onClick}
      >
        Cancel
      </Button>
    </Modal>
  );
};

const DeleteBoardForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick} title={props.title} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default DeleteBoardForm;
