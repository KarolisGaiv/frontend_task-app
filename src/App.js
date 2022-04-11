import "./styles/main.scss";
import { useState } from "react";
import classNames from "classnames";
import MoonIcon from "./images/icon-moon.svg";
import SunIcon from "./images/icon-sun.svg";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [userInput, setUserInput] = useState("");
  let tasks = [
    { name: "Complete online JavaScript course", completed: true },
    { name: "Jog around the park 3x", completed: false },
    { name: "10 minutes meditaion", completed: false },
    { name: "Read for 1 hour", completed: false },
    { name: "Pick up groceries", completed: false },
    { name: "Complete Todo App on Frontend Mentor", completed: false },
  ];

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

  function changeTheme() {
    setIsLightMode(!isLightMode);
  }

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    tasks.push({name: userInput, completed: false})
    console.log(tasks);
    setUserInput("");
  }

  return (
    <div className={contentClassess}>
      <header className={headerClassess}>
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
          />
        </form>
      </header>
      <TaskList tasks={tasks} isLightMode={isLightMode}/>
    </div>
  );
}

export default App;
