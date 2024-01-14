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
let Score = 0 // initial score on starting, will change as game progresses

//convenience variables
numberOfQuestions = questions.length;

//get items from local storage //remeber to set also// remember to stringify// remeber to parse
let score = localStorage.getItem("score")
let initials = localStorage.getItem("initials")

//functions i think i'll need
//-----------game progression-----------//
function startGame() {
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    questionsEl.classList.remove("hide");
    timerLeftEl.textContent = timeLeft;
    startTimer();
    displayNextQuestion();
};
function displayNextQuestion(){
    //display question starting 0 adding 1 each time to display next question
};
function endGame(){
    //if time is 0 or no questions left in array game over
    saveScore();
    endTimer();
    displayScore();
    //takes you to highscores (hides and removes html elements)
};
//-----------timer progression-----------//
function startTimer(){
    //starts at 60
    //takes away a second each second interval
    //updates text every second
    //stops at 0
};
function timerPenalty(){
    //takes away 5 seconds if wrong answer clicked
    
};
function endTimer(){
    //make stime left 0
    //sets text
};
//-----------score progression-----------//
function addToScore(){
    //if right answer clicked add 30 to score
};
function saveScore(){
    //updates local storge to current score
    //adds to highscore board
    
};
function clearScore(){
    //deletes local storage of intials and scores
};
function displayScore(){
    //displays score on screen in text section
};
//-----------initials progression-----------//
function displayInitials(){
    //displays initials on screen in text section
};
function saveInitials(){
    //updates local storge to current initials
    //adds to highscore board
};

function displayHighScoresWithInitials(){
    //gets high scores from local storage
    //gets initials from local storage
    //shows text inout for initials
    //shows text input for score
};
//-----------game reset-----------//
function resetGame(){
    //clears current score
    //sets current question to 0
    //deletes answers array
    //gameover = true
    //resets timer to 60
};

//step 1, listen for event of game start button

startButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    startGame();
    });