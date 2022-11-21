import React, { useState } from "react";
import Option from "./Option";

const Select = (props) => {
  console.log(props.columns);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState("");

  const openMenuHandler = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  const setActiveValueHandler = (value) => {
    setActiveValue(value);
  };

  return (
    <div className="border-lines w-full h-10">
      <ul className="h-10 py-1 px-4 w-full bg-white" onClick={openMenuHandler}>
        <label id={activeValue ? activeValue : props.id}>{activeValue ? activeValue : props.columns[0].column}</label>
        <div>
          {isMenuOpen &&
            props.columns.map((column) => (
              <Option
                value={column.column}
                activeValue={activeValue}
                id={column.id}
                key={column.id}
                onClick={setActiveValueHandler}
              />
            ))}
        </div>
      </ul>
    </div>
  );
};

export default Select;
