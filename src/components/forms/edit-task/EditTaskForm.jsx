import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";
import InputValidator from "../InputValidator";
import Label from "../Label";

const ModalOverlay = (props) => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const taskTitleRef = useRef();
  const descriptionInputRef = useRef();
  const [numberOfSubtasks, setNumberOfSubtasks] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(
      "http://localhost:8000/task",
      {},
      { headers: { Authorization: `Bearer ${auth.token}` } }
    );
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <h2
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } font-bold text-lg`}
        >
          Edit Task
        </h2>
        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            <Input id="title" value={""} ref={taskTitleRef} />
          </Label>
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
          <Button
            className="bg-purple bg-opacity-10 mt-3 text-purple" /* onClick={createColumn} */
          >
            + Add New Column
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
        <ModalOverlay onClick={props.onClick} board={props.board} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default EditTaskForm;
