import React, { useState } from "react";
import { createContext, useContext } from "react";

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

  function incrementScoreByOne() {
    updateScore(props.id, 1);
  }
  function incrementScoreByFive() {
    updateScore(props.id, 5);
  }
  function resetScore() {
    updateScore(props.id, -props.score);
  }
  function decrementScoreByOne() {
    updateScore(props.id, -1);
  }
  function decrementScoreByFive() {
    updateScore(props.id, -5);
  }
  function decrementScoreByFifty() {
    updateScore(props.id, -(props.score / 2));
  }
  function incrementScoreByFifty() {
    updateScore(props.id, props.score / 2);
  }
  // const [score, setScore] = useState(0);
  //console.log("props", props);

  return (
    <div>
      {" "}
      <playerContext.Provider
        value={{
          addMe: addMe,
          updateScore,
          players,

          incrementScoreByOne,
          incrementScoreByFive,
          resetScore,
          decrementScoreByOne,
          decrementScoreByFive,
          decrementScoreByFifty,
          incrementScoreByFifty,
        }}
      >
        {props.children}
      </playerContext.Provider>
    </div>
  );
}

export function usePlayers() {
  return useContext(playerContext);
}

export function usePlayer(id) {
  const { players, updateScore } = useContext(playerContext);

  const player = players.find((player) => id === player.id);
  const score = player.score;

  function incrementScoreByOne() {
    updateScore(id, 1);
  }
  function incrementScoreByFive() {
    updateScore(id, 5);
  }
  function resetScore() {
    updateScore(id, -player.score);
  }
  function decrementScoreByOne() {
    updateScore(id, -1);
  }
  function decrementScoreByFive() {
    updateScore(id, -5);
  }
  function decrementScoreByFifty() {
    updateScore(id, -(player.score / 2));
  }
  function incrementScoreByFifty() {
    updateScore(id, player.score / 2);
  }

  return {
    player,
    score,
    incrementScoreByOne,
    incrementScoreByFive,
    resetScore,
    decrementScoreByOne,
    decrementScoreByFive,
    decrementScoreByFifty,
    incrementScoreByFifty,
  };
}
