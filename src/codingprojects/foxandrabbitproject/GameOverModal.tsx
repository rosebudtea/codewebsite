import { ForwardedRef, forwardRef } from "react";

type GameOverModalProps = { winner: string | undefined; onSelect: () => void };

const GameOverModal = forwardRef(
  (props: GameOverModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
    return (
      <dialog id="container" open={false} ref={ref}>
        <div id="game-over-modal">
          {props.winner && <h2>{props.winner} won!</h2>}
          {!props.winner && <h2>It's a draw!</h2>}
          <form method="dialog">
            <button onClick={props.onSelect}>REMATCH!</button>
          </form>
        </div>
      </dialog>
    );
  },
);

export default GameOverModal;
