// Day 2 - Practice
// mix of if-else, switch, and loop questions

// Q1 - check if a number is positive, negative or zero
let num = -5;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Q2 - check even or odd using if-else (did this with ternary yesterday too)
let n = 7;
if (n % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Q3 - find the largest of 3 numbers
let a = 12, b = 45, c = 30;
if (a >= b && a >= c) {
  console.log("largest:", a);
} else if (b >= a && b >= c) {
  console.log("largest:", b);
} else {
  console.log("largest:", c);
}

// Q4 - print numbers 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q5 - print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Q6 - sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("sum:", sum); // should be 5050

// Q7 - print a multiplication table for 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Q8 - reverse a number using while loop (like 123 -> 321)
let numToReverse = 123;
let reversed = 0;
while (numToReverse > 0) {
  let lastDigit = numToReverse % 10;
  reversed = reversed * 10 + lastDigit;
  numToReverse = Math.floor(numToReverse / 10);
}
console.log("reversed:", reversed);
// took me a while to figure this logic out ngl, had to write it on paper first

// Q9 - check if a number is prime
let checkPrime = 17;
let isPrime = true;
if (checkPrime < 2) isPrime = false;
for (let i = 2; i < checkPrime; i++) {
  if (checkPrime % i === 0) {
    isPrime = false;
    break; // no point checking further once we know it's not prime
  }
}
console.log(checkPrime, "is prime?", isPrime);

// Q10 - use switch to print the name of a month
let month = 6;
switch (month) {
  case 1: console.log("January"); break;
  case 2: console.log("February"); break;
  case 3: console.log("March"); break;
  case 4: console.log("April"); break;
  case 5: console.log("May"); break;
  case 6: console.log("June"); break; // this runs
  default: console.log("invalid month");
}

// Q11 - loop through an array and add up all elements
let nums = [10, 20, 30, 40];
let total = 0;
for (let val of nums) {
  total += val;
}
console.log("array sum:", total);

// Q12 - simple star pattern using nested loops
for (let row = 1; row <= 4; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "*";
  }
  console.log(stars);
}   