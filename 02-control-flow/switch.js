// Day 2 - switch statement
// separate file just to practice switch properly since i mixed it up earlier

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("apples are red or green");
    break;
  case "mango":
    console.log("king of fruits!!");
    break;
  case "banana":
    console.log("good source of potassium apparently");
    break;
  default:
    console.log("dunno this fruit");
}

// what happens if you forget break (doing it on purpose this time to see it)
let num = 2;
switch (num) {
  case 1:
    console.log("one");
  case 2:
    console.log("two"); // starts here
  case 3:
    console.log("three"); // falls through, prints this too
    break;
  case 4:
    console.log("four"); // stops before this bcz of the break above
}
// yep confirmed, without break it just keeps going down through every case
// this is called "fall-through", apparently sometimes people use it on purpose

// grouping multiple cases together using fall-through on purpose
let grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("good job"); // runs for both A and B
    break;
  case "C":
    console.log("could be better");
    break;
  default:
    console.log("check your grade again");
}

// switch with true - kind of a trick to use it like if-else, saw this online
let score = 85;
switch (true) {
  case score >= 90:
    console.log("A grade");
    break;
  case score >= 75:
    console.log("B grade"); // this runs
    break;
  case score >= 60:
    console.log("C grade");
    break;
  default:
    console.log("fail");
}

// switch uses === internally so type matters
let val = "2";
switch (val) {
  case 2:
    console.log("won't match, this is a number");
    break;
  case "2":
    console.log("matches, this is a string"); // this one runs
    break;
}