// Day 9 - Practice
// fetch + async/await combined, all using jsonplaceholder since its free and needs no api key

// Q1 - fetch all posts and log just the titles
async function getAllTitles() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  let titles = posts.map((post) => post.title); // used .map from day 4 here
  console.log(titles);
}
getAllTitles();

// Q2 - fetch a single user by id
async function getUserById(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await response.json();
  console.log(user);
}
getUserById(3);

// Q3 - fetch comments for a specific post using a query parameter
async function getCommentsForPost(postId) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  let comments = await response.json();
  console.log(`comments for post ${postId}:`, comments.length);
}
getCommentsForPost(1);

// Q4 - fetch 2 different things at once using Promise.all (learned this day 8)
async function getUserAndPosts(userId) {
  let [userRes, postsRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
  ]);
  let user = await userRes.json();
  let posts = await postsRes.json();
  console.log(user.name, "has", posts.length, "posts");
}
getUserAndPosts(1);

// Q5 - error handling: try fetching something that doesn't exist
async function getFakeUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/99999");
    if (!response.ok) {
      throw new Error(`request failed with status ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("handled error:", error.message);
  }
}
getFakeUser();

// Q6 - build a simple search: filter fetched posts by title keyword
async function searchPosts(keyword) {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  let matches = posts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  ); // combined filter (day 4) with fetch, felt like a real feature
  console.log(`found ${matches.length} posts matching "${keyword}"`);
}
searchPosts("qui");

// Q7 - POST a new comment (fake, won't actually save)
async function addComment() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      postId: 1,
      name: "test comment",
      body: "just testing the post method",
    }),
  });
  let data = await response.json();
  console.log("new comment id:", data.id);
}
addComment();

// Q8 - loading state pattern (used a lot in real apps apparently)
async function loadWithState() {
  console.log("isLoading: true");
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums/1");
    let album = await response.json();
    console.log("isLoading: false, data:", album);
  } catch (error) {
    console.log("isLoading: false, error:", error);
  }
}
loadWithState();