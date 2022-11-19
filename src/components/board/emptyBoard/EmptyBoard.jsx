import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";
import Button from "../../UI/Button";

const EmptyBoard = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center">
        <p>This board is empty. Create a new column to get started.</p>
        <div className="w-44">
          <Button className="bg-purple text-white">+ Add New Column</Button>
        </div>
      </div>
    </section>
  );
};

export default EmptyBoard;
