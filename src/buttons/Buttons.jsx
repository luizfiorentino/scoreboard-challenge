import React from "react";
import { useContext } from "react";
import { scoreBoardContext } from "../scoreboard/Scoreboard";

export default function Buttons() {
  const {
    score,
    decrementScoreByFifty,
    decrementScoreByFive,
    decrementScoreByOne,
    resetScore,
    incrementScoreByOne,
    incrementScoreByFive,
    incrementScoreByFifty,
  } = useContext(scoreBoardContext);

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
