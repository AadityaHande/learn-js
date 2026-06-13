// Day 5 - Objects Basics
// key-value pairs, been using these a bit already but going deeper today

// creating an object
let person = {
  name: "Aaditya",
  age: 20,
  isStudent: true,
};
console.log(person);

// accessing values - two ways
console.log(person.name);       // dot notation, use this most of the time
console.log(person["age"]);     // bracket notation

// when bracket notation is actually needed - dynamic keys
let key = "isStudent";
console.log(person[key]); // person.key would NOT work, this only works with brackets

// adding a new property
person.city = "Pune";
console.log(person);

// updating a property
person.age = 21;
console.log(person);

// deleting a property
delete person.isStudent;
console.log(person);

// checking if a property exists
console.log("name" in person);        // true
console.log(person.hasOwnProperty("city")); // true, more reliable apparently
console.log(person.email === undefined); // another way to check, if it's undefined it doesn't exist

// nested objects - objects inside objects
let student = {
  name: "Riya",
  address: {
    city: "Mumbai",
    pincode: 400001,
  },
  subjects: ["Math", "Science"], // arrays inside objects too
};
console.log(student.address.city);
console.log(student.subjects[0]);

// object with a method (function inside an object)
let calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2; // "this" refers to the calculator object itself
  },
  // shorthand method syntax, apparently newer and shorter
  subtract() {
    return this.num1 - this.num2;
  },
};
console.log(calculator.add());
console.log(calculator.subtract());
// still need to be careful with "this" inside objects, remembered the arrow function
// issue from day 3 - arrow functions would NOT work right as object methods here

// looping through an object using for-in (used this on day 2 too)
for (let k in person) {
  console.log(k, "->", person[k]);
}

// getting keys, values, entries as actual arrays - useful for looping differently
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); // gives [key, value] pairs

// object shorthand - when variable name matches the key name
let name = "Aaditya";
let age = 20;
let shorthandObj = { name, age }; // same as { name: name, age: age }
console.log(shorthandObj);

// copying an object - direct = doesn't work how you'd expect
let original = { x: 1 };
let notACopy = original; // this just points to the SAME object
notACopy.x = 99;
console.log(original.x); // 99! changed the original too, this confused me at first

// actual shallow copy using spread
let realCopy = { ...original };
realCopy.x = 5;
console.log(original.x, realCopy.x); // now they're separate