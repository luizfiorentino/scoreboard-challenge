import React from "react";
import { useState } from "react";
import "./styles.css";

export default function Scoreboard(props) {
  const [score, setScore] = useState(0);
  //console.log("props", props);

  let message;
  let color;

  if (props.score < 10) {
    message = "A journey of a 1000 miles start with a single step";
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

  const width = (props.score / 100) * 290;

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
          <p>{props.score}/100</p>
        </div>{" "}
        <div className="buttons">
          {props.score >= 10 ? (
            <button
              className="btn-inner"
              onClick={() => props.decrementFifty(props.id)}
            >
              - 50%
            </button>
          ) : undefined}
          {props.score >= 10 ? (
            <button
              className="btn-inner"
              onClick={() => props.decrementByFive(props.id)}
            >
              - 5
            </button>
          ) : undefined}{" "}
          {props.score >= 10 ? (
            <button
              className="btn-inner"
              onClick={() => props.decrementScoreByOne(props.id)}
            >
              - 1
            </button>
          ) : undefined}{" "}
          {props.score > 0 && props.score >= 10 ? (
            <button
              className="btn-inner"
              onClick={() => props.resetScore(props.id)}
            >
              Reset
            </button>
          ) : undefined}{" "}
          <button onClick={() => props.incrementScoreByOne(props.id)}>
            + 1
          </button>{" "}
          <button
            className="btn-inner"
            onClick={() => props.incrementByFive(props.id)}
          >
            + 5
          </button>{" "}
          {props.score >= 10 && props.score < 80 ? (
            <button onClick={() => props.incrementFifty(props.id)}>
              + 50%
            </button>
          ) : undefined}{" "}
        </div>
      </div>
    </div>
  );
}
