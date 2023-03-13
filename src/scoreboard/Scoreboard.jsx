import React from "react";
import { useState } from "react";

export default function Scoreboard(props) {
  const [score, setScore] = useState(0);
  //console.log("props", props);

  let message;

  if (score < 10) {
    message = "A journey of a 1000 miles start with a single step";
  } else if (score >= 10 && score < 45) {
    message = "C'mon you can do it";
  } else if (score >= 45 && score < 80) {
    message = "You're getting there";
  } else if (score >= 80) {
    message = "Hold on! Finish strong";
  }

  const setMessage = () => {
    setText(message);
  };

  const [text, setText] = useState(message);
  //console.log("score, message:", score, message);
  const displayMessage = message;

  return (
    <div className="App">
      <h1>{props.name}</h1>
      <h3>bar comes here ;)</h3>
      <p>{props.score}/100</p>{" "}
      {score >= 10 ? (
        <button
          onClick={() => {
            setScore(score - score / 2);
            setMessage(message);
          }}
        >
          - 50%
        </button>
      ) : undefined}
      {score >= 10 ? (
        <button
          onClick={() => {
            setScore(score - 5);
            setMessage(message);
          }}
        >
          - 5
        </button>
      ) : undefined}{" "}
      {score >= 10 ? (
        <button
          onClick={() => {
            setScore(score - 1);
            setMessage(message);
          }}
        >
          - 1
        </button>
      ) : undefined}{" "}
      {score > 0 && score >= 10 ? (
        <button
          onClick={() => {
            setScore(0);
            setMessage(message);
          }}
        >
          Reset
        </button>
      ) : undefined}{" "}
      <button
        // onClick={() => {
        //   setScore(score + 1);
        //   setMessage(message);
        // }}
        onClick={() => props.incrementScoreByOne(props.id)}
      >
        + 1
      </button>{" "}
      <button
      // onClick={() => {
      //   setScore(score + 5);
      //   setMessage(message);
      // }}
      >
        + 5
      </button>{" "}
      {score >= 10 && score < 80 ? (
        <button
          onClick={() => {
            setScore(score + score / 2);
            setMessage(message);
          }}
        >
          + 50%
        </button>
      ) : undefined}{" "}
      <p>{displayMessage}</p>
    </div>
  );
}
