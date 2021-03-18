

let myStarts = document.getElementById("startBtn");


myStarts.addEventListener('click', function(e){
    e.preventDefault();
    console.log('mike');
    location.href = 'hotSeat.html';
    return;
})


// const questions = [
//     {question: "What's my name?", option1: "smit", option2: "mike", option3: "aramide", answer: "smit"},
//     {question: "What's my Age?", option1: "419", option2: "14", option3: "41", answer: "419"},
//     {question: "Is function a method?", option1: "Yes", option2: "No", option3: "none of the above", answer: "No"},
//     {question: "Is Array a function?", option1: "Yes", option2: "No", option3: "none of the above", answer: "No"},
//     {question: "Is Array an Object?", option1: "Yes", option2: "No", option3: "none of the above", answer: "Yes"},
//     {question: "Does Array store data?", option1: "Yes", option2: "No", option3: "none of the above", answer: "Yes"},
//     {question: "Is HTML a programming language?", option1: "Yes", option2: "No", option3: "none of the above", answer: "No"},
//     {question: "What is my favourite meal?", option1: "Yam and Egg", option2: "Bread and Beans",
//      option3: "Pounded Yam and Egusi soup", answer: "Pounded Yam and Egusi soup"},
//     {question: "What is my Discipline?", option1: "Electrical/Electronics Engineering", 
//     option2: "Computer Engineering", option3: "Computer Science", answer: "Computer Engineering"},

// ];




// let container = document.getElementById('questionContainer');
// let optionCont = document.getElementById('optionContainer');
// let buttonCont = document.getElementById('buttonContainer');
// let previousCont = document.getElementById('previousContainer')
// let quizCont = document.getElementById('quizContainer');
// let questionPosition = 0;


// function loadQuestion(position) {
//     container.innerHTML = questions[position].question;
//     optionCont.innerHTML = `
//     <input name='option' type='radio' /> ${questions[position].option1}<br>
//     <input name='option' type='radio' /> ${questions[position].option2}<br>
//     <input name='option' type='radio' /> ${questions[position].option3}<br>
//     `;
//     buttonCont.innerHTML = "<br> <button  class='heading' id='next'>Next</button>"
//     previousCont.innerHTML = "<br> <button  class='heading' id='prev'>Prev</button>"
// let nextBtn = document.getElementById('next');
// let prevBtn = document.getElementById('prev');
// nextBtn.addEventListener('click', function() {
//    ++position
// loadQuestion(position)
// })


// }

// loadQuestion(questionPosition)