// ---------------------------------
// functionality:

// main page has view highscores and start quizz button
// when start quizz clicked then dispaly question with possible answers
//     each answer has button
//     event timer start if start button clicked
//     event first question appears if start button clicked
//     event next question appears if answer button clicked after 1 sec
//     event text displays if correct
//     event text displays if wrong
//         event if wrong answer will take off time of timer
//     event if all questions answered or timer runs out displays score
//     event displays enter inital box
//         if enter initials button clicked
//             submit data (maybe make 4 char max)
//             event if enter initials clicked displays our score in leaderboard
//     if leaderboard clicked sorts  by highest first
//         go back button takes you to mainpage
//         clear high scores button deletes scored data and resets

// hints: check js linked to html

//quesitons object arrya

let questions = //varriable storing array
[
    {//individual items in array
    title: "What year was the Atari 2600 released?",
    choices: ["1977", "1964", "1981", "2001"],
    answer: "1977",
    wrongAnswers: ["1964", "1981", "2001"],
    },
    {
    title: "What was the first console made?",
    choices: ["atari", "gameboy", "Odyssey", "ps2"],
    answer: "Odyssey",
    wrongAnswers: ["atari", "gameboy", "ps2"],
    },
    {
    title: "Which game franchise has made the most money in history?",
    choices: ["Super Mario", "GTA", "RDR2", "pokemon"],
    answer: "pokemon",
    wrongAnswers: ["Super Mario", "GTA", "RDR2"],
    },
    {
    title: "Which was the first pokemon game?",
    choices: ["crystal", "red and green", "blue", "emerald"],
    answer: "red and green",
    wrongAnswers: ["crystal", "blue", "emerald"],
    },
    {
    title: "Which one of these was a starter pokemon for Pokemon Red and Green?",
    choices: ["bulbasaur", "pikachu", "eevee", "charizard"],
    answer: "bulbasaur",
    wrongAnswers: ["pikachu", "eevee", "charizard"],
    }
];