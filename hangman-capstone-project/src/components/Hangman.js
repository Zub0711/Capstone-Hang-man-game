import React, { Component } from "react";
import { StartingWord } from "./Words";

import { Link } from "react-router-dom";
import state1 from "./img/state1.GIF";
import state2 from "./img/state2.GIF";
import state3 from "./img/state3.GIF";
import state4 from "./img/state4.GIF";
import state5 from "./img/state5.GIF";
import state6 from "./img/state6.GIF";
import state7 from "./img/state7.GIF";
import state8 from "./img/state8.GIF";
import state9 from "./img/state9.GIF";
import state10 from "./img/state10.gif";
import state11 from "./img/state11.GIF";
// I start of by import react component, my function StartingWord(),Css file and all my imgs from my img folder

// I then create the class component Hangman
export default class Hangman extends Component {
  // I create a prop using static default
  // This prop will be for the amount of try's the user will have and the images
  static defaultProps = {
    chances: 11,

    images: [
      state1,
      state2,
      state3,
      state4,
      state5,
      state6,
      state7,
      state8,
      state9,
      state10,
      state11,
    ],
  };

  // I then use the constructor method and super to create a state
  constructor(props) {
    super(props);
    // I set the number of wrong numbers to 0
    // I then use new set to create and empty array
    // I then use the answer sate and set that to my import function as the random generated word will be the answer
    this.state = {
      wrongAnswer: 0,
      try: new Set([]),
      answer: StartingWord(),
    };
  }
  // I the create the function correctAnswer

  correctAnswer() {
    // I return a the answer state and split it and use the map method
    // I then set the condition that if the answer is not guessed I wil return "_" the underscores until it is guessed
    return this.state.answer
      .split("")
      .map((letter) => (this.state.try.has(letter) ? letter : " _ "));
  }

  // I then create the function handleTry  use e as a parameter and the set the state to state.try.add(letter)
  // This function is for when the user try's to guess the letter if it is guessed correctly the number of attempts will remain the same
  // if not the number of attempts with increment by 1

  handleTry = (e) => {
    let letter = e.target.value;
    this.setState((state) => ({
      try: state.try.add(letter),
      wrongAnswer: state.wrongAnswer + (state.answer.includes(letter) ? 0 : 1),
    }));
  };

  // I then create the function keyboard which I will use to create the button pad
  keyBoard() {
    // I return a string of letters followed by the split and map method to return
    // all the letters as buttons. I then set the key and values to the letters and add my handle try function via a onclick
    // method I then use the disabled method an I assign it to the state try so when an attempt is made to guess the letter
    // the button will become disabled.
    return "abcdefghijklnmopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleTry}
        disabled={this.state.try.has(letter)}
      >
        {letter}
      </button>
    ));
  }
  // I then create the arrow function reset

  reset = () => {
    // I then use set state so when the button is clicked it will reset the state to its original state
    this.setState({
      wrongAnswer: 0,
      try: new Set([]),
      answer: StartingWord(),
    });
  };
  // Next I create the function outcome

  outcome = () => {
    // I use an if statement to decide the outcome
    // the wrongAnswer state exceeds the number of chances prop then it will return you lose
    if (this.state.wrongAnswer >= this.props.chances) {
      return " you lose :(";
      // Else if the correctAnswer() function equals the answer state then it will return you win
    } else if (this.correctAnswer().join("") === this.state.answer) {
      return " you won :)";
    }
  };
  // I then render everything

  render() {
    // I then create 3 variables
    // endGame which if the wrongAnswer exceeds the chances the game will end
    const endGame = this.state.wrongAnswer >= this.props.chances;
    // Then keypad which will generate the keyboard
    let keyPad = this.keyBoard();
    // Final progress which will use the function outcome to alert the winner if they have won
    let progress = this.outcome();

    // I then return everything a in div container called Hangman-container
    // I create h1 tags to display the title and use the link tags to add a button that will take the user the help page
    // then add img wrapped around div tags to add the hangman pics
    // I then create 3 p tags to display the guess word heading,map keypad and the progress at the end of the page I add the reset button
    return (
      <div className="Hangman-container">
        <h1>Hangman</h1>
        <div className="Attempts">
          {" "}
          Attempts: {this.state.wrongAnswer} of {this.props.chances}
          <Link to={"/help"}>
            <button>Help</button>
          </Link>
          <Link to={"/"}>
            <button>Back to home</button>
          </Link>
        </div>
        <div className="imgs">
          <img src={this.props.images[this.state.wrongAnswer]} alt="" />
        </div>
        <div className="guess">
          <p>Guess the word!</p>
          <p>{!endGame ? this.correctAnswer() : this.state.answer}</p>
          <p>{progress}</p>
          <div className="keypad">{keyPad}</div>
          <div className="reset">
            <button onClick={this.reset}>Restart Game</button>
          </div>
        </div>
      </div>
    );
  }
}
