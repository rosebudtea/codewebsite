import { useState } from "react";

import Sidebar from "./Sidebar";
import FoxAndRabbit from "../codingprojects/foxandrabbitproject/FoxAndRabbit";
import TicTacToe from "../codingprojects/tictactoeproject/TicTacToe";
import InterestCalculator from "../codingprojects/interestcalculatorproject/InterestCalculator";
import Cartomancy from "../codingprojects/cartomancy/Cartomancy";
import XkcdComic from "../codingprojects/xkcd/XkcdComic";

export default function CodePost() {
  const [project, setProject] = useState("TicTacToe");

  function handleSetProject(project: string) {
    setProject(project);
  }

  function renderContent(project: string) {
    switch (project) {
      case "FoxAndRabbit":
        return <FoxAndRabbit />;
      case "InterestCalculator":
        return <InterestCalculator />;
      case "Cartomancy":
        return <Cartomancy />;
      case "XKCD":
        return <XkcdComic />;
      case "TicTacToe":
      default:
        return <TicTacToe />;
    }
  }

  return (
    <main id="with-sidebar">
      <Sidebar
        buttons={
          <>
            <button
              className={
                project === "TicTacToe" ? "active-button" : "inactive-button"
              }
              onClick={() => handleSetProject("TicTacToe")}
            >
              Tic-Tac-Toe
            </button>
            <button
              className={
                project === "FoxAndRabbit" ? "active-button" : "inactive-button"
              }
              onClick={() => handleSetProject("FoxAndRabbit")}
            >
              Fox and Rabbit
            </button>
            <button
              className={
                project === "InterestCalculator"
                  ? "active-button"
                  : "inactive-button"
              }
              onClick={() => handleSetProject("InterestCalculator")}
            >
              Interest Calculator
            </button>
            <button
              className={
                project === "Cartomancy" ? "active-button" : "inactive-button"
              }
              onClick={() => handleSetProject("Cartomancy")}
            >
              Cartomancy
            </button>
            <button
              className={
                project === "XKCD" ? "active-button" : "inactive-button"
              }
              onClick={() => handleSetProject("XKCD")}
            >
              XKCD
            </button>
          </>
        }
      />
      <div id="main-content">{renderContent(project)}</div>
    </main>
  );
}
