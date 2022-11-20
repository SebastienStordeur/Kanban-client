import React from "react";
import Modal from "../../UI/Modal";

const Subtask = (props) => {
  console.log(props);
  return (
    <article className="flex items-center bg-veryDarkGrey h-10 mb-2 px-4 rounded-md">
      <input type="checkbox" defaultChecked={props.subtask.isCompleted}></input>
      <h3 className="text-xs ml-4">{props.subtask.title}</h3>
    </article>
  );
};

export default Subtask;
