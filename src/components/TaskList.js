import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        name={task.name}
        status={task.done}
        completeTask={props.completeTask}
      />
    );
  });

  return <div>{tasks}</div>;
};

export default TaskList;
