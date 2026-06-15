// Day 7 - Practice
// events + event delegation combined

// Q1 - button that changes its own text when clicked
let toggleBtn = document.createElement("button");
toggleBtn.textContent = "OFF";
document.body.appendChild(toggleBtn);
toggleBtn.addEventListener("click", () => {
  toggleBtn.textContent = toggleBtn.textContent === "OFF" ? "ON" : "OFF";
});

// Q2 - live character counter for an input
let charInput = document.createElement("input");
let charCount = document.createElement("p");
document.body.appendChild(charInput);
document.body.appendChild(charCount);
charInput.addEventListener("input", (e) => {
  charCount.textContent = `characters: ${e.target.value.length}`;
});

// Q3 - detect the enter key specifically (not just any key)
let enterInput = document.createElement("input");
enterInput.placeholder = "press enter";
document.body.appendChild(enterInput);
enterInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("you pressed enter! value was:", e.target.value);
  }
});

// Q4 - simple form that prevents refresh and logs the value
let quickForm = document.createElement("form");
let quickInput = document.createElement("input");
let quickSubmit = document.createElement("button");
quickSubmit.textContent = "go";
quickForm.appendChild(quickInput);
quickForm.appendChild(quickSubmit);
document.body.appendChild(quickForm);

quickForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("quick form value:", quickInput.value);
});

// Q5 - hover effect that changes size, not just color this time
let hoverDiv = document.createElement("div");
hoverDiv.style.width = "80px";
hoverDiv.style.height = "80px";
hoverDiv.style.background = "pink";
document.body.appendChild(hoverDiv);

hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.width = "100px";
  hoverDiv.style.height = "100px";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.width = "80px";
  hoverDiv.style.height = "80px";
});

// Q6 - event delegation on a list, adding items dynamically and still handling clicks
let dynamicList = document.createElement("ul");
document.body.appendChild(dynamicList);

function addListItem(text) {
  let li = document.createElement("li");
  li.textContent = text + " (click to remove) ";
  dynamicList.appendChild(li);
}
addListItem("first item");
addListItem("second item");

dynamicList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
addListItem("third item added after listener was set up"); // still works, bcz delegation

// Q7 - double click event, different from a normal click
let dblBtn = document.createElement("button");
dblBtn.textContent = "double click me";
document.body.appendChild(dblBtn);
dblBtn.addEventListener("dblclick", () => {
  console.log("double clicked!");
});

// Q8 - target vs currentTarget check on a nested structure
let outerDiv = document.createElement("div");
outerDiv.style.padding = "20px";
outerDiv.style.background = "lightgray";
let innerSpan = document.createElement("span");
innerSpan.textContent = "click me (inside a div)";
outerDiv.appendChild(innerSpan);
document.body.appendChild(outerDiv);

outerDiv.addEventListener("click", (e) => {
  console.log("clicked element:", e.target.tagName);       // could be SPAN or DIV
  console.log("listener is on:", e.currentTarget.tagName);  // always DIV
});