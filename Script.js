const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = 0;

function updateDisplay(){
    hoursElement.textContent = String(hours).padStart(2,'0');
    minutesElement.textContent = String(minutes).padStart(2,'0');
    secondsElement.textContent = String(seconds).padStart(2,'0');
}

function startStopwatch(){
    intervalId = setInterval(() => {
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;

        }

        if(minutes === 60){
            minutes = 60;
            hours++;
        }
        updateDisplay();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function pauseStopwatch(){
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetStopwatch(){
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);