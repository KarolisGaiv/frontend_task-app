import "./styles/main.scss";
import MoonIcon from "./images/icon-moon.svg";
import Test from "./images/icon-cross.svg";

function App() {
  return (
    <div className="content">
      <header className="header">
        <div className="header__top">
          <h1 className="header__top__text">todo</h1>
          <img src={MoonIcon} alt="moon icon" className="header__icon" />
        </div>
        <form className="header__new-task-form">
          <input
            type="text"
            placeholder="Create a new todo..."
            className="header__new-task-form__input-field"
          />
        </form>
      </header>
    </div>
  );
}

export default App;
