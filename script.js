"use strict"

const rockPaperScissorMap = ['rock', 'paper', 'scissors']; //[🗻, 📃, ✂];

function computerPlay() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    return rockPaperScissorMap[(Math.floor(Math.random() * (max - min) + min))];
}

function game() {
    
}

function playRound(playerSelection, computerSelection) {    
    if(playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection}, it's a TIE!`; // tie
    }
    switch (playerSelection) {
        case "rock":
            if(computerSelection === "scissor") {
                return `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                return `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
        case "paper":
            if(computerSelection === "rock") {
                return `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                return `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
        case "scissor":
            if(computerSelection === "paper") {
                return `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                return `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
        default:
            console.error("playerSelection was not a valid selection!");
            break;
    }
}
