import React, { useContext, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { Input, Button, Textarea, Modal } from "../../UI/index";
import { InputValidator, Label, Title, ErrorMessage } from "../index";
import Select from "./Select";
import Backdrop from "../Backdrop/Backdrop";
import { addTaskRequest } from "../../../services/requests/AddTaskRequest";

const ModalOverlay = (props) => {
  const auth = useContext(AuthContext);
  const { id } = useParams();
  const token = auth.token;
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [titleHasError, setTitleHasError] = useState(false);
  const [numberOfSubtasks, setNumberOfSubtasks] = useState(2);
  const [subtasksValues, setSubtasksValue] = useState([]);
  const [columnId, setColumnId] = useState(props.board.columns[0]._id);
  let subtasksArray = Array.from({ length: numberOfSubtasks });

  const createSubtask = () => {
    if (numberOfSubtasks >= 4) return;
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

    const taskRequest = {
      id,
      task: {
        title: titleInputRef.current.value,
        description: descriptionInputRef.current.value,
        columnId: columnId,
        subtasks,
      },
    };

    addTaskRequest(taskRequest, token, props.setBoard, props.onClick);
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <Title>Add New Task</Title>
        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            Title
          </Label>
          <Input
            placeholder="e.g. Take coffee break"
            id="title"
            ref={titleInputRef}
          />
          {titleHasError && <ErrorMessage>Can't be empty</ErrorMessage>}
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
        <Select
          columns={props.board.columns}
          setId={setColumnId}
          id={columnId}
        />
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
