import { useState } from "react";
import { ALL_ARCANA_CARDS } from "./cards";

import CardSpread from "./CardSpread";

function showCard(cardSymbol) {
  if (cardSymbol) {
    const cardArray = cardSymbol.split(":");
    const keyTyped = cardArray[0] as keyof typeof ALL_ARCANA_CARDS;
    const card = ALL_ARCANA_CARDS[keyTyped];
    return (
      <>
        {card && (
          <div>
            {card.name} {cardArray[1] === "u" ? "Upright" : "Reversed"}
          </div>
        )}
      </>
    );
  }
}

export default function CardManager({
  onSelect,
  cardSpread,
  cardRevealTurns,
  maxCards,
  cards,
}) {
  const [nextCard, setNextCard] = useState(0);
  const [currCard, setCurrCard] = useState("");
  const [spread, setSpread] = useState([
    ...cardSpread.map((array) => [...array]),
  ]);

  function handleCurrCard(cardSymbol) {
    setCurrCard(cardSymbol);
  }

  function handleNextCard() {
    setNextCard((currNum) => {
      if (currNum < maxCards) {
        return currNum + 1;
      } else {
        return currNum;
      }
    });
  }

  function revealCard() {
    const card = cards[nextCard];
    updateCardSpread();
    handleNextCard();
    return card;
  }

  function updateCardSpread() {
    const cardRevealTurn = cardRevealTurns[nextCard];
    const card = cards[nextCard];

    setSpread((prevSpread) => {
      const updatedSpread = [...prevSpread];
      let up = "u";
      if (!card.upright) {
        up = "d";
      }
      updatedSpread[cardRevealTurn.x][cardRevealTurn.y] =
        `${card.symbol}:${up}`;
      return updatedSpread;
    });
  }

  return (
    <>
      <CardSpread onSelect={handleCurrCard} spread={spread} type={"specific"} />
      {showCard && showCard(currCard)}
      <div id="spread-choices">
        {nextCard < maxCards && (
          <button onClick={revealCard}>Reveal Card</button>
        )}
        <button onClick={() => onSelect("")}>Back</button>
      </div>
    </>
  );
}
