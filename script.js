
let userRealChoice;

//Declares scores
let computerScore = 0;
let userScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const computerScoreTxt = document.getElementById("computerScore");
computerScoreTxt.textContent = `ComputerScore: ${computerScore}`;
const userScoreTxt = document.getElementById("userScore");
userScoreTxt.textContent = `User Score: ${userScore}`;
const narration = document.getElementById("narration");
narration.textContent = "";


function updateScores() {
    userScoreTxt.textContent = `User Score: ${userScore}`;
    computerScoreTxt.textContent = `ComputerScore: ${computerScore}`;
}

//Creates and converts computer numerical answer to rock, paper, scissors, and sends to playRound
function getComputerChoice() {
    let computerNumChoice = Math.floor(Math.random() * 3);
    if (computerNumChoice == 0) {
        narration.textContent = "Computer chose Rock.";
        return computerChoice = "Rock";
    } else if (computerNumChoice == 1) {
        narration.textContent = "Computer chose Paper.";
        return computerChoice = "Paper";
    } else {
        narration.textContent = "Computer chose Scissors.";
        return computerChoice = "Scissors";
    }
}



//Determines how choices will be alerted and scored
function playRound(user, computer) {
    getComputerChoice();
    if (user === computer) {
        narration.textContent = `Computer also chose ${user}! Draw!`;
    }
    else if (user === "Rock" && computer === "Paper") {
        narration.textContent = `Computer chose Paper. Paper beats Rock: You lose!`;
        ++computerScore
        updateScores();
    } else if (user === "Rock" && computer === "Scissors") {
        narration.textContent = `Computer chose Scissors. Rock beats Scissors: You win`;
        ++userScore
        updateScores();
    } else if (user === "Paper" && computer === "Scissors") {
        narration.textContent = "Computer chose Scissors. Scissors beats Paper: You lose!"
        ++computerScore
        updateScores();
    } else if (user === "Paper" && computer === "Rock") {
        narration.textContent = `Computer chose Rock. Paper beats Rock: You win!`;
        ++userScore
        updateScores();
    } else if (user === "Scissors" && computer === "Rock") {
        narration.textContent = "Computer chose Rock. Rock beats Scissors: You lose!";
        ++computerScore
        updateScores();
    } else if (user === "Scissors" && computer === "Paper") {
        narration.textContent = `Computer chose Paper. Scissors beats Paper: You win!`;
        ++userScore
        updateScores();
    }
}

//Runs userChoice and computerChoice and checks to see if a player won.
function playGame() {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    if (userScore == 5) {
        alert(`You won! Score: ${userScore} to ${computerScore}`);
    } else if (computerScore == 5) {
        alert(`Computer wins! Score: ${userScore} to ${computerScore}`);
    } else {
        playGame();
    }
}




rock.addEventListener("click", (e) => {
    const userRealChoice = "Rock";
    alert("You chose rock!");
    playRound("Rock", getComputerChoice());
})

paper.addEventListener("click", (e) => {
    const userRealChoice = "Paper";
    alert("You chose paper!");
    playRound("Paper", getComputerChoice());
})

scissors.addEventListener("click", (e) => {
    const userRealChoice = "Scissors";
    alert("You chose scissors!");
    playRound("Scissors", getComputerChoice());
})

// console.log(playGame());
