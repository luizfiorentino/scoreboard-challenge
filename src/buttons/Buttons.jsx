import React from "react";
import { useContext } from "react";
import { scoreBoardContext } from "../scoreboard/Scoreboard";
import { usePlayer } from "../contexts/PlayerContext";

export default function Buttons(props) {
  const {
    player,
    score,
    incrementScoreByOne,
    incrementScoreByFive,
    resetScore,
    decrementScoreByOne,
    decrementScoreByFive,
    decrementScoreByFifty,
    incrementScoreByFifty,
  } = usePlayer(props.id);

  return (
    <div>
      <div className="buttons">
        {score >= 10 && (
          <button className="btn-inner" onClick={decrementScoreByFifty}>
            - 50%
          </button>
        )}
        {score >= 10 && (
          <button className="btn-inner" onClick={decrementScoreByFive}>
            - 5
          </button>
        )}{" "}
        {score >= 10 && (
          <button className="btn-inner" onClick={decrementScoreByOne}>
            - 1
          </button>
        )}{" "}
        {score > 0 && score >= 10 && (
          <button className="btn-inner" onClick={resetScore}>
            Reset
          </button>
        )}{" "}
        {score < 100 && (
          <button className="btn-inner" onClick={incrementScoreByOne}>
            + 1
          </button>
        )}{" "}
        {score <= 95 && (
          <button className="btn-inner" onClick={incrementScoreByFive}>
            + 5
          </button>
        )}{" "}
        {score >= 10 && score < 66 && (
          <button className="btn-inner" onClick={incrementScoreByFifty}>
            + 50%
          </button>
        )}{" "}
      </div>
    </div>
  );
}
