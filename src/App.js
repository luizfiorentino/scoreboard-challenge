import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [text, setText] = useState(
    "A journey of a 1000 miles start with a single step"
  );

  return (
    <div className="App">
      <h1>Score Board</h1>
      <h3>bar comes here ;)</h3>
      <p>{score}/100</p>
      <button onClick={() => setScore(score + 1)}>+</button>{" "}
      <button onClick={() => setScore(score - 1)}>-</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
