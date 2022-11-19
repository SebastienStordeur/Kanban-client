import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { BoardContext } from "../../../store/boards-context";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const DeleteBoardForm = () => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const board = useContext(BoardContext);
  const navigate = useNavigate();

  const deleteBoard = () => {
    axios
      .delete(`http://localhost:8000/board/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(() => {
        board.getBoards();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-red font-bold text-lg">Delete this board?</h2>
      <p className="font-medium text-xs my-6">
        Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and
        cannot be reversed.
      </p>
      <Button className="bg-red text-white" onClick={deleteBoard}>
        Delete
      </Button>
      <Button className="bg-purple bg-opacity-10 text-purple">Cancel</Button>
    </Modal>
  );
};

export default DeleteBoardForm;
