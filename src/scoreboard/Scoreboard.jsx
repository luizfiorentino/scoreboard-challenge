import React from "react";
import { createContext } from "react";
import "./styles.css";
import ProgressBar from "../progressBar/ProgressBar";
import Buttons from "../buttons/Buttons";
import { usePlayer } from "../contexts/PlayerContext";

export const scoreBoardContext = createContext({});

export default function Scoreboard(props) {
  const { player, width, color, message } = usePlayer(props.id);

  return (
    <div className="App">
      <div className="name-and-bar">
        <h3 className="name">{player.name}</h3>
        <ProgressBar id={props.id} width={width} color={color} />
        <Buttons id={props.id} />
      </div>

      <div className="body">
        <div className="msg-and-score">
          <p>{message}</p>
          <p>{Math.round(player.score)}/100</p>
        </div>{" "}
      </div>
    </div>
    // </scoreBoardContext.Provider> --> no longer necessary!
  );
}
