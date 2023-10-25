import React from "react";
import { Link } from "react-router-dom";
// I start off by importing react and link from react router

// I then create the function help
export default function Help() {
  // return a h1 take that informs the user they are in the help page
  //  I then return a ul list with help information for the user
  return (
    <div>
      <h1>Help!!!</h1>
      <p>Need help ? not to worry below is a complete rundown of the game</p>
      <ul>
        <li>
          The object of Hang-man is to guess the word before the stickman is
          hanged
        </li>
        <br></br>
        <li>
          At the top of the image is the attempt section which shows the amount
          of attempts you have left
        </li>
        <br></br>
        <li>
          {" "}
          Below is the image of the stick man once the image of the stickman is
          fully displayed the stickman is nd you have lost
        </li>
        <br></br>
        <li>
          The keypad is used to guess the letters until you guess the whole word
        </li>
        <br></br>
        <li>
          If you guess the word before the stickman is hang the game will alert
          you of your victory
        </li>
        <br></br>
        <li>
          The restart button below will reset the game should you wish to
          continue regardless of the outcome
        </li>
        <br></br>
      </ul>
      <Link to={"/game"}>
        <button>Return</button>
      </Link>
    </div>
  );
}
