// Day 5 - Destructuring & Spread
// pulling values out of objects/arrays easily, saw this used everywhere in tutorials

// object destructuring - basic
let person = { name: "Aaditya", age: 20, city: "Pune" };
let { name, age } = person; // pulls out name and age into their own variables
console.log(name, age);

// renaming while destructuring
let { name: fullName } = person;
console.log(fullName); // "name" variable doesn't exist, its "fullName" now

// default value if the property doesn't exist
let { country = "India" } = person;
console.log(country); // person has no "country" key, so uses the default

// destructuring nested objects
let student = {
  name: "Riya",
  address: {
    city: "Mumbai",
    pincode: 400001,
  },
};
let {
  address: { city },
} = student;
console.log(city);
// this syntax looked really weird to me at first ngl, took a couple tries

// destructuring function parameters directly - saw this in someone's code
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
displayUser(person); // pass the whole object, function pulls out what it needs

// array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first, second);

// skipping elements with commas
let [, , third] = colors;
console.log(third); // blue, skipped red and green

// swapping variables using destructuring (did this on day 1 too actually)
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b);

// rest pattern in destructuring - grabs "everything else"
let [firstColor, ...restColors] = colors;
console.log(firstColor, restColors);

let { name: personName, ...restOfPerson } = person;
console.log(personName, restOfPerson);

// spread operator - kind of the opposite of destructuring, spreads things OUT
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

// spread to copy an array (so it doesn't reference the original, like day 5 objects issue)
let copyArr = [...arr1];
copyArr.push(100);
console.log(arr1, copyArr); // arr1 unaffected

// spread with objects - merging two objects together
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 99, c: 3 };
let merged = { ...obj1, ...obj2 };
console.log(merged);
// note: if both objects have the same key, the LAST one spread wins - b became 99 here