const prompt = require("prompt-sync")();

const {
    HANGMAN_PICS,
    WORDS_TO_GUESS,
    GAME_OVER,
    TITLE_SCREEN,
    YOU_WIN,
    INSULTS,
} = require("./constants");

const COLOR_RED = '\x1b[31m%s\x1b[0m';
const COLOR_GREEN = '\x1b[32m%s\x1b[0m';
const COLOR_BLUE = '\x1b[36m%s\x1b[0m';
const QUIT_TEXT = "Thank you for playing!";

let falseLetter = [];
let failCount = 0;

console.clear();
console.log(COLOR_BLUE, TITLE_SCREEN[0]);

let difficulty = prompt(
        "Enter difficulty (easy/medium/hard/custom): "
    ).toLowerCase();

if (difficulty === "quit") {
    console.log(QUIT_TEXT);
    return;
}

while (
    difficulty !== "easy" &&
    difficulty !== "medium" &&
    difficulty !== "hard" &&
    difficulty !== "custom"
) {
    difficulty = prompt(
            "Type either 'easy', 'medium', 'hard' or 'custom': "
        ).toLowerCase();
    if (difficulty === "quit") {
        console.log(QUIT_TEXT);
        return;
    }
}

let word;

if (difficulty === "easy") {
    word = WORDS_TO_GUESS.difficulty_1[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_1.length)];
}
else if(difficulty === "medium") {
    word = WORDS_TO_GUESS.difficulty_2[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_2.length)];    
    failCount = 1;
}
else if(difficulty === "hard") {
    word = WORDS_TO_GUESS.difficulty_3[Math.floor(Math.random() * WORDS_TO_GUESS.difficulty_3.length)];
    failCount = 2;
}
else if(difficulty === "custom") {
    word = prompt("Enter your word: ");
}

const targetWord = word.split("");
let playerWord = Array(targetWord.length);

for (let i = 0; i < playerWord.length; i++) {
    playerWord[i] = "_";
}

console.clear();
while (failCount < 6) {
    let isCorrectGuess = false;

    console.log(playerWord.join(" "));

    let letter = prompt("letter: ");

    if (letter.toLowerCase() === "quit") {
        console.log(QUIT_TEXT);
        return;
    }

    while (letter.length !== 1) {
        letter = prompt("Please enter only one letter: ");
        if (letter.toLowerCase() === "quit") {
            console.log("Thank you for playing!");
            return;
        }
    }

    while (
        falseLetter.includes(letter.toLowerCase()) ||
        playerWord.includes(letter.toLowerCase())
    ) {
        letter = prompt("You letter has already been used: ");
        if (letter.toLowerCase() === "quit") {
            console.log("Thank you for playing!");
            return;
        }
    }

    for (let i = 0; i < playerWord.length; i++) {
        if (letter.toLowerCase() === targetWord[i].toLowerCase()) {
            playerWord[i] = targetWord[i];
            isCorrectGuess = true;
        }
    }

    if (targetWord.join("") === playerWord.join("")) {
        console.log(playerWord.join(" "));
        console.log(COLOR_GREEN, YOU_WIN[0]);
        return;
    }

    console.clear();
    if (!isCorrectGuess) {
        failCount++;
        falseLetter.push(letter.toLowerCase());
        console.log(INSULTS[Math.floor(Math.random () * INSULTS.length)]);
    }

    console.log(HANGMAN_PICS[failCount]);
    console.log(`False letters: ${falseLetter}`);
}


console.clear();
console.log(COLOR_RED, GAME_OVER[0]);
console.log(HANGMAN_PICS[failCount]);
console.log(`You lose :( The word was ${word}`);