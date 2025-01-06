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

    // for each of these combinations below, it returns the userWin(), userLose(), or userTie() function. The first two functions specifically return a value of 0 or 1. 0 == computer should gain point. 1 == user should gain a point. 
    // This change was made since the userScore and computerScore variables were moved from global scope to within the playGame() function. 

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
// it returns 1 signifying that the user should gain a point
function userWin(userChoice, computerChoice) {
    console.log("You win! " + userChoice + " beats " + computerChoice);
    return 1;
}

// this function is called when the computer wins.
// it returns 1 signifying that the computer should gain a point
function userLose(userChoice, computerChoice) {
    console.log("You lose! " + computerChoice + " beats " + userChoice);
    return 0;
}

// this function is called when the user and computer tie.
// it prints a string to console
function userTie(userChoice, computerChoice) {
    console.log("Tie! " + userChoice + " is equal to " + computerChoice);
}

// this function controls the entire multi-round game 
function playGame() {
    // initialize the score values to 0
    let userScore = 0;
    let computerScore = 0;

    // set starting round and declare result
    let round = 1;
    let result;

    // we want the game to run for 5 rounds.
    while (round <= 5) {
        console.log("----- START OF ROUND -----")

        // store the result of playRound() in result. A result of 1 means the user gained a point, and a result of 0 means the computer gained a point.
        result = playRound();
        
        if (result == 1) {
            userScore++;
        } else if (result == 0) {
            computerScore++;
        }

        // advance the round and set the result to null so that if the next round results in a tie, a point doesn't get incorrectly added to either the user or player
        round++;
        result = null;

        console.log("----- END OF ROUND -----")
        console.log("User Score: " + userScore);
        console.log("Computer Score: " + computerScore);

    }

    console.log("----- MATCH OVER! -----")
    if (userScore == computerScore) {
        console.log("Tie match! Both you and the computer scored: " + userScore);
    } else if (userScore > computerScore) {
        console.log("You win! You scored " + userScore + " points and the computer scored " + computerScore + " points!")
    } else {
        console.log("You lose! You scored " + userScore + " points and the computer scored " + computerScore + " points!")

    }

}

// playGame();