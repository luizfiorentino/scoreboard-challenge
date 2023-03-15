import React from "react";
import { useState, useContext, createContext } from "react";
import "./styles.css";
import ProgressBar from "../progressBar/ProgressBar";
import Buttons from "../buttons/Buttons";
import { playerContext } from "../App";

export const scoreBoardContext = createContext({});

export default function Scoreboard(props) {
  const { updateScore } = useContext(playerContext);

  function incrementScoreByOne() {
    updateScore(props.id, 1);
  }
  function incrementScoreByFive() {
    updateScore(props.id, 5);
  }
  function resetScore() {
    updateScore(props.id, -props.score);
  }
  function decrementScoreByOne() {
    updateScore(props.id, -1);
  }
  function decrementScoreByFive() {
    updateScore(props.id, -5);
  }
  function decrementScoreByFifty() {
    updateScore(props.id, -(props.score / 2));
  }
  function incrementScoreByFifty() {
    updateScore(props.id, props.score / 2);
  }
  // const [score, setScore] = useState(0);
  //console.log("props", props);

  const score = props.score;

  let message;
  let color;

  if (props.score < 10) {
    message = "A journey of a 1000 miles starts with a single step";
    color = "#db2607";
  } else if (props.score >= 10 && props.score < 45) {
    message = "C'mon you can do it";
    color = "#db2607";
  } else if (props.score >= 45 && props.score < 80) {
    message = "You're getting there";
    color = "#fab70c";
  } else if (props.score >= 80) {
    message = "Hold on! Finish strong";
    color = "#2ecc71";
  }

  const setMessage = () => {
    setText(message);
  };

  const [text, setText] = useState(message);
  //console.log("score, message:", score, message);
  const displayMessage = message;

  const width = (props.score / 100) * 610;

  return (
    <scoreBoardContext.Provider
      value={{
        width: width,
        color: color,
        score: score,
        incrementScoreByOne: incrementScoreByOne,
        incrementScoreByFive: incrementScoreByFive,
        resetScore: resetScore,
        decrementScoreByOne: decrementScoreByOne,
        decrementScoreByFive: decrementScoreByFive,
        decrementScoreByFifty: decrementScoreByFifty,
        incrementScoreByFifty: incrementScoreByFifty,
      }}
    >
      <div className="App">
        <div className="name-and-bar">
          <h3 className="name">{props.name}</h3>
          <ProgressBar />
          <Buttons />
        </div>

        <div className="body">
          <div className="msg-and-score">
            <p>{displayMessage}</p>
            <p>{Math.round(props.score)}/100</p>
          </div>{" "}
        </div>
      </div>
    </scoreBoardContext.Provider>
  );
}
