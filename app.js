const quizForm = document.getElementById("Quiz-form");
const btnQuiz = document.getElementById("btn-quiz");

const timer = document.getElementById('progress');

// Verification

const nameInput = document.getElementById("name-input");
const mailInput = document.getElementById("mail-input");
const nameRequired = document.getElementById("name-input-required");
const mailRequired = document.getElementById("mail-input-required");
const getName = nameInput.value 
const getMail = mailInput.value

const btnStartQuiz = document.getElementById("start-quiz");
const registrationForm = document.getElementById("reg-form");

const questionLabel = document.getElementById("question");
const firstAnswer = document.getElementById("answer1");
const secondAnswer = document.getElementById("answer2");
const thirdAnswer = document.getElementById("answer3");
const fourthAnswer = document.getElementById("answer4");

const btnValid = document.getElementById("btnvalid");

const player = {
  name: "player",
  mail: "player@quiz.app",
  score: 0,
};

const question1 = {
    question: "Quel est le type d'un fichier javascript ?",
  
    trueAnswer: ".js",
    answer1: ".jsx",
    answer2: ".j",
    answer3: ".ts",
};

const question2 = {
    question: "Quel est la langue officiel en rdc?",
  
    trueAnswer: "Allemand",
    answer1: "Anglais",
    answer2: "Espagnol",
    answer3: "Francais",
};

const question3 = {
    question: "Quel est le plus grand antagoniste d'un manga?",
  
    trueAnswer: "Madara",
    answer1: "Meruem",
    answer2: "Dio Brando",
    answer3: "Sneizel",
};

const questionArrays = [question1, question2, question3] // Liste de question 



function remplir() {
    let randQuestion = Math.floor(Math.random()*questionArrays.length);
    // Quiz form fill
    questionLabel.innerText = questionArrays[randQuestion].question;
  
    firstAnswer.innerText = questionArrays[randQuestion].answer1;
    secondAnswer.innerText = questionArrays[randQuestion].answer2;
    thirdAnswer.innerText = questionArrays[randQuestion].trueAnswer;
    fourthAnswer.innerText = questionArrays[randQuestion].answer3;
  
    registrationForm.style.display = "none";
}

function registerPlayerId() {
  if (getName && getMail) {
    nameRequired.innerText = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz";
    nameInput.style.border = "1px solid #FF3838";
    mailRequired.innerText = "N’oubliez pas de renseigner votre email avant de commencer le Quiz";
    mailInput.style.border = "1px solid #FF3838";
  } else {
    player.name = nameInput
    player.mail = mailInput 

    remplir()
    console.log(getName , getMail)
  }
}

function minuteur() {
    timer.style.width = timer.style.width + '%'
}

const progressBar = document.querySelector('.progress div');
let timeLeft = 30;

function updateProgressBar() {
    progressBar.style.width = (timeLeft / 30) * 100 + '%';
}

function startTimer() {
    
    const timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            updateProgressBar();
        } else {
            // clearInterval(timerInterval);
            timeLeft = 30;
            registerPlayerId()
        }
    }, 1000);
}



btnValid.addEventListener("click", registerPlayerId);
btnStartQuiz.addEventListener("click", registerPlayerId);
btnStartQuiz.addEventListener("click", startTimer);
btnValid.addEventListener("click", startTimer);
// btnStartQuiz.addEventListener("click", remplir);
