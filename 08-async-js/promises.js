// Day 8 - Promises
// supposed to fix the callback nesting mess from the last file, let's see

// a promise represents a value that will exist LATER (or fail later)
// it has 3 states: pending -> fulfilled OR rejected

let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("it worked!"); // call this when things go well
    } else {
      reject("it failed!"); // call this when something goes wrong
    }
  }, 1000);
});

// using the promise with .then and .catch
myPromise
  .then((result) => {
    console.log("then:", result);
  })
  .catch((error) => {
    console.log("catch:", error);
  });

// making a reusable fake api call that returns a promise instead of taking a callback
function fakeApiCall(shouldSucceed) {
  return new Promise((resolve, reject) => {
    console.log("calling api...");
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ id: 1, name: "fake user" });
      } else {
        reject("something went wrong with the api");
      }
    }, 1000);
  });
}

fakeApiCall(true)
  .then((data) => console.log("success:", data))
  .catch((err) => console.log("error:", err));

fakeApiCall(false)
  .then((data) => console.log("success:", data))
  .catch((err) => console.log("error:", err)); // this one runs instead

// chaining promises - this is the part that actually fixes the nesting problem
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 1 done");
      resolve();
    }, 500);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 2 done");
      resolve();
    }, 500);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 3 done");
      resolve();
    }, 500);
  });
}

// compare this to the nested version from callbacks.js - so much flatter
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("all steps done, way less nesting now"));

// .finally - runs no matter what, success or failure
fakeApiCall(true)
  .then((data) => console.log("finally test data:", data))
  .catch((err) => console.log("finally test error:", err))
  .finally(() => console.log("this always runs, cleanup type stuff goes here"));

// Promise.all - run multiple promises at the same time, wait for ALL of them
let p1 = fakeApiCall(true);
let p2 = fakeApiCall(true);

Promise.all([p1, p2]).then((results) => {
  console.log("both done together:", results);
});
// if even ONE of them fails, Promise.all rejects immediately, noting that down