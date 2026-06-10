// Day 2 - loops
// for, while, do-while, and the newer for-of / for-in

// classic for loop - use this the most so far
for (let i = 1; i <= 5; i++) {
  console.log("for loop:", i);
}

// while loop - checks condition first, then runs
let i = 1;
while (i <= 5) {
  console.log("while loop:", i);
  i++;
}

// do-while - runs at least once even if condition is false
let j = 10;
do {
  console.log("do-while runs at least once:", j);
} while (j < 5);
// condition is false from the start but it still ran once, thats the whole point of do-while

// looping backwards
for (let k = 5; k >= 1; k--) {
  console.log("countdown:", k);
}

// nested loops - loop inside a loop, used for patterns
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line);
}
// this makes a little triangle of stars, took me a few tries to get the logic right

// break - stops the loop completely
for (let n = 1; n <= 10; n++) {
  if (n === 5) break;
  console.log("break example:", n);
}

// continue - skips just that one iteration, doesn't stop the whole loop
for (let n = 1; n <= 5; n++) {
  if (n === 3) continue;
  console.log("continue example:", n); // skips printing 3
}

// for-of - loops through VALUES of an array, easier than normal for loop for arrays
let fruits = ["apple", "mango", "banana"];
for (let fruit of fruits) {
  console.log("for-of:", fruit);
}

// for-in - loops through KEYS, usually used for objects
let person = { name: "Aaditya", age: 20, city: "Pune" };
for (let key in person) {
  console.log(key, "->", person[key]);
}

// quick note to self: use for-of for arrays, for-in for objects
// mixed these up a lot when i started so writing it down here

// looping through a string (strings are kinda like arrays of characters)
let word = "JS";
for (let char of word) {
  console.log("char:", char);
}

// infinite loop example (commented out on purpose, don't wanna crash the console)
// while (true) {
//   console.log("this never stops!!");
// }