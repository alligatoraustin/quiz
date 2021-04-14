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





// let questions = [
//     {
//     numb: 1,
//     question: "Which actor plays Luke Skywalker in Star Wars?",
//     answer: "Mark Hamill",
//     options: [
//       "George Lucas",
//       "Mark Hamill",
//       "Harrison Ford",
//       "Alec Guinness"
//     ]
//   },
//     {
//     numb: 2,
//     question: "What is the name of the town that SpongeBob SquarePants lives in?",
//     answer: "Bikini Bottom",
//     options: [
//       "Goo Lagoon",
//       "New Kelp City",
//       "Glove World",
//       "Bikini Bottom"
//     ]
//   },
//     {
//     numb: 3,
//     question: "What is the name of the Wizard who helps Frodo destroy the Ring in Lord of the Rings?",
//     answer: "Gandalf the Grey",
//     options: [
//       "Gandalf the Grey",
//       "Radagast the Brown",
//       "Pallando the Blue",
//       "Saruman the White"
//     ]
//   },
//     {
//     numb: 4,
//     question: "What is the name of the orignal island Jurassic Park was located?",
//     answer: "Isla Nublar",
//     options: [
//       "Cloud Island",
//       "El Matenceros",
//       "Island of Mokuoeo",
//       "Isla Nublar"
//     ]
//   },
//     {
//     numb: 5,
//     question: "In Back to the Future what car is used to create the time machine?",
//     answer: "DeLorean",
//     options: [
//       "DeLorean",
//       "Volkswagon",
//       "Camaro",
//       "Bugatti"
//     ]
//   },
  
// ];

// //selecting all required elements
// const start_btn = document.querySelector(".start_btn button");
// const info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".buttons .quit");
// const continue_btn = info_box.querySelector(".buttons .restart");
// const quiz_box = document.querySelector(".quiz_box");
// const result_box = document.querySelector(".result_box");
// const option_list = document.querySelector(".option_list");
// const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
// const timeCount = document.querySelector(".timer .timer_sec");

// // if startQuiz button clicked
// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
// }

// // if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }

// // if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQestions function
//     queCounter(1); //passing 1 parameter to queCounter
//     startTimer(15); //calling startTimer function
//     startTimerLine(0); //calling startTimerLine function
// }

// let timeValue =  15;
// let que_count = 0;
// let que_numb = 1;
// let userScore = 0;
// let counter;
// let counterLine;
// let widthValue = 0;

// const restart_quiz = result_box.querySelector(".buttons .restart");
// const quit_quiz = result_box.querySelector(".buttons .quit");

// // if restartQuiz button clicked
// restart_quiz.onclick = ()=>{
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     result_box.classList.remove("activeResult"); //hide result box
//     timeValue = 15; 
//     que_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuetions(que_count); //calling showQestions function
//     queCounter(que_numb); //passing que_numb value to queCounter
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine); //clear counterLine
//     startTimer(timeValue); //calling startTimer function
//     startTimerLine(widthValue); //calling startTimerLine function
//     timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//     next_btn.classList.remove("show"); //hide the next button
// }

// // if quitQuiz button clicked
// quit_quiz.onclick = ()=>{
//     window.location.reload(); //reload the current window
// }

// const next_btn = document.querySelector("footer .next_btn");
// const bottom_ques_counter = document.querySelector("footer .total_que");

// // if Next Que button clicked
// next_btn.onclick = ()=>{
//     if(que_count < questions.length - 1){ //if question count is less than total question length
//         que_count++; //increment the que_count value
//         que_numb++; //increment the que_numb value
//         showQuetions(que_count); //calling showQestions function
//         queCounter(que_numb); //passing que_numb value to queCounter
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); //clear counterLine
//         startTimer(timeValue); //calling startTimer function
//         startTimerLine(widthValue); //calling startTimerLine function
//         timeText.textContent = "Time Left"; //change the timeText to Time Left
//         next_btn.classList.remove("show"); //hide the next button
//     }else{
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); //clear counterLine
//         showResult(); //calling showResult function
//     }
// }

// // getting questions and options from array
// function showQuetions(index){
//     const que_text = document.querySelector(".que_text");

//     let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
//     let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = option_tag;
    
//     const option = option_list.querySelectorAll(".option");

//     for(i=0; i < option.length; i++){
//         option[i].setAttribute("onclick", "optionSelected(this)");
//     }
// }

// let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
// let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


// function optionSelected(answer){
//     clearInterval(counter); 
//     clearInterval(counterLine);
//     let userAns = answer.textContent;
//     let correcAns = questions[que_count].answer; //getting correct answer from array
//     const allOptions = option_list.children.length; //getting all option items
    
//     if(userAns == correcAns){ //if user selected option is equal to array's correct answer
//         userScore += 1; //upgrading score value with 1
//         answer.classList.add("correct"); //adding green color to correct selected option
//         answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
//         console.log("Correct Answer");
//         console.log("Your correct answers = " + userScore);
//     }else{
//         answer.classList.add("incorrect"); //adding red color to correct selected option
//         answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
//         console.log("Wrong Answer");

//         for(i=0; i < allOptions; i++){
//             if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
//                 option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                 option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                 console.log("Auto selected correct answer.");
//             }
//         }
//     }
//     for(i=0; i < allOptions; i++){
//         option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//     }
//     next_btn.classList.add("show"); //show the next button if user selected any option
// }

// function showResult(){
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.remove("activeQuiz"); //hide quiz box
//     result_box.classList.add("activeResult"); //show result box
//     const scoreText = result_box.querySelector(".score_text");
//     if (userScore > 3){ // if user scored more than 3
//         //creating a new span tag and passing the user score number and total question number
//         let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
//     }
//     else if(userScore > 1){ // if user scored more than 1
//         let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
//     else{ // if user scored less than 1
//         let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
// }

// function startTimer(time){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if(time < 9){ //if timer is less than 9
//             let addZero = timeCount.textContent; 
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if(time < 0){ //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions[que_count].answer; //getting correct answer from array
//             for(i=0; i < allOptions; i++){
//                 if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for(i=0; i < allOptions; i++){
//                 option_list.children[i].classList.add("disabled");
//             }
//             next_btn.classList.add("show");
//         }
//     }
// }

// function startTimerLine(time){
//     counterLine = setInterval(timer, 29);
//     function timer(){
//         time += 1;
//         time_line.style.width = time + "px";
//         if(time > 549){
//             clearInterval(counterLine);
//         }
//     }
// }

// function queCounter(index){
//     let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
//     bottom_ques_counter.innerHTML = totalQueCounTag;
// }

