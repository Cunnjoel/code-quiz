var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quizArea");

//window variables
var isWin = false;
var questionSpot= "";
var timer;
var timerCount;
var questionIndex = 0
var penalty = 5
//arrays to store questions and answers
var question = [];
var answers = [];
var correctAnswers = [];
var score = [];
// creates new element
var ulCreate = document.createElement("ul");

//questions for quiz
var myQuestions = [
    {
      info: "Who invented JavaScript?", 
      answers: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich",
        "Neal Armstrong"
      ],
      correctAnswer: "Brendan Eich"
    },
    {
      info: "Which one of these is a JavaScript package manager?",
      answers: [
        "Node.js",
        "TypeScript",
        "npm",
        "data-attribute"
      ],
      correctAnswer: "npm"
    },
    {
      info: "Which tool can you use to ensure code quality?",
      answers: [
        "Angular",
        "jQuery",
        "RequireJS",
        "ESLint"
      ],
      correctAnswer: "ESLint"
    },
    {
      info: "What is 10/2?",
       answers: [
        "3",
        "5",
        "115",
        "123"
       ],
      correctAnswer: "5"
    },
    {
      info: "What is 30/3?",
      answers: [
        "3",
        "5",
        "10",
        "15"
    ],
    correctAnswer: "0"
    }
];

//init function reset timer on page load
function init() {
  resetTimer();
}

//start game function call when button clicked
function startGame() {
  isWin = false;
  timerCount= 90;
  //prevent start button from click during round
  startButton.disabled = true;
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
    if (timerCount >= 0) {
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
  render()
}

//sends quiz questions and choices to page
function render() {
  // clears existing content
  quizArea.innerHTML = "";
  quizArea.ul.innerHTML = "";
  
      // append question 

      console.log(myQuestions)
      var userQuestion = myQuestions[questionIndex].info;
      var userChoices = myQuestions[questionIndex].answers;
      quizArea.textContent = userQuestion;

  // new for each for question
  quizArea.appendChild(ulCreate);
  userChoices.forEach(function (newItem) {
      var listItem = document.createElement("button");
      listItem.textContent = newItem;
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
  })
}
// event to compare choices with answer
function compare(event) {
  var element = event.target;

  if (element.matches("button")) {
      var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
      // check condition 
      if (element.textContent === myQuestions[questionIndex].correctAnswer) {
          score++;
          createDiv.textContent = "Correct! The answer is:  " + myQuestions[questionIndex].correctAnswer;
          // check condition 
      } else {
          // deduct 5 seconds from secondsLeft for wrong answer
          timerCount = timerCount - penalty;
          createDiv.textContent = "Wrong! The correct answer is:  " + myQuestions[questionIndex].correctAnswer;
      }
  }
  //question user is on
  questionIndex++;
  if (questionIndex >= myQuestions.length) {
    endGame();
    quizArea.textContent = "End of quiz!" + " " + "You Scored " + score + "/" + myQuestions.length + "Correct!";
  }else {
    render(myQuestions)
  }
  quizArea.appendChild(createDiv);
}
startButton.addEventListener("click", startGame);

