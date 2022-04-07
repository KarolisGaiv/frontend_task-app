import "./taskList.scss";
import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks-wrapper">
      {tasks.map((task) => {
        return (
          <div className="task-container">
            <button className="task-container__complete-btn"></button>
            <p className="task-container__task">{task.name}</p>
            <button className="task-container__delete-btn"></button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;