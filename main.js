const questions = [
    {
        question: 'Who has a detailed account of Jesus in th Bible?',
        answers: [
           { text: 'Matthew', correct: 'false'}, 
           { text: 'Acts', correct: 'false'},
           { text: 'Mark', correct: 'false'},
           { text: 'Luke', correct: 'true'},
        ]
    },
    {
        question: 'Who took a way Jerusalem\'s treasures during the reign of Rehoboam?',
        answers: [
           { text: 'Shishak', correct: 'true'}, 
           { text: 'Tiglath-Pilerser 3', correct: 'false'},
           { text: 'Menaham', correct: 'false'},
           { text: 'Shallum', correct: 'false'},
        ]
    },
    {
        question: 'Where did Mary Slessor worked in Nigeria',
        answers: [
           { text: 'Itu and Okoyong', correct: 'true'}, 
           { text: 'Duke Town', correct: 'false'},
           { text: 'Ijaye', correct: 'false'},
           { text: 'Calabar', correct: 'false'},
        ]
    },
    {
        question: 'What year did the Roman Catholic Church started in Nigeria?',
        answers: [
           { text: 'Ajayi Crowther', correct: 'false'}, 
           { text: 'General Gordon', correct: 'false'},
           { text: 'Bowen I.J', correct: 'true'},
           { text: 'Ramsayer', correct: 'false'},
        ]
    },
    {
        question: 'How many years did Jeroboam rule?',
        answers: [
           { text: '40 years', correct: 'false'}, 
           { text: '35 years', correct: 'false'},
           { text: '22 years', correct: 'true'},
           { text: '50 years', correct: 'false'},
        ]
    },
    {
        question: 'One of the following is not part of the Jewish canon',
        answers: [
           { text: 'Jew Canon', correct: 'true'}, 
           { text: 'Roman Canon', correct: 'false'},
           { text: 'Jewish Canon', correct: 'false'},
           { text: 'Alexandria Canon', correct: 'false'},
        ]
    },
    {
        question: 'What year did the Roman Catholic Church entered Nigeria?',
        answers: [
           { text: '1804', correct: 'false'}, 
           { text: '1775', correct: 'false'},
           { text: '1885', correct: 'true'},
           { text: '1890', correct: 'false'},
        ]
    }
]



const questionInput = document.querySelector('.quiz-question');
const  answerButton = document.querySelector('.answer-button');
const nextButton = document.querySelector('.nextbtn');
/*(`.answer-button`)*/;

let score = 0;
let currentQuestionIndex = 0;
let button;

//show question
function showQuestion(){
    resetState();
    let currentQuestion;
    currentQuestion = questions[currentQuestionIndex];
    let questionNo;
     questionNo = currentQuestionIndex + 1;
     questionInput.innerHTML = questionNo + '. ' + currentQuestion.question;
console.log(questions)
     //show options for user to select

     currentQuestion.answers.forEach(answers => {
         button = document.createElement('button');
         button.innerHTML = answers.text;
         button.classList.add('btn');
         answerButton.appendChild(button);
         if(answers.correct){
 button.dataset.correct = answers.correct;
         }

         button.addEventListener('click', selectAnswer);
     });
     
}


function resetState(){
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}



function selectAnswer(e) {
    let selectedAnswer = e.target;
    let isCorrect = selectedAnswer.dataset.correct === 'true';
    if(isCorrect){ 
        selectedAnswer.classList.add('correct');
        score++;
    } else {
        selectedAnswer.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    
    
};


nextButton.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
})

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
} else {
    showScore();
}
}

function showScore(){
    resetState();
    questionInput.innerHTML = `You scored ${score} score out of ${questions.length}!`;
    nextButton.innerHTML = `Play Again`;
}





showQuestion();