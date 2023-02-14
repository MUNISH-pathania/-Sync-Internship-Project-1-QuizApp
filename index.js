let startbtn = document.getElementById('start-btn');
let start = document.querySelector('.start');
let containner = document.getElementById('containner');
let next = document.querySelector('#next-btn');
let score = document.querySelector('.score');
let countQuestion = document.querySelector('.questions');
let subContainner = document.getElementById('sub-containner');
let timeLeft = document.querySelector('.time-left');
let restart = document.querySelector('.restart');
let myScore = document.querySelector('.my-score');
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


const quizArray= [
    {
      id: "0",
      question: "Who is the founder of tesla!",
      options: ["Ronaldo", "Elon Musk", "Martin Eberhard ", "Johnny Sins"],
      correct: "Martin Eberhard ",
    },
    {
      id: "1",
      question: "who is the most powerfull person in india?",
      options: ["Sunny leony", "Carryminati", "Pappu", "Modi"],
      correct: "Modi",
    },
    {
      id: "2",
      question: "Who invented zero?",
      options: ["Aryabhatta ", "Stephen Hawking", "Albert Einstein", "Nobody"],
      correct: "Aryabhatta ",
    },
    
  ];
 
// to display quiz on click start button
start.addEventListener('click', function(){
    start.classList.add("hide");
containner.classList.remove("hide");
initial();

});

// restart the quiz
restart.addEventListener('click', function(){
    containner.classList.remove("hide");
    score.classList.add("hide");
    initial();
})


// to display result.
next.addEventListener('click', displayNext = () =>{
 
    questionCount+=1;
    if(questionCount ==quizArray.length){
    containner.classList.add("hide");
    score.classList.remove("hide");
myScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount;
    }else{

        countQuestion.innerHTML =   questionCount + 1 + " of " + quizArray.length + " Question";
        // display quiz
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
    
});
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timeLeft.innerHTML = `${count}s`;
      if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 1000);
  };
  
// display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".q-containner");
    //Hide other cards
    quizCards.forEach((card) => {
      card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
  };


  // funtions to make quiz card;

  function quiz(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        //quiz card
        let div = document.createElement("div");
        div.classList.add('q-containner' );
        //question number
        countQuestion.innerHTML = 1+"of"+ quizArray.length+" questions";
        //question
        let questionP = document.createElement("p");
        questionP.classList.add('question-p');
        questionP.innerHTML = i.question;
        div.appendChild(questionP);
        //options
div.innerHTML +=`
<button class="option-div" onClick="checkAnswer(this)">${i.options[0]}</button>
<button class="option-div" onClick="checkAnswer(this)">${i.options[1]}</button>
<button class="option-div"  onClick="checkAnswer(this)">${i.options[2]}</button>
<button class="option-div"  onClick="checkAnswer(this)">${i.options[3]}</button>
`;
        subContainner.appendChild(div);
        
    }
  }

  function checkAnswer(userOption){
let answer  = userOption.innerHTML;
let question =
    document.getElementsByClassName("q-containner")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // check the answer
  if(answer == quizArray[questionCount].correct){
    userOption.classList.add("correct");
    scoreCount++;
  }else{
    userOption.classList.add("incorrect");
  //to show right answer
  options.forEach((element) => {
    if (element.innerHTML == quizArray[questionCount].correct) {
      element.classList.add("correct");
    }
  });
}
  //stop timer
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
  }
  
  //initial
function initial() {
    subContainner.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quiz();
    quizDisplay(questionCount);
  }
  


  

