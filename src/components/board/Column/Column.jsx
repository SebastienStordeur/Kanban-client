import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";

const Column = ({ column, columns, tasks, setBoard }) => {
  return (
    <section className="w-72 h-screen py-6 mx-4">
      <h2 className="uppercase font-bold text-sm tracking-widest">
        {column.title}
      </h2>
      {tasks &&
        tasks.map((task) => (
          <Task
            task={task}
            columns={columns}
            key={task._id}
            setBoard={setBoard}
          />
        ))}
    </section>
  );
};

Column.propTypes = {
  column: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
  }),
  tasks: PropTypes.array,
  setBoard: PropTypes.func,
};

export default React.memo(Column);
