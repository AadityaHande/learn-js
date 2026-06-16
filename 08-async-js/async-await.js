// Day 8 - async/await
// apparently just a nicer way to WRITE promises, not a totally different thing
// this genuinely made promises click way more for me, reads like normal code

// reusing the same fake api function idea from promises.js
function fakeApiCall(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ id: 1, name: "fake user" });
      } else {
        reject("api call failed");
      }
    }, 1000);
  });
}

// async function - just add "async" before function, lets you use "await" inside
async function getData() {
  console.log("fetching...");
  let result = await fakeApiCall(true); // "pauses" here until the promise settles
  console.log("got:", result);
}
getData();
// this reads top to bottom like normal sync code, no .then() chains needed
// honestly prefer this way more than the .then() version already

// handling errors with async/await - uses regular try/catch instead of .catch()
async function getDataSafely() {
  try {
    let result = await fakeApiCall(false); // this one is set to fail
    console.log("got:", result);
  } catch (error) {
    console.log("caught an error:", error);
  }
}
getDataSafely();

// doing multiple awaits in order (equivalent to the chained .then() steps before)
function step1() {
  return new Promise((resolve) => setTimeout(() => { console.log("step 1"); resolve(); }, 500));
}
function step2() {
  return new Promise((resolve) => setTimeout(() => { console.log("step 2"); resolve(); }, 500));
}
function step3() {
  return new Promise((resolve) => setTimeout(() => { console.log("step 3"); resolve(); }, 500));
}

async function runSteps() {
  await step1();
  await step2();
  await step3();
  console.log("all steps done, and this code barely looks async at all");
}
runSteps();

// running things in PARALLEL with await + Promise.all (awaiting one by one is slower)
async function getBothSlow() {
  console.time("slow");
  let a = await fakeApiCall(true); // waits fully before starting the next one
  let b = await fakeApiCall(true);
  console.timeEnd("slow"); // takes around 2 seconds total
}

async function getBothFast() {
  console.time("fast");
  let [a, b] = await Promise.all([fakeApiCall(true), fakeApiCall(true)]); // both start together
  console.timeEnd("fast"); // takes around 1 second total
}
// getBothSlow();
// getBothFast();
// commented these out so the console doesn't get too messy, but tested both
// and yeah, Promise.all is noticeably faster when things don't depend on each other

// note to self: await only works INSIDE an async function, tried using it
// outside one and got an error, thats a common mistake apparently