let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener("click", playRound("rock"));
paperButton.addEventListener("click", playRound("paper"));
scissorsButton.addEventListener("click", playRound("scissors"));


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
function playRound(userChoice) {

    const computerChoice = getComputerChoice();

    console.log("User Chooses " + userChoice);
    console.log("Computer Chooses " + computerChoice);

    let didUserWin = null;

    // the difference of length between the user and computer choices is the algorithm im using to determine round winners without using multiple nested conditional statements
    choiceLengthDiff = userChoice.length - computerChoice.length;

    // round result: tie
    if (choiceLengthDiff === 0) {
        console.log(`Tie game! Both players choose ${userChoice}`);
        return;
    }

    switch (choiceLengthDiff) {
        // user enters rock, computer entered scissors- user wins
        case -4:
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            break;

        // user enters rock, computer entered paper- user loses
        case -1:
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            break;

        // user enters paper, computer entered rock- user wins
        case 1:
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            break;

        // user enters paper, computer entered scissors- user loses
        case -3:
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            break;

        // user enters scissors, computer entered paper- user wins
        case 3:
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            break;

        // user enters scissors, computer entered rock- user wins
        case 4:
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            break;
    }

    // user win numbers
    if (choiceLengthDiff === -4 || 
        choiceLengthDiff === 1 || 
        choiceLengthDiff === 3 ) {
            didUserWin = true;
        } else {
            didUserWin = false;
        }
        return didUserWin;
}

// this function controls the entire multi-round game 
function playGame() {
    // initialize the score values to 0
    let userScore = 0;
    let computerScore = 0;

    // set starting round and declare result
    let round = 1;
    let didUserWin;

    // we want the game to run for 5 rounds.
    // while (round <= 5) {
        console.log(`----- START OF ROUND ${round} -----`)

        didUserWin = playRound();

        if (didUserWin) {
            userScore++;
        } else if (didUserWin === false) {
            computerScore++
        }

        console.log(`----- END OF ROUND ${round} -----`)
        console.log("User Score: " + userScore);
        console.log("Computer Score: " + computerScore);

        round++;
    // }

    // ~~end of game prints~~

    // console.log("----- MATCH OVER! -----")
    // if (userScore == computerScore) {
    //     console.log("Tie match! Both you and the computer scored: " + userScore);
    // } else if (userScore > computerScore) {
    //     console.log("You win! You scored " + userScore + " points and the computer scored " + computerScore + " points!")
    // } else {
    //     console.log("You lose! You scored " + userScore + " points and the computer scored " + computerScore + " points!")
    // }
}

playGame();