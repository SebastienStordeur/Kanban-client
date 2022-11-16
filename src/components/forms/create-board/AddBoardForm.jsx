import React, { useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../InputValidator";
import Label from "../Label";

const AddBoardForm = () => {
  const boardInputRef = useRef(null);
  return (
    <form id="create-board-form">
      <h2 className="text-black font-bold text-lg">Add New Board</h2>
      <InputValidator>
        <Label htmlFor="board-name">Board Name</Label>
        <Input id="board-name" ref={boardInputRef} />
      </InputValidator>
      <InputValidator>
        Board Columns
        <Input />
        <Input />
      </InputValidator>
      <Button className="bg-purple bg-opactiy-10 text-purple">+ Add New Column</Button>
      <Button classNam="bg-purple text-white">Create New Board</Button>
    </form>
  );
};

export default AddBoardForm;
