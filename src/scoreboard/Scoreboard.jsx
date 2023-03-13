import React from "react";
import { useState } from "react";

export default function Scoreboard(props) {
  const [score, setScore] = useState(0);
  //console.log("props", props);

  let message;

  if (props.score < 10) {
    message = "A journey of a 1000 miles start with a single step";
  } else if (props.score >= 10 && props.score < 45) {
    message = "C'mon you can do it";
  } else if (props.score >= 45 && props.score < 80) {
    message = "You're getting there";
  } else if (props.score >= 80) {
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
      <h3>{props.name}</h3>
      <h3>bar comes here ;)</h3>
      <p>{props.score}/100</p>{" "}
      {props.score >= 10 ? (
        <button
          // onClick={() => {
          //   setScore(score - score / 2);
          //   setMessage(message);
          // }}
          onClick={() => props.decrementFifty(props.id)}
        >
          - 50%
        </button>
      ) : undefined}
      {props.score >= 10 ? (
        <button
          // onClick={() => {
          //   setScore(score - 5);
          //   setMessage(message);
          // }}
          onClick={() => props.decrementByFive(props.id)}
        >
          - 5
        </button>
      ) : undefined}{" "}
      {props.score >= 10 ? (
        <button
          // onClick={() => {
          //   setScore(score - 1);
          //   setMessage(message);
          // }}
          onClick={() => props.decrementScoreByOne(props.id)}
        >
          - 1
        </button>
      ) : undefined}{" "}
      {props.score > 0 && props.score >= 10 ? (
        <button
          // onClick={() => {
          //   setScore(0);
          //   setMessage(message);
          // }}
          onClick={() => props.resetScore(props.id)}
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
        onClick={() => props.incrementByFive(props.id)}
      >
        + 5
      </button>{" "}
      {props.score >= 10 && props.score < 80 ? (
        <button
          // onClick={() => {
          //   setScore(score + score / 2);
          //   setMessage(message);
          // }}
          onClick={() => props.incrementFifty(props.id)}
        >
          + 50%
        </button>
      ) : undefined}{" "}
      <p>{displayMessage}</p>
    </div>
  );
}
