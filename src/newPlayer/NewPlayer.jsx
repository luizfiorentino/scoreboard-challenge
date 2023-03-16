import React from "react";
import { useState, useContext } from "react";
import { playerContext } from "../contexts/PlayerContext";

export default function NewPlayer() {
  const [newPlayer, setNewPlayer] = useState("");
  const { addMe } = useContext(playerContext);
  return (
    <div>
      <p>New Player</p>
      <input
        type="text"
        placeholder="name"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        className="input"
      />{" "}
      <button
        className="btn"
        onClick={() => {
          addMe(newPlayer);
          setNewPlayer("");
        }}
      >
        Add student
      </button>
    </div>
  );
}
