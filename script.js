let results = document.querySelector(".results");
let selections = document.querySelector(".selections");
let userScorePara = document.querySelector("#userScore");
let scores = document.querySelector(".scores");
let computerScorePara = document.querySelector("#computerScore");
let userChoicePara = document.createElement("p");
let computerChoicePara = document.createElement("p");
let roundResultPara = document.createElement("p");

// returns "rock", "paper", or "scissors", randomly.
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
        roundResultPara.textContent = `Tie game! Both players choose ${userChoice}`;
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

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    // if user selects button x, playRound(x) is called with x as the user selection
    selections.addEventListener("click", (event) => {
        let target = event.target;
        let didUserWin;

        switch (target.id) {
            case "rock":
                didUserWin = playRound("rock");
                break;
            case "paper":
                didUserWin = playRound("paper");
                break;
            case "scissors":
                didUserWin = playRound("scissors");
                break;
        }
        // console.log(didUserWin);
        assignScore(didUserWin);

    });

    function assignScore(didUserWin) {


        // console.log(didUserWin);

        if (didUserWin) userScore++;
        if (didUserWin === false) computerScore++;

        userScorePara.textContent = `User Score: ${userScore}`;
        computerScorePara.textContent = `Computer Score: ${computerScore}`;

        // console.log(userScore);
        // console.log(computerScore);

    }






}

playGame();

