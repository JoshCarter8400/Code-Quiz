var questions = [{
    question: "Commonly used data types DO NOT include?",
    choices: ["Alerts", "Strings", "Basketball", "Numbers"],
    correctAnswer: "Basketball"
}, {
    question: "A very useful tool for debugging and printing content to the debugger is?",
    choices: ["console.log", "for loops", "JavaScript", "Terminal/Bash"],
    correctAnswer: "console.log"
}, {
    question: "The condition in an if/else statement is enclosed in?",
    choices: ["Quotes", "square brackets", "curly brackets", "parenthesis"],
    correctAnswer: "curly brackets"
}, {
    question: "Arrays in JavaScript can be used to store what?",
    choices: ["booleans", "numbers and strings", "other arrays", "all of the above"],
    correctAnswer: "all of the above"
}];
//create questions
var question = document.getElementById("questions");
// qcreate answers
var quiz = document.getElementById("answers");
// create list item for choices
var listItem = document.getElementById("listitem");
// array containg user choices
var selections = [];
// tracks question number
var questionCounter = 0;
// var for getting answer buttons
var answer = document.getElementById("answer-buttons");
var answer1 = document.getElementById("btn-1");
var answer2 = document.getElementById("btn-2");
var answer3 = document.getElementById("btn-3");
var answer4 = document.getElementById("btn-4");
// var for getting start button
var start = document.getElementById("start-btn");
// var for score submit button
var scoreSubmit = document.getElementById("submit-btn")
    // var for getting instructions
var instructions = document.getElementById("instructions")
    // var for timer
var timeLeft = 60;
// var for getting timer
var timer = document.getElementById("timer");
// var for score
var score = 0;
// vars for final score page
var end = document.getElementById("end-game")
var score = document.getElementById("score")
var display1 = document.getElementById("display-1")
var display2 = document.getElementById("display-2")
var countDown = function() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = "timer " + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "timer " + timeLeft;
            createEndGame();
        }
    }, 1000);
};
var createQuestionElement = function() {
    var currentQuestion = questions[questionCounter]
    question.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.choices[0]
    answer2.textContent = currentQuestion.choices[1]
    answer3.textContent = currentQuestion.choices[2]
    answer4.textContent = currentQuestion.choices[3]
}
var checkAnswer = function(event) {
    console.log(questionCounter)
    if (questionCounter === questions.length) {
        createEndGame();
    } else {
        var correctAnswer = questions[questionCounter].correctAnswer
        var currentAnswer = event.target.textContent
        if (currentAnswer === correctAnswer) {
            console.log(correctAnswer, currentAnswer)
            display1.removeAttribute("class");
            display2.setAttribute("class", "hide");
        } else {
            timeLeft -= 10;
            console.log(correctAnswer, currentAnswer)
            display2.removeAttribute("class");
            display1.setAttribute("class", "hide");
        }
        questionCounter++;
        if (questionCounter < questions.length) {
            createQuestionElement();
        }
    }
}
var createEndGame = function() {
    console.log('THE END!!');
    // clearInterval(timeInterval);
    listItem.classList.add("hide");
    question.classList.add("hide");
    display1.classList.add("hide")
    display2.classList.add("hide")
    end.classList.remove("hide");
    score.textContent = "Your final score is " + timeLeft;
}
var createStartQuiz = function(list) {
    instructions.style.visibility = "hidden";
    start.style.display = "none";
    listItem.style.visibility = "visible";


    countDown();
    createQuestionElement();
}
start.addEventListener("click", createStartQuiz);
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)
scoreSubmit.addEventListener("click", createEndGame)