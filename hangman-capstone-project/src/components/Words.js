// I start of by creating a array of words called wordArray I took a few words from the dictionary.txt file and added it the array

let wordArray = [
  "abaft",
  " abalone",
  "abamp",
  " abampere",
  " abandon",
  " abandoned",
  " bronchodilator",
  "bronchopneumonia",
  "bronchoscope",
  "bronchoscopic",
  "bronchospasm",
  "nairobi",
  "naismith",
  "naive",
  "naively",
  "naiveness",
  "viewing",
  " viewless",
  " viewpoint",
  " vigesimal",
  " yogi",
  " yogic",
  " yoga",
  " yogurt",
  " yoke",
];
// I then create the function StartingWord()
// This function will insure that every time the user starts the game a random word is generated from the word array

function StartingWord() {
  // I return the word array and use the math.floor & random method and * that by the length of the array
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}
// I then export the function component to my hangman component

export { StartingWord };
