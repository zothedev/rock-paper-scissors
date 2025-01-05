let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // make computer choice (0 to 2)
    let number = randomIntFromZeroAndTwo();

    // return "rock" if number is 0
    if (number === 0) {
        return "rock";
    } // return "paper" if number is 1
    else if (number === 1) {
        return "paper";
    } // otherwise, return "scissors"
    else {
        return "scissors";
    }
}

// this function returns integers between 0 to 2 (inclusive)
let randomIntFromZeroAndTwo = () => Math.floor(Math.random() * 3)

// console.log(getComputerChoice());
function getUserChoice() {

    // run this loop until user enters a valid answer
    while (true) {
        // ask the user to choose a number 0 to 2, corresponding to rock, paper, or scissors. convert this value to number.
        let userChoice = +(prompt("Please enter: \n0 for Rock, \n1 for Paper, \nor 2 for Scissors!", 0));
    
        // verify that userChoice is valid using a helper function
        if (isValidAnswer(userChoice)) {
            // return rock, paper, or scissors based on user input
            if (userChoice === 0) {
                return "rock";
            } else if (userChoice === 1) {
                return "paper";
            } else {
                return "scissors";
            }
        }
        // if the user didn't input a valid answer, alert them and return to start of loop
        alert("Make sure you input either 0, 1, or 2!")
    }
}

// this function returns true only if the userChoice is valid (0 to 2)
function isValidAnswer(userChoice) {
    // return false if userChoice is not a number
    if (Number.isNaN(userChoice)) {
        return false;
    }
    // return false if the userChoice is outside of 0 to 2 (inclusive)
    if (userChoice > 2 || userChoice < 0) {
        return false;
    }
    // otherwise, userChoice is valid - return true.
    return true;
}

function playRound(userChoice, computerChoice) {

    // user enters rock
    if (userChoice === "rock") {

        // computer enters scissors
        if (computerChoice === "scissors") {
            userWin(userChoice, computerChoice);
        } else if (computerChoice === "paper") {
            // computer enters paper
            userLose(userChoice, computerChoice);
        } else {
            // computer enters rock
            userTie(userChoice, computerChoice);
        }

        

        // user enters paper
    } else if (userChoice === "paper") {

        // computer enters rock
        if (computerChoice === "rock") {
            userWin(userChoice, computerChoice);
        } else if (computerChoice === "scissors") {
            // computer enters scissors
            userLose(userChoice, computerChoice);
        } else {
            // computer enters paper
            userTie(userChoice, computerChoice);
        }


        // user enters scissors
    } else {

        // computer enters paper
        if (computerChoice === "paper") {
            userWin(userChoice, computerChoice);
        } else if (computerChoice === "rock") {
            // computer enters rock
            userLose(userChoice, computerChoice);
        } else {
            // computer enters scissors
            userTie(userChoice, computerChoice);
        }
    }
}

function userWin(userChoice, computerChoice) {
    userScore++;
    console.log("You win! " + userChoice + " beats " + computerChoice);
}

function userLose(userChoice, computerChoice) {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + userChoice);
}

function userTie(userChoice, computerChoice) {
    console.log("Tie! " + userChoice + " is equal to " + computerChoice);
}



const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log("User Chooses " + userSelection);
console.log("Computer Chooses " + computerSelection);

playRound(userSelection, computerSelection);