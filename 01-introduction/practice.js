// Day 1 - Practice
// just doing random small qs to test what i learned today

// Q1 - store my name and print it
let myName = "Aaditya";
console.log(myName);

// Q2 - store age
let myAge = 20;
console.log(myAge);

// Q3 - print both together
console.log(`my name is ${myName} and i'm ${myAge}`);

// Q4 - swap 2 numbers without a 3rd variable
let n1 = 4, n2 = 9;
[n1, n2] = [n2, n1];
console.log(n1, n2);

// Q5 - area of rectangle
let length = 10, breadth = 5;
console.log("area:", length * breadth);

// Q6 - check type of a few things
console.log(typeof "hi", typeof 10, typeof true);

// Q7 - string to number
let strNum = "50";
console.log(Number(strNum) + 10); // 60

// Q8 - increment a var couple ways
let counter = 0;
counter++;
counter += 1;
console.log(counter); // 2

// Q9 - multi line string
console.log(`line one
line two`);

// Q10 - == vs === difference
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// Q11 - check even/odd with ternary
let checkNum = 7;
console.log(checkNum % 2 === 0 ? "even" : "odd");

// Q12 - bigger of 2 numbers
let p = 12, q = 20;
console.log(p > q ? p : q);

// Q13 - const object, change a property (this is allowed apparently)
const student = { name: "Aaditya", grade: "A" };
student.grade = "A+"; // works! only reassigning the whole object is blocked
console.log(student);

// Q14 - console.table with array of objects
console.table([
  { subject: "Math", marks: 90 },
  { subject: "Science", marks: 85 },
]);

// Q15 - var redeclare vs let (commented the let one bcz it throws error)
var v1 = 1;
var v1 = 2;
console.log(v1);
// let l1 = 1;
// let l1 = 2; // uncomment to see the error urself

// Q16 - nullish coalescing with null
let savedTheme = null;
let theme = savedTheme ?? "light";
console.log(theme);

// Q17 - optional chaining on something that might not exist
let profile = { username: "aad_20" };
console.log(profile?.social?.instagram); // undefined, no crash

// Q18 - chain a few operators together
let total = 100;
total += 20;
total -= 5;
total *= 2;
console.log(total);

// Q19 - AND / OR check
let hasTicket = true;
let hasID = false;
console.log("enter?", hasTicket && hasID);
console.log("waitlist?", hasTicket || hasID);

// Q20 - bigint, symbol, and why typeof null is weird
let bigVal = 999999999999999999n;
let sym = Symbol("unique");
console.log(typeof bigVal, typeof sym, typeof null);
// typeof null = "object" bcz of an old bug that never got fixed,
// fixing it now would break too many old websites apparently