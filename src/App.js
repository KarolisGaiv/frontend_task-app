import "./styles/main.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import MoonIcon from "./images/icon-moon.svg";
import SunIcon from "./images/icon-sun.svg";
import TaskList from "./components/TaskList/TaskList";
import templateTasks from "./data.json";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const contentClassess = classNames("content", {
    "content --light": isLightMode,
    "content --dark": !isLightMode,
  });
  const headerClassess = classNames("header", {
    "header --light": isLightMode,
    "header --dark": !isLightMode,
  });
  const newTaskForm = classNames("header__new-task-form", {
    "header__new-task-form --light": isLightMode,
    "header__new-task-form --dark": !isLightMode,
  });

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      saveTasks(templateTasks);
    } else {
      setTasks(tasks);
    }
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  }

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let updatedTaskList = [...tasks];
    updatedTaskList.push({ name: userInput, completed: false });
    saveTasks(updatedTaskList);
    setUserInput("");
    loadTasks();
  }

  function changeTheme() {
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={contentClassess}>
      <header className={headerClassess}></header>
      <main className="app-content">
        <div className="header__top">
          <h1 className="header__top__text">todo</h1>
          <button className="header__theme-btn" onClick={changeTheme}>
            {isLightMode ? (
              <img src={MoonIcon} alt="moon icon" className="header__icon" />
            ) : (
              <img src={SunIcon} alt="sun icon" className="header__icon" />
            )}
          </button>
        </div>
        <form className={newTaskForm} onSubmit={handleFormSubmit}>
          <button type="submit"></button>
          <label htmlFor="input-field" className="visuallyhidden">
            Create a new todo
          </label>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="header__new-task-form__input-field"
            id="input-field"
            onChange={handleInput}
            value={userInput}
            aria-label="fullname"
          />
        </form>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          isLightMode={isLightMode}
          saveTasks={saveTasks}
        />
      </main>
    </div>
  );
}

export default App;
