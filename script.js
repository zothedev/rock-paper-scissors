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
    if (userChoice == NaN) {
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
            userScore++;
            return "You win! " + userChoice + " beats " + computerChoice;
        }
    
        // computer enters paper
        if (computerChoice === "paper") {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + userChoice;
        }

        // computer enters rock
        return "Tie! " + userChoice + " and " + computerChoice + " are equal!"

        // user enters paper
    } else if (userChoice === "paper") {

        // computer enters rock
        if (computerChoice === "rock") {
            userScore++;
            return "You win! " + userChoice + " beats " + computerChoice;
        }
    
        // computer enters scissors
        if (computerChoice === "scissors") {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + userChoice;
        }

        // computer enters paper
        return "Tie! " + userChoice + " and " + computerChoice + " are equal!"

        // user enters scissors
    } else {

        // computer enters paper
        if (computerChoice === "paper") {
            userScore++;
            return "You win! " + userChoice + " beats " + computerChoice;
        }
    
        // computer enters rock
        if (computerChoice === "rock") {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + userChoice;
        }

        // computer enters scissors
        return "Tie! " + userChoice + " and " + computerChoice + " are equal!"
    }
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log("User Chooses " + userSelection);
console.log("Computer Chooses " + computerSelection);

console.log(playRound(userSelection, computerSelection));