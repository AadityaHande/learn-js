// Day 1 - Variables
// just messing around with var, let, const today

// the 3 ways to make a variable
var city = "Pune";
let myName = "Aaditya";
const age = 20; // const bcz age won't change today lol

console.log(myName, age, city);

// ok so apparently var is weird, it lets you redeclare
var fav = "cricket";
var fav = "football"; // no error?? ok
console.log(fav);

// let doesn't allow that
let sport = "cricket";
sport = "football"; // this is fine, reassigning
// let sport = "kabaddi"; // this breaks it, tried it and got an error
console.log(sport);

// const literally locks the value
const pi = 3.14;
// pi = 3.5 // nope, error: Assignment to constant variable.
console.log(pi);

// can declare multiple in one line, saves time
let a = 1, b = 2, c = 3;
console.log(a, b, c);

// declared but no value yet = undefined
let mood;
console.log("mood rn:", mood);

// naming rules I found out
let firstName = "Aaditya"; // camelCase is the standard everyone uses
let _hidden = "shh";
let $money = 500;
// let 1x = 5;  <- not allowed, cant start with a number

console.log(firstName, _hidden, $money);

// swapping 2 numbers - the "old school" way with a temp var
let num1 = 5;
let num2 = 10;
let temp = num1;
num1 = num2;
num2 = temp;
console.log("after swap:", num1, num2);

// found this trick online, swap without temp var using destructuring
[num1, num2] = [num2, num1];
console.log("swapped again:", num1, num2);

// all the console prints, testing each one 
console.log("normal log");
console.info("just some info");
console.warn("this is a warning, shows in yellow");
console.error("this shows in red like an error");

// table looks cool for arrays of objects
console.table([
  { day: 1, topic: "Variables" },
  { day: 2, topic: "Control Flow" },
]);

// grouping logs together so it's not messy in console
console.group("Student Info");
console.log("Name:", myName);
console.log("Age:", age);
console.groupEnd();

// counts how many times this ran, kinda random but might use it someday
console.count("check");
console.count("check");

// checking how long a loop takes
console.time("loop test");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("loop test");

// template literals >>> string concatenation, way cleaner
let course = "JavaScript";
console.log(`I'm learning ${course}, day 1 done`);
console.log(`this
even works
across lines`);