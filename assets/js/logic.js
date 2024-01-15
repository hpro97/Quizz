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
let questionTitleEl = document.querySelector("#question-title");
let questionChoicesEl = document.querySelector("#choices");
let timerLeftEl = document.querySelector("#time");
let endScreenEl = document.querySelector("#end-screen");
let finalScoreEl = document.querySelector("#final-score");
let enterInitialsEl = document.querySelector("#initials");
let submitInitialsButtonEl = document.querySelector("#submit");
let feedbackEl = document.querySelector("#feedback");

//define initial variables that change through game
let timeLeft = 60;
let answers = []; //array for answers to be stored when making score
let gameOver = true; //boolean for if game is over (starts as over until game started)
//let currentQuestion = questions[i];// //current question which we're on from questions array
let currentQuestionIndex = 0;
let wrongAnswerChoice1;
let wrongAnswerChoice2;
let wrongAnswerChoice3;
let wrongAnswerChoice4;
let correctAnswerChoice;
let timerInterval;

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
    timerLeftEl.textContent = timeLeft;
    startTimer();
    displayNextQuestion();
};

function displayNextQuestion(){
    //display question starting 0 adding 1 each time to display next question
    console.log(currentQuestionIndex);
    if (currentQuestionIndex >= questions.length) {
        endGame();
    }
    let currentQuestion = questions[currentQuestionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    let questionChoicesDisplay1 = document.createElement("button");
    let questionChoicesDisplay2 = document.createElement("button");
    let questionChoicesDisplay3 = document.createElement("button");
    let questionChoicesDisplay4 = document.createElement("button");
    questionChoicesEl.innerHTML = '';
    questionChoicesEl.append(questionChoicesDisplay1, questionChoicesDisplay2, questionChoicesDisplay3, questionChoicesDisplay4);
    questionChoicesDisplay1.textContent = currentQuestion.choices[0];
    questionChoicesDisplay2.textContent = currentQuestion.choices[1];
    questionChoicesDisplay3.textContent = currentQuestion.choices[2];
    questionChoicesDisplay4.textContent = currentQuestion.choices[3];
    //---------------------------------------------------------------//
    let correctAnswer = currentQuestion.answer;
    
    if (questionChoicesDisplay1.textContent === correctAnswer) {
        correctAnswerChoice = questionChoicesDisplay1;
    } else if (questionChoicesDisplay2.textContent === correctAnswer) {
        correctAnswerChoice = questionChoicesDisplay2;
    } else if (questionChoicesDisplay3.textContent === correctAnswer) {
        correctAnswerChoice = questionChoicesDisplay3;
    } else {
        correctAnswerChoice = questionChoicesDisplay4;
    }

    //---------------------------------------------------------------//
    // let notCorrectAnswer = [];
    // questionChoicesEl.children.forEach((e) => {
    //     if (e.textContent !== correctAnswer) {
    //         notCorrectAnswer.push(e);
    //     }
    // } );
    // if (questionChoicesEl.children.textContent === notCorrectAnswer) {
    //     wrongAnswerButton = questionChoicesEl.children;
    // }

    // wrongAnswerButton.eventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })



    // if (questionChoicesDisplay1.textContent !== currentQuestion.answer) {
    //     wrongAnswerChoice1 = questionChoicesDisplay1;
    // } else if (questionChoicesDisplay2.textContent !== currentQuestion.answer) {
    //     wrongAnswerChoice2 = questionChoicesDisplay2;
    // } else if (questionChoicesDisplay3.textContent !== currentQuestion.answer) {
    //     wrongAnswerChoice3 = questionChoicesDisplay3;
    // } else {
    //     wrongAnswerChoice4 = questionChoicesDisplay4;
    // }

        //add event listener for wrong answer choice this doesn't work V

    // !correctAnswerChoice.addEventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })

    // wrongAnswerChoice1.addEventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })
    // wrongAnswerChoice2.addEventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })
    // wrongAnswerChoice3.addEventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })
    // wrongAnswerChoice4.addEventListener("click", function(){
    //     timerPenalty();
    //     currentQuestionIndex++;
    //     displayNextQuestion();
    // })

    //---------------------------------------------------------------//

let wrongAnswerChoice1 = questionChoicesDisplay1;
let wrongAnswerChoice2 = questionChoicesDisplay2;
let wrongAnswerChoice3 = questionChoicesDisplay3;
let wrongAnswerChoice4 = questionChoicesDisplay4;

if (questionChoicesDisplay1.textContent === currentQuestion.answer) {
    wrongAnswerChoice1 = null;
} else if (questionChoicesDisplay2.textContent === currentQuestion.answer) {
    wrongAnswerChoice2 = null;
} else if (questionChoicesDisplay3.textContent === currentQuestion.answer) {
    wrongAnswerChoice3 = null;
} else {
    wrongAnswerChoice4 = null;
}

if (wrongAnswerChoice1 !== null) {
    wrongAnswerChoice1.addEventListener("click", function(){
        timerPenalty();
        currentQuestionIndex++;
        displayNextQuestion();
    });
}

if (wrongAnswerChoice2 !== null) {
    wrongAnswerChoice2.addEventListener("click", function(){
        timerPenalty();
        currentQuestionIndex++;
        displayNextQuestion();
    });
}

if (wrongAnswerChoice3 !== null) {
    wrongAnswerChoice3.addEventListener("click", function(){
        timerPenalty();
        currentQuestionIndex++;
        displayNextQuestion();
    });
}

if (wrongAnswerChoice4 !== null) {
    wrongAnswerChoice4.addEventListener("click", function(){
        timerPenalty();
        currentQuestionIndex++;
        displayNextQuestion();
    });
}


    correctAnswerChoice.addEventListener("click", function(){
        addToScore();
        currentQuestionIndex++;
        displayNextQuestion();
    });

};

//---------------------------------------------------------------//

function endGame(){
    //if time is 0 or no questions left in array game over
    
    saveScore();
    endTimer(); //working
    displayScore(); //calling
    
    //takes you to highscores (hides and removes html elements)
};
//-----------timer progression-----------//
function startTimer(){
    timerLeftEl.textContent = timeLeft;
    timerInterval = setInterval(function() {
            timeLeft--;
            timerLeftEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endTimer();
        }
    }, 1000);
};
    //starts at 60
    //takes away a second each second interval
    //updates text every second
    //stops at 0
function timerPenalty(){
    //takes away 5 seconds if wrong answer clicked
    timeLeft -= 5;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerLeftEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endTimer();
    }
        }
function endTimer(){
    //make stime left 0
    //sets text
    timeLeft = 0;
    timerLeftEl.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        return;
    }
};
//-----------score progression-----------//
function addToScore(){
    //if right answer clicked add 30 to score
    let score = parseInt(localStorage.getItem("score")) || 0;
    score += 30;
    localStorage.setItem("score", score);
};
function saveScore(){
    //updates local storge to current score
    scoreTotal = parseInt(localStorage.getItem("score"));
    console.log(scoreTotal);
    
};

function displayScore(){
    questionsEl.classList.add("hide");
    endScreenEl.classList.remove("hide");
    finalScoreEl.textContent = scoreTotal;
    //displays score on screen in text section
};

//-------------------------------------------------//
//------------------ STILL TO DO ------------------//
//-------------------------------------------------//

//-----------initials progression-----------//

function saveInitials(){
    // saves initials to local storage
    // saves initials with score to array as object (AAA, 90)
};

//add event listener for submit button to save initials and save score

//-----------game reset-----------//
function resetGame(){
	// clear score var
	// clear initials var
	// sets current question index to 0
	// delete answers array
	// gameover = true
	// reset timer
};

//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//

//step 1, listen for event of game start button

startButtonEl.addEventListener("click", function(event) {
    resetGame();
    startGame();
    });

submitInitialsButtonEl.addEventListener("click", function(event) {
    saveInitials();

    });