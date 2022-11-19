import React from "react";

const Task = (props) => {
  const completedTasks = props.task.subtasks.filter((subtask) => subtask.isCompleted === true);
  return (
    <article className="text-left w-72 h-24 bg-white font-bold rounded-lg px-4 py-6 my-6 cursor-pointer">
      <h3 className="text-black">{props.task.title}</h3>
      {props.task.subtasks.length >= 1 && (
        <p className="text-xs text-mediumGrey">
          {completedTasks.length} on {props.task.subtasks.length} subtasks
        </p>
      )}
    </article>
  );
};

export default React.memo(Task);
