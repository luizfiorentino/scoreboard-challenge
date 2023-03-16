import "./App.css";
import { useState, useContext, createContext } from "react";
import Scoreboard from "./scoreboard/Scoreboard";
import NewPlayer from "./newPlayer/NewPlayer";
import Navbar from "./navbar/Navbar";
import { playerContext } from "./contexts/PlayerContext";

// export const playerContext = createContext({});
function App() {
  const { players } = useContext(playerContext);
  console.log("players", players);
  // const [players, setPlayers] = useState([]);
  // const [newPlayer, setNewPlayer] = useState("");
  //const [score, setScore] = useState(0);
  //const [playersArray, setPlayersArray] = useState([]);

  // const addMe = (newPlayer) => {
  //   const player = {
  //     name: newPlayer,
  //     score: 0,
  //     id: Math.round(Math.random() * 100),
  //   };

  //   setPlayers([...players, player]);
  //   setNewPlayer("");
  //   return players;
  // };
  //console.log("addPlayer", newPlayer, players);

  // function updateScore(id, updated) {
  //   const thisPlayer = players.find((player) => player.id === id);
  //   const updatedScore = thisPlayer.score + updated;
  //   const updatedPlayer = { ...thisPlayer, score: updatedScore };
  //   //console.log("thisPlayer updated", updatedPlayer);
  //   const newArray = players.filter((player) => player.id !== id);

  //   setPlayers([...newArray, updatedPlayer]);
  // }

  function playersByScore(playerA, playerB) {
    return playerB.score - playerA.score;
  }

  const orderedPlayers = players.sort(playersByScore);
  //console.log("orderedPlayers", orderedPlayers);

  return (
    <div>
      <div className="scoreboard-main">
        <Navbar />
        <h2 className="scoreboard-title">Score Boards</h2>
        <div className="add-player">
          <NewPlayer />
        </div>

        {orderedPlayers.map((player) => (
          <Scoreboard
            key={player.id}
            id={player.id}
            // name={player.name}
            // score={player.score}
            // updateScore={updateScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
