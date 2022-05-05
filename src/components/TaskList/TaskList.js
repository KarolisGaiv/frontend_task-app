import "./taskList.scss";
import React from "react";
import DeleteIcon from "../../images/icon-cross.svg";
import classNames from "classnames";

function TaskList({ isLightMode, tasks, setTasks, saveTasks }) {
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
    // Change button styling
    e.target.classList.toggle("--active");
  }

  function deleteTask(e) {
    let taskName = e.target.parentNode.parentNode.innerText;
    let updatedArr = [...tasks].filter((task) => task.name !== taskName);
    saveTasks(updatedArr);
  }

  function deleteCompleted() {
    let updatedArr = [...tasks].filter((task) => task.completed !== true);
    saveTasks(updatedArr);
  }

  function sortAllTasks() {
    const tasksArr = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasksArr);
  }

  function sortByActive() {
    const tasksArr = JSON.parse(localStorage.getItem("tasks"));
    let activeTasks = tasksArr.filter((task) => task.completed === false);
    setTasks(activeTasks);
  }

  function sortByCompleted() {
    const tasksArr = JSON.parse(localStorage.getItem("tasks"));
    let activeTasks = tasksArr.filter((task) => task.completed === true);
    setTasks(activeTasks);
  }

  return (
    <div className={taskWrapperClassess}>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.name}>
            <button
              onClick={toggleComplete}
              className={
                task.completed === true
                  ? "task-container__complete-btn --active"
                  : "task-container__complete-btn"
              }
            >
              {/* <img src={CheckIcon} alt="completed task icon" /> */}
            </button>
            <p
              className={
                task.completed === false
                  ? "task-container__task"
                  : "task-container__task task-container__task --completed"
              }
            >
              {task.name}
            </p>
            <button className="task-container__delete-btn" onClick={deleteTask}>
              <img src={DeleteIcon} alt="delete-btn" />
            </button>
          </div>
        );
      })}
      <div className="tasks-wrapper__bottom-container">
        <p className="tasks-wrapper__bottom-container__task-counter">
          {tasks.length} items left
        </p>
        <div>
          <button onClick={sortAllTasks}>all</button>
          <button onClick={sortByActive}>active</button>
          <button onClick={sortByCompleted}>completed</button>
        </div>
        <button
          onClick={deleteCompleted}
          className="tasks-wrapper__bottom-container__dlt-completed-btn"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TaskList;
