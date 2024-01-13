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

// ---------------------------------

let scoreEl = document.getElementsByClassName("scores");
let timerEl = document.getElementsByClassName("timer");
let timerLeftEl = document.getElementById("time");
let startScreenEl = document.getElementById("start-screen");
let startButtonEl = document.getElementById("start");
let questionsEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let questionChoicesEl = document.getElementById("choices");
let endScreenEl = document.getElementById("end-screen");
let finalScoreEl = document.getElementById("final-score");
let enterInitialsEl = document.getElementById("initials");
let submitInitialsButtonEl = document.getElementById("submit");
let feedbackEl = document.getElementById("feedback");