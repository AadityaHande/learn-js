// Day 3 - Functions
// basically a reusable block of code, finally understanding why these are so useful

// function declaration - the normal way
function greet() {
  console.log("hello there");
}
greet(); // have to "call" it to actually run it

// function with parameters
function greetUser(name) {
  console.log(`hello ${name}`);
}
greetUser("Aaditya");
greetUser("Riya"); // same function, different input, thats the whole point

// function with a return value
function add(x, y) {
  return x + y;
}
let result = add(5, 3);
console.log("sum:", result);

// difference between console.log inside a function and return
function addAndPrint(x, y) {
  console.log(x + y); // just prints, doesn't give the value back
}
function addAndReturn(x, y) {
  return x + y; // actually gives the value back so i can use it later
}
addAndPrint(2, 3); // prints 5 but i can't store it anywhere
let saved = addAndReturn(2, 3); // this i can store and reuse
console.log("saved value:", saved);

// default parameters - in case someone doesn't pass an argument
function greetWithDefault(name = "Guest") {
  console.log(`hi ${name}`);
}
greetWithDefault(); // no argument passed, uses default
greetWithDefault("Aaditya");

// function expression - storing a function inside a variable
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(4, 5));
// difference from declaration: this one can't be called before its defined
// declarations get "hoisted" apparently, expressions don't

// named function expression (rare but saw it in a video)
const divide = function divideNumbers(x, y) {
  return x / y;
};
console.log(divide(10, 2));

// functions can take other functions as arguments (callback)
function processUserInput(callback) {
  let name = "Aaditya";
  callback(name);
}
processUserInput(function (name) {
  console.log(`processing: ${name}`);
});
// this confused me a lot at first but it clicked after writing it out myself

// rest parameters - when you don't know how many arguments will come in
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2, 3, 4, 5)); // works with any number of args

// function returning another function (didn't fully get this yet but writing it down)
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
// gonna need to revisit this one, still a bit fuzzy on why/when to use it