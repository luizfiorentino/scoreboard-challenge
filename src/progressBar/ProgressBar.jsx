import React from "react";

import { usePlayer } from "../contexts/PlayerContext";

export default function ProgressBar(props) {
  const { width, color } = usePlayer(props.id);

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
