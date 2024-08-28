// this code randomly returns one of three values Rock | Paper | Scissors... using math.random with 3 options (1-3)
function getComputerChoice() {
  let rand = Math.random() * 4; // gen random number between 0 and 1(1 excluded)
  let word;
  if (rand >= 1 && rand < 2) {
    word = "rock";
  } else if (rand >= 2 && rand < 3) {
    word = "paper";
  } else {
    word = "scissors";
  }
  return word;
}

// this code collects the users input and returns it if amongst the r-p-s choices.
function getHumanChoice() {
  let word = prompt("Rock-Paper-Scissors?: ").toLowerCase();
  if (word === "rock" || word === "paper" || word === "scissors") {
    return word;
  } else {
    return console.log("Invalid INput");
  }
}

let humanScore = 0;
let computerScore = 0;
