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
        title = "Question 1"
		choices = [choice1 = "1",choice2 = "2",choice3 = "3",choice4 = "4"] 
		answer = [choice1]
    }
    {
        title = "Question 2"
		choices = [choice1 = "1",choice2 = "2",choice3 = "3",choice4 = "4"] 
		answer = [choice3]
    }
    {
        title = "Question 3"
		choices = [choice1 = "1",choice2 = "2",choice3 = "3",choice4 = "4"] 
		answer = [choice4]
    }
    {
        title = "Question 4"
		choices = [choice1 = "1",choice2 = "2",choice3 = "3",choice4 = "4"] 
		answer = [choice2]
    }
    {
        title = "Question 5"
		choices = [choice1 = "1",choice2 = "2",choice3 = "3",choice4 = "4"] 
		answer = [choice1]
    }
]