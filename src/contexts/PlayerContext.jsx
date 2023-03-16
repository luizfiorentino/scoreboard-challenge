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

    return players;
  };

  function updateScore(id, updated) {
    const thisPlayer = players.find((player) => player.id === id);
    const updatedScore = thisPlayer.score + updated;
    const updatedPlayer = { ...thisPlayer, score: updatedScore };
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
  //   const score = player.score;

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

  let message;
  let color;

  if (player.score < 10) {
    message = "A journey of a 1000 miles starts with a single step";
    color = "#db2607";
  } else if (player.score >= 10 && player.score < 45) {
    message = "C'mon you can do it";
    color = "#db2607";
  } else if (player.score >= 45 && player.score < 80) {
    message = "You're getting there";
    color = "#fab70c";
  } else if (player.score >= 80) {
    message = "Hold on! Finish strong";
    color = "#2ecc71";
  }

  const width = (player.score / 100) * 610;
  const score = player.score;

  return {
    player,
    width,
    message,
    color,
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
