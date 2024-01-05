"use strict"

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


function getComputerChoice() {
    const play = [ROCK, PAPER, SCISSORS];
    const numberRandom = Math.random() * 3;
    const computer = Math.floor(numberRandom);
    return play[computer];
}

function playRound(computerSelection, playerSelection) {
    let message = "";
    if (computerSelection === ROCK) {
        switch (playerSelection) {
            case ROCK:
                console.log("TIES, re-playing the round");
                const computerSelection = getComputerChoice();
                const playerSelection = getPlayerChoice();
                message = playRound(computerSelection, playerSelection);
                break;
            case PAPER:
                message = "You winner! Paper beats Rock";
                break;
            case SCISSORS:
                message = "You lose! Rock beats Scissors";
                break;
        }
    } else if (computerSelection === PAPER) {
        switch (playerSelection) {
            case ROCK:
                message = "You lose! Paper beats Rock";
                break;
            case PAPER:
                console.log("TIES, re-playing the round");
                const computerSelection = getComputerChoice();
                const playerSelection = getPlayerChoice();
                message = playRound(computerSelection, playerSelection);
                break;
            case SCISSORS:
                message = "You winner! Scissors beats Paper";
                break;
        }
    } else {
        switch (playerSelection) {
            case ROCK:
                message = "You winner! Rock beats Scissors";
                break;
            case PAPER:
                message = "You lose! Scissors beats Paper";
                break;
            case SCISSORS:
                console.log("TIES, re-playing the round");
                const computerSelection = getComputerChoice();
                const playerSelection = getPlayerChoice();
                message = playRound(computerSelection, playerSelection);
                break;
        }
    }
    return message;
}

function counter(counter) {
    return ++counter;
}

function getPlayerChoice() {
    let playerSelection = '';
    while (!(playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS)) {
        playerSelection = prompt("Select rock, paper or scissors: ");
        playerSelection = playerSelection.toLocaleLowerCase();
    }
    return playerSelection;
}

function play() {


    let playing = true;
    let consoleMarker = 0;
    let playerMarker = 0;
    let message = '';
    let round = 0;
    while (playing) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        message = playRound(computerSelection, playerSelection);
        round = counter(round);
        message.includes('winner!') ? playerMarker++ : consoleMarker++;
        console.log(`Round ${round}`);
        console.log(message);
        console.log(`Player ${playerMarker} vs Console ${consoleMarker}`);
        if (consoleMarker >= 5 || playerMarker >= 5) {
            console.log(`Game over`);
            break;
        }
    }


}
