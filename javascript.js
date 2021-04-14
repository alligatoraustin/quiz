// GIVEN I am taking a code quiz 

// WHEN I click the start button // add an on click listener

// THEN a timer starts and I am presented with a question // code a timer to start then code showing that timer on the browser 
// create a list of questions and answers for our user to answer, create a way to islate one question in that list and code out instructions for the code to show that question on browser


// WHEN I answer a question // add a click listner to each answer

// THEN I am presented with another question // repeat logic from then timer starts

// WHEN I answer a question incorrectly 

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//const start_btn = document.querySelector(".")
// creating an array and passing the number, questions, options, and answers
const startButton = document.getElementById("start_btn");
const nextButton = document.getElementById("next_btn");
const questionsInfo = document.getElementById("questionsInfo");
const questionEl = document.getElementById("question")
const answerButtonsEl = document.getElementById("answer_buttons")

var score = 0;

let mixedQuestions, currentQuestionIndex;

const questions = [
    {
        question: "Which actor plays Luke Skywalker in Star Wars?",
        answers:[
            {text: "George Lucas ()", correct: false},
            {text: "Mark Hamill ()", correct: true},
            {text: "Harrison Ford ()", correct: false},
            {text: "Alec Guinness ()", correct: false},
        ]
    },
    {
        question: "What is the name of the town that SpongeBob SquarePants lives in?",
        answers:[
            {text: "Goo Lagoon ()", correct: false},
            {text: "New Kelp City ()", correct: false},
            {text: "Glove World ()", correct: false},
            {text: "Bikini Bottom ()", correct: true},
        ]
    },
    {
        question: "What is the name of the Wizard who helps Frodo destroy the Ring in Lord of the Rings?",
        answers:[
            {text: "Gandalf the Grey ()", correct: true},
            {text: "Radagast the Brown ()", correct: false},
            {text: "Pallando the Blue ()", correct: false},
            {text: "Saruman the White ()", correct: false},
        ]
    },
    {
        question: "What is the name of the orignal island Jurassic Park was located?",
        answers:[
            {text: "Cloud Island ()", correct: false},
            {text: "El Matenceros ()", correct: false},
            {text: "Island of Mokuoeo ()", correct: false},
            {text: "Isla Nublar ()", correct: true},
        ]
    }
]

startButton.addEventListener("click", startGame);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('GAME OVER!!')
        }
    }, 1000);
}

startButton.addEventListener('click',startGame);
startButton.addEventListener("click", function() {
    var fifteenSeconds = 15 * 1,
        display = document.querySelector('#time');
    startTimer(fifteenSeconds, display);
});

function startGame () {
    startButton.classList.add("hide");
    mixedQuestions = questions.sort(() => Math.random() - .5);
    questionsInfo.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();
    nextButton.classList.remove("hide")
}

function showQuestion(questions) {
    questionEl.innerText = questions.question
    console.log(questions)
    question.answers.showQuestion(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dadaset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild){
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function questionsloop(questions) {

    for (var i = 0; i < questions.length; i ++);
    questions.innerText('#question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')

}

function nextQuestion() {
    showQuestion(mixedQuestions[currentQuestionIndex]);
    
}





