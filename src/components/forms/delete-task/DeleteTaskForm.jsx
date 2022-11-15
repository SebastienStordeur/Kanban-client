import React from "react";
import Button from "../../UI/Button";

const DeleteTaskForm = () => {
  return (
    <div className="absolute bg-white p-6 text-left mx-auto rounded-md">
      <h2 className="text-red font-bold text-lg">Delete this task?</h2>
      <p className="font-medium text-xs my-6">
        Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.
      </p>
      <Button className="bg-red text-white">Delete</Button>
      <Button className="bg-purple bg-opacity-10 text-purple">Cancel</Button>
    </div>
  );
};

export default DeleteTaskForm;
