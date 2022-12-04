import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";
import InputValidator from "../InputValidator";
import Label from "../Label";
import Title from "../Title";
import Textarea from "../../UI/Textarea";
import { editTaskRequest } from "../../../services/requests/EditTaskRequest";

const ModalOverlay = ({ task }) => {
  const { _id, title, description, columnId, subtasks } = task;
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const taskTitleRef = useRef(title);
  const descriptionInputRef = useRef(description);
  const [numberOfSubtasks, setNumberOfSubtasks] = useState(subtasks.length);
  const [subtasksValues, setSubtasksValues] = useState(subtasks);
  const [colId, setColId] = useState(columnId);
  let subtasksArray = Array.from({ length: numberOfSubtasks });

  const createNewSubtask = () => {
    if (numberOfSubtasks >= 4) return;
    setNumberOfSubtasks((prev) => (prev += 1));
    subtasksArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subtasks = [];

    for (const [_, value] of Object.entries(subtasksValues)) {
      subtasks.push(value);
    }

    const taskUpdate = {
      id: _id,
      title: taskTitleRef.current.value,
      description: descriptionInputRef.current.value,
      columnId: colId,
      subtasks,
    };

    editTaskRequest(_id, taskUpdate, auth.token);
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <Title>Edit Task</Title>

        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            Title
          </Label>
          <Input id="title" value={title} ref={taskTitleRef} />
        </InputValidator>
        <InputValidator>
          <Label htmlFor="description" className="font-bold text-xs mb-2">
            Description
          </Label>
          <Textarea value={description} ref={descriptionInputRef} />
        </InputValidator>
        <InputValidator>
          <Label>Subtasks</Label>
          {subtasksArray.map((_, index) => {
            const handleChange = (event) => {
              setSubtasksValues((prev) => {
                return {
                  ...prev,
                  [index]: {
                    ...subtasksValues[index],
                    title: event.target.value,
                  },
                };
              });
            };
            return (
              <Input
                className="mt-2"
                palceholder="Subtask name"
                key={index}
                value=""
                onChange={handleChange}
              />
            );
          })}
          <Button
            className="bg-purple bg-opacity-10 mt-3 text-purple"
            onClick={createNewSubtask}
          >
            + Add New Subtask
          </Button>
          <Button type="submit" className="bg-purple text-white mt-3">
            Update Board
          </Button>
        </InputValidator>
      </form>
    </Modal>
  );
};

const EditTaskForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay task={props.task} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default EditTaskForm;
