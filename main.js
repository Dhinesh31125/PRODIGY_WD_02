const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let startTime;
let intervalId;

function updateDisplay() {
    const currentTime = new Date().getTime() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = new Date().getTime();
    intervalId = setInterval(updateDisplay, 10);
}

function pauseTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
