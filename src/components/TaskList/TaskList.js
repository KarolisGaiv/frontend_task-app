import "./taskList.scss";
import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks-wrapper">
      {tasks.map((task) => {
        return <div>{task.name}</div>;
      })}
    </div>
  );
}

export default TaskList;
