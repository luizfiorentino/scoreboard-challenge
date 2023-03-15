import React from "react";
import { useContext } from "react";
import { scoreBoardContext } from "../scoreboard/Scoreboard";

export default function ProgressBar() {
  const { width, color } = useContext(scoreBoardContext);

  return (
    <div>
      <div className="container">
        <div className="bar">
          <div
            className="inner-bar"
            style={{ width: width, backgroundColor: color }}
          ></div>
          <script src="main.js"></script>
        </div>
      </div>
    </div>
  );
}
