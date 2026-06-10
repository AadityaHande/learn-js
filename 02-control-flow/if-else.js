// Day 2 - if/else
// basically how JS makes decisions

let age = 18;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("not old enough yet");
}

// else if for multiple conditions
let marks = 72;

if (marks >= 90) {
  console.log("grade A");
} else if (marks >= 75) {
  console.log("grade B");
} else if (marks >= 60) {
  console.log("grade C"); // this one runs for 72
} else {
  console.log("grade D");
}

// nested if - if inside another if
let hasLicense = true;
let hasHelmet = true;

if (hasLicense) {
  if (hasHelmet) {
    console.log("good to ride");
  } else {
    console.log("wear a helmet first");
  }
} else {
  console.log("get a license first");
}

// could've just used && instead of nesting, cleaner honestly
if (hasLicense && hasHelmet) {
  console.log("good to ride (shorter way)");
}

// what counts as true/false without even comparing anything (truthy/falsy)
// falsy values: 0, "", null, undefined, NaN, false
// everything else is truthy, even "0" (string) and empty arrays/objects!

if (0) {
  console.log("won't print, 0 is falsy");
}
if ("") {
  console.log("won't print either, empty string is falsy");
}
if ("hello") {
  console.log("prints, non-empty string is truthy");
}
if ([]) {
  console.log("prints! empty array is actually truthy, this surprised me");
}

// one-line if without curly braces (works but my teacher said avoid this, gets confusing)
let x = 10;
if (x > 5) console.log("x is more than 5");

// ternary as a shortcut for simple if-else
let canDrive = age >= 18 ? "yes" : "no";
console.log(canDrive);

// switch case - better than a huge if-else chain when checking one variable
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "unknown day";
}
console.log(dayName);
// forgot the break statement once while practicing and it just kept running
// into the next cases, learned that the hard way lol