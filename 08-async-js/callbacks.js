// Day 8 - Callbacks
// before understanding promises, apparently need to understand WHY callbacks exist first

// synchronous code - runs top to bottom, one line waits for the previous one
console.log("first");
console.log("second");
console.log("third");
// straightforward, nothing weird here

// asynchronous code - some things DON'T wait, they run "later"
console.log("A - start");

setTimeout(() => {
  console.log("B - inside setTimeout (runs after 2 seconds)");
}, 2000);

console.log("C - end");
// order printed is A, C, B - NOT A, B, C like i expected the first time
// setTimeout doesn't pause the code, it just schedules something for later
// and JS keeps moving on to the next lines immediately. this broke my brain a bit

// callback - just a function passed into another function, to run LATER
function greetUser(name, callback) {
  console.log(`hi ${name}, fetching your data...`);
  setTimeout(() => {
    callback(); // runs after the fake "fetching" delay
  }, 1000);
}

greetUser("Aaditya", () => {
  console.log("data loaded for Aaditya!");
});

// simulating an api call using setTimeout (no real internet needed to practice this)
function fakeApiCall(callback) {
  console.log("calling api...");
  setTimeout(() => {
    let data = { id: 1, name: "fake user" };
    callback(data);
  }, 1500);
}

fakeApiCall((data) => {
  console.log("got data:", data);
});

// the actual problem - "callback hell" when you need things to happen IN ORDER
function step1(callback) {
  setTimeout(() => {
    console.log("step 1 done");
    callback();
  }, 500);
}
function step2(callback) {
  setTimeout(() => {
    console.log("step 2 done");
    callback();
  }, 500);
}
function step3(callback) {
  setTimeout(() => {
    console.log("step 3 done");
    callback();
  }, 500);
}

// have to nest them like this to run in order, gets messy FAST with more steps
step1(() => {
  step2(() => {
    step3(() => {
      console.log("all steps done, but look how nested this got");
    });
  });
});
// this is apparently exactly why Promises got created, to fix this nesting mess
// excited/nervous to see how promises actually solve it in the next file