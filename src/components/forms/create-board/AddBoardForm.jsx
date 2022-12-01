import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { AuthContext } from "../../../store/auth-context";
import { ThemeContext } from "../../../store/theme-context";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";
import InputValidator from "../InputValidator";
import Label from "../Label";

const ModalOverlay = (props) => {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const boardInputRef = useRef(null);

  const [numberOfColumns, setNumberOfColumns] = useState(2);
  const [columnsValues, setColumnsValue] = useState([{ title: "" }]);

  let columnsArray = Array.from({ length: numberOfColumns });

  const createColumn = () => {
    if (numberOfColumns >= 4) return;
    setNumberOfColumns((prevValue) => prevValue + 1);
    columnsArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const columns = [];

    for (const [_, value] of Object.entries(columnsValues)) {
      columns.push(value);
    }

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
      .then((board) => {
        console.log(board);
        props.onAdd((prev) => [...prev, board.data]);
        props.onClick();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form id="create-board-form" onSubmit={handleSubmit}>
        <h2
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } font-bold text-lg`}
        >
          Add New Board
        </h2>
        <InputValidator>
          <Label htmlFor="board-name">Board Name</Label>
          <Input id="board-name" ref={boardInputRef} />
        </InputValidator>
        <InputValidator>
          <Label htmlFor="">Board Columns</Label>
          {columnsArray.map((_, index) => {
            const handleChange = (event) => {
              setColumnsValue((prev) => {
                return { ...prev, [index]: { title: event.target.value } };
              });
            };
            return (
              <Input
                className="mt-2"
                placeholder="Column name"
                key={index}
                onChange={handleChange}
              />
            );
          })}
        </InputValidator>
        <Button
          className="bg-purple bg-opacity-10 mt-3 text-purple"
          onClick={createColumn}
        >
          + Add New Column
        </Button>
        <Button type="submit" className="bg-purple text-white mt-3">
          Create New Board
        </Button>
      </form>
    </Modal>
  );
};

const AddBoardForm = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onAdd={props.onAdd} onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default AddBoardForm;
