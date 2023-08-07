const quizForm = document.getElementById("Quiz-form");
const btnQuiz = document.getElementById("btn-quiz");

const timer = document.getElementById("progress");

// Name and Email Check

const nameInput = document.getElementById("name-input");
const mailInput = document.getElementById("mail-input");
const nameRequired = document.getElementById("name-input-required");
const mailRequired = document.getElementById("mail-input-required");
// const getName = nameInput.value;
// const getMail = mailInput.value;

const btnStartQuiz = document.getElementById("start-quiz");
const registrationForm = document.getElementById("reg-form");

const questionLabel = document.getElementById("question");
const firstAnswer = document.getElementById("answer1");
const secondAnswer = document.getElementById("answer2");
const thirdAnswer = document.getElementById("answer3");
const fourthAnswer = document.getElementById("answer4");

const btnValid = document.getElementById("btnvalid");

const questionCount = document.getElementById("question-count");
const countdownText = document.getElementById("countdown");

const progressBar = document.querySelector(".progress div");

// const checkedInput = document.getElementsByTagName("input");

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

// Gestion des objects question

const questionArrays = [question1, question2, question3]; // Liste de question
let randQuestion = Math.floor(Math.random() * questionArrays.length);
let displayedQuestion = [];

function takeRandomQuestion() {
  let randQuestion = Math.floor(Math.random() * questionArrays.length);

  for (i = 0; i < 5; i++) {
    displayedQuestion.push(questionArrays[randQuestion]);
  }
}

function remplir() {
  let randQuestion = Math.floor(Math.random() * questionArrays.length);
  // Quiz form fill

  if (displayedQuestion.includes(randQuestion)) {
    remplir();
  } else {
    questionLabel.innerText = questionArrays[randQuestion].question;

    firstAnswer.innerText = questionArrays[randQuestion].answer1;
    secondAnswer.innerText = questionArrays[randQuestion].answer2;
    thirdAnswer.innerText = questionArrays[randQuestion].trueAnswer;
    fourthAnswer.innerText = questionArrays[randQuestion].answer3;

    displayedQuestion.push(randQuestion);
  }

  registrationForm.style.display = "none";
}

function registerPlayerId(event) {
  event.preventDefault();
  if (nameInput.value == '' && mailInput.value == '') {
    nameRequired.innerText =
      "N’oubliez pas de renseigner votre nom avant de commencer le Quiz";
    nameInput.style.border = "1px solid #FF3838";
    mailRequired.innerText =
      "N’oubliez pas de renseigner votre email avant de commencer le Quiz";
    mailInput.style.border = "1px solid #FF3838";
  } else {
    player.name = nameInput;
    player.mail = mailInput;

    remplir();
    // console.log(getName, getMail);
    console.log(nameInput.value, mailInput.value)
  }
}

btnValid.addEventListener("click", remplir);
btnStartQuiz.addEventListener("click", registerPlayerId);

// Gestion du timer

let timeLeft = 30;
let test = 0;

function updateProgressBar() {
  progressBar.style.width = (timeLeft / 30) * 100 + "%";
}

function startTimer() {
  const timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateProgressBar();
      countdownText.innerText = timeLeft;
    } else {
      // clearInterval(timerInterval);
      test++;
      if (test < 3) {
        timeLeft = 30;
        registerPlayerId();
        questionCount.innerText++;
      } else {
        clearInterval(timerInterval);
      }
    }
  }, 1000);
}

btnStartQuiz.addEventListener("click", startTimer);
// btnValid.addEventListener("click", startTimer);

// btnStartQuiz.addEventListener("click", remplir);

const Input1 = document.getElementById("ans1");
const Input2 = document.getElementById("ans2");
const Input3 = document.getElementById("ans3");
const Input4 = document.getElementById("ans4");

function disableBtnValider() {
  if (Input1.checked || Input2.checked || Input3.checked || Input4.checked) {
    btnValid.removeAttribute("disabled");
  } else {
    btnValid.setAttribute("disabled", "true");
  }
}

Input1.addEventListener("change", disableBtnValider);
Input2.addEventListener("change", disableBtnValider);
Input3.addEventListener("change", disableBtnValider);
Input4.addEventListener("change", disableBtnValider);

// setInterval(() => {
//     if (checkedInput.checked){
//         btnValid.removeAttribute("disabled")
//     } else {
//         btnValid.setAttribute("disabled", "true")
//     }
// }, 100);

console.log(nameInput.value, mailInput.value)