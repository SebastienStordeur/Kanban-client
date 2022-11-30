import React from "react";
import Task from "../Task/Task";

const Column = (props) => {
  console.log(props);
  return (
    <section className="w-72 h-screen py-6 mx-4">
      <h2 className="uppercase font-bold text-sm tracking-widest">
        {props.column.title}
      </h2>
      {props.tasks &&
        props.tasks.map((task) => (
          <Task task={task} key={task._id} setBoard={props.setBoard} />
        ))}
    </section>
  );
};

export default React.memo(Column);
