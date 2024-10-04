let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
    running = false;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

updateDisplay();
