// Day 1 - Data Types
// JS has 7 primitive types + object. writing all of them down so i remember

// 1. String
let str1 = "Hello";
let str2 = 'World';        // single or double quotes, doesn't matter
let str3 = `Hello ${str2}`; // backticks = template literal, my favorite
console.log(str1, str2, str3, typeof str1);

// 2. Number
let intNum = 25;
let floatNum = 25.5;
let neg = -10;
console.log(intNum, floatNum, neg, typeof intNum);
// note: JS doesn't have separate int/float, everything is just "number"

// 3. Boolean
let isStudent = true;
let isWorking = false;
console.log(isStudent, isWorking, typeof isStudent);

// 4. Undefined - declared but nothing given
let notDefined;
console.log(notDefined, typeof notDefined);

// 5. Null - empty on purpose
let emptyValue = null;
console.log(emptyValue, typeof emptyValue);
// weird part: typeof null gives "object" not "null" ??
// apparently it's an old bug in JS from like 1995 that never got fixed lol

// 6. BigInt - for huge numbers, add n at the end
let bigNumber = 1234567890123456789012345n;
console.log(bigNumber, typeof bigNumber);

// 7. Symbol - always unique, probably won't use this for a while
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false even though same description, kinda cool

// 8. Object
let person = {
  name: "Aaditya",
  age: 20,
  isStudent: true,
};
console.log(person, typeof person);

// arrays are technically objects too apparently
let numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers); // says "object"
console.log(Array.isArray(numbers));   // this is how you actually check for array

// checking typeof everything in one go
console.log(typeof "text");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);        // object, the weird one
console.log(typeof 10n);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

// converting types on purpose
let numStr = "100";
console.log(Number(numStr), typeof Number(numStr));

let num = 100;
console.log(String(num), typeof String(num));

console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean(""));   // false, empty string is falsy
console.log(Boolean("hi")); // true

// JS auto-converting types on its own (coercion), this confused me at first
console.log("5" + 5);   // "55" - becomes a string
console.log("5" - 2);   // 3    - becomes a number here??
console.log("5" * "2"); // 10
console.log(1 + true);  // 2, true acts like 1
console.log(1 + false); // 1, false acts like 0