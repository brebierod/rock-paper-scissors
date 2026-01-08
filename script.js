//Prompt asks user to type rock, paper, scissors.
let userNumChoice = +prompt("Type in 1 for rock, 2 for paper, or 3 for scissors:");
//Declare user choice.
let userRealChoice = null;

if (userNumChoice === 1) {
    userRealChoice = "Rock";
    alert("You chose rock!");
} else if (userNumChoice === 2) {
    userRealChoice = "Paper";
    alert("You chose paper!")
} else if (userNumChoice === 3) {
    userRealChoice = "Scissors";
    alert("You chose scissors!")
} else alert("That's not a valid answer. Try again")

// console.log(userNumChoice);
console.log(`User chose ${userRealChoice}`);

//Computer randomly chooses rock, paper scissors.
let computerChoice = Math.floor(Math.random() * 3);
//Computer picks number between 1 and 3.
// function getComputerChoice 
//1, 2, 3 convert to rock, paper, scissor
//return choice in string format
function getComputerChoice() {
    if (computerChoice == 0) {
        return computerChoice = "Rock";
        alert("Computer chose rock!");
    } else if (getComputerChoice == 1) {
        return computerChoice = "Paper";
        alert("Computer chose paper!");
    } else {
        return computerChoice = "Scissors";
        alert("Computer chose scissors!")
    }
}
console.log(getComputerChoice())
console.log(`Computer chose ${computerChoice}`);

//Code goes to choosesRock function if user chose rock.
//Fetch computer response.
//If computer chose paper, computer win prints.
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

// function getComputerChoice() {
//     return
// } 