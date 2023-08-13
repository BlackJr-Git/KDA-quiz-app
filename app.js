// differentes pages du quiz
const quizForm = document.getElementById("Quiz-form");
const registrationForm = document.getElementById("reg-form");
const scoreForm = document.getElementById("score-form");

// timer et compte a rebours
const timer = document.getElementById("progress");
const countdownText = document.getElementById("countdown");
const progressBar = document.querySelector(".progress div");

// Name and Email Check
const nameInput = document.getElementById("name-input");
const mailInput = document.getElementById("mail-input");
const nameRequired = document.getElementById("name-input-required");
const mailRequired = document.getElementById("mail-input-required");

const playerNameDisplay = document.getElementById("name-display");
const playerMailDisplay = document.getElementById("mail-display");
// bouttons
const btnStartQuiz = document.getElementById("start-quiz");
const btnValid = document.getElementById("btnvalid");
const btnHome = document.getElementById("btn-home");
const btnQuit = document.getElementById("btnquit");

// labels Question et reponses
const questionLabel = document.getElementById("question");
const firstAnswer = document.getElementById("answer1");
const secondAnswer = document.getElementById("answer2");
const thirdAnswer = document.getElementById("answer3");
const fourthAnswer = document.getElementById("answer4");

// compte de question et score
const questionCount = document.getElementById("question-count");
const finalScoreDisplayed = document.getElementById("final-score");

// Icons
const iconCross = document.getElementById("cross");
const iconCircle = document.getElementById("circle");

// Cette section Contient les Objets : Player et Question
const player = {
  name: "player",
  mail: "player@quiz.app",
  score: 0,
};

// Fonction qui permet l'enregistrement du joueur
function registerPlayerId(event) {
  event.preventDefault();
  if (nameInput.value == "" && mailInput.value == "") {
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
    startTimer()
    console.log(nameInput.value, mailInput.value);
  }
}
console.log(nameInput.value, mailInput.value);
// Objetc Question

const question1 = {
  question: "Quel est le type d'un fichier javascript ?",

  trueAnswer: ".js",
  answer1: ".jsx",
  answer2: ".j",
  answer3: ".ts",

  answers: [".js", ".jsx", ".j", ".ts"],
};

const question2 = {
  question: "Quel est la langue officiel en rdc?",

  trueAnswer: "Francais",
  answer1: "Anglais",
  answer2: "Espagnol",
  answer3: "Allemand",

  answers: ["Francais", "Anglais", "Espagnol", "Allemand"],
};

const question3 = {
  question: "Quel est le plus grand antagoniste d'un manga?",

  trueAnswer: "Meruem",
  answer1: "Madara",
  answer2: "Dio Brando",
  answer3: "Sneizel",

  answers: ["Meruem", "Madara", "Dio Brando", "Sneizel"],
};

const question4 = {
  question: "Quel est le plus grand pays du monde?",

  trueAnswer: "Russie",
  answer1: "Chine",
  answer2: "Canada",
  answer3: "Mongolie",

  answers: ["Russie", "Chine", "Canada", "Mongolie"],
};

const question5 = {
  question: "Quel est la langue la plus parler du monde?",

  trueAnswer: "Chinois",
  answer1: "Francais",
  answer2: "Anglais",
  answer3: "Portugais",

  answers: ["Chinois", "Francais", "Anglais", "Portugais"],
};

const question6 = {
  question: "Quel est le personnage principale du manga Naruto?",

  trueAnswer: "Naruto",
  answer1: "Sasuke",
  answer2: "Boruto",
  answer3: "Madara",

  answers: ["Madara", "Naruto", "Sasuke", "Boruto"],
};

// Operation pour rendre les question aleatoire lors du lancement du quiz
const questionArrays = [
  question1,
  question2,
  question3,
  question5,
  question4,
  question6,
]; // Liste de question
// let randQuestion = Math.floor(Math.random() * questionArrays.length);z
let displayedQuestion = [];

function takeRandomQuestion() {
  let randQuestion = Math.floor(Math.random() * questionArrays.length);

  for (i = 0; i < 5; i++) {
    displayedQuestion.push(questionArrays[randQuestion]);
  }
}

// random order for answers
// let randomAnswer = Math.floor(Math.random() * 4);
let index;
// Fonction qui permet de remplir les champs dynamique des questions
function remplir() {
  let randQuestion = Math.floor(Math.random() * questionArrays.length);

  index = randQuestion;
  // Quiz form fill

  if (displayedQuestion.includes(randQuestion)) {
    remplir();
  } else {
    questionLabel.innerText = questionArrays[randQuestion].question;

    // firstAnswer.innerText = questionArrays[randQuestion].answer1;
    // secondAnswer.innerText = questionArrays[randQuestion].answer2;
    // thirdAnswer.innerText = questionArrays[randQuestion].trueAnswer;
    // fourthAnswer.innerText = questionArrays[randQuestion].answer3;

    firstAnswer.innerText = questionArrays[randQuestion].answers[0];
    secondAnswer.innerText = questionArrays[randQuestion].answers[1];
    thirdAnswer.innerText = questionArrays[randQuestion].answers[2];
    fourthAnswer.innerText = questionArrays[randQuestion].answers[3];

    // Input1.value = questionArrays[randQuestion].answer1;
    // Input2.value = questionArrays[randQuestion].answer2;
    // Input3.value = questionArrays[randQuestion].trueAnswer;
    // Input4.value = questionArrays[randQuestion].answer3;

    Input1.value = questionArrays[randQuestion].answers[0];
    Input2.value = questionArrays[randQuestion].answers[1];
    Input3.value = questionArrays[randQuestion].answers[2];
    Input4.value = questionArrays[randQuestion].answers[3];

    console.log(Input1.value, Input2.value, Input3.value, Input4.value);

    displayedQuestion.push(randQuestion);
  }

  registrationForm.style.display = "none";
}

// function getInputValue() {
//   Input1.value = questionArrays[index].answer1;
//   Input2.value = questionArrays[index].answer2;
//   Input3.value = questionArrays[index].trueAnswer;
//   Input4.value = questionArrays[index].answer3;
// }

// Ecouteur d'evenement pour le btn Commencer

btnStartQuiz.addEventListener("click", registerPlayerId);
// btnStartQuiz.addEventListener("click", startTimer);

// Gestion du timer
let timeLeft = 30;
let countNumQuestion = 0;

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
      getCheckedValue();
      countNumQuestion++;

      if (countNumQuestion <= 5) {
        timeLeft = 30;
        remplir();
        questionCount.innerText++;

        uncheckInputRadio();
      } else {
        clearInterval(timerInterval);
        quizForm.style.display = "none";
        displayScore();
      }
    }
  }, 1000);
}

function resetTimer(event) {
  event.preventDefault();
  countNumQuestion++;
  getCheckedValue();

  if (countNumQuestion < 5) {
    // getInputValue();   ////////// TRAITEMENT
    // getCheckedValue();

    timeLeft = 30;
    timeLeft--;
    updateProgressBar();
    countdownText.innerText = timeLeft;
    questionCount.innerText++;
    uncheckInputRadio();
  } else {
    // clearInterval();
    quizForm.style.display = "none";
    displayScore();
  }
}

// Ecouteur d'evenement pour le boutton Valider

btnValid.addEventListener("click", remplir);
btnValid.addEventListener("click", resetTimer);

// radio input variables get
const Input1 = document.getElementById("ans1");
const Input2 = document.getElementById("ans2");
const Input3 = document.getElementById("ans3");
const Input4 = document.getElementById("ans4");

// Fonction qui desactive le boutton valider si les inputs ne sont pas cocher
function disableBtnValider() {
  if (Input1.checked || Input2.checked || Input3.checked || Input4.checked) {
    btnValid.removeAttribute("disabled");
  } else {
    btnValid.setAttribute("disabled", "true");
  }
}

// radioninput Event
Input1.addEventListener("change", disableBtnValider);
Input2.addEventListener("change", disableBtnValider);
Input3.addEventListener("change", disableBtnValider);
Input4.addEventListener("change", disableBtnValider);

// Fonction qui permet de reinitialiser l'etat des inputs apres la validation
function uncheckInputRadio() {
  Input1.checked = false;
  Input2.checked = false;
  Input3.checked = false;
  Input4.checked = false;
  btnValid.setAttribute("disabled", "true");
}

// Fonction qui recupere la valeurs de l'input cheched
let answerChecked;
function getCheckedValue() {
  if (Input1.checked === true) {
    answerChecked = Input1.value;
  } else if (Input2.checked === true) {
    answerChecked = Input2.value;
  } else if (Input3.checked === true) {
    answerChecked = Input3.value;
  } else if (Input4.checked === true) {
    answerChecked = Input4.value;
  }

  console.log(`la valeur selectionner est :  ${answerChecked}`);

  if (answerChecked == questionArrays[index].trueAnswer) {
    player.score++;
    console.log("le score du joueur est", player.score);
  } else {
    console.log("le score du joueur est", player.score);
  }

  console.log("la veritable reponse est", questionArrays[index].trueAnswer);
}


//  Effectuer le cacule de score
function increaseScore() {
  if (answerChecked == questionArrays[index].trueAnswer) {
    player.score++;
    console.log("le score du joueur est", player.score);
  }
}

// Afiichage du score
function displayScore() {
  playerNameDisplay.innerText = nameInput.value;
  playerMailDisplay.innerText = mailInput.value;
  finalScoreDisplayed.innerText = player.score;

  if (player.score < 3) {
  } else {
    iconCircle.src = "images/green-circle.png";
    iconCross.src = "images/green-check.png";
  }
}

function reloadQuiz() {
  location.reload();
}

btnHome.addEventListener("click", reloadQuiz);
btnQuit.addEventListener("click", reloadQuiz);