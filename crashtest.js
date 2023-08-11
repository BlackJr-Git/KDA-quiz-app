const question4 = {
  question: "Quel est le plus grand pays du monde?",

  trueAnswer: "Russie",
  answers: ["Russie", "Chine", "Canada", "Mongolie"],
};

const question5 = {
  question: "Quel est la langue la plus parler du monde?",

  trueAnswer: "Chinois",
  answers: ["Chinois", "Francais", "Anglais", "Portugais"],
};

let displayedAnswer = [];

// function takeRandomAnswer(){
//     let randomAnswer = Math.floor(Math.random() * 4);
//     for (i = 0; i < 4; i++) {
//         displayedAnswer.push(question4.answers[randomAnswer]);
//     }
// }

function remplirReponse(question) {
  let randomAnswer = Math.floor(Math.random() * 4);

  if (displayedAnswer.includes(randomAnswer)) {
    remplirReponse();
  } else {
    // console.log(question.answers[randomAnswer])
    console.log(randomAnswer);
    console.log(question);
    displayedAnswer.push(randomAnswer);
  }
}

remplirReponse(question4)
remplirReponse(question4)
remplirReponse(question4)
remplirReponse(question4)

// for (let index = 0; index < 4; index++) {
//   remplirReponse(question4);
// }


