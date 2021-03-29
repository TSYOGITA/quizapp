const quiz = [
      {
          question:"Q1: What is the full form of html?",
          a:"hyper",
          b:"markup language",
          c:"hyper text markup language",
          d:"text written",
          ans:"ans3"
      },
      {
        question:"Q2: What is the full form of css?",
        a:"stylesheetr",
        b:"markup language",
        c:"hyper text markup language",
        d:"cascading style sheet",
        ans:"ans4"
    },{
        question:"Q3: What is the full form of JS?",
        a:"JavaScript",
        b:"markup language",
        c:"hyper text markup language",
        d:"Script",
        ans:"ans1"
    }

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answer = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    question.innerHTML = quiz[questionCount].question;
    option1.innerHTML = quiz[questionCount].a;
    option2.innerHTML = quiz[questionCount].b;
    option3.innerHTML = quiz[questionCount].c;
    option4.innerHTML = quiz[questionCount].d;

}
loadQuestion();

const getCheckAns = () =>{
    let answ;
    answer.forEach((curAnsElem)=>{
       if(curAnsElem.checked){
           answ = curAnsElem.id;
       }
    });
    return answ;
};
submit.addEventListener('click',()=>{
    const checkedAns = getCheckAns();
    console.log(checkedAns);
    if(checkedAns == quiz[questionCount].ans){
        score++;
    }
    console.log(score);
    questionCount++;
    if(questionCount < quiz.length){ 
        loadQuestion();
    }else{
        showScore.innerHTML = `<h3>You Scored ${score} / ${quiz.length}</h3><br><button class="btn" onclick="location.reload()">WRITE AGAIN</button> `;
        showScore.classList.remove('scoreArea');
    }
});