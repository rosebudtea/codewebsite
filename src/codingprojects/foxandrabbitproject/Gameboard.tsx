export default function Gameboard({
  board,
  onSelectSquare,
  rabbitPos,
  foxPos,
  hutchPos,
  currTurn,
  gameOver,
}) {
  function checkPos(currX, currY) {
    if (currTurn === "rabbit") {
      if (rabbitPos.x === currX) {
        if (rabbitPos.y === currY - 1 || rabbitPos.y === currY + 1) return true;
      } else if (rabbitPos.y === currY) {
        if (rabbitPos.x === currX - 1 || rabbitPos.x === currX + 1) return true;
      } else if (rabbitPos.x === currX - 1 || rabbitPos.x === currX + 1) {
        if (rabbitPos.y === currY - 1 || rabbitPos.y === currY + 1) return true;
      } else if (rabbitPos.y === currY - 1 || rabbitPos.y === currY + 1) {
        if (rabbitPos.x === currX - 1 || rabbitPos.x === currX + 1) return true;
      }
    } else if (currTurn === "fox") {
      if (foxPos.x === currX) {
        if (
          foxPos.y === currY - 1 ||
          foxPos.y === currY + 1 ||
          foxPos.y === currY - 2 ||
          foxPos.y === currY + 2
        )
          return true;
      } else if (foxPos.y === currY) {
        if (
          foxPos.x === currX - 1 ||
          foxPos.x === currX + 1 ||
          foxPos.x === currX - 2 ||
          foxPos.x === currX + 2
        )
          return true;
      }
    }
    return false;
  }

  return (
    <ol id="game-field">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="col">
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={
                    !checkPos(colIndex, rowIndex, foxPos, "fox") || gameOver
                  }
                >
                  {rowIndex === rabbitPos.y && colIndex === rabbitPos.x && "R"}
                  {rowIndex === foxPos.y && colIndex === foxPos.x && "F"}
                  {rowIndex === hutchPos.y && colIndex === hutchPos.x && "H"}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
