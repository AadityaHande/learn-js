// Mini Project 2 - Random Quote Generator
// using a local array instead of an api for this one, wanted something that
// always works instantly without depending on internet/free api uptime

const quotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
];

let quoteBox = document.getElementById("quoteBox");
let authorEl = document.getElementById("author");
let newQuoteBtn = document.getElementById("newQuoteBtn");

function showRandomQuote() {
  // Math.random() gives 0 to 0.999..., multiply by array length, floor it to get a valid index
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let selected = quotes[randomIndex];

  quoteBox.textContent = `"${selected.text}"`;
  authorEl.textContent = `- ${selected.author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote(); // show one immediately on page load, not just after first click

// note to self: could easily swap this local array for a fetch() call to a real
// quotes api later, the logic barely changes - just get quotes from an api
// response instead of this hardcoded array. good example of why learning
// fetch separately from the actual "feature" logic was useful