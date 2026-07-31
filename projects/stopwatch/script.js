// Project 2 - Stopwatch
// similar idea to the digital clock from day 10 but way more state to manage
// (start/pause/reset/laps) instead of just displaying the current time

const displayEl = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapList = document.getElementById("lapList");

let startTime = 0;      // timestamp of when we last hit "start"
let elapsedTime = 0;    // total time built up across start/pause cycles
let timerInterval = null;
let lapCount = 0;

// tried using a simple counter (just +10 every interval) at first but it drifted
// and became inaccurate after running for a while. switched to comparing actual
// timestamps with Date.now() instead, way more accurate since it doesn't rely
// on setInterval firing at EXACTLY 10ms every time (it doesn't, apparently)
function updateDisplay() {
  let currentTime = elapsedTime + (Date.now() - startTime);

  let hours = Math.floor(currentTime / 3600000);
  let minutes = Math.floor((currentTime % 3600000) / 60000);
  let seconds = Math.floor((currentTime % 60000) / 1000);
  let centiseconds = Math.floor((currentTime % 1000) / 10);

  displayEl.textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

// padStart from day 8 notes, used it in the digital clock too, reusing it here
function pad(num) {
  return String(num).padStart(2, "0");
}

function start() {
  startTime = Date.now(); // mark "now" as the starting point for this run
  timerInterval = setInterval(updateDisplay, 10); // update often enough to look smooth

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;
}

function pause() {
  clearInterval(timerInterval); // stop the interval from firing
  elapsedTime += Date.now() - startTime; // save whatever time built up so far

  startBtn.disabled = false;
  startBtn.textContent = "Resume"; // relabeling so it's clear it's not starting from 0
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startTime = 0;
  lapCount = 0;

  displayEl.textContent = "00:00:00.00";
  lapList.innerHTML = "";

  startBtn.disabled = false;
  startBtn.textContent = "Start";
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function recordLap() {
    lapCount++;
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
        // grabbing whatever the display currently shows instead of recalculating time,
        // simplest way to make sure the lap time matches exactly what the user saw
    li.innerHTML = `
        <span class="fw-semibold">Lap ${lapCount}</span>
        <span class="badge text-bg-dark">${displayEl.textContent}</span> `;
        
    lapList.insertBefore(li, lapList.firstChild); // newest lap shows at the top
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", recordLap);

// small extra - space bar also starts/pauses, felt like a nice touch after
// adding keyboard support to the calculator too
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // stops the page from scrolling down on spacebar
    if (startBtn.disabled === false) {
      start();
    } else if (pauseBtn.disabled === false) {
      pause();
    }
  }
});