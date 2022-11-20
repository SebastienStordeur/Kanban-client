import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const DeleteTaskForm = () => {
  const theme = useContext(ThemeContext);
  return (
    <Modal className="absolute bg-white p-6 text-left mx-auto rounded-md">
      <h2 className="text-red font-bold text-lg">Delete this task?</h2>
      <p className={`${theme.theme === "dark" ? "text-white" : ""} font-medium text-xs my-6`}>
        Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.
      </p>
      <Button className="bg-red text-white">Delete</Button>
      <Button className="bg-purple bg-opacity-10 text-purple">Cancel</Button>
    </Modal>
  );
};

export default DeleteTaskForm;
