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
  //const [playersArray, setPlayersArray] = useState([]);

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
  //console.log("addPlayer", newPlayer, players);

  function incrementScoreByOne(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score + 1;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function incrementByFive(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score + 5;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function resetScore(id) {
    const thisPlayer = players.find((player) => player.id === id);

    const updatedPlayer = { ...thisPlayer, score: 0 };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function decrementScoreByOne(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score - 1;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function decrementByFive(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score - 5;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function decrementFifty(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score - thisPlayer.score / 2;

    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function incrementFifty(id) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score + thisPlayer.score / 2;

    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  function playersByScore(playerA, playerB) {
    return playerB.score - playerA.score;
  }

  const orderedPlayers = players.sort(playersByScore);
  //console.log("orderedPlayers", orderedPlayers);

  return (
    <div className="scoreboard-main">
      <h2 className="scoreboard-title">Score Boards</h2>
      <div className="add-player">
        <p>New Player</p>
        <input
          type="text"
          placeholder="name"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          className="input"
        />{" "}
        <button className="btn" onClick={addMe}>
          Add student
        </button>
      </div>

      {orderedPlayers.map((player) => (
        <Scoreboard
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScoreByOne={incrementScoreByOne}
          resetScore={resetScore}
          decrementScoreByOne={decrementScoreByOne}
          decrementByFive={decrementByFive}
          decrementFifty={decrementFifty}
          incrementByFive={incrementByFive}
          incrementFifty={incrementFifty}
        />
      ))}
    </div>
  );
}

export default App;
