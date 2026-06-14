// Day 6 - Practice
// DOM selecting + changing + creating, using index.html as the test page

// Q1 - select the heading and change its text
let heading = document.getElementById("main-heading");
heading.textContent = "Practice Time";

// Q2 - select all paragraphs and change their color
let paras = document.querySelectorAll(".para");
paras.forEach((p) => {
  p.style.color = "purple";
});

// Q3 - add a new class to the box div
let box = document.getElementById("box");
box.classList.add("rounded");
box.style.borderRadius = "50%"; // just doing it directly too since i didn't set up css classes

// Q4 - create 3 new list items using a loop and add them to the list
let list = document.getElementById("myList");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = `loop item ${i}`;
  list.appendChild(li);
}

// Q5 - count how many <li> elements exist on the page
console.log("total list items:", document.querySelectorAll("li").length);

// Q6 - change the background color of the whole page
document.body.style.backgroundColor = "#f0f0f0";

// Q7 - create a new button element and add it to the page
let newBtn = document.createElement("button");
newBtn.textContent = "New Button";
document.body.appendChild(newBtn);

// Q8 - toggle a class on the box (on/off, just running it once here)
box.classList.toggle("active");
console.log(box.classList.contains("active"));

// Q9 - grab an attribute, set it, then read it back
let existingBtn = document.getElementById("myBtn");
existingBtn.setAttribute("title", "click this button");
console.log(existingBtn.getAttribute("title"));

// Q10 - build a small unordered list from an array using insertAdjacentHTML
let skills = ["HTML", "CSS", "JavaScript"];
let skillsHTML = "<ul>" + skills.map((s) => `<li>${s}</li>`).join("") + "</ul>";
document.body.insertAdjacentHTML("beforeend", skillsHTML);
// used .map + .join from array methods day to build this html string, felt good
// that stuff from day 4 actually came in handy here

// Q11 - find the parent of an element
console.log("list's parent is:", list.parentElement);

// Q12 - remove the second paragraph from the page
let secondPara = document.querySelectorAll(".para")[1];
if (secondPara) {
  secondPara.remove();
}