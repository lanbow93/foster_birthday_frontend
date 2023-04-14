import React from "react";

const GameOver = ({ restartGame }) => {
  return (
    <div className="centered gameover">
      <span className="successful"><h1>Congratulations on beating the puzzle!</h1></span>
      <span className="successful"><h1>Annnnnnnnd</h1></span>
      {/** Display a birthday message for "Foster" */}
      <span className="successful"><h1>Happy Birthday Foster!</h1></span>
      <button className="restart-button" onClick={restartGame}>
        Play Again?
      </button>
    </div>
  );
};

export default GameOver;

