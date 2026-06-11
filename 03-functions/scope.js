// Day 3 - Scope
// where a variable is accessible from, this explains a lot of errors i've been getting

// global scope - accessible anywhere in the file
let globalVar = "i'm global";

function showGlobal() {
  console.log(globalVar); // works fine, can access global stuff from inside
}
showGlobal();

// function/local scope - only exists inside that function
function myFunction() {
  let localVar = "i'm local";
  console.log(localVar);
}
myFunction();
// console.log(localVar); // this would error, localVar doesn't exist out here

// block scope - let/const are scoped to { } blocks, var is NOT
if (true) {
  let blockLet = "only exists in this block";
  var blockVar = "exists outside too, kinda dangerous";
  console.log(blockLet);
}
// console.log(blockLet); // error, blockLet doesn't exist here
console.log(blockVar); // works?? var leaks out of the block, this is why people avoid var

// same thing with a for loop
for (let i = 0; i < 3; i++) {
  // i only exists inside this loop
}
// console.log(i); // error if using let

for (var j = 0; j < 3; j++) {}
console.log(j); // works, var leaked out again, prints 3

// nested scope / scope chain - inner functions can see outer variables
function outer() {
  let outerVar = "from outer";

  function inner() {
    console.log(outerVar); // inner can see outer's variables
  }
  inner();
}
outer();

// but outer CANNOT see inner's variables, only works one way
function outer2() {
  function inner2() {
    let innerVar = "only inner knows this";
  }
  inner2();
  // console.log(innerVar); // error, outer2 has no idea this exists
}
outer2();

// shadowing - a local variable with the same name "hides" the outer one
let name = "global name";

function showName() {
  let name = "local name"; // this shadows the outer one, just inside this function
  console.log(name); // prints "local name"
}
showName();
console.log(name); // prints "global name", outer one is untouched

// hoisting - var gets "moved to the top" kind of, this is confusing but noting it down
console.log(hoistedVar); // prints undefined, doesn't error even though declared after
var hoistedVar = "hello";

// console.log(hoistedLet); // this WOULD error - "cannot access before initialization"
let hoistedLet = "hi";
// let/const are hoisted too technically but they're stuck in a "temporal dead zone"
// until the line where they're declared. don't fully get this yet, need to reread it