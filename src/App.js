import "./App.css";
import { useState } from "react";
import Scoreboard from "./scoreboard/Scoreboard";

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");

  const newGuy = (e) => {
    setNewPlayer(e.target.value);
  };

  const addMe = () => {
    const player = newPlayer;
    setPlayers([...players, player]);
    setNewPlayer("");
    return players;
  };
  console.log("addPlayer", newPlayer, players);
  return (
    <div>
      <h1>Score board</h1>
      <p>New Player</p>
      <input
        type="text"
        placeholder="name"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
      />
      <button onClick={addMe}>Add</button>
      {players.map((player) => (
        <Scoreboard key={player} name={player} />
      ))}
    </div>
  );
}

export default App;
