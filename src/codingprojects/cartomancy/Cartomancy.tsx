import { useState } from "react";

import ComingSoon from "../comingsoon/ComingSoon";
import CardManager from "./CardManager";
import AllCards from "./AllCards";

import { CARD_LIST } from "./cards";
import {
  DAILY_CARD_SPREAD,
  DC_REVEAL_TURNS,
  THREE_CARD_SPREAD,
  TC_REVEAL_TURNS,
  FIVE_CARD_SPREAD,
  FC_REVEAL_TURNS,
  CROSS_CARD_SPREAD,
  CC_REVEAL_TURNS,
} from "./spreads";

import "./Cartomancy.css";

function shuffleCards() {
  const cards = [...CARD_LIST];
  for (let i = 0; i < 100; i++) {
    const num1 = Math.floor(Math.random() * 79);
    const num2 = Math.floor(Math.random() * 79);
    const invert = Math.random();
    if (invert > 0.9) {
      cards[num1].upright = !cards[num1].upright;
      cards[num2].upright = !cards[num2].upright;
    }
    const card = cards[num1];
    cards[num1] = cards[num2];
    cards[num2] = card;
  }
  return cards;
}

const spreadsArray = [
  { name: "All Cards", spread: "all" },
  { name: "Daily", spread: "daily" },
  { name: "Three Card", spread: "three" },
  { name: "Five Card", spread: "five" },
  { name: "Celtic Cross", spread: "cross" },
];

const descrip =
  "A virtual tarot deck that allows for easy set up and access to tarot readings";
const todos = [
  "More Card Layouts",
  "Finish Card Descriptions",
  "Make shuffling more robust",
  "Allow for disabling of card orientation",
  "Fix Graphics",
];

export default function Cartomancy() {
  const [spread, setSpread] = useState("");

  function handleChoseSpread(chosen) {
    setSpread(chosen);
  }

  function renderSpread() {
    const cards = shuffleCards();
    let cardSpread = DAILY_CARD_SPREAD;
    let revealTurns = DC_REVEAL_TURNS;
    let maxCards = 1;
    switch (spread) {
      case "all":
        return <AllCards onSelect={handleChoseSpread} />;
      case "cross":
        cardSpread = CROSS_CARD_SPREAD;
        revealTurns = CC_REVEAL_TURNS;
        maxCards = 10;
        break;
      case "five":
        cardSpread = FIVE_CARD_SPREAD;
        revealTurns = FC_REVEAL_TURNS;
        maxCards = 5;
        break;
      case "three":
        cardSpread = THREE_CARD_SPREAD;
        revealTurns = TC_REVEAL_TURNS;
        maxCards = 3;
        break;
      case "daily":
      default:
        break;
    }
    return (
      <CardManager
        onSelect={handleChoseSpread}
        cardRevealTurns={revealTurns}
        maxCards={maxCards}
        cardSpread={cardSpread}
        cards={cards}
      />
    );
  }

  return (
    <>
      <ComingSoon
        projectName={"Cartomancy"}
        underway={true}
        descrip={descrip}
        todos={todos}
      />
      <div id="cartomancy">
        {!spread && (
          <>
            <h2>Tarot Spreads</h2>
            <div id="spread-choices">
              {spreadsArray.map((item) => {
                return (
                  <button onClick={() => handleChoseSpread(item.spread)}>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </>
        )}
        {spread && renderSpread()}
      </div>
    </>
  );
}
