import React from "react";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import InputValidator from "../InputValidator";
import Button from "../../UI/Button";
import Label from "../Label";

const CreateTaskForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="absolute bg-white p-6 rounded-md text-left">
      <h2 className="text-black font-bold text-lg">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <InputValidator>
          <Label htmlFor="title" className="font-bold text-xs mb-2">
            Title
          </Label>
          <Input placeholder="e.g. Take coffee break" id="title" />
        </InputValidator>
        <InputValidator>
          <Label htmlFor="description" className="font-bold text-xs mb-2">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="e.g. It’s always good to take a break. This 
              15 minute break will  recharge the batteries a little."
          />
        </InputValidator>
        <Button className="bg-opacity-10 text-purple">+ Add New Subtask</Button>
        <Button type="submit" className="text-white">
          Create Task
        </Button>
      </form>
    </section>
  );
};

export default CreateTaskForm;
