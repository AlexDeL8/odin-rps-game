"use strict"

const rockPaperScissorMap = ['rock', 'paper', 'scissors']; //[🗻, 📃, ✂];

function computerPlay() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    console.log(rockPaperScissorMap[(Math.floor(Math.random() * (max - min) + min))]);
}