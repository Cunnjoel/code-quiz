var startBtn = document.querySelector(".start-button")
var quizContainer = document.getElementById('questions');
var resultsContainer = document.getElementById('answers');
var submitButton = document.getElementById('start-button');
var question1 = "question1"
var question2 = "question2"
var question3 = "question3"
var question4 = "question4"
var question5 = "question5"

var answer1 = ["A", "B", "C", "D"]
var answer2 = ["A", "B", "C", "D"]
var answer3 = ["A", "B", "C", "D"]
var answer4 = ["A", "B", "C", "D"]
var answer5 = ["A", "B", "C", "D"]

var questions = {
    question1,
    question2,
    question3,
    question4,
    question5
};

var answers = {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5
};


startBtn.addEventListener("click", function() {
    event.preventDefault();

});