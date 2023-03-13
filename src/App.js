import "./App.css";
import { useState } from "react";
import Scoreboard from "./scoreboard/Scoreboard";

function App() {
  return (
    <div>
      <h1>Score board</h1>
      <Scoreboard name="Hermes" />
      <Scoreboard name="Renato" />
    </div>
  );
}

export default App;
