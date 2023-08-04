const quizForm = document.getElementById("Quiz-form");
const btnQuiz = document.getElementById("btn-quiz");

const player = {
  name: "player",
  mail: "player@quiz.app",
  score: 0,
};

const question1 = {
    question : "Quel est le type d'un fichier javascript ?",

    trueAnswer : ".js",
    answer1 : '.jsx',
    answer2 : '.j',
    answer3 : '.ts'
}



// Switch du entre la page connexion et la page question

// btnQuiz.onclick = function() {
//     quizForm.style.display = "none"
// };

function displayQuizForm() {
//   quizForm.style.display = "";
  quizForm.style.removeProperty("display");
//   console.log(quizForm.style);
}

btnQuiz.addEventListener("click", displayQuizForm);
