
// LINKING HTML TAGS INTO JS

let container = document.getElementById('questionContainer');
let optionCont = document.getElementById('optionContainer');
let buttonCont = document.getElementById('buttonContainer');
let previousCont = document.getElementById('previousContainer')
let quizCont = document.getElementById('quizContainer');
let questionPosition = 0;
let preNextButtonCont = document.getElementsByClassName('hideBtn');
let submitButtonCont = document.getElementById('lastBtn')
let scoreCont = document.getElementById('score')
let timerCont = document.getElementById('timer')



// CODE FOR A COUNTDOWN-TIMER THAT EXITS QUIZ PAGE AFTERMATH ELAPSE COUNT 
var total_seconds = 30 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);

function CheckTime() {
    document.getElementById('timer').innerHTML = c_minutes + " minutes " + c_seconds + ' seconds';
    if (total_seconds <= 0) {
        quizCont.style.display = 'none';
        submitButtonCont.style.display = 'block';
        document.getElementById('timer').innerHTML = " TIME IS UP, THANKS FOR BANKING WITH US, PLEASE REMEMBER TO SUBMIT YOUR ANSWERS";
    } else {
        total_seconds = total_seconds - 1;
        c_minutes = parseInt(total_seconds / 60);
        c_seconds = parseInt(total_seconds % 60);
        setTimeout('CheckTime()', 1000);
    }
}

setTimeout('CheckTime()', 1000);

// QUESTIONS
const questions = [
    { question: "How many days do we have in a week?", option1: "7 days", option2: "12 days", option3: "365 days", answer: "7 days" },
    { question: "How many days do we have in a Year?", option1: "365 days", option2: "7 days", option3: "14 days", answer: "365 days" },
    { question: "The next prime number after 7 is?", option1: "9", option2: "11", option3: "none of the above", answer: "11" },
    { question: "Is Array a function?", option1: "Yes", option2: "No", option3: "none of the above", answer: "No" },
    { question: "The perimeter of a circle is known as?", option1: "Circumference", option2: "Pie", option3: "Radius", answer: "Circumference" },
    { question: "Square root of 144?", option1: "13", option2: "12", option3: "none of the above", answer: "12" },
    {
        question: "Total degrees of angle in a right angle triangle is?", option1: "90", option2: "100",
        option3: "180", answer: "90"
    },
    {
        question: "Where does a dentist work?", option1: "Dental Clinic", option2: "School",
        option3: "Office", answer: "Dental Clinic"
    },
    {
        question: "The little boys are _________ the lake?", option1: "Running Towards", option2: "Running Toward",
        option3: "Ran Towards", answer: "Running Towards"
    },
    {
        question: "How Often do you play tennis?", option1: "Almost Everyday", option2: "On Tuesday",
        option3: "For two hours", answer: "Almost Everyday"
    },
    {
        question: "A farmer Had 89 chickens, all but 9 died, How many are left?", option1: "80", option2: "9",
        option3: "None", answer: "9"
    },
    {
        question: "Water is to ice as Milk is to?", option1: "Butter", option2: "Coffee",
        option3: "Cow", answer: "Butter"
    },

];

// CREATING  A DYNAMIC QUESTION AND ANSWER PAGE

function loadQuestion(position) {
    container.innerHTML = questions[position].question;
    optionCont.innerHTML = `
    <input name='option' type='radio' /> ${questions[position].option1}<br>
    <input name='option' type='radio' /> ${questions[position].option2}<br>
    <input name='option' type='radio' /> ${questions[position].option3}<br>
    `;
    buttonCont.innerHTML = "<br> <button  class='heading' id='next'>Next</button>"
    previousCont.innerHTML = "<br> <button  class='heading' id='prev'>Prev</button>"
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('prev');
    submitButtonCont.style.display = "none";


    nextBtn.addEventListener('click', function () {
        ++position
        loadQuestion(position)
    })
    prevBtn.addEventListener('click', function () {
        --position
        loadQuestion(position)
    })

}
loadQuestion(questionPosition)

// CREATING A FUNCTION FOR SCORES


// function Scores() {
//     let grade = 0;
//     let total = questions.length;
//     for(let i = 0; i < total; i++ )
//     if (questions.question[i] == questions.answer[i]) {
//         grade = grade + 2
//     } else {

//     }

// }

