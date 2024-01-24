import { useState } from "react";

import "./ComingSoon.css";

export default function ComingSoon({ projectName, underway, descrip, todos }) {
  const [showDescrip, setShowDescrip] = useState(false);
  const [showTodos, setShowTodos] = useState(false);

  function handleShowDescrip() {
    setShowDescrip((descripShowing) => {
      return !descripShowing;
    });
  }

  function handleShowTodos() {
    setShowTodos((todosShowing) => {
      return !todosShowing;
    });
  }

  return (
    <div id="coming-soon">
      <h2>{projectName}</h2>
      {!underway && <h2>COMING SOON!</h2>}
      {underway && (
        <>
          <h2>UNDER CONSTRUCTION!</h2>
          <p>
            Feel free to click around but be aware some features might not work
            yet.
          </p>
          <button onClick={handleShowDescrip}>Description</button>
          <button onClick={handleShowTodos}>To dos</button>
          {showDescrip && <p>{descrip}</p>}
          {showTodos && (
            <ul>
              {todos.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
