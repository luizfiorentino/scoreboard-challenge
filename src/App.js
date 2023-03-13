import "./App.css";
import { useState } from "react";
import Scoreboard from "./scoreboard/Scoreboard";

// Feat 3- players sorted by score:
// -> refactor the state of Scoreborad to App.js
// -> transform the state to an object with (a)name and (b) score

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  //const [score, setScore] = useState(0);
  const [playersArray, setPlayersArray] = useState([]);

  const addMe = () => {
    const player = {
      name: newPlayer,
      score: 0,
      id: Math.round(Math.random() * 100),
    };

    setPlayers([...players, player]);
    setNewPlayer("");
    return players;
  };
  console.log("addPlayer", newPlayer, players);

  // const objects = players.map((player) => {
  //   const id = Math.round(Math.random() * 100);

  //   setPlayersArray({ name: player, score: 0, id: id });
  // });
  //console.log("objects=>", objects, "players.lenght", players.length);

  function incrementScoreByOne(id) {
    const thisPlayer = players.find((player) => player.id === id);

    const updatedScore = thisPlayer.score + 1;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };

    console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);
    setPlayers([...newArray, updatedPlayer]);
  }

  // console.log("clicked", score);
  // return score + 1;

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
        <Scoreboard
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScoreByOne={incrementScoreByOne}
        />
      ))}
    </div>
  );
}

export default App;
