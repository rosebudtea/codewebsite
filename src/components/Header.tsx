import headerImg from "../assets/codelogo1.png";

import "./Header.css";

export default function Header({ category, onSelect }) {
  return (
    <header id="header">
      <img src={headerImg} alt={"Rosy Code Logo"} />
      <div id="header-buttons">
        <button
          className={
            category === "Welcome" ? "active-button" : "inactive-button"
          }
          onClick={() => onSelect("Welcome")}
        >
          Welcome
        </button>
        <button
          className={category === "About" ? "active-button" : "inactive-button"}
          onClick={() => onSelect("About")}
        >
          About Me
        </button>
        <button
          className={category === "Code" ? "active-button" : "inactive-button"}
          onClick={() => onSelect("Code")}
        >
          Projects
        </button>
      </div>
    </header>
  );
}
