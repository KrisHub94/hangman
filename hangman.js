console.clear();
const prompt = require("prompt-sync")();

const { HANGMAN_PICS } = require("./constants");
const { WORDS_TO_GUESS} = require("./constants");
const { GAME_OVER } = require("./constants");
const { TITLE_SCREEN} = require("./constants");
const { YOU_WIN } = require("./constants");
const { insults } = require("./constants");

let falseLetter = [];
let failCount = 0;

console.log('\x1b[36m%s\x1b[0m', TITLE_SCREEN[0]);
let difficulty = prompt("Enter difficulty (easy/medium/hard/custom): ");
if (difficulty.toLowerCase() === "quit") {
    console.log("Thank you for playing!");
    return;
}
while (difficulty.toLowerCase() !== "easy" && difficulty.toLowerCase() !== "medium" && difficulty.toLowerCase() !== "hard" && difficulty.toLowerCase() !== "custom") {
    difficulty = prompt("Type either 'easy', 'medium', 'hard' or 'custom': ")
    if (difficulty.toLowerCase() === "quit") {
        console.log("Thank you for playing!");
        return;
    }
}
if (difficulty.toLowerCase() === "easy") {
    var input = WORDS_TO_GUESS.difficulty_1[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_1.length)];
}
else if(difficulty.toLowerCase() === "medium") {
    var input = WORDS_TO_GUESS.difficulty_2[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_2.length)];    
    failCount = 1;
}
else if(difficulty.toLowerCase() === "hard") {
    var input = WORDS_TO_GUESS.difficulty_3[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_3.length)];
    failCount = 2;
}
else if(difficulty.toLowerCase() === "custom") {
    var input = prompt("Enter your word: ");
}



const targetWord = input.split("");
console.log (targetWord.join(""));
let playerWord = Array(targetWord.length);
for (i = 0; i < playerWord.length; i++) {
    playerWord[i] = "_";
}

console.clear();
let check = false;

while (failCount <  6){
    console.log(playerWord.join(" "));

    let letter = prompt("letter: ");

    if (letter.toLowerCase() === "quit") {
        console.log("Thank you for playing!");
        return;
    }

    while (letter.length !== 1) {
        letter = prompt("Please enter only one letter: ");
        if (letter.toLowerCase() === "quit") {
            console.log("Thank you for playing!");
            return;
        }
    }
    while (falseLetter.includes(letter.toLowerCase()) || playerWord.includes(letter.toLowerCase())) {
        letter = prompt("You letter has already been used: ");
        if (letter.toLowerCase() === "quit") {
            console.log("Thank you for playing!");
            return;
        }
    }

    for (i = 0; i < playerWord.length; i++) {
        if (letter.toLowerCase() === targetWord[i].toLowerCase()) {
            playerWord[i] = targetWord[i];
            check = true;
        }
    }
    if (targetWord.join() === playerWord.join()) {
        console.log(playerWord.join(" "));
        console.log('\x1b[32m%s\x1b[0m', YOU_WIN[0]);
        return;
    }
    console.clear();
    if (!check) {
        failCount++;
        falseLetter.push(letter.toLowerCase());
        console.log(insults[Math.floor(Math.random () * insults.length)]);
    }

    check = false;
    console.log(HANGMAN_PICS[failCount]);
    console.log(`False letters: ${falseLetter}`);
}


console.clear();
if (failCount === 6) {
    console.log('\x1b[31m%s\x1b[0m', GAME_OVER[0]);
    console.log(HANGMAN_PICS[failCount]);
}
console.log(`You lose :( The word was ${input}`);