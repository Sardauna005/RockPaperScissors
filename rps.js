// Global Variables
// In Rock-Paper-Scissors there are 1/9 outcomes and 3 of these outcomes are draws so a 1/6 that the choices are different.
// therefore at hardcoding we might be looking at +9 if else statements unless i can find another way lol.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const round = 5;
let humanScore = 0;
let computerScore = 0;

// game logic here.
function playRound(humanChoice, computerChoice) {
  // here we account for all possible draws
  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} and ${computerChoice}: Draw`);
  } else if (
    // here we account for all situations where the user wins
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    console.log(`${humanChoice} and ${computerChoice}: You Win`);
    humanScore++;
  }
  // all other scenarios mean the computer won 3 + 3 above + 3 above = 9/9 outcomes in total.
  else {
    console.log(`${humanChoice} and ${computerChoice}: Computer Wins`);
    computerScore++;
  }
  console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
}

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
    return console.log("Invalid Answer!");
  }
}

// a simple round
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
