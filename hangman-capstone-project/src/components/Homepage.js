import React from "react";
import { Link } from "react-router-dom";
import pic from "./img/state11.GIF";
import "./Homepage.css";
// I start of by importing react and links from react router

// I then create the function home page

export default function Homepage() {
  // I return a h1 tag that Welcome the user to the page and a button that tag the user to the game
  return (
    <div>
      <h1>Welcome Player</h1>
      <img src={pic} />
      <h4>To player the game of Hang-man</h4>
      <p>Click the button below to start the game!!!!!!</p>
      <Link to={"/game"}>
        <button>Play</button>
      </Link>
    </div>
  );
}
