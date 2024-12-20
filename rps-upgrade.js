const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const MAX_ROUNDS = 5;

// Getting all Buttons
const RB = document.getElementById("rb");
const PB = document.getElementById("pb");
const SCB = document.getElementById("scb");
const TRYAGAIN = document.getElementById("TryAgain");

let hScoreCounter = 0;
let cScoreCounter = 0;
let roundCounter = 0;

// Get all things that will be updated!
let humanScore = document.getElementById("hscore");
let computerScore = document.getElementById("cscore");
let result = document.getElementById("result");

// This Function Generates The Computers Random Choice.
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(hChoice) {
  const cChoice = getComputerChoice();
  if (hChoice === cChoice) {
    result.textContent = `Draw! Both chose ${hChoice}.`;
  } else if (
    (hChoice === ROCK && cChoice === SCISSORS) ||
    (hChoice === PAPER && cChoice === ROCK) ||
    (hChoice === SCISSORS && cChoice === PAPER)
  ) {
    result.textContent = `You Win! ${hChoice} beats ${cChoice}.`;
    hScoreCounter++;
    humanScore.textContent = `Human Score: ${hScoreCounter}`;
  } else {
    result.textContent = `You Lose! ${cChoice} beats ${hChoice}.`;
    cScoreCounter++;
    computerScore.textContent = `Computer Score: ${cScoreCounter}`;
  }
  roundCounter++;
  checkGameEnd();
}

function checkGameEnd() {
  if (hScoreCounter === 5 || cScoreCounter === 5) {
    disableButtons();
    if (hScoreCounter === cScoreCounter) {
      result.textContent += `Game Over! It's a Draw!`;
    } else if (hScoreCounter > cScoreCounter) {
      result.textContent += `Game Over! You Won!`;
    } else {
      result.textContent += ` Game Over! You Lost!`;
    }
  }
}

function disableButtons() {
  RB.disabled = true;
  PB.disabled = true;
  SCB.disabled = true;
}

function resetGame() {
  console.log("resetting");
  hScoreCounter = 0;
  cScoreCounter = 0;
  roundCounter = 0;
  humanScore.textContent = `Human Score: ${hScoreCounter}`;
  computerScore.textContent = `Computer Score: ${cScoreCounter}`;
  result.textContent = "Make Your Move";

  RB.disabled = false;
  PB.disabled = false;
  SCB.disabled = false;
}

//  Adding Event listeners
RB.addEventListener("click", () => playGame(ROCK));
PB.addEventListener("click", () => playGame(PAPER));
SCB.addEventListener("click", () => playGame(SCISSORS));

TRYAGAIN.addEventListener("click", resetGame);

// function playGame() {
//   RB.addEventListener("click", function () {
//     hChoice = RB.textContent;
//     let cChoice = getComputerChoice();
//     if (hChoice === cChoice) {
//       result.textContent = `Draw!`;
//     } else if (
//       (hChoice === ROCK && cChoice === SCISSORS) ||
//       (hChoice === PAPER && cChoice === ROCK) ||
//       (hChoice === SCISSORS && cChoice === PAPER)
//     ) {
//       result.textContent = `You Win!`;
//       hScoreCounter++;
//       console.log(hScoreCounter);
//       humanScore.textContent = `Human Score: ${hScoreCounter}`;
//     } else {
//       cScoreCounter++;
//       console.log(cScoreCounter);
//       computerScore.textContent = `Computer Score: ${cScoreCounter}`;
//       result.textContent = `You Lose!`;
//     }
//   });

//   PB.addEventListener("click", function () {
//     hChoice = PB.textContent;
//     let cChoice = getComputerChoice();
//     if (hChoice === cChoice) {
//       result.textContent = `Draw!`;
//     } else if (
//       (hChoice === ROCK && cChoice === SCISSORS) ||
//       (hChoice === PAPER && cChoice === ROCK) ||
//       (hChoice === SCISSORS && cChoice === PAPER)
//     ) {
//       result.textContent = `You Win!`;
//       hScoreCounter++;
//       console.log(hScoreCounter);
//       humanScore.textContent = `Human Score: ${hScoreCounter}`;
//     } else {
//       cScoreCounter++;
//       console.log(cScoreCounter);
//       computerScore.textContent = `Computer Score: ${cScoreCounter}`;
//       result.textContent = `You Lose!`;
//     }
//   });

//   SCB.addEventListener("click", function () {
//     hChoice = SCB.textContent;
//     let cChoice = getComputerChoice();
//     if (hChoice === cChoice) {
//       result.textContent = `Draw!`;
//     } else if (
//       (hChoice === ROCK && cChoice === SCISSORS) ||
//       (hChoice === PAPER && cChoice === ROCK) ||
//       (hChoice === SCISSORS && cChoice === PAPER)
//     ) {
//       result.textContent = `You Win!`;
//       hScoreCounter++;
//       console.log(hScoreCounter);
//       humanScore.textContent = `Human Score: ${hScoreCounter}`;
//     } else {
//       cScoreCounter++;
//       console.log(cScoreCounter);
//       computerScore.textContent = `Computer Score: ${cScoreCounter}`;
//       result.textContent = `You Lose!`;
//     }
//   });
// }
