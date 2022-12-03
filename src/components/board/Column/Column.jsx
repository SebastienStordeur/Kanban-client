import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";

const Column = (props) => {
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

Column.propTypes = {
  tasks: PropTypes.array,
  setBoard: PropTypes.func,
};

export default React.memo(Column);
