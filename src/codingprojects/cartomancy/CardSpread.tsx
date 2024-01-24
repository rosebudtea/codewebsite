export default function CardSpread({ onSelect, spread, type }) {
  return (
    <ol id="card-spread" className="row">
      {spread.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="col">
            {row.map((cardSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={
                    type === "all"
                      ? "all-tarot-buttons"
                      : "spread-tarot-buttons"
                  }
                  onClick={() => onSelect(cardSymbol)}
                  disabled={cardSymbol === "X"}
                >
                  {cardSymbol !== "X" && cardSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
