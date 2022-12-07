import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../store/theme-context";
import Option from "./Option";

const Select = ({ id, columns, setId }) => {
  const theme = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState("");

  const openMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const setActiveValueHandler = (value, id) => {
    setActiveValue(value);
    setId(id);
  };

  return (
    <div className="border-lines w-full h-10 mb-2 relative">
      <ul
        className="h-10 py-1 px-4 w-full bg-veryDarkGrey absolute"
        onClick={openMenuHandler}
      >
        <label
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } text-sm`}
          id={activeValue ? activeValue : id}
        >
          {activeValue ? activeValue : columns[0].title}
        </label>
        <div className="absolute w-full left-0 top-0 bg-black">
          {isMenuOpen &&
            columns.map((column) => (
              <Option
                value={column.title}
                activeValue={activeValue}
                id={column._id}
                key={column._id}
                onClick={setActiveValueHandler}
              />
            ))}
        </div>
      </ul>
    </div>
  );
};

export default Select;
