// Mini Project 1 - Digital Clock
// simple but uses setInterval which i haven't actually used before today, only setTimeout

let clockDisplay = document.getElementById("clock");

function updateClock() {
  let now = new Date(); // built in JS date object
  let hours = String(now.getHours()).padStart(2, "0");   // padStart adds a 0 if its a single digit
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock(); // call once immediately so it doesn't show "--:--:--" for a full second first
setInterval(updateClock, 1000); // then call it every 1000ms (1 second) after that
// setInterval keeps calling the function forever until you clearInterval it
// different from setTimeout which only runs ONCE