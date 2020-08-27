var questions = [{
    question: "Commonly used dats types DO NOT include?",
    choices: ["Alerts, Strings, Booleans, Numbers"],
    correctAnswer: "Booleans"
}, {
    question: "A very useful tool for debugging and printing content to the debugger is?",
    choices: ["console.log, for loops, JavaScript, Terminal/Bash"],
    correctAnswer: "console.log"
}, {
    question: "The condition in an if/else statement is enclosed in?",
    choices: ["Quotes, square brackets, curly brackets, parenthesis"],
    correctAnswer: "curly brackets"
}, {
    question: "Arrays in JavaScript can be used to store what?",
    choices: ["booleans, numbers and strings, other arrays, all of the above"],
    correctAnswer: "all of the above"
}];
//questions div object
var question = document.getElementById("questions");
// quiz div object
var quiz = document.getElementById("quiz");
// array containg user choices
var selections = [];
// tracks question number
var questionCounter = 0;
// var for getting answer buttons
var answer = document.getElementById("answer-buttons");