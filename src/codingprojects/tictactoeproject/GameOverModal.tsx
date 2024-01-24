import { ForwardedRef, forwardRef } from "react";

type GameOverModalProps = { winner: string; onSelect: () => void };

const GameOverModal = forwardRef(
  (props: GameOverModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
    return (
      <dialog ref={ref}>
        {props.winner && <h2>{props.winner} won!</h2>}
        {!props.winner && <h2>It's a draw!</h2>}
        <form method="dialog">
          <button onClick={props.onSelect}>Rematch!</button>
        </form>
      </dialog>
    );
  },
);

export default GameOverModal;
