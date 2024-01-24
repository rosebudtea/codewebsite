import { ALL_ARCANA_CARDS } from "./cards";

export default function CardDisplay({ cardSymbol }) {
  const keyTyped = cardSymbol as keyof typeof ALL_ARCANA_CARDS;
  const card = ALL_ARCANA_CARDS[keyTyped];
  return (
    <>
      <h2>Title - {card.name}</h2>
      <h3>Keywords</h3>
      <h3>Meaning - Upright</h3>
      <h3>Meaning - Reversed</h3>
    </>
  );
}
