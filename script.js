const questions = [
    {
        question:
        "Qu'est-ce que la matrice ?",
        answers: [
        "Une intelligence artificielle",
        "La simulation d'un monde imaginaire",
        "Un programme auto-répliquant",
        ],
        correctAnswerIndex: 2
    },
    { 
        question:
        "Dans quel but a-t-elle été conçue ?",
        answers: [
            "Maintenir les humains sous contrôle",
            "Détruire un virus informatique",
            "Détruire l'humanité",
        ],
        correctAnswerIndex: 1
    },
    {
        question:
        "Qui a assombri le ciel, selon Morphéus ?",
        answers: [
        "Les machines",
        "Les humains",
        "Les deux en même temps",
        ],
        correctAnswerIndex: 2
    },
    {
        question:
        "Quelle pilule offre la vérité à Néo ?",
        answers: [
        "La bleue",
        "La rouge",
        "La verte",
        ],
        correctAnswerIndex: 2
    }
];
const state = {
    score: 0,
    currentQuestionIndex: 0
}

displayQuestion()

const questions = [questions, state].question
for (let i = 0; i < question.length; i++) {
    console.log(question[i]) 
}
// const ring = () => {
//     const audio = new Audio();
//     audio.src = "Img/Breponse.mp3";
//     audio.play();
//   };
//   const ring2 = () => {
//     const audio2 = new Audio();
//     audio2.src = "Img/Mreponse.mp3";
//     audio2.play();
//   };

