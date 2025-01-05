# Pseudocode for Rock Paper Scissors Project

## 1. Computer Rock Paper Scissors Choice Logic

Problem: "The computer should randomly return "Rock", "Paper", or "Scissors".

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