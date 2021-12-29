"use strict"

const rockPaperScissorsMap = ['Rock', 'Paper', 'Scissors'];
const rockPaperScissorsEmojiMap = ['🗻', '📃', '✂']
let playerWins = 0;
let cpuWins = 0;

function computerPlay(playerSelection) {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let cpuSelectionNumber = (Math.floor(Math.random() * (max - min) + min));

    document.getElementById("cpu-choice").innerHTML = rockPaperScissorsEmojiMap[cpuSelectionNumber]
    playRound(playerSelection, rockPaperScissorsMap[cpuSelectionNumber]);
}

function game() {
    playerWins = 0;
    cpuWins = 0;

    toggleStarted(true);
    document.getElementById("player-score").innerHTML = playerWins
    document.getElementById("cpu-score").innerHTML = cpuWins
    document.getElementById("round-outcome").innerHTML = 'Waiting...';
    document.getElementById("cpu-choice").innerHTML = '?';
}

function checkGame(roundOutcomeMessage) {
    document.getElementById("player-score").innerHTML = playerWins;
    document.getElementById("cpu-score").innerHTML = cpuWins;

    if(playerWins === 5) {
        roundOutcomeMessage = 'YOU (⌐■_■) WIN';
        toggleStarted(false);

    } else if(cpuWins === 5) {
        roundOutcomeMessage = 'YOU (╯°□°)╯︵ ┻━┻ LOSE';
        toggleStarted(false);
    }
    document.getElementById("round-outcome").innerHTML = roundOutcomeMessage;
}

function playRound(playerSelection, computerSelection) { 
    let roundOutcomeMessage = '';
    if(playerSelection === computerSelection) {
        roundOutcomeMessage = `${playerSelection} and ${computerSelection}, it's a TIE!`; // tie
        checkGame(roundOutcomeMessage);
        return;
    }
    switch (playerSelection) {
        case "Rock":
            if(computerSelection === "Scissors") {
                playerWins++;
                roundOutcomeMessage = `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                cpuWins++
                roundOutcomeMessage = `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
            checkGame(roundOutcomeMessage);
            return;

        case "Paper":
            if(computerSelection === "Rock") {
                playerWins++;
                roundOutcomeMessage = `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                cpuWins++
                roundOutcomeMessage = `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
            checkGame(roundOutcomeMessage);
            return;

        case "Scissors":
            if(computerSelection === "Paper") {
                playerWins++;
                roundOutcomeMessage = `${playerSelection} beats ${computerSelection}, you WIN!`;
            } else {
                cpuWins++
                roundOutcomeMessage = `${computerSelection} beats ${playerSelection}, you LOSE!`;
            }
            checkGame(roundOutcomeMessage);
            return;

        default:
            console.error("playerSelection was not a valid selection!");
            return;
    }
}

function toggleStarted(startToggleOn) {
    if(startToggleOn) { 
        document.getElementById("start").setAttribute("disabled", "");

        document.getElementById("rock").removeAttribute("disabled");
        document.getElementById("rock").setAttribute("enabled", "");
        document.getElementById("paper").removeAttribute("disabled");
        document.getElementById("paper").setAttribute("enabled", "");
        document.getElementById("scissors").removeAttribute("disabled");
        document.getElementById("scissors").setAttribute("enabled", "");
    } else {
        document.getElementById("start").removeAttribute("disabled");
        document.getElementById("start").setAttribute("enabled", "");

        document.getElementById("rock").removeAttribute("enabled");
        document.getElementById("rock").setAttribute("disabled", "");
        document.getElementById("paper").removeAttribute("enabled");
        document.getElementById("paper").setAttribute("disabled", "");
        document.getElementById("scissors").removeAttribute("enabled");
        document.getElementById("scissors").setAttribute("disabled", "");
    }
}
