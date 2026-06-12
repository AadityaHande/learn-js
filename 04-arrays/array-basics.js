// Day 4 - Arrays Basics
// list of values in one variable, been using these already but going deeper today

// creating an array
let fruits = ["apple", "mango", "banana"];
console.log(fruits);

// accessing elements - starts at index 0, always forget this at first
console.log(fruits[0]); // apple
console.log(fruits[2]); // banana
console.log(fruits[5]); // undefined, index doesn't exist

// changing a value
fruits[1] = "orange";
console.log(fruits);

// length property
console.log(fruits.length);

// last element trick, using length - 1
console.log(fruits[fruits.length - 1]);

// arrays can hold mixed types, JS doesn't care
let mixedArr = [1, "two", true, null, { name: "obj" }];
console.log(mixedArr);

// adding elements
fruits.push("grapes");        // adds to the end
console.log(fruits);
fruits.unshift("kiwi");       // adds to the start
console.log(fruits);

// removing elements
fruits.pop();                 // removes last element
console.log(fruits);
fruits.shift();               // removes first element
console.log(fruits);

// checking if something exists in the array
console.log(fruits.includes("mango")); // true
console.log(fruits.indexOf("banana")); // gives the index, -1 if not found

// slice - takes a piece of the array WITHOUT changing the original
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 3); // from index 1 up to (not including) index 3
console.log("sliced:", sliced);
console.log("original still same:", numbers);

// splice - actually CHANGES the original array, this confused me vs slice at first
let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(1, 2); // remove 2 elements starting at index 1
console.log("after splice:", numbers2);

let numbers3 = [1, 2, 3];
numbers3.splice(1, 0, "inserted"); // insert without removing anything
console.log("after insert:", numbers3);

// note to self: slice = copy a part (safe), splice = actually modify (careful with this one)

// joining array into a string
let words = ["I", "love", "JS"];
console.log(words.join(" ")); // "I love JS"

// converting a string back into an array
let sentence = "this is a sentence";
console.log(sentence.split(" "));

// reversing an array
let arr = [1, 2, 3];
console.log(arr.reverse());

// sorting - default sort treats everything like strings, this bit me hard
let nums = [40, 1, 5, 200];
console.log(nums.sort()); // wrong! sorts like text: [1, 200, 40, 5]
console.log(nums.sort((a, b) => a - b)); // correct numeric sort, ascending