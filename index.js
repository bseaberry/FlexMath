let countdown = 30;
let timerElement = document.getElementById('timer');
let countDownTimer;
let startButton = document.getElementById('start-btn');
let prompt = document.getElementById('prompt');
let clearButton = document.getElementById('clear-btn');
let minValue = 15;
let maxValue = 50;
let questionNumber = 1;

//Layout Game Logic
function handleGame() {
    let numberOne = Math.floor(Math.random() * 
      (maxValue - minValue + 1)) + minValue;
    
    let numberTwo = Math.floor(Math.random() * 
      (maxValue - minValue + 1)) + minValue;
    
    const solution = numberOne + numberTwo;
    console.log(solution);
    prompt.innerHTML = 
      `<p>${questionNumber}: ${numberOne} + ${numberTwo}</p>
      <input type="text" oninput="input === solution ? 
      alert('try again') : nextProblem()">
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
   }
 }


//Create a function for evaluating the user input.