import React from "react";
import { useState } from "react";
import { usePlayers } from "../contexts/PlayerContext";

export default function NewPlayer() {
  const [newPlayer, setNewPlayer] = useState("");
  const { addMe } = usePlayers();
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
