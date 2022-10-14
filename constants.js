const HANGMAN_PICS = [
  "+---+\n" +
    "|   |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " /    |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " / \\  |\n" +
    "      |\n" +
    "=========",
];

const TITLE_SCREEN = [
  `
  
██   ██  █████  ███    ██  ██████  ███    ███  █████  ███    ██ 
██   ██ ██   ██ ████   ██ ██       ████  ████ ██   ██ ████   ██ 
███████ ███████ ██ ██  ██ ██   ███ ██ ████ ██ ███████ ██ ██  ██ 
██   ██ ██   ██ ██  ██ ██ ██    ██ ██  ██  ██ ██   ██ ██  ██ ██ 
██   ██ ██   ██ ██   ████  ██████  ██      ██ ██   ██ ██   ████ 
                                                                
                                                                
`
]


const GAME_OVER = [
`
██    ██  ██████  ██    ██     ██       ██████  ███████ ███████ 
 ██  ██  ██    ██ ██    ██     ██      ██    ██ ██      ██      
  ████   ██    ██ ██    ██     ██      ██    ██ ███████ █████   
   ██    ██    ██ ██    ██     ██      ██    ██      ██ ██      
   ██     ██████   ██████      ███████  ██████  ███████ ███████ 
                                                                
                                                                
`
];

const YOU_WIN = [
  `
  ██    ██  ██████  ██    ██     ██     ██ ██ ███    ██ 
   ██  ██  ██    ██ ██    ██     ██     ██ ██ ████   ██ 
    ████   ██    ██ ██    ██     ██  █  ██ ██ ██ ██  ██ 
     ██    ██    ██ ██    ██     ██ ███ ██ ██ ██  ██ ██ 
     ██     ██████   ██████       ███ ███  ██ ██   ████ 
                                                        
                                                        
                                                                        
`
]


const insults = [
    `bruh...`,
    `git gud`,
    `epic fail`,
    "type 'quit' to stop playing",
    'seriously?',
    'wrong',
]

// TODO: Fill this list with values about a certain topic
// you are passionate about: e.g. famous scientists, chess players, ...
const WORDS_TO_GUESS = {
  difficulty_1: ['apple', 'banana', 'pineapple', 'steak', 'rice', 'noodles', 'cucumber', 'spinach', 'carrot', 'onion', 'egg', 'pancake', 'bacon', 'cheese', 'milk', 'butter', 'eggplant', 'candy', 'chocolate', 'juice', 'burrito', 'nachos', 'sausage',],
  difficulty_2: ['Matrix', 'Scarface', 'Godfather', 'Braveheart', 'Kartoffelsalat', 'Avatar', 'Titanic', 'Frozen', 'Scream', 'Saw', 'Avengers', 'Alien', 'Carrie', 'Zombieland', 'Friday', 'Irishman', 'Smile', 'Ted', 'Spiderman', 'Inception', 'Tenet', 'Memento', 'Shrek',],
  difficulty_3: ['Aufmerksamkeitsdefizit', 'Kraftfahrzeughaftpflichtversicherung', 'Rindfleischettiketierungsüberwachungsaufgabenübertragungsgesetz', 'Unterhaltungselektronik', 'Grundstücksverkehrsgenehmigungszuständigkeitsübertragungsverordnung', 'Verkehrsinfrastrukturfinanzierungsgesellschaft', 'Hochleistungsflüssigkeitschromatographie', 'Restriktionsfragmentlängenpolymorphismus',]
};

module.exports = {
  HANGMAN_PICS: HANGMAN_PICS,
  WORDS_TO_GUESS: WORDS_TO_GUESS,
  GAME_OVER: GAME_OVER,
  TITLE_SCREEN: TITLE_SCREEN,
  YOU_WIN: YOU_WIN,
  insults: insults
};
