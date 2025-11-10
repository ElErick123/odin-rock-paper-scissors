const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

const finalResult = document.getElementById("final-result");

const selectionsContainer = document.getElementById("selections")
const playerSelection = document.getElementById("player-selection");
const computerSelection = document.getElementById("computer-selection");


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function setImage(humanChoice, computerChoice) {
    selectionsContainer.style.display = "flex";
    playerSelection.src = `./imgs/${humanChoice}.webp`;
    playerSelection.alt = humanChoice;

    computerSelection.src = `./imgs/${computerChoice}.webp`;
    computerSelection.alt = computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    setImage(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
        return;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer wins!");
        computerScore++;
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human wins!");
        humanScore++;
        return;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human wins!");
        humanScore++;
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer wins!");
        computerScore++;
        return;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer wins!");
        computerScore++;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins!");
        humanScore++;
        return;
    }

    else {
        console.log("Invalid choice.");
        return;
    }
}