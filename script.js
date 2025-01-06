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

// this function plays 1 round of rock paper scissors
function playRound() {

    // assign user and computer selections
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    // print the selections to console
    console.log("User Chooses " + userChoice);
    console.log("Computer Chooses " + computerChoice);

    // user enters rock
    if (userChoice === "rock") {
        // computer enters scissors
        if (computerChoice === "scissors") {
            return userWin(userChoice, computerChoice);
        } else if (computerChoice === "paper") {
            // computer enters paper
            return userLose(userChoice, computerChoice);
        } else {
            // computer enters rock
            return userTie(userChoice, computerChoice);
        }

        // user enters paper
    } else if (userChoice === "paper") {
        // computer enters rock
        if (computerChoice === "rock") {
            return userWin(userChoice, computerChoice);
        } else if (computerChoice === "scissors") {
            // computer enters scissors
            return userLose(userChoice, computerChoice);
        } else {
            // computer enters paper
            return userTie(userChoice, computerChoice);
        }

        // user enters scissors
    } else {
        // computer enters paper
        if (computerChoice === "paper") {
            return userWin(userChoice, computerChoice);
        } else if (computerChoice === "rock") {
            // computer enters rock
            return userLose(userChoice, computerChoice);
        } else {
            // computer enters scissors
            return userTie(userChoice, computerChoice);
        }
    }
}

// this function is called when the user wins.
// it adds a point to the user and prints a string to console
function userWin(userChoice, computerChoice) {
    console.log("You win! " + userChoice + " beats " + computerChoice);
    return 1;
}

// this function is called when the computer wins.
// it adds a point to the computer and prints a string to console
function userLose(userChoice, computerChoice) {
    console.log("You lose! " + computerChoice + " beats " + userChoice);
    return 0;
}

// this function is called when the user and computer tie.
// it prints a string to console
function userTie(userChoice, computerChoice) {
    console.log("Tie! " + userChoice + " is equal to " + computerChoice);
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    let round = 1;
    let result;
    while (round <= 5) {
        result = playRound();
        //console.log(result)
        if (result == 1) {
            userScore++;
        } else if (result == 0) {
            computerScore++;
        }
        round++;
        result = null;

        console.log("User Score: " + userScore);
        console.log("Computer Score: " + computerScore);

    }
}

playGame();