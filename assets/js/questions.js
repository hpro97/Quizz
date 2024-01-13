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
let questionTitleEl = document.querySelector("#question-title");
let questionChoicesEl = document.querySelector("#choices");

function question1() {
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
        updateTimerTimeDeducted();
        question2();
    })
    questionChoicesDisplay3.addEventListener("click", function() {
        questionChoicesDisplay3.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        question2();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        question2();
    })
};
question1();

function question2() {
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
        updateTimerTimeDeducted();
        question3();
    })
    questionChoicesDisplay1.addEventListener("click", function() {
        questionChoicesDisplay1.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        question3();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        question3();
    })
};

function question3() {
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
        updateTimerTimeDeducted();
        endQuestions();
        timerStop();
    })
    questionChoicesDisplay1.addEventListener("click", function() {
        questionChoicesDisplay1.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        endQuestions();
        timerStop();
    })
    questionChoicesDisplay4.addEventListener("click", function() {
        questionChoicesDisplay4.textContent = "wrong!";
        takeOffTime();
        updateTimerTimeDeducted();
        endQuestions();
        timerStop();
    })
};
// ------------------- Not Working ----------------//

function takeOffTime(time) {
    time = time - 5;
    return time;
    //elaborate to make work in unison with timer and update with client side storage give and get
};

function updateTimerTimeDeducted() {
    timerLeftEl.textContent = time;
    //make change timer in client side in realtime with client side storage
};

function addPoints() {
    score = score + 1;
    //make change score in client side in realtime with client side storage
};

function timerStop() {
    time = 0;
    timerLeftEl.textContent = time;
    //make change timer in client side in realtime with client side storage
}; 

function ifTime0() {
    //if time reaches o
    endQuestions();
}