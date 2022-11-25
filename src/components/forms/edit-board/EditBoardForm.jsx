import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../store/theme-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Backdrop from "../Backdrop/Backdrop";
import InputValidator from "../InputValidator";
import Label from "../Label";

const ModalOverlay = (props) => {
  console.log(props);
  const theme = useContext(ThemeContext);
  const { id } = useParams();

  const boardInputRef = useRef(props.board.title);
  const [numberOfColumns, setNumberOfColumns] = useState(props.board.columns.length);

  let columnsArray = Array.from({ length: numberOfColumns });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8000/board/${id}`);
  };
  return (
    <Modal className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handleSubmit}>
        <h2 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>Edit Board</h2>
        <InputValidator>
          <Label htmlFor="board-name">Board Name</Label>
          <Input id="board-name" value={props.board.title} />
        </InputValidator>
        <InputValidator>
          <Label htmlFor="">Board Columns</Label>
          {columnsArray.map((_, index) => {
            console.log(props.board.columns[index].column);
            const handleChange = (event) => {};
            return (
              <Input
                className="mt-2"
                placeholder="Column name"
                key={index}
                value={props.board.columns[index].column}
                onChange={handleChange}
              />
            );
          })}
          <Button className="bg-purple bg-opacity-10 mt-3 text-purple" /* onClick={createColumn} */>
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
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick} board={props.board} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default EditBoardForm;
