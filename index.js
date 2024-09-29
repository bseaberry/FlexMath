let countdown = 30;
let timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const clearButton = document.getElementById('clear-btn');
let prompt = document.getElementById('start-banner');
let input = document.getElementsByTagName('input').value;
const answer = parseInt(input);
let minValue = 15;
let maxValue = 50;
let questionNumber = 1;
let countDownTimer;

//Layout Game Logic
function handleGame() {
    const numberOne = Math.floor(Math.random() * 
      (maxValue - minValue + 1)) + minValue;
    
    const numberTwo = Math.floor(Math.random() * 
      (maxValue - minValue + 1)) + minValue;
    
    const solution = numberOne + numberTwo;
    console.log(solution);
    prompt.innerHTML = 
      `<p style="font-size: 20px">${questionNumber}: ${numberOne} + ${numberTwo}</p>
      <input type="text" oninput="${answer} === ${solution} ? 
      alert('try again') : nextProblem()"
      placeholder="Answer">
      </input>`;
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
  if(countdown < 0) {
    clearInterval(countDownTimer);
    countdown = 30;
    timerElement.innerText = countdown;
    alert('Game Over');
    prompt.innerHTML = ` <p id ='start-banner'>Press Start</p>`
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
   }
 }


//Create a function for evaluating the user input.
function nextProblem() {
  questionNumber++;
  //Increases values after question 5.
  if(questionNumber > 5) {
      minValue = 50;
      maxValue = 75;
  }
}