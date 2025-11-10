const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

const result = document.getElementById("result");

const selectionsContainer = document.getElementById("selections")
const playerSelection = document.getElementById("player-selection");
const computerSelection = document.getElementById("computer-selection");

let playerScore = 0;
let computerScore = 0;
let canPlayRound = true;


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
    computerSelection.style.transform = "scaleX(-1)";
}

function playRound(humanChoice) {
    if (!canPlayRound) {
        return;
    }

    let computerChoice = getComputerChoice();
    setImage(humanChoice, computerChoice);
    result.style.display = "block";

    if (humanChoice === computerChoice) {
        result.textContent = "Its a tie!";
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "Computer wins round!";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "Human wins round!";
        playerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "Human wins round!";
        playerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "Computer wins round!";
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "Computer wins round!";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "Human wins round!";
        playerScore++;
    }

    playerScoreContainer.textContent = `You: ${playerScore}`;
    computerScoreContainer.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5) {
        result.textContent = "YOU WON! 🎉"
        result.style.fontSize = "38px";
        canPlayRound = false;
    }
    else if (computerScore === 5) {
        result.textContent = "YOU LOST! 💀🥀💔"
        result.style.fontSize = "38px";
        canPlayRound = false;
    }
}