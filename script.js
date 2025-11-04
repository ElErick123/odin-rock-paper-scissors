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

function getHumanChoice() {
    return prompt("Rock paper scissors! What are you choosing?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log("Human chooses: " + humanChoice);
        console.log("Computer chooses: " + computerChoice);

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

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("");
    }
    if (humanScore === computerScore) { return "Its a draw!"; }
    return humanScore > computerScore ? "Human wins!" : "Computer wins!";
}

console.log("Final results: " + playGame());