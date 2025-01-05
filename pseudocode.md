# Pseudocode for Rock Paper Scissors Project

## 1. Computer Rock Paper Scissors Choice Logic

**Problem:** "The computer should randomly return 'Rock', 'Paper', or 'Scissors'."

```
function getComputerChoice() {
    Generate random number between 0 and 2, inclusive.
    If number equals 0:
        return "rock"
    Else If number equals 1:
        return "paper"
    Else:
        return "scissors"
}
```

## 2. Write Logic to get Users Choice

**Problem:** "I need to prompt the user for input in the form of numbers. After confirming that the input is valid, I will convert the chosen number into either rock, paper, or scissors and return it as the userChoice."

```
function getUserChoice() {
    Prompt user to enter a number between 0 and 2. 0 == rock, 1 == paper, and 2 == scissors.
    Convert user input to type number.
    Ensure that user input is either 0, 1, or 2.
    Ensure that user input is !NaN.
    If user input is valid, continue.
    Else, return to line 1.

    Convert 0 to rock, 1 to paper, and 2 to scissors.
    return choice.
}
```

## 3. Write Logic to Play a Single Round

**Problem:** "I need to take the userChoice and computerChoice and pass them into a function that handles a single round of play. This function should handle playing the round, incrementing the round's winner score, and logging a winner in the console."

