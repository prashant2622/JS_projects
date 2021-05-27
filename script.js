const quizData = [
    {
        question: 'What is banana',
        a: 'car',
        b:'fruit',
        c: 'fish',
        d: 'vagatable',
        correct: 'b'
    },
    {
        question: 'What is java',
        a: 'motorcycle',
        b:'language',
        c: 'umbrella',
        d: 'suite',
        correct: 'b'
    },
    {
        question: 'On what language this game is made',
        a: 'JS',
        b:'PHP',
        c: 'C',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'How intelligent are you',
        a: 'not very much',
        b:'little bit',
        c: 'extremely',
        d: 'god level',
        correct: 'A'
    }
];
let score = 0;
const questionEl = document.getElementById("question");
const a_opt = document.getElementById("a_opt");
const b_opt = document.getElementById("b_opt");
const c_opt = document.getElementById("c_opt");
const d_opt = document.getElementById("d_opt");
const submtBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
let currentQuestion = 0;

looadQuiz();

function looadQuiz() {
     const currentQuizData = quizData[currentQuestion];
     
     questionEl.innerText = currentQuizData.question;
     a_opt.innerText = currentQuizData.a;
     b_opt.innerText = currentQuizData.b;
     c_opt.innerText = currentQuizData.c;
     d_opt.innerText = currentQuizData.d;
}
var temp = 0;
var selected = document.getElementsByName('answer');
submtBtn.addEventListener('click',()=> {
    selected.forEach((opt)=> {
        if(opt.checked){
           temp = opt.value; 
        }
        opt.checked = false;
    });
    if(!temp == 0){
        if(temp == quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            looadQuiz()
            temp = 0;
        }
        else {
            quiz.innerHTML = `<h3>YOUR HAVE ANSWERED ${score}/${quizData.length} QUESTIONS CORRECTLY</h3>
            <button onclick="location.reload()">!!PLAY AGAIN!!</button>`;

        }
    }
    else{
        alert('Select An Option');
    }
    
    
})