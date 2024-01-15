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

//-------------------------------------------------//
//------------------ STILL TO DO ------------------//
//-------------------------------------------------//

clearHighScoresButtonEl = document.querySelector("#clear");

function displayScoreAndInitialsOnHighscore(){
    //creates text for initials
    //creates text for score
    //appends text for initials
    //appends text for score
    //displays score on screen in text section from object array
    //displays initials on screen in text section from object array
};

function clearHighScores(){
    //delete local storage of obj array with initials and score (now wont load on highscroes)
};

//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//


displayScoreAndInitialsOnHighscore();

//event listener for clear high scores button and does function of clear high scores

clearHighScoresButtonEl.addEventListener("click", clearHighScores);
