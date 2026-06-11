// Day 3 - Arrow Functions
// shorter way to write functions, apparently used everywhere in modern JS

// normal function vs arrow function
function addNormal(x, y) {
  return x + y;
}

const addArrow = (x, y) => {
  return x + y;
};
console.log(addNormal(3, 4), addArrow(3, 4)); // same result

// if the function body is just one line/return, can remove the curly braces + return keyword
const addShort = (x, y) => x + y;
console.log(addShort(3, 4)); // "implicit return", saves typing

// single parameter - parentheses become optional (but i'll keep them, less confusing)
const square = (num) => num * num;
console.log(square(5));

// no parameters at all - still need the empty parentheses
const sayHi = () => console.log("hi!");
sayHi();

// returning an object directly - had to wrap it in () or it breaks!
const makeUser = (name, age) => ({ name: name, age: age });
console.log(makeUser("Aaditya", 20));
// apparently JS thinks { } means a function body unless you wrap it in parens
// spent like 15 min confused why my object wasn't working before finding this out

// arrow functions inside array methods, this is where i see them used the most
let nums = [1, 2, 3, 4, 5];

let doubled = nums.map((n) => n * 2);
console.log(doubled);

let evens = nums.filter((n) => n % 2 === 0);
console.log(evens);

let total = nums.reduce((sum, n) => sum + n, 0);
console.log(total);
// map/filter/reduce properly probably need their own day tbh, just testing basics here

// the "this" difference (still wrapping my head around this one)
// regular functions get their own "this", arrow functions borrow it from
// wherever they were written. saw this cause bugs in a tutorial i was following
const person = {
  name: "Aaditya",
  regularFunc: function () {
    console.log("regular this.name:", this.name); // works, prints Aaditya
  },
  arrowFunc: () => {
    console.log("arrow this.name:", this.name); // undefined, doesn't work here
  },
};
person.regularFunc();
person.arrowFunc();
// noted this down bcz it's apparently a common interview question