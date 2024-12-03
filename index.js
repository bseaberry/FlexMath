let countdown = 30;
let timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const clearButton = document.getElementById('clear-btn');
let prompt = document.getElementById('start-banner');
let minValue = 2;
let maxValue = 10;
let questionNumber = 1;
let countDownTimer;

let numberOne = Math.floor(Math.random() *
(maxValue - minValue + 1)) + minValue;

let numberTwo = Math.floor(Math.random() *
(maxValue - minValue + 1)) + minValue;

let solution = numberOne + numberTwo;

//Function displays math equations.
function handleGame() {
  console.log(solution);
  prompt.innerHTML =
    `<p style="font-size: 20px" id="question">${questionNumber}: ${numberOne} + ${numberTwo}</p>
      <input type="text"
      placeholder="Answer"
      id="answer"
      >
      <button id ="submit-btn" onclick="processAnswer()">Submit</button>
      </input>`;
};

const processAnswer = () => {
  let answer;
  let input = document.getElementsByTagName('input');
  let inputVal = input[0].value;

  if (inputVal === null) {
    alert('Please enter a value.');
  } else {
    answer = parseInt(inputVal);
  }
  
  if (answer !== solution) {
    alert('Try again.');
  } else {
    nextProblem();
  }
};
//Generates random integers for nextProblem().
const getRandomInts = (numOne, numTwo) => {
  return {
    numOne: Math.floor(Math.random() *
    (maxValue - minValue + 1)) + minValue,

    numTwo: Math.floor(Math.random() *
    (maxValue - minValue + 1)) + minValue
  };
 
};

//Countdown function starts when 'Start' is clicked.
startButton.onclick = function () {

  //When the function envokes, it stops any other timers that may be running.
  if (countDownTimer) {
    clearInterval(countDownTimer);
  }

  //Countdown starts.
  countDownTimer = setInterval(() => {
    timerElement.innerText = countdown;
    countdown--;
    //Resets the timer once time has run out.
    if (countdown < 0) {
      clearInterval(countDownTimer);
      countdown = 30;
      timerElement.innerText = countdown;
      alert(`
        Game Over
        Points: ${questionNumber - 1}`);
      prompt.innerHTML = ` <p id ='start-banner'>Press Start</p>`
      questionNumber = 1;
      minValue = 2;
      maxValue = 10;
    }
  }, 1000);

   //Calls the game function
   handleGame();
   document.querySelector("input").focus();
   //Triggers the button onclick when a user presses enter.
   document.querySelector("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('submit-btn').click();
    }
   });
   
};

//Clear countdown when 'Clear' is clicked.
clearButton.onclick = function () {
  if (countDownTimer) {
    clearInterval(countDownTimer);
    countdown = 30;
    timerElement.innerText = countdown;
    alert(`
      Game Over
      Points: ${questionNumber - 1}`);
      prompt.innerHTML = ` <p id ='start-banner'>Press Start</p>`
      questionNumber = 1;
      minValue = 2;
      maxValue = 10;
  }
};


//Create a function for evaluating the user input.
function nextProblem() {
  const { numOne, numTwo } = getRandomInts(minValue, maxValue);
  numberOne = numOne;
  numberTwo = numTwo;
  solution = numOne + numTwo;
  questionNumber++;
  //Increases values after 3 questions.
  if (questionNumber > 2) {
    minValue += 5;
    maxValue += 3;
  } else if (questionNumber > 7) {
    minValue += 5;
    maxValue += 3;
  } else if (questionNumber > 10) {
    minValue += 5;
    maxValue += 5;
  }
  else if (questionNumber > 13) {
    minValue += 5;
    maxValue += 5;
  } else if (questionNumber > 16) {
    minValue += 5;
    maxValue += 5;
  }
  //Loads the next prompt.
  handleGame();
  document.querySelector("input").focus();
  document.querySelector("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('submit-btn').click();
    }
   });

};