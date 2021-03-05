var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var questionSpot= "";
var timer;
var timerCount;

//arrays to store questions and answers
var question = [];
var answers = [];
var correctAnswers = [];

//questions for quiz
var myQuestions = [
    {
      question: "Who invented JavaScript?", 
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Neal Armstrong"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "data-attribute"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
    question: "What is 10/2?",
    answers: {
        a: "3",
        b: "5",
        c: "115",
        d: "123"
    },
    correctAnswer: 'b'
    },
    {
    question: "What is 30/3?",
    answers: {
        a: "3",
        b: "5",
        c: "10",
        d: "15"
    },
    correctAnswer: 'c'
    }
  ];


