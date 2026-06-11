// Day 3 - Practice
// functions + arrow functions + scope combined

// Q1 - function that checks if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10), isEven(7));

// Q2 - same thing but as an arrow function
const isEvenArrow = (num) => num % 2 === 0;
console.log(isEvenArrow(4), isEvenArrow(9));

// Q3 - function to find the max of 2 numbers
function findMax(a, b) {
  return a > b ? a : b;
}
console.log(findMax(15, 20));

// Q4 - function with a default parameter
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log(power(5));    // uses default exponent, 25
console.log(power(2, 3)); // 8

// Q5 - function that takes another function as a callback
function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}
repeatAction(3, (i) => console.log("run number:", i));

// Q6 - rest parameters to find the average of numbers
function average(...nums) {
  let sum = nums.reduce((total, n) => total + n, 0);
  return sum / nums.length;
}
console.log(average(4, 8, 6, 2));

// Q7 - arrow function returning an object (had to remember the parentheses trick)
const makeBook = (title, author) => ({ title, author });
console.log(makeBook("JS Basics", "some author"));

// Q8 - global vs local scope demo
let score = 0; // global
function increaseScore() {
  score += 10; // modifying the global one since no "let" here
  console.log("score inside function:", score);
}
increaseScore();
console.log("score outside function:", score); // stays changed, its the same variable

// Q9 - block scope check
function checkBlockScope() {
  if (true) {
    let secret = "hidden inside if block";
    console.log(secret);
  }
  // console.log(secret); // would error here
}
checkBlockScope();

// Q10 - a function that returns a function (closures, still learning this)
function greetingMaker(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}
const sayHello = greetingMaker("Hello");
const sayHi = greetingMaker("Hi");
sayHello("Aaditya");
sayHi("Riya");
// kinda cool that sayHello "remembers" the greeting even after greetingMaker finished running