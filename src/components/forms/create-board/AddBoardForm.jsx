import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const AddBoardForm = () => {
  return (
    <form id="create-board-form">
      <h2 className="text-black font-bold text-lg">Add New Board</h2>
      <div>
        <label htmlFor="board-name">Board Name</label>
        <Input id="board-name" />
      </div>
      <div>
        Board Columns
        <Input />
        <Input />
      </div>
      <Button>+ Add New Column</Button>
      <Button>Create New Board</Button>
    </form>
  );
};

export default AddBoardForm;
