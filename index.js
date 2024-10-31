let countdown = 30;
let timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const clearButton = document.getElementById('clear-btn');
let prompt = document.getElementById('start-banner');
let minValue = 15;
let maxValue = 50;
let questionNumber = 1;
let countDownTimer;
let numberOne = Math.floor(Math.random() *
  (maxValue - minValue + 1)) + minValue;

let numberTwo = Math.floor(Math.random() *
  (maxValue - minValue + 1)) + minValue;

const solution = numberOne + numberTwo;

//Layout Game Logic
function handleGame() {

  console.log(solution);
  prompt.innerHTML =
    `<p style="font-size: 20px">${questionNumber}: ${numberOne} + ${numberTwo}</p>
      <input type="text"
      placeholder="Answer">
      <button id='submit-btn' onclick="processAnswer()">Submit</button>
      </input>`;

};


const processAnswer = () => {
  let answer;
  let input = document.getElementsByTagName('input');
  let inputVal = input[0].value;

  if (inputVal === null) {
    alert('Try again.');
  } else {
    answer = parseInt(inputVal);
  }
  
  if (answer !== solution) {
    alert('Try again.');
  } else {
    nextProblem();
  }



}

//Countdown function starts when 'Start' is clicked.
startButton.onclick = function () {

  //When the function envokes, it stops any other timers that may be running.
  if (countDownTimer) {
    clearInterval(countDownTimer);
  }

  //Calls the game function
  handleGame();
  //Countdown starts.
  countDownTimer = setInterval(() => {
    timerElement.innerText = countdown;
    countdown--;
    //Resets the timer once time has run out.
    if (countdown < 0) {
      clearInterval(countDownTimer);
      countdown = 30;
      timerElement.innerText = countdown;
      alert('Game Over');
      prompt.innerHTML = ` <p id ='start-banner'>Press Start</p>`
      questionNumber = 1;
    }
  }, 1000);
}

//Clear countdown when 'Clear' is clicked.
clearButton.onclick = function () {
  if (countDownTimer) {
    clearInterval(countDownTimer);
    countdown = 30;
    timerElement.innerText = countdown;
    alert('Game Over');
    prompt.innerHTML = ` <p id ='start-banner'>Press Start</p>`
    questionNumber = 1;
  }
}


//Create a function for evaluating the user input.
function nextProblem() {
  questionNumber++;
  //Increases values after question 5.
  if (questionNumber > 5) {
    minValue = 50;
    maxValue = 75;
  }
  handleGame();
}