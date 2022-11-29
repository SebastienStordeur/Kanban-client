import React, { useContext, useState, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";

import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import InputValidator from "../InputValidator";
import Button from "../../UI/Button";
import Label from "../Label";
import Modal from "../../UI/Modal";
import Select from "./Select";
import Backdrop from "../Backdrop/Backdrop";
import { getBoardRequest } from "../../../services/requests/GetBoardRequest";

const ModalOverlay = (props) => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const { id } = useParams();
  const token = auth.token;

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const [titleHasError, setTitleHasError] = useState(false);
  const [numberOfSubtasks, setNumberOfSubtasks] = useState(2);
  const [subtasksValues, setSubtasksValue] = useState([{ title: "" }]);
  const [columnId, setColumnId] = useState(props.board.columns[0].id);

  let subtasksArray = Array.from({ length: numberOfSubtasks });

  const createSubtask = () => {
    if (numberOfSubtasks >= 6) return;
    setNumberOfSubtasks((prevValue) => prevValue + 1);
    subtasksArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subtasks = [];

    if (titleInputRef.current.value.trim() === "") {
      setTitleHasError(true);
      return;
    }

    for (const [_, value] of Object.entries(subtasksValues)) {
      subtasks.push(value);
    }

    axios
      .post(
        `http://localhost:8000/board/${id}/task`,
        {
          title: titleInputRef.current.value,
          description: descriptionInputRef.current.value,
          subtasks,
          boardId: id,
          columnId: columnId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then(() => {
        getBoardRequest(id, token, props.setBoard);
        props.onClick();
      });
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <h2
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } font-bold text-lg`}
        >
          Add New Task
        </h2>
        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            Title
          </Label>
          <Input
            placeholder="e.g. Take coffee break"
            id="title"
            ref={titleInputRef}
          />
          {titleHasError && (
            <p className="text-red font-bold text-sm">Can't be empty</p>
          )}
        </InputValidator>
        <InputValidator>
          <Label htmlFor="description" className="font-bold text-xs mb-2">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
            ref={descriptionInputRef}
          />
        </InputValidator>
        <InputValidator>
          <Label>Subtasks</Label>
          {subtasksArray.map((_, index) => {
            const handleChange = (event) => {
              setSubtasksValue((prev) => {
                return { ...prev, [index]: { title: event.target.value } };
              });
            };
            return (
              <Input
                className="mt-2"
                palceholder="Subtask name"
                key={index}
                onChange={handleChange}
              />
            );
          })}
        </InputValidator>
        <Button
          className="bg-purple bg-opacity-10 mt-3 text-purple"
          onClick={createSubtask}
        >
          + Add New Subtask
        </Button>
        <Label>Status</Label>
        <Select columns={props.board.columns} setId={setColumnId} />
        <Button type="submit" className="bg-purple text-white">
          Create Task
        </Button>
      </form>
    </Modal>
  );
};

const CreateTaskForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={props.onClick}
          board={props.board}
          setBoard={props.setBoard}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default CreateTaskForm;
