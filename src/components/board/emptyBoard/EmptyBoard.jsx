import React from "react";
import { useState } from "react";
import EditBoardForm from "../../forms/edit-board/EditBoardForm";
import Button from "../../UI/Button";

const EmptyBoard = ({ board }) => {
  const [addColumns, setAddColumns] = useState(false);
  const openEditBoard = () => {
    setAddColumns((prev) => !prev);
  };
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center">
        <p>This board is empty. Create a new column to get started.</p>
        <div className="w-44">
          <Button className="bg-purple text-white mt-3" onClick={openEditBoard}>
            + Add New Column
          </Button>
        </div>
      </div>
      {addColumns && <EditBoardForm board={board} onClick={openEditBoard} />}
    </section>
  );
};

export default EmptyBoard;
