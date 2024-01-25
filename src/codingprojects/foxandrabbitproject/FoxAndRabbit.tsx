import ComingSoon from "../comingsoon/ComingSoon";
import { useState, useRef } from "react";

import Gameboard from "./Gameboard";
import GameOverModal from "./GameOverModal";

import "./FoxAndRabbit.css";

const INITIAL_GAME_BOARD = [
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null],
];

function generateRandomCoords(fromx, tox, fromy, toy) {
  return {
    x: Math.floor(Math.random() * (tox - fromx + 1) + fromx),
    y: Math.floor(Math.random() * (toy - fromy + 1) + fromy),
  };
}

const initialRabbitPos = generateRandomCoords(0, 5, 0, 3);
let hutchPos = generateRandomCoords(6, 11, 4, 7);
const initialFoxPos = hutchPos;

export default function FoxAndRabbit() {
  const gameOverModal = useRef<HTMLDialogElement>(null);
  const [rabbitPos, setRabbitPos] = useState(initialRabbitPos);
  const [foxPos, setFoxPos] = useState(initialFoxPos);
  const [currTurn, setCurrTurn] = useState("rabbit");

  function movePlayer(rowIndex, colIndex) {
    if (currTurn === "rabbit") {
      setRabbitPos({ x: colIndex, y: rowIndex });
    } else {
      setFoxPos({ x: colIndex, y: rowIndex });
    }
    setCurrTurn((curr) => {
      if (curr === "rabbit") {
        return "fox";
      }
      return "rabbit";
    });
  }

  function resetGame() {
    setRabbitPos(initialRabbitPos);
    hutchPos = generateRandomCoords(6, 11, 4, 7);
    setFoxPos(hutchPos);
    setCurrTurn("rabbit");
  }

  function checkGameOver() {
    if (rabbitPos.x === foxPos.x && rabbitPos.y === foxPos.y) {
      return "Fox";
    } else if (rabbitPos.x === hutchPos.x && rabbitPos.y === hutchPos.y) {
      return "Rabbit";
    }
  }

  const gameOver = checkGameOver();
  if (gameOver) {
    gameOverModal.current?.showModal();
  }

  const descrip =
    "A small board game about a rabbit trying to get back to its burrow but finds it being guarded by a hungry fox. The rabbit must either find a way to lure the fox away from its burrow or gather enough energy to build a new one.";
  const todos = [
    "Variable gameboard sizes",
    "Add rules tab to the top of the board",
    "Add burrows to allow fast travel on the map",
    "Add carrots that allow the rabbit another win condition",
    "Give fox the ability to bury the carrots which will take the rabbit a random amount of turns to dig up",
    "?: Add a way for the rabbit to make decoys? That the fox must investigate if in a certain range of them",
    "?: Add dig spots to get material for the decoys",
    "Fix Graphics",
  ];

  return (
    <>
      <ComingSoon
        projectName={"Fox and Rabbit"}
        underway={true}
        descrip={descrip}
        todos={todos}
      />
      <GameOverModal
        ref={gameOverModal}
        winner={gameOver}
        onSelect={resetGame}
      />
      <div id="fox-and-rabbit">
        {/* {gameOver && (
          <div id="far-game-over">
            <h2>GAME OVER</h2>
            <p>{gameOver} Won!</p>
            <button onClick={resetGame}>Reset</button>
          </div>
        )} */}
        <Gameboard
          board={INITIAL_GAME_BOARD}
          onSelectSquare={movePlayer}
          rabbitPos={rabbitPos}
          foxPos={foxPos}
          hutchPos={hutchPos}
          currTurn={currTurn}
          gameOver={gameOver}
        />
      </div>
    </>
  );
}
