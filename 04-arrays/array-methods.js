// Day 4 - Array Methods (map, filter, reduce, forEach)
// used these a little on day 3 without fully understanding, actually focusing on them now

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach - just loops through, doesn't return anything new
numbers.forEach((num) => {
  console.log("forEach:", num);
});
// basically a fancier for loop, use this when i just want to DO something per item

// map - creates a NEW array by transforming each element
let doubled = numbers.map((num) => num * 2);
console.log("doubled:", doubled);
console.log("original untouched:", numbers); // map doesn't change the original, good

// filter - creates a NEW array with only elements that pass a condition
let evens = numbers.filter((num) => num % 2 === 0);
console.log("evens:", evens);

// reduce - combines everything into ONE value, this one took the longest to get
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("sum using reduce:", total);
// the 0 at the end is the starting value for "sum", forgot it once and got weird results

// reduce to find the max value (didn't know you could do this until today)
let max = numbers.reduce((biggest, num) => (num > biggest ? num : biggest));
console.log("max using reduce:", max);

// chaining methods together - this feels powerful once it clicks
let result = numbers
  .filter((n) => n % 2 === 0)  // keep evens
  .map((n) => n * 10)           // multiply each by 10
  .reduce((sum, n) => sum + n, 0); // add them all up
console.log("chained result:", result);

// find - returns the FIRST element that matches, not an array like filter
let firstBig = numbers.find((n) => n > 5);
console.log("first over 5:", firstBig);

// findIndex - same as find but gives the index instead of the value
let firstBigIndex = numbers.findIndex((n) => n > 5);
console.log("index of first over 5:", firstBigIndex);

// some - checks if AT LEAST ONE element passes the condition, returns true/false
console.log("has a number over 8?", numbers.some((n) => n > 8));

// every - checks if ALL elements pass the condition
console.log("are all numbers positive?", numbers.every((n) => n > 0));

// difference between map and forEach (kept mixing these up)
// forEach -> just loops, returns undefined, use when you don't need a new array
// map -> loops AND builds a new array, use when you need the transformed data

let namesArr = ["aaditya", "riya", "sam"];
let upperNames = namesArr.map((name) => name.toUpperCase());
console.log(upperNames);

// flat - flattens nested arrays (didn't know this existed till i saw it in a tutorial)
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());       // only flattens 1 level deep
console.log(nested.flat(2));      // flattens 2 levels deep