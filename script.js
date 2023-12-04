const questionContainer = document.querySelector(".box");
const questionContainer2 = document.querySelector(".box2");
const btn1 = document.getElementById ("btn-1")
const btn2 = document.getElementById ("btn-2")
const btn3 = document.getElementById ("btn-3")
const btn4 = document.getElementById ("btn-4")
const btn5 = document.getElementById ("btn-5")
const btn6 = document.getElementById ("btn-6")
const response = document.querySelector ("p")
const response2 = document.querySelector (".p2")
const ring = () => {
    const audio = new Audio();
    audio.src = "Img/Breponse.mp3";
    audio.play();
  };
  const ring2 = () => {
    const audio2 = new Audio();
    audio2.src = "Img/Mreponse.mp3";
    audio2.play();
  };

questionContainer.addEventListener("click", () => {
  questionContainer.style.opacity = "90%";
  questionContainer.style.borderRadius = "15%";

});questionContainer2.addEventListener("click", () => {
    questionContainer2.style.opacity = "90%";
    questionContainer2.style.borderRadius = "15%";
  });

btn1.addEventListener("click", () => {
    response.classList.add ('show-response')
    response.style.background ="red"  
    ring2 ();
});

btn2.addEventListener("click", () => {
    response.classList.add ('show-response')
    response.style.background ="green"
    ring ();
});

btn3.addEventListener("click", () => {
    response.classList.add ('show-response')
    response.style.background ="red"
    ring2 ();
});

btn4.addEventListener("click", () => {
    response2.classList.add ('show-response')
    response2.style.background ="green"
    ring ();
});

btn5.addEventListener("click", () => {
    response2.classList.add ('show-response')
    response2.style.background ="red"
    ring2 ();
});

btn6.addEventListener("click", () => {
    response2.classList.add ('show-response')
    response2.style.background ="red"
    ring2 ();
});
