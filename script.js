"use strict"

const rockPaperScissorsMap = ['Rock', 'Paper', 'Scissors'];
const rockPaperScissorsEmojiMap = ['🗻', '📃', '✂']
let playerWins = 0;
let cpuWins = 0;

/* Random number generator from 0-2 to access the global maps of values */
function computerPlay(playerSelection) {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let cpuSelectionNumber = (Math.floor(Math.random() * (max - min) + min));

    document.getElementById("cpu-choice").innerText = rockPaperScissorsEmojiMap[cpuSelectionNumber]
    playRound(playerSelection, rockPaperScissorsMap[cpuSelectionNumber]);
}

/* Resets wins and resets screen text */
function game() {
    playerWins = 0;
    cpuWins = 0;

    toggleStarted(true); //game start buttons toggled
    document.getElementById("player-score").innerText = playerWins
    document.getElementById("cpu-score").innerText = cpuWins
    document.getElementById("round-outcome").innerText = '(First to 5 wins)';
    document.getElementById("cpu-choice").innerText = '?';
}

/* Checks current wins to end and/or show game info text */
function checkGame(roundOutcomeMessage) {
    document.getElementById("player-score").innerText = playerWins;
    document.getElementById("cpu-score").innerText = cpuWins;

    if(playerWins === 5) {
        roundOutcomeMessage = 'YOU (⌐■_■) WIN';
        toggleStarted(false); //game end buttons toggled

    } else if(cpuWins === 5) {
        roundOutcomeMessage = 'YOU (╯°□°)╯︵ ┻━┻ LOSE';
        toggleStarted(false); //game end buttons toggled
    }
    document.getElementById("round-outcome").innerText = roundOutcomeMessage;
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

/* Function to toggle the buttons within the application based on start (true) or end (false) of game */
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
