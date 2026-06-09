// Day 1 - Operators
// basic math + comparison + logic stuff

let a = 10;
let b = 5;

// arithmetic - the easy ones
console.log("add:", a + b);
console.log("sub:", a - b);
console.log("mul:", a * b);
console.log("div:", a / b);
console.log("mod (remainder):", a % b);
console.log("power:", a ** b); // learned this instead of Math.pow, easier

let c = 5;
console.log(++c); // increases first then prints, so 6
console.log(c++); // prints first then increases, so 6 (then becomes 7)
console.log("c is now:", c);

// assignment shortcuts, saves typing
let x = 10;
x += 5;  console.log(x); // 15
x -= 3;  console.log(x); // 12
x *= 2;  console.log(x); // 24
x /= 4;  console.log(x); // 6
x %= 4;  console.log(x); // 2

// comparison - this tripped me up a lot ngl
console.log(10 == "10");  // true, only checks value not type
console.log(10 === "10"); // false, checks type too
// gonna try to always use === from now, my teacher said it's safer
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 > 5, 10 < 5, 10 >= 10, 10 <= 9);

// logical operators
let isLoggedIn = true;
let hasPermission = false;

console.log("AND:", isLoggedIn && hasPermission); // both need to be true
console.log("OR:", isLoggedIn || hasPermission);   // just one needs to be true
console.log("NOT:", !isLoggedIn);                   // flips it

// string operators
let first = "Hello";
let second = "World";
console.log(first + " " + second); // + on strings just joins them

// ternary - shortcut for if else, using this a lot now
let age = 20;
let canVote = age >= 18 ? "can vote" : "cannot vote";
console.log(canVote);

// ?? nullish coalescing - only kicks in for null/undefined
let userInput = null;
let defaultVal = userInput ?? "default name";
console.log(defaultVal);

// difference between ?? and || (this took me a while to get)
let zero = 0;
console.log(zero ?? "fallback"); // 0, since 0 isn't null/undefined
console.log(zero || "fallback"); // "fallback", since 0 is falsy for ||

// optional chaining ?. - so it doesn't crash on missing stuff
let user = { name: "Aaditya", address: { city: "Pune" } };
console.log(user?.address?.city);   // Pune
console.log(user?.contact?.phone);  // undefined, no crash, nice

// comma operator, probably won't use this much but was in the notes
let result = (1 + 2, 3 + 4);
console.log("comma result:", result); // just returns the last one, 7