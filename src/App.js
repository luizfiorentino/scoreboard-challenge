import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

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
      <h1>Score Board</h1>
      <h3>bar comes here ;)</h3>
      <p>{score}/100</p>{" "}
      <button
        onClick={() => {
          setScore(score - 1);
          setMessage(message);
        }}
      >
        -
      </button>{" "}
      <button
        onClick={() => {
          setScore(score + 1);
          setMessage(message);
        }}
      >
        +
      </button>{" "}
      <p>{displayMessage}</p>
    </div>
  );
}

export default App;
