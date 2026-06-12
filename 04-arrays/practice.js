// Day 4 - Practice
// arrays + array methods together

// Q1 - find the sum of an array using reduce
let nums = [5, 10, 15, 20];
let sum = nums.reduce((total, n) => total + n, 0);
console.log("sum:", sum);

// Q2 - double every number using map
let doubled = nums.map((n) => n * 2);
console.log(doubled);

// Q3 - filter out numbers greater than 10
let filtered = nums.filter((n) => n > 10);
console.log(filtered);

// Q4 - find the largest number in an array
let arr = [4, 88, 15, 33, 100, 2];
let max = arr.reduce((biggest, n) => (n > biggest ? n : biggest));
console.log("max:", max);

// Q5 - check if an array contains a specific value
let fruits = ["apple", "mango", "banana"];
console.log(fruits.includes("mango"));

// Q6 - remove duplicates from an array (used a Set, saw this trick online)
let withDupes = [1, 2, 2, 3, 4, 4, 5];
let noDupes = [...new Set(withDupes)];
console.log(noDupes);
// still don't fully get Sets but this one-liner is really useful

// Q7 - reverse an array without using .reverse() (doing it manually to understand it better)
let toReverse = [1, 2, 3, 4, 5];
let manualReverse = [];
for (let i = toReverse.length - 1; i >= 0; i--) {
  manualReverse.push(toReverse[i]);
}
console.log(manualReverse);

// Q8 - find the average of numbers in an array
let scores = [80, 90, 70, 60, 100];
let avg = scores.reduce((sum, n) => sum + n, 0) / scores.length;
console.log("average:", avg);

// Q9 - convert array of names to uppercase using map
let names = ["aaditya", "riya", "sam"];
console.log(names.map((n) => n.toUpperCase()));

// Q10 - count how many numbers in an array are even
let mixedNums = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = mixedNums.filter((n) => n % 2 === 0).length;
console.log("even count:", evenCount);

// Q11 - check if every student passed (score >= 40)
let studentScores = [45, 60, 38, 70];
console.log("all passed?", studentScores.every((s) => s >= 40)); // false bcz of 38

// Q12 - sort an array of objects by a property (this one was tricky)
let people = [
  { name: "Riya", age: 22 },
  { name: "Aaditya", age: 20 },
  { name: "Sam", age: 25 },
];
let sortedByAge = people.sort((a, b) => a.age - b.age);
console.log(sortedByAge);
// had to remember arrays of objects still sort using a - b, same idea as numbers