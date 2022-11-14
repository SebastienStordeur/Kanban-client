import React from "react";

const Task = (props) => {
  console.log("props", props);
  return (
    <article className="text-left w-72 h-24 bg-white font-bold rounded-lg px-4 py-6 my-6">
      <h3 className="text-black">{props.task.title}</h3>
      <p className="text-xs text-mediumGrey">0 on 3 subtasks</p>
    </article>
  );
};

export default Task;