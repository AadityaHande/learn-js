// Day 6 - DOM Manipulation (building small things)
// putting basics together to actually build stuff, not just select/change one element

// building a list dynamically from an array (instead of typing each <li> by hand)
let todos = ["learn DOM", "practice JS", "sleep on time (lol)"];

let list = document.getElementById("myList");

todos.forEach((todo) => {
  let li = document.createElement("li");
  li.textContent = todo;
  list.appendChild(li);
});
// this is way better than writing html manually, especially if the data
// comes from somewhere else later (like an API, which i think is coming up soon)

// clearing a list before rebuilding it (needed this so i don't get duplicates on rerun)
function clearList(element) {
  element.innerHTML = "";
}
// clearList(list); // commented out, just noting the function exists

// building a small card using template literals (feels cleaner than createElement every time)
let cardData = { name: "Aaditya", role: "student" };

let cardHTML = `
  <div class="card">
    <h3>${cardData.name}</h3>
    <p>${cardData.role}</p>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", cardHTML);
// insertAdjacentHTML lets me drop html in without wiping out what was already there
// (innerHTML would've overwritten everything in body, this one just adds to it)

// building multiple cards from an array of objects - this feels like "real" code finally
let users = [
  { name: "Aaditya", age: 20 },
  { name: "Riya", age: 22 },
  { name: "Sam", age: 25 },
];

let cardsContainer = document.createElement("div");
cardsContainer.id = "cards-container";

users.forEach((user) => {
  let card = document.createElement("div");
  card.className = "user-card";
  card.innerHTML = `<h4>${user.name}</h4><p>Age: ${user.age}</p>`;
  cardsContainer.appendChild(card);
});

document.body.appendChild(cardsContainer);

// updating text based on a counter (basic version, will probably redo this with events tomorrow)
let count = 0;
let counterDisplay = document.createElement("p");
counterDisplay.textContent = `Count: ${count}`;
document.body.appendChild(counterDisplay);

function increaseCount() {
  count++;
  counterDisplay.textContent = `Count: ${count}`;
}
increaseCount(); // manually calling it for now since i haven't done click events yet
increaseCount();
console.log("count is now:", count);
// tomorrow (events) this will probably hook up to an actual button click instead