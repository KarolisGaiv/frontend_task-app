import "./styles/main.scss";
import MoonIcon from "./images/icon-moon.svg";

function App() {
  return (
    <main className="content">
      <header className="content__header">
        todo
        <img src={MoonIcon} alt="moon icon" className="content__header__icon" />
      </header>
    </main>
  );
}

export default App;
