import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { Button, Input, Modal } from "../../UI/index";
import { InputValidator, Label, Title } from "../index";
import Backdrop from "../Backdrop/Backdrop";
import { editBoardRequest } from "../../../services/requests/EditBoardRequest";

const ModalOverlay = (props) => {
  const auth = useContext(AuthContext);
  const { id } = useParams();
  const boardInputRef = useRef(props.board.title);
  const [numberOfColumns, setNumberOfColumns] = useState(
    props.board.columns.length
  );
  const [columnsValues, setColumnsValues] = useState(props.board.columns);

  let columnsArray = Array.from({ length: numberOfColumns });

  const createColumn = () => {
    if (numberOfColumns >= 4) return;
    setNumberOfColumns((prev) => prev + 1);
    columnsArray.length++;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const columns = [];

    for (const [_, value] of Object.entries(columnsValues)) {
      columns.push(value);
    }

    const updateBoard = { id, title: boardInputRef.current.value, columns };

    editBoardRequest(updateBoard, auth.token);
    /*     axios.put(
      `http://localhost:8000/board/${id}`,
      {
        id,
        title: boardInputRef.current.value,
        columns: columns,
      },
      {
        headers: { Authorization: `Bearer ${auth.token}` },
      }
    ); */
  };

  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <Title>Edit Board</Title>
        <InputValidator>
          <Label htmlFor="board-name">Board Name</Label>
          <Input
            id="board-name"
            value={props.board.title}
            ref={boardInputRef}
          />
        </InputValidator>
        <InputValidator>
          <Label htmlFor="">Board Columns</Label>
          {columnsArray.map((_, index) => {
            const handleChange = (event) => {
              setColumnsValues((prev) => {
                return {
                  ...prev,
                  [index]: {
                    ...columnsValues[index],
                    title: event.target.value,
                  },
                };
              });
            };

            return (
              <Input
                className="mt-2"
                placeholder="Column name"
                key={index}
                value="" /* {
                  columnsValues[index].title
                    ? props.board.columns[index].title
                    : ""
                } */
                onChange={handleChange}
              />
            );
          })}
          <Button
            className="bg-purple bg-opacity-10 mt-3 text-purple"
            onClick={createColumn}
          >
            + Add New Column
          </Button>
          <Button type="submit" className="bg-purple text-white mt-3">
            Update Board
          </Button>
        </InputValidator>
      </form>
    </Modal>
  );
};

const EditBoardForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay board={props.board} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default EditBoardForm;
