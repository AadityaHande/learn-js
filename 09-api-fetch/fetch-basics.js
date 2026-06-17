// Day 9 - Fetch Basics
// finally hitting a REAL api instead of fake setTimeout stuff from day 8
// using jsonplaceholder.typicode.com - free fake REST api made for practice, no key needed

// basic fetch using .then() chains
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("raw response:", response); // not the data yet! just response info
    return response.json(); // this converts it to actual usable data, also returns a promise
  })
  .then((data) => {
    console.log("actual data:", data);
  })
  .catch((error) => {
    console.log("something went wrong:", error);
  });
// took me a sec to get why there's TWO .then()s - first one just unwraps the
// response object, second one gets the real json data. easy to forget response.json()

// fetch with async/await - matches what i learned yesterday, prefer this way already
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("users (async version):", data);
    return data;
  } catch (error) {
    console.log("fetch failed:", error);
  }
}
getUsers();

// button that loads users and displays them on the actual page
let loadUsersBtn = document.getElementById("loadUsersBtn");
let userList = document.getElementById("userList");

loadUsersBtn.addEventListener("click", async () => {
  userList.innerHTML = "loading...";
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    userList.innerHTML = ""; // clear the "loading..." text
    users.forEach((user) => {
      let li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } catch (error) {
    userList.innerHTML = "failed to load users :(";
    console.log(error);
  }
});
// combined DOM (day 6) + events (day 7) + async (day 8) + fetch all in one, feels good

// loading a single item using the id in the url
let loadPostBtn = document.getElementById("loadPostBtn");
let postBox = document.getElementById("postBox");

loadPostBtn.addEventListener("click", async () => {
  postBox.textContent = "loading...";
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let post = await response.json();
  postBox.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
});

// checking response.ok / status - handling a "not found" type situation
async function getPostSafely(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    console.log("status code:", response.status);
    throw new Error("post not found");
  }
  return response.json();
}
getPostSafely(99999) // this id probably doesn't exist
  .then((post) => console.log(post))
  .catch((err) => console.log("caught:", err.message));
// note: jsonplaceholder is weird, it might still return 200 for fake ids
// since its not a real database, but the .ok / .status check is the RIGHT
// pattern to use for real apis that actually 404 properly