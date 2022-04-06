import "./styles/main.scss";
import MoonIcon from "./images/icon-moon.svg";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(userInput);
    setUserInput("");
  }

  return (
    <div className="content">
      <header className="header">
        <div className="header__top">
          <h1 className="header__top__text">todo</h1>
          <img src={MoonIcon} alt="moon icon" className="header__icon" />
        </div>
        <form className="header__new-task-form" onSubmit={handleFormSubmit}>
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
    </div>
  );
}

export default App;
