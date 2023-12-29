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
                message = "Account for TIES by re-playing the round";
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
                message = "Account for TIES by re-playing the round";
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
                message = "Account for TIES by re-playing the round";
                break;
        }
    }
    return message;
}

function counter(counter) {
    return ++counter;
}

function getPlayerChoice() {
    const playerSelection = prompt("Select rock, paper or scissors: ");
    return playerSelection.toLowerCase();
}

function play() {

    // for(let i=0; i<=5; i++){
    //     const computerSelection = getComputerChoice();
    //     const playerSelection = getPlayerChoice();
    //     const resultPlayRound = playRound(computerSelection, playerSelection);
    //     if(resultPlayRound.substring(0, 7) == "Account"){
    //         continue;
    //     }
    // }


    let resultPlayRound = '';
    do {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        const resultPlayRound = playRound(computerSelection, playerSelection);
        console.log(resultPlayRound);
        console.log(resultPlayRound.substring(0, 7));
    } while (resultPlayRound.substring(0, 7) == "Account")

}

play();
