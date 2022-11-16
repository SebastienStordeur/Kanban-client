import React from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const DeleteBoardForm = () => {
  return (
    <Modal>
      <h2 className="text-red font-bold text-lg">Delete this board?</h2>
      <p className="font-medium text-xs my-6">
        Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and
        cannot be reversed.
      </p>
      <Button className="bg-red text-white">Delete</Button>
      <Button className="bg-purple bg-opacity-10 text-purple">Cancel</Button>
    </Modal>
  );
};

export default DeleteBoardForm;
