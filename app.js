const quizForm = document.getElementById("Quiz-form");
const btnQuiz = document.getElementById("btn-quiz");

const btnStartQuiz = document.getElementById("start-quiz");
const registrationForm = document.getElementById("reg-form");

const questionLabel = document.getElementById("question");
const firstAnswer = document.getElementById("answer1");
const secondAnswer = document.getElementById("answer2");
const thirdAnswer = document.getElementById("answer3");
const fourthAnswer = document.getElementById("answer4");

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

function remplir() {
  questionLabel.innerText = question1.question;

  firstAnswer.innerText = question1.answer1;
  secondAnswer.innerText = question1.answer2;
  thirdAnswer.innerText = question1.trueAnswer;
  fourthAnswer.innerText = question1.answer3;

  registrationForm.style.display = "none";
  console.log('Bonjour')
}

// btnStartQuiz.onclick = function() {
//     console.log(Bonjour)
// }

btnStartQuiz.addEventListener("click", remplir);

// Switch du entre la page connexion et la page question

// btnQuiz.onclick = function() {
//     quizForm.style.display = "none"
// };

function displayQuizForm() {
  //   quizForm.style.display = "";
  //   quizForm.style.removeProperty("display");
  //   console.log(quizForm.style);
  quizForm.style.zIndex = "11";
}

// btnQuiz.addEventListener("click", displayQuizForm);
