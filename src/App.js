import "./App.css";
import { useContext } from "react";
import Scoreboard from "./scoreboard/Scoreboard";
import NewPlayer from "./newPlayer/NewPlayer";
import Navbar from "./navbar/Navbar";
import { playerContext } from "./contexts/PlayerContext";

// export const playerContext = createContext({});
function App() {
  const { players } = useContext(playerContext);

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
