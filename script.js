function getComputerChoice() {
    // make computer choice (0-2)
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

// this function returns integers between 0-2 (inclusive)
let randomIntFromZeroAndTwo = () => Math.floor(Math.random() * 3)

console.log(getComputerChoice());