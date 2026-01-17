
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

//Creates and converts computer numerical answer to rock, paper, scissors, and sends to playRound
function getComputerChoice() {
    let computerNumChoice = Math.floor(Math.random() * 3);
    if (computerNumChoice == 0) {
        return computerChoice = "Rock";
    } else if (computerNumChoice == 1) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}



//Determines how choices will be alerted and scored
function playRound(user, computer) {
    getComputerChoice();
    if (user === computer) {

        alert(`Draw! Computer also chose ${user}.`)
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    }
    else if (user === "Rock" && computer === "Paper") {
        alert(`Computer chose Paper. Paper beats Rock: You lose!`)
        ++computerScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (user === "Rock" && computer === "Scissors") {
        alert(`Computer chose Scissors. Rock beats Scissors: You win`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (user === "Paper" && computer === "Scissors") {
        alert("Computer chose Scissors. Scissors beats Paper: You lose!")
        ++computerScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (user === "Paper" && computer === "Rock") {
        alert(`Computer chose Rock. Paper beats Rock: You win!`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (user === "Scissors" && computer === "Rock") {
        alert("Computer chose Rock. Rock beats Scissors: You lose!")
        ++computerScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (user === "Scissors" && computer === "Paper") {
        alert(`Computer chose Paper. Scissors beats Paper: You win!`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`);
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
