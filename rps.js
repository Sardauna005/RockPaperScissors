// Global Variables
// In Rock-Paper-Scissors there are 1/9 outcomes and 3 of these outcomes are draws so a 1/6 that the choices are different.
// therefore at hardcoding we might be looking at +9 if else statements unless i can find another way lol.
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let round = 5;
let humanScore = 0;
let computerScore = 0;

// game logic here.
function playRound(humanChoice, computerChoice) {
  // here we account for all possible draws
  if (humanChoice === computerChoice || humanChoice == null) {
    console.log(`${humanChoice} and ${computerChoice}: Draw`);
  } else if (
    // here we account for all situations where the user wins
    (humanChoice === ROCK && computerChoice === SCISSORS) ||
    (humanChoice === PAPER && computerChoice === ROCK) ||
    (humanChoice === SCISSORS && computerChoice === PAPER)
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
  let rand = Math.random() * 4; // gen random number between 0 and 4(4   excluded)
  let word;
  if (rand >= 1 && rand < 2) {
    word = ROCK;
  } else if (rand >= 2 && rand < 3) {
    word = PAPER;
  } else {
    word = SCISSORS;
  }
  return word;
}

// this code collects the users input and returns it if amongst the r-p-s choices.
function getHumanChoice() {
  let word = prompt("Rock-Paper-Scissors?: ").toLowerCase();
  if (word === ROCK || word === PAPER || word === SCISSORS) {
    return word;
  } else {
    console.log("Invalid Answer!");
    word = null;
    return word;
  }
}

// this is our playGame function that starts a new game
function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

while (round > 0) {
  playGame();
  round--;
}

// Refactored Code For New Game Logic.
const hScore = document.querySelector(".Hscore");
const cScore = document.querySelector(".Cscore");
const result = document.querySelector(".result");

hScore.textContent = `Human Score: ${humanScore}.`;
cScore.textContent = `Computer Score: ${computerScore}`;

if (humanScore > computerScore) {
  result.textContent = `Result: You Won! `;
} else if (humanScore < computerScore) {
  result.textContent = `Result: Computer Won! `;
} else {
  result.textContent = `Result: Its a Tie! `;
}
