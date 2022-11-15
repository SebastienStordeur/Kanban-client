import React from "react";
import Task from "../Task/Task";

const Column = (props) => {
  console.log("tasks", props.tasks);
  return (
    <section className="w-72 h-screen py-6 mx-4">
      <h2 className="uppercase font-bold text-sm tracking-widest">{props.column.column}</h2>
      {props.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </section>
  );
};

export default Column;
