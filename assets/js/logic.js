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

let scoreEl = document.querySelector(".scores");
let timerEl = document.querySelector(".timer");
let timerLeftEl = document.querySelector("#time");
let startScreenEl = document.querySelector("#start-screen");
let startButtonEl = document.querySelector("#start");
let questionsEl = document.querySelector("#questions");
let endScreenEl = document.querySelector("#end-screen");
let finalScoreEl = document.querySelector("#final-score");
let enterInitialsEl = document.querySelector("#initials");
let submitInitialsButtonEl = document.querySelector("#submit");
let feedbackEl = document.querySelector("#feedback");

let score = 0
let time = 60

startButtonEl.addEventListener("click", function(event) {
event.preventDefault();
startQuiz();
});
function startQuiz(event) {
    //reset timer
    //reset score
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    timerLeftEl.textContent = time;
    questionsEl.classList.remove("hide");
    displayQuestion();
};

function displayQuestion() {
    questionsEl.classList.remove("hide");
};

function endQuestions() {
    questionsEl.classList.add("hide");
    endScreenEl.classList.remove("hide");
    finalScoreEl.textContent = score;
    //stop timer
    //add client side storage for initials and score to be stored in local storage
}

submitInitialsButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    enterInitialsEl.classList.add("hide");
    finalScoreEl.textContent = score;
    finalScoreEl.classList.remove("hide");
    feedbackEl.classList.remove("hide");
    endScreenEl.classList.add("hide");
    startScreenEl.classList.remove("hide");
    
});

