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

//queryselectors for all//
let highscoresOlEl = document.querySelector("#highscores");
let clearHighScoresButtonEl = document.querySelector("#clear");

// Functions
function displayScoreAndInitialsOnHighscore() {
    // Sort through array highscores in local storage for highest numbers
    let highscoresList = JSON.parse(localStorage.getItem('highscores')); //sets highscores with parse
    highscoresList.sort(function(a, b) { //sorts from highest to lowest
        return b.score - a.score; //returns list from highest to lowest
    });
    // Set text content of highscore elements
    console.log(highscoresList);

    highscore1.textContent = highscoresList[0] ? `${highscoresList[0].initials} --- ${highscoresList[0].score}` : "Nothing here yet"; //ternary opperator,(?) if falsy (:) return "nothing here yet"
    highscore2.textContent = highscoresList[1] ? `${highscoresList[1].initials} --- ${highscoresList[1].score}` : "Nothing here yet"; //ternary opperator,(?) if falsy (:) return "nothing here yet"
    highscore3.textContent = highscoresList[2] ? `${highscoresList[2].initials} --- ${highscoresList[2].score}` : "Nothing here yet"; //ternary opperator,(?) if falsy (:) return "nothing here yet"
}

function clearHighScores(){
    //delete local storage of obj array with initials and score (now wont load on highscroes)
    localStorage.clear();
    highscore1.textContent = "";
    highscore2.textContent = "";
    highscore3.textContent = "";
};

//happens on page load//

let highscore1 = document.createElement("li"); //creates text for initials and score
let highscore2 = document.createElement("li"); //creates text for initials and score
let highscore3 = document.createElement("li"); //creates text for initials and score
highscoresOlEl.append(highscore1, highscore2, highscore3); //appends to ol

displayScoreAndInitialsOnHighscore(); //calls function

//event listener for clear high scores button and does function of clear high scores
clearHighScoresButtonEl.addEventListener("click", clearHighScores);
