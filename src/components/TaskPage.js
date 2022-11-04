import React from "react";
import { useParams } from "react-router";
import Task from "./Task";

const TaskPage = ({ tasks, completeTask }) => {
  const { status } = useParams();

  let filter = status.toLowerCase() === "done" ? true : false;

  return (
    <div>
      <h1>{status} Task Page</h1>
      {tasks
        .filter((task) => task.done === filter)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.done}
            completeTask={completeTask}
          />
        ))}
    </div>
  );
};

export default TaskPage;
