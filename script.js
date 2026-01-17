
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
        narration.style.color = "black";
        narration.textContent = `Computer also chose ${user}! Draw!`;
    }
    else if (user === "Rock" && computer === "Paper") {
        narration.style.color = "red";
        narration.textContent = `Computer chose Paper. Paper beats Rock: You lose!`;
        ++computerScore
        updateScores();
    } else if (user === "Rock" && computer === "Scissors") {
        narration.style.color = "green";
        narration.textContent = `Computer chose Scissors. Rock beats Scissors: You win`;
        ++userScore
        updateScores();
    } else if (user === "Paper" && computer === "Scissors") {
        narration.style.color = "red";
        narration.textContent = "Computer chose Scissors. Scissors beats Paper: You lose!"
        ++computerScore
        updateScores();
    } else if (user === "Paper" && computer === "Rock") {
        narration.style.color = "green";
        narration.textContent = `Computer chose Rock. Paper beats Rock: You win!`;
        ++userScore
        updateScores();
    } else if (user === "Scissors" && computer === "Rock") {
        narration.style.color = "red";
        narration.textContent = "Computer chose Rock. Rock beats Scissors: You lose!";
        ++computerScore
        updateScores();
    } else if (user === "Scissors" && computer === "Paper") {
        narration.style.color = "green";
        narration.textContent = `Computer chose Paper. Scissors beats Paper: You win!`;
        ++userScore
        updateScores();
    }
}

//Runs userChoice and computerChoice and checks to see if a player won.
function checkScore() {
    if (userScore == 5) {
               narration.style.color = "green";
        narration.textContent = `YOU WON!`;
    } else if (computerScore == 5) {
         narration.style.color = "red";
        narration.textContent = `YOU LOSE!`;
    }
};


rock.addEventListener("click", (e) => {
    const userRealChoice = "Rock";
    playRound("Rock", getComputerChoice());
    // checkScore();
});

paper.addEventListener("click", (e) => {
    const userRealChoice = "Paper";
    playRound("Paper", getComputerChoice());
    checkScore();
});

scissors.addEventListener("click", (e) => {
    const userRealChoice = "Scissors";
    playRound("Scissors", getComputerChoice());
    checkScore();
});

// console.log(playGame());
