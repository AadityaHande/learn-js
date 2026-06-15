// Day 7 - Events Basics
// making the page actually respond to stuff, this is what i was waiting for

// simplest click event
let btn = document.getElementById("clickBtn");
btn.addEventListener("click", function () {
  console.log("button was clicked!");
});

// using an arrow function instead, same thing just shorter syntax
btn.addEventListener("click", () => {
  console.log("clicked again (arrow version)");
});
// wait, both of these run on the same click? yes - you can add MULTIPLE
// listeners to the same element and same event, didn't expect that at first

// click counter - combining this with DOM stuff from yesterday
let count = 0;
let countDisplay = document.getElementById("clickCount");
btn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = `Clicks: ${count}`;
});

// the event object - gives info about what actually happened
btn.addEventListener("click", (event) => {
  console.log("event object:", event);
  console.log("target element:", event.target); // the element that was clicked
});

// input event - fires every time you type, used for live updates
let nameInput = document.getElementById("nameInput");
let liveOutput = document.getElementById("liveOutput");
nameInput.addEventListener("input", (event) => {
  liveOutput.textContent = `you typed: ${event.target.value}`;
});
// event.target.value is how you get whatever the user typed, took a sec to find this

// keydown event - fires on every key press, has more detail than input
nameInput.addEventListener("keydown", (event) => {
  console.log("key pressed:", event.key);
});

// form submit - had to learn about preventDefault the hard way
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops the page from refreshing, which it does by default!!
  let formInput = document.getElementById("formInput");
  console.log("form submitted with value:", formInput.value);
  formInput.value = ""; // clear the input after submitting
});
// without preventDefault the whole page just reloads and you lose everything,
// found this out the annoying way before looking it up

// mouseover / mouseout - hover effects
let hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "orange";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightblue";
});

// removing an event listener - has to be a NAMED function, not anonymous
function sayHello() {
  console.log("hello!");
}
btn.addEventListener("click", sayHello);
// btn.removeEventListener("click", sayHello); // commented, just testing the syntax
// apparently you CAN'T remove an anonymous function listener since theres no
// reference to it anymore, learned this after trying and failing lol