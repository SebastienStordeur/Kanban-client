import React, { useContext, useState, useRef } from "react";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import InputValidator from "../InputValidator";
import Button from "../../UI/Button";
import Label from "../Label";
import Modal from "../../UI/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";

const CreateTaskForm = () => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const boardId = useParams();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const [numberOfSubtasks, setNumberOfSubtasks] = useState(2);
  const [subtasksValues, setSubtasksValue] = useState([{ title: "" }]);

  let subtasksArray = Array.from({ length: numberOfSubtasks });

  const createSubtask = () => {
    if (numberOfSubtasks >= 6) return;
    setNumberOfSubtasks((prevValue) => prevValue + 1);
    subtasksArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subtasks = [];

    for (const [key, value] of Object.entries(subtasksValues)) {
      subtasks.push(value);
    }

    axios
      .post(
        `http://localhost:8000/board/${boardId}/task`,
        {
          title: titleInputRef.current.value,
          description: descriptionInputRef.current.value,
          subtasks,
          boardId: boardId.id,
          columnId: 25,
        },
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${auth.token}` } }
      )
      .then((response) => console.log(response));
  };

  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <h2 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>Add New Task</h2>
        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            Title
          </Label>
          <Input placeholder="e.g. Take coffee break" id="title" ref={titleInputRef} />
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

            return <Input className="mt-2" palceholder="Subtask name" key={index} onChange={handleChange} />;
          })}
        </InputValidator>
        <Button className="bg-purple bg-opacity-10 mt-3 text-purple" onClick={createSubtask}>
          + Add New Subtask
        </Button>
        <Label>Status</Label>
        <select name="status">{}</select>
        <Button type="submit" className="bg-purple text-white">
          Create Task
        </Button>
      </form>
    </Modal>
  );
};

export default CreateTaskForm;
