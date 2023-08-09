const question4 = {
  question: "Quel est le plus grand pays du monde?",

  trueAnswer: "Russie",
  answer1: "Chine",
  answer2: "Canada",
  answer3: "Mongolie",

  answers: ["Russie", "Chine", "Canada", "Mongolie"],
};

let displayedAnswer = []


// function takeRandomAnswer(){
//     let randomAnswer = Math.floor(Math.random() * 4);

//     for (i = 0; i < 4; i++) {
//         displayedAnswer.push(question4.answers[randomAnswer]);
//     }
// }

function remplirReponse(Objets) {
    let randomAnswer = Math.floor(Math.random() * 4);

    if (displayedAnswer.includes(randomAnswer)) {
        remplirReponse();
      } else {
        console.log(Objects.answers[randomAnswer])
        displayedAnswer.push(randomAnswer);
      }
} 



for (let index = 0; index < 4; index++) {
    remplirReponse(question4)
}