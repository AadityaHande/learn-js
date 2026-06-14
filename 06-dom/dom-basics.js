// Day 6 - DOM Basics
// finally doing stuff on an actual webpage instead of just console.log
// run this alongside index.html, opened it in browser and used the console to test

// selecting elements - a few different ways
let heading = document.getElementById("main-heading");
console.log(heading);

let firstPara = document.querySelector(".para"); // gets the FIRST match only
console.log(firstPara);

let allParas = document.querySelectorAll(".para"); // gets ALL matches, as a NodeList
console.log(allParas);
// NodeList looks like an array but isn't fully one, can still use forEach on it tho

// old school ways (saw these in an older tutorial, querySelector is more common now)
let byClass = document.getElementsByClassName("para");
let byTag = document.getElementsByTagName("li");
console.log(byClass, byTag);
// these return "live" HTMLCollections apparently, kinda confusing, sticking with querySelector

// changing text content
heading.textContent = "Hello DOM, changed by JS!";

// changing HTML content (can inject actual html tags, textContent can't)
firstPara.innerHTML = "this paragraph has <strong>bold</strong> text now";

// difference i noted: textContent = plain text only, innerHTML = can include html tags
// innerHTML is apparently risky with user input (something about security), textContent is safer

// changing styles directly
let box = document.getElementById("box");
box.style.background = "tomato";
box.style.width = "150px";
box.style.borderRadius = "10px";

// adding / removing / toggling classes - better than inline styles for most things
box.classList.add("highlight");
console.log(box.classList.contains("highlight")); // true
box.classList.remove("highlight");
box.classList.toggle("highlight"); // adds it since it was just removed

// working with attributes
heading.setAttribute("data-info", "custom heading");
console.log(heading.getAttribute("data-info"));
heading.removeAttribute("data-info");

// creating a brand new element from scratch
let newPara = document.createElement("p");
newPara.textContent = "i was created by JS";
document.body.appendChild(newPara); // adds it to the end of the body

// creating and adding a list item
let list = document.getElementById("myList");
let newItem = document.createElement("li");
newItem.textContent = "item 3 (added by js)";
list.appendChild(newItem);

// removing an element
let secondPara = document.querySelectorAll(".para")[1];
// secondPara.remove(); // commented out so i can still see it in the page while testing

// parent / children / siblings - navigating the DOM tree
console.log(list.children);           // all li elements inside the ul
console.log(list.firstElementChild);  // first li
console.log(list.lastElementChild);   // last li (should be the one i just added)
console.log(heading.parentElement);   // body

// note to self: querySelector + classList are what i'll probably use the most
// going forward, feels more modern than the getElementsBy... stuff