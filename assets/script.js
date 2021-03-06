var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quizArea");

var isWin = false;
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

//init function reset timer on page load
function init() {
  resetTimer();
}

//start game function call when button clicked
function startGame() {
  isWin = false;
  timerCount= 120;
  //prevent start button from click during round
  startButton.disabled = true;
  renderQuestions()
  startTimer()
}

//win game function when conditions are met
function winGame() {
  quizArea.textContent = "YOU WON!!!";
  startButton.disabled = false;
  setWins()
}

//lose game function when timer hits zero
function loseGame() {
  quizArea.textContent = "GAME OVER";
  startButton.disabled = false;
  setLosses()
}

//set timer function start stop endgame
function startTimer() {
  //set time
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >=0) {
      //test win condition
      if (isWin && timerCount > 0) {
        //clear interval stop timer
        clearInterval(timer);
        winGame();
      }
    }
    //test if time is up
    if (timer === 0) {
      //clear interval
      clearInterval(timer);
      loseGame();
    }
  },1000);
}

//create quiz questions
function renderQuestions() {
  //questions array
  myQuestions = 

}

startButton.addEventListener("click", startGame);


