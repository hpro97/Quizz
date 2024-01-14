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

//queryselectors for all//
let scoreEl = document.querySelector(".scores");
let timerEl = document.querySelector(".timer");
let startScreenEl = document.querySelector("#start-screen");
let startButtonEl = document.querySelector("#start");
let questionsEl = document.querySelector("#questions");
let endScreenEl = document.querySelector("#end-screen");
let finalScoreEl = document.querySelector("#final-score");
let enterInitialsEl = document.querySelector("#initials");
let submitInitialsButtonEl = document.querySelector("#submit");
let feedbackEl = document.querySelector("#feedback");

//define initial variables that change through game
let timeLeft = 60;
let answers = []; //array for answers to be stored when making score
let gameOver = true; //boolean for if game is over (starts as over until game started)
let currentQuestion = questions[i]; //current question which we're on from questions array
let score = 0 // initial score on starting, will change as game progresses

//convenience variables
numberOfQuestions = questions.length;

//get items from local storage
score = localStorage.getItem("score")