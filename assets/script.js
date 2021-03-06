var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quizArea");

var isWin = false;
var questionSpot= "";
var timer;
var timerCount;
var questionIndex = 0
//arrays to store questions and answers
var question = [];
var answers = [];
var correctAnswers = [];
// creates new element
var ulCreate = document.createElement("ul");

//questions for quiz
var myQuestions = [
    {
      info: "Who invented JavaScript?", 
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Neal Armstrong"
      },
      correctAnswer: "c"
    },
    {
      info: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "data-attribute"
      },
      correctAnswer: "c"
    },
    {
      info: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      info: "What is 10/2?",
       answers: {
        a: "3",
        b: "5",
        c: "115",
        d: "123"
    },
      correctAnswer: 'b'
    },
    {
      info: "What is 30/3?",
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
  render()
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
  render(questionIndex)
}

//sends quiz questions and choices to page
function render(questionIndex) {
  // clears existing content
  question.innerHTML = "";
  ulCreate.innerHTML = "";
  // loops to loop through array info
  for (var i = 0; i < myQuestions.length; i++) {
      // append question 
      var userQuestion = myQuestions[questionIndex].info;
      var userChoices = myQuestions[questionIndex].answers;
      question.textContent = userQuestion;
  }
  // new for each for question
  userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      question.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
  })
}
// Event to compare choices with answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      // Correct condition 
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
          // Correct condition 
      } else {
          // Will deduct -5 seconds off secondsLeft for wrong answers
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
      }

  }
}
startButton.addEventListener("click", startGame);

