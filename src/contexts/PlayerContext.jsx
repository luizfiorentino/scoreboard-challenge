import React, { useState } from "react";
import { createContext } from "react";

export const playerContext = createContext({});

export default function PlayerContextProvider(props) {
  const [players, setPlayers] = useState([]);

  const addMe = (newPlayer) => {
    const player = {
      name: newPlayer,
      score: 0,
      id: Math.round(Math.random() * 100),
    };

    setPlayers([...players, player]);
    // setNewPlayer("");
    return players;
  };

  function updateScore(id, updated) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score + updated;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
    //console.log("thisPlayer updated", updatedPlayer);
    const newArray = players.filter((player) => player.id !== id);

    setPlayers([...newArray, updatedPlayer]);
  }

  return (
    <div>
      {" "}
      <playerContext.Provider value={{ addMe: addMe, updateScore, players }}>
        {props.children}
      </playerContext.Provider>
    </div>
  );
}
