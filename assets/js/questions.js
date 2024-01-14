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
    title: "Question 1",
    choices: ["1", "2", "3", "4"],
    answer: "1",
    wrongAnswers: ["2", "3", "4"],
    },
    {
    title: "Question 2",
    choices: ["a", "b", "c", "d"],
    answer: "c",
    wrongAnswers: ["a", "b", "d"],
    },
    {
    title: "Question 3",
    choices: ["x", "y", "z", "w"],
    answer: "w",
    wrongAnswers: ["x", "y", "z"],
    },
    {
    title: "Question 4",
    choices: ["7", "8", "9", "10"],
    answer: "8",
    wrongAnswers: ["7", "9", "10"],
    },
    {
    title: "Question 5",
    choices: ["i", "j", "k", "l"],
    answer: "i",
    wrongAnswers: ["j", "k", "l"],
    }
];