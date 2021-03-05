var startBtn = document.querySelector(".start-button")
var quizContainer = document.getElementById(".questions");
var resultsContainer = document.getElementById(".answers");
var submitButton = document.getElementById(".start-button");

var showQuestions = function(){};
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
  
function startQuiz(questions, quizContainer, resultsContainer){
    function showQuestions(questions, quizContainer){
		// Storage space for output and answer choices
	var output = [];
	var answers;

    // for each question...
	myQuestions.forEach(
    (currentQuestion, questionNumbers)
  )
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){
	    // ...add an html radio button
        answers.push(
          `<label>
          <input type="radio" name="question'+i+'" value="'+letter+'">
          ${letter} : 
          ${currentQuestions.answers[letter]}
          </label>`
         );
    }

		
      

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
    
    function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	};

	// show the questions
	showQuestions(questions, quizContainer);{
    function answers(){

    };
};
  

startBtn.addEventListener("click", function() {
   

});