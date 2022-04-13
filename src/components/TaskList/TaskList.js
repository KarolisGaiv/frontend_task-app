import "./taskList.scss";
import React from "react";
import DeleteIcon from "../../images/icon-cross.svg";
import classNames from "classnames";

function TaskList({ isLightMode, tasks, saveTasks }) {
  const taskWrapperClassess = classNames("tasks-wrapper", {
    "tasks-wrapper --light": isLightMode,
    "tasks-wrapper --dark": !isLightMode,
  });

  function toggleComplete(e) {
    let taskName = e.target.parentNode.innerText;
    let updatedArr = [...tasks];
    const targetTask = updatedArr.find((task) => task.name === taskName);
    targetTask.completed = !targetTask.completed;
    saveTasks(updatedArr);
  }

  function deleteTask(e) {
    let taskName = e.target.parentNode.parentNode.innerText;
    let updatedArr = [...tasks].filter((task) => task.name !== taskName);
    saveTasks(updatedArr);
  }

  return (
    <div className={taskWrapperClassess}>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.name}>
            <button
              onClick={toggleComplete}
              className="task-container__complete-btn"
            ></button>
            <p className="task-container__task">{task.name}</p>
            <button className="task-container__delete-btn" onClick={deleteTask}>
              <img src={DeleteIcon} alt="delete-btn" />
            </button>
          </div>
        );
      })}
      <div className="tasks-wrapper__bottom-container">
        <p className="tasks-wrapper__bottom-container__task-counter">
          {tasks.length} tasks left
        </p>
        <button className="tasks-wrapper__bottom-container__dlt-completed-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TaskList;
