//Prompt asks user to type rock, paper, scissors.
//Declare user choice.
let userRealChoice = null;
function getUserChoice() {
    let userNumChoice = +prompt("Type in 1 for rock, 2 for paper, or 3 for scissors:");
    if (userNumChoice === 1) {
        return userRealChoice = "Rock";
        alert("You chose rock!");
    } else if (userNumChoice === 2) {
        return userRealChoice = "Paper";
        alert("You chose paper!")
    } else if (userNumChoice === 3) {
        return userRealChoice = "Scissors";
        alert("You chose scissors!")
    } else alert("That's not a valid answer. Try again")
}

// console.log(getUserChoice());
// console.log(`User chose ${userRealChoice}`);

//Computer randomly chooses rock, paper scissors.
// let computerChoice = 0;
//Computer picks number between 1 and 3.
// function getComputerChoice 

//1, 2, 3 convert to rock, paper, scissor
let computerChoice = null;
//return choice in string format
function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return computerChoice = "Rock"
        alert("Computer chose rock!");
    } else if (computerChoice == 1) {
        return computerChoice = "Paper"
        alert("Computer chose paper!");
    } else {
        return computerChoice = "Scissors"
        alert("Computer chose scissors!")
    }
}
// console.log(getComputerChoice());
// console.log(`Computer chose ${computerChoice}!`);

//Code goes to choosesRock function if user chose rock.
//Fetch computer response.
//If computer chose paper, computer win prints.
let computerScore = 0;
//Declare human score variable
let userScore = 0;

function playRound(userRealChoice, computerChoice) {
    if (userRealChoice === computerChoice) {
        alert(`Draw! Computer also chose ${userRealChoice}.`)
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    }
    else if (userRealChoice === "Rock" && computerChoice === "Paper") {
        alert(`Computer chose Paper. Paper beats Rock: You lose!`)
        ++computerScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (userRealChoice === "Rock" && computerChoice === "Scissors") {
        alert(`Computer chose Scissors. Rock beats Scissors: You win`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (userRealChoice === "Paper" && computerChoice === "Scissors") {
        alert("Computer chose Scissors. Scissors beats Paper: You lose!")
        ++computerScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (userRealChoice === "Paper" && computerChoice === "Rock") {
        alert(`Computer chose Rock. Paper beats Rock: You win!`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`)
    } else if (userRealChoice === "Scissors" && computerChoice === "Rock") {
        alert("Computer chose Rock. Rock beats Scissors: You lose!")
    ++computerScore
    alert(`Current score is You: ${userScore} Computer: ${computerScore}`) 
    }    else if (userRealChoice === "Scissors" && computerChoice === "Paper") {
        alert(`Computer chose Paper. Scissors beats Paper: You win!`)
        ++userScore
        alert(`Current score is You: ${userScore} Computer: ${computerScore}`); }
    }

    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    // console.log(playRound(userSelection, computerSelection));

function playGame() {
    playRound(userSelection, computerSelection);
    if (userScore == 3) {
        alert(`You won! Score: ${userScore} to ${computerScore}`);
    } else if (computerScore == 3) {
        alert(`Computer wins! Score: ${userScore} to ${computerScore}`);
    } else {
        getUserChoice();
        getComputerChoice();
        playGame();
    }
}

console.log(playGame());

//If computer chose rock, a draw prints.
//If computer chose scissors, user win prints.
//Code goes to choosesPaper function if user chose paper.
//Fetch computer response.
//If computer chose paper, a draw prints.
//If computer chose rock, user win prints.
//If computer chose scissors, computer win prints.
//Code goes to chooses Scissors function if user chose scissors.
//Fetch computer response.
//If computer chose paper, user win prints.
//If computer chose rock, computer win prints.
//If computer chose scissors, a draw prints.
//If user typed invalid response, print error and try again.

//Point Allocation =======
//Delcar computer score variable
//Add +1 to winner's score variable.
//When User/Computer wins, 1 point is added to their 

// function getComputerChoice() {
//     return
// } 
