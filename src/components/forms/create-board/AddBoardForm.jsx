import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import InputValidator from "../InputValidator";
import Label from "../Label";

const AddBoardForm = () => {
  const auth = useContext(AuthContext);
  const boardInputRef = useRef(null);

  const [numberOfColumns, setNumberOfColumns] = useState(2);
  const [columnsValues, setColumnsValue] = useState([{ column: "" }]);

  let columnsArray = Array.from({ length: numberOfColumns });

  const createColumn = () => {
    if (numberOfColumns >= 4) return;
    setNumberOfColumns((prevValue) => prevValue + 1);
    columnsArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const columns = [];

    for (const [key, value] of Object.entries(columnsValues)) {
      console.log("key", key, "value", value);
      columns.push(value);
    }
    console.log(columns);

    axios
      .post(
        "http://localhost:8000/board",
        {
          title: boardInputRef.current.value,
          columns: columns,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((response) => console.log(response));
  };

  return (
    <Modal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form id="create-board-form" onSubmit={handleSubmit}>
        <h2 className="text-black font-bold text-lg">Add New Board</h2>
        <InputValidator>
          <Label htmlFor="board-name">Board Name</Label>
          <Input id="board-name" ref={boardInputRef} />
        </InputValidator>
        <InputValidator>
          Board Columns
          {columnsArray.map((_, index) => {
            const handleChange = (event) => {
              setColumnsValue((prev) => {
                return { ...prev, [index]: { column: event.target.value } };
              });
            };

            return <Input className="mt-2" placeholder="Column name" key={index} onChange={handleChange} />;
          })}
        </InputValidator>
        <Button className="bg-purple bg-opacity-10 text-purple" onClick={createColumn}>
          + Add New Column
        </Button>
        <Button type="submit" className="bg-purple text-white">
          Create New Board
        </Button>
      </form>
    </Modal>
  );
};

export default AddBoardForm;
