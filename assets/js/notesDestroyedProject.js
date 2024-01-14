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

//------------------------logic-------------------------//

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

let score = 0
let time = 60

startButtonEl.addEventListener("click", function(event) {
event.preventDefault();
startQuiz();
});
function startQuiz(event) {
    time = 60;
    score = 0;
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    timerLeftEl.textContent = timeLeft;
    questionsEl.classList.remove("hide");
    displayQuestion();
    startTimer();
};

function displayQuestion() {
    questionsEl.classList.remove("hide");
};
//----------------------//
function endQuestions() {
    questionsEl.classList.add("hide");
    endScreenEl.classList.remove("hide");
    finalScoreEl.textContent = score;
    time = 0;
    timerLeftEl.textContent = time;
    //add client side storage for initials and score to be stored in local storage
    localStorage.setItem("score", score);
}

submitInitialsButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    enterInitialsEl.classList.add("hide");
    finalScoreEl.textContent = score;
    finalScoreEl.classList.remove("hide");
    feedbackEl.classList.remove("hide");
    endScreenEl.classList.add("hide");
    startScreenEl.classList.remove("hide");
    localStorage.setItem("initials", initials);
    
});

//--------------------------------------------------------//
//---------------------Questions---------------------------//
let questionTitleEl = document.querySelector("#question-title");
let questionChoicesEl = document.querySelector("#choices");
let timerLeftEl = document.querySelector("#time");

function question1() {
    startTimer();
    if (time === 0) {
        endQuestions();
    }
    questionTitleEl.textContent = "question 1: ";
    let question1Display = document.createElement("p");
    questionTitleEl.appendChild(question1Display);
    question1Display.textContent = "my question?";
    questionChoicesEl.textContent = "choices:";
    let questionChoicesDisplay1 = document.createElement("button");
    let questionChoicesDisplay2 = document.createElement("button");
    let questionChoicesDisplay3 = document.createElement("button");
    let questionChoicesDisplay4 = document.createElement("button");
    questionChoicesEl.append(questionChoicesDisplay1, questionChoicesDisplay2, questionChoicesDisplay3, questionChoicesDisplay4);
    questionChoicesDisplay1.textContent = "correct choice is this one";
    questionChoicesDisplay2.textContent = "choice 2";
    questionChoicesDisplay3.textContent = "choice 3";
    questionChoicesDisplay4.textContent = "choice 4";
    questionChoicesDisplay1.addEventListener("click", function() {
        questionChoicesDisplay1.textContent = "correct!";
        addPoints();
        question2();
    })
    questionChoicesDisplay2.addEventListener("click", function() {
        questionChoicesDisplay2.textContent = "wrong!";
        takeOffTime();
        question2();
    })
    questionChoicesDisplay3.addEventListener("click", function() {
        questionChoicesDisplay3.textContent = "wrong!";
        takeOffTime();
        question2();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        question2();
    })
};
updateTimerTimeDeducted();
question1();

function question2() {
    if (time === 0) {
        endQuestions();
    }
    questionTitleEl.textContent = "question 2: ";
    let question2Display = document.createElement("p");
    questionTitleEl.appendChild(question2Display);
    question2Display.textContent = "my question?";
    questionChoicesEl.textContent = "choices:";
    let questionChoicesDisplay1 = document.createElement("button");
    let questionChoicesDisplay2 = document.createElement("button");
    let questionChoicesDisplay3 = document.createElement("button");
    let questionChoicesDisplay4 = document.createElement("button");
    questionChoicesEl.append(questionChoicesDisplay1, questionChoicesDisplay2, questionChoicesDisplay3, questionChoicesDisplay4);
    questionChoicesDisplay1.textContent = "choice 1";
    questionChoicesDisplay2.textContent = "choice 2";
    questionChoicesDisplay3.textContent = "correct choice is this one";
    questionChoicesDisplay4.textContent = "choice 4";
    questionChoicesDisplay3.addEventListener("click", function() {
        questionChoicesDisplay3.textContent = "correct!";
        addPoints();
        question3();
    })
    questionChoicesDisplay2.addEventListener("click", function() {
        questionChoicesDisplay2.textContent = "wrong!";
        takeOffTime();
        question3();
    })
    questionChoicesDisplay1.addEventListener("click", function() {
        questionChoicesDisplay1.textContent = "wrong!";
        takeOffTime();
        question3();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        question3();
    });
};
updateTimerTimeDeducted()

function question3() {
    if (time === 0) {
        endQuestions();
    }
    questionTitleEl.textContent = "question 3: ";
    let question3Display = document.createElement("p");
    questionTitleEl.appendChild(question3Display);
    question3Display.textContent = "my question?";
    questionChoicesEl.textContent = "choices:";
    let questionChoicesDisplay1 = document.createElement("button");
    let questionChoicesDisplay2 = document.createElement("button");
    let questionChoicesDisplay3 = document.createElement("button");
    let questionChoicesDisplay4 = document.createElement("button");
    questionChoicesEl.append(questionChoicesDisplay1, questionChoicesDisplay2, questionChoicesDisplay3, questionChoicesDisplay4);
    questionChoicesDisplay1.textContent = "choice 1";
    questionChoicesDisplay2.textContent = "correct choice is this one";
    questionChoicesDisplay3.textContent = "choice 3";
    questionChoicesDisplay4.textContent = "choice 4";
    questionChoicesDisplay2.addEventListener("click", function() {
        questionChoicesDisplay2.textContent = "correct!";
        addPoints();
        endQuestions();
        timerStop();
    })
    questionChoicesDisplay3.addEventListener("click", function() {
        questionChoicesDisplay3.textContent = "wrong!";
        takeOffTime();
        endQuestions();
        timerStop();
    })
    questionChoicesDisplay1.addEventListener("click", function() {
        questionChoicesDisplay1.textContent = "wrong!";
        takeOffTime();
        endQuestions();
        timerStop();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        endQuestions();
        timerStop();
    })
};
updateTimerTimeDeducted();

//-------------------------------------------//

function startTimer() {
    time = 60;
    timerLeftEl.textContent = time;
    //make change timer in client side in realtime with client side storage
    let timerInterval = setInterval(function() {
        time--;    
        if(time === 0) {
            clearInterval(timerInterval);}}, 1000);
}
function takeOffTime(time) {
    time = time - 5;
    return time;
    //elaborate to make work in unison with timer and update with client side storage give and get
};

function updateTimerTimeDeducted() {
    timerLeftEl.textContent = time;
    //make change timer in client side in realtime with client side storage
};

function addPoints(score) {
    score = score + 1;
    localStorage.setItem("score", score);
    return score;
};

function timerStop() {
    time = 0;
    timerLeftEl.textContent = time;
    //make change timer in client side in realtime with client side storage
}; 

//--------------------------------------------------------//
//------------------------scores--------------------------//

let highscoresOlEl = document.querySelector("#highscores");
let clearHighScoresButtonEl = document.querySelector("#clear");

//click event to clear high scores
//function to load highscores
//create li and append to ul in highscores
//get client side storage of highscores and apend to li

clearHighScoresButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    highscoresLiEl.innerHTML = "";
})

let highscoresLiEl = document.createElement("li");
highscoresOlEl.appendChild(highscoresLiEl)
highscoresLiEl.textContent = localStorage.getItem("highscores")

//--------------------------------------------------------//
