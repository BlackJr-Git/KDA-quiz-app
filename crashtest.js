

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

const questionArrays = [question1, question2, question3] // Liste de question 
let randQuestion = Math.floor(Math.random()*questionArrays.length);

let displayedQuestion = [];



if (displayedQuestion.includes(randQuestion)){
    displayedQuestion.push(randQuestion)
} else {
    
}

