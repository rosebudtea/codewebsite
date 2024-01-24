import { useState } from "react";

import CardSpread from "./CardSpread";
import CardDisplay from "./CardDisplay";

const majorArcana = [
  ["F", "MAG", "HP", "EF", "EM"],
  ["HEI", "LOV", "CH", "JUS", "HER"],
  ["WF", "STR", "HM", "DEA", "TEM"],
  ["DEV", "TOW", "ST", "MO", "SUN"],
  ["JUD", "WOR"],
];
const wandsArcana = [
  ["WA", "W2", "W3", "W4", "W5"],
  ["W6", "W7", "W8", "W9", "W10"],
  ["WP", "WKN", "WQ", "WK"],
];
const swordsArcana = [
  ["SA", "S2", "S3", "S4", "S5"],
  ["S6", "S7", "S8", "S9", "S10"],
  ["SP", "SKN", "SQ", "SK"],
];
const pentaclesArcana = [
  ["PA", "P2", "P3", "P4", "P5"],
  ["P6", "P7", "P8", "P9", "P10"],
  ["PP", "PKN", "PQ", "PK"],
];
const cupsArcana = [
  ["CA", "C2", "C3", "C4", "C5"],
  ["C6", "C7", "C8", "C9", "C10"],
  ["CP", "CKN", "CQ", "CK"],
];

export default function AllCards({ onSelect }) {
  const [currCard, setCurrCard] = useState("");
  function handleCurrCard(cardSymbol) {
    setCurrCard(cardSymbol);
  }

  return (
    <>
      {currCard && <CardDisplay cardSymbol={currCard} />}
      <h2>Major Arcana</h2>
      <CardSpread onSelect={handleCurrCard} spread={majorArcana} type={"all"} />
      <h2>Minor Arcana</h2>
      <h3>Suite of Wands</h3>
      <CardSpread onSelect={handleCurrCard} spread={wandsArcana} type={"all"} />
      <h3>Suite of Swords</h3>
      <CardSpread
        onSelect={handleCurrCard}
        spread={swordsArcana}
        type={"all"}
      />
      <h3>Suite of Pentacles</h3>
      <CardSpread
        onSelect={handleCurrCard}
        spread={pentaclesArcana}
        type={"all"}
      />
      <h3>Suite of Cups</h3>
      <CardSpread onSelect={handleCurrCard} spread={cupsArcana} type={"all"} />
      <div id="spread-choices">
        <button onClick={() => onSelect("")}>Back</button>
      </div>
    </>
  );
}
