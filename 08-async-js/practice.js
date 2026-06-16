// Day 8 - Practice
// callbacks + promises + async/await

// Q1 - basic callback: run a function after a delay
function delayedGreeting(callback) {
  setTimeout(() => {
    callback("hello after 1 second");
  }, 1000);
}
delayedGreeting((msg) => console.log(msg));

// Q2 - create a promise that resolves with a random number
function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 500);
  });
}
getRandomNumber().then((num) => console.log("random number:", num));

// Q3 - promise that can reject too, based on a condition
function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("allowed");
      } else {
        reject("too young");
      }
    }, 500);
  });
}
checkAge(20).then((r) => console.log(r)).catch((e) => console.log(e));
checkAge(15).then((r) => console.log(r)).catch((e) => console.log(e));

// Q4 - same thing but written using async/await + try/catch instead
async function checkAgeAsync(age) {
  try {
    let result = await checkAge(age);
    console.log("async result:", result);
  } catch (error) {
    console.log("async error:", error);
  }
}
checkAgeAsync(20);
checkAgeAsync(15);

// Q5 - chain 2 promises where the second depends on the first's result
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Aaditya" }), 500);
  });
}
function getPostsByUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([`post 1 by user ${userId}`, `post 2 by user ${userId}`]), 500);
  });
}

getUser()
  .then((user) => getPostsByUser(user.id))
  .then((posts) => console.log("posts:", posts));

// Q6 - same chain but with async/await, feels cleaner to me already
async function getUserAndPosts() {
  let user = await getUser();
  let posts = await getPostsByUser(user.id);
  console.log("async version posts:", posts);
}
getUserAndPosts();

// Q7 - run 3 fake api calls together using Promise.all
function fakeCall(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} loaded`), delay);
  });
}

async function loadAllData() {
  console.log("loading everything at once...");
  let results = await Promise.all([
    fakeCall("users", 1000),
    fakeCall("posts", 1500),
    fakeCall("comments", 800),
  ]);
  console.log(results);
}
loadAllData();

// Q8 - simulate a loading state using async/await
async function withLoadingState() {
  console.log("loading = true");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // just a fake delay, no real data
  console.log("loading = false, data is ready now");
}
withLoadingState();