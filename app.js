const quizForm = document.getElementById("Quiz-form");
const btnQuiz = document.getElementById("btn-quiz");

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
    // Quiz form fill
    questionLabel.innerText = question1.question;
  
    firstAnswer.innerText = question1.answer1;
    secondAnswer.innerText = question1.answer2;
    thirdAnswer.innerText = question1.trueAnswer;
    fourthAnswer.innerText = question1.answer3;
  
    registrationForm.style.display = "none";
}

function registerPlayerId() {
  if (getName && getMail) {
    nameRequired.innerText = "Le nom est obligatoire";
    mailRequired.innerText = "Ladresse mail est obligatoire";
  } else {
    player.name = nameInput
    player.mail = mailInput

    remplir()
    console.log(getName , getMail)
  }
}







btnStartQuiz.addEventListener("click", registerPlayerId);
// btnStartQuiz.addEventListener("click", remplir);
