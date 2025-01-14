let results = document.querySelector(".results");
let selections = document.querySelector(".selections");
let userScorePara = document.querySelector("#userScore");
let scores = document.querySelector(".scores");
let computerScorePara = document.querySelector("#computerScore");
let userChoicePara = document.createElement("p");
let computerChoicePara = document.createElement("p");
let roundResultPara = document.createElement("p");

selections.style.display = "none";
scores.style.display = "none";


// if user selects button x, playRound(x) is called with x as the user selection
selections.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
});

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
function randomIntFromZeroAndTwo() {
    return Math.floor(Math.random() * 3);
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

    userChoicePara.textContent = "";
    computerChoicePara.textContent = "";
    roundResultPara.textContent = "";

    const computerChoice = getComputerChoice();

    userChoicePara.textContent = `User Chooses: ${userChoice}`;
    computerChoicePara.textContent = `Computer Chooses: ${computerChoice}`;

    results.appendChild(userChoicePara);
    results.appendChild(computerChoicePara);
    results.appendChild(roundResultPara);

    let didUserWin = null;

    // the difference of length between the user and computer choices is the algorithm im using to determine round winners without using multiple nested conditional statements
    choiceLengthDiff = userChoice.length - computerChoice.length;

    // round result: tie
    if (choiceLengthDiff === 0) {
        roundResultPara.textContent = `Tie game! Both players choose ${userChoice}`
        return;
    }

    switch (choiceLengthDiff) {
        // user enters rock, computer entered scissors- user wins
        case -4:
            roundResultPara.textContent = `You win! ${userChoice} beats ${computerChoice}`;
            break;

        // user enters rock, computer entered paper- user loses
        case -1:
            roundResultPara.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
            break;

        // user enters paper, computer entered rock- user wins
        case 1:
            roundResultPara.textContent = `You win! ${userChoice} beats ${computerChoice}`;
            break;

        // user enters paper, computer entered scissors- user loses
        case -3:
            roundResultPara.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
            break;

        // user enters scissors, computer entered paper- user wins
        case 3:
            roundResultPara.textContent = `You win! ${userChoice} beats ${computerChoice}`;
            break;

        // user enters scissors, computer entered rock- user wins
        case 4:
            roundResultPara.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
            break;
    }

    // user win numbers
    if (choiceLengthDiff === -4 ||
        choiceLengthDiff === 1 ||
        choiceLengthDiff === 3) {
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

    let startGameBtn = document.querySelector("button");

    startGameBtn.addEventListener("click", e => {
        startGameBtn.style.display = "none";
        selections.style.display = "block";
        scores.style.display = "block";
    });
}
playGame();
