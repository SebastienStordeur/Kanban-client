import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../store/theme-context";
import Option from "./Option";

const Select = (props) => {
  const theme = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState("");

  const openMenuHandler = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  const setActiveValueHandler = (value, id) => {
    setActiveValue(value);
    props.setId(id);
  };

  return (
    <div className="border-lines w-full h-10 mb-2 relative">
      <ul className="h-10 py-1 px-4 w-full bg-veryDarkGrey absolute" onClick={openMenuHandler}>
        <label
          className={`${theme.theme === "dark" ? "text-white" : "text-black"} text-sm`}
          id={activeValue ? activeValue : props.id}
        >
          {activeValue ? activeValue : props.columns[0].column}
        </label>
        <div className="absolute w-full left-0 top-0 bg-black">
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
