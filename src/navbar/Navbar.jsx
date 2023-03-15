import React from "react";
import { useState, useContext } from "react";
import NewPlayer from "../newPlayer/NewPlayer";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <h2>STUDENTS GAME APP</h2>
      <ul>
        <li>Start new game</li>
        <li>About</li>
        <NewPlayer />
      </ul>
    </div>
  );
}
