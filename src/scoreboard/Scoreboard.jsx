import React from "react";
import { useState } from "react";
import "./styles.css";

export default function Scoreboard(props) {
  function incrementScoreByOne() {
    props.updateScore(props.id, 1);
  }
  function incrementScoreByFive() {
    props.updateScore(props.id, 5);
  }
  function resetScore() {
    props.updateScore(props.id, -props.score);
  }
  function decrementScoreByOne() {
    props.updateScore(props.id, -1);
  }
  function decrementScoreByFive() {
    props.updateScore(props.id, -5);
  }
  function decrementScoreByFifty() {
    props.updateScore(props.id, -(props.score / 2));
  }
  function incrementScoreByFifty() {
    props.updateScore(props.id, props.score / 2);
  }
  const [score, setScore] = useState(0);
  //console.log("props", props);

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
    <div className="App">
      <div className="name-and-bar">
        <h3 className="name">{props.name}</h3>
        <div className="container">
          <div className="bar">
            <div
              className="inner-bar"
              data-percentage="70%"
              style={{ width: width, backgroundColor: color }}
            ></div>
            <script src="main.js"></script>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="msg-and-score">
          <p>{displayMessage}</p>
          <p>{Math.round(props.score)}/100</p>
        </div>{" "}
        <div className="buttons">
          {props.score >= 10 ? (
            <button className="btn-inner" onClick={decrementScoreByFifty}>
              - 50%
            </button>
          ) : undefined}
          {props.score >= 10 ? (
            <button className="btn-inner" onClick={decrementScoreByFive}>
              - 5
            </button>
          ) : undefined}{" "}
          {props.score >= 10 ? (
            <button className="btn-inner" onClick={decrementScoreByOne}>
              - 1
            </button>
          ) : undefined}{" "}
          {props.score > 0 && props.score >= 10 ? (
            <button className="btn-inner" onClick={resetScore}>
              Reset
            </button>
          ) : undefined}{" "}
          {props.score < 100 ? (
            <button className="btn-inner" onClick={incrementScoreByOne}>
              + 1
            </button>
          ) : undefined}{" "}
          {props.score <= 95 ? (
            <button className="btn-inner" onClick={incrementScoreByFive}>
              + 5
            </button>
          ) : undefined}{" "}
          {props.score >= 10 && props.score < 66 ? (
            <button className="btn-inner" onClick={incrementScoreByFifty}>
              + 50%
            </button>
          ) : undefined}{" "}
        </div>
      </div>
    </div>
  );
}
