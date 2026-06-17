// Day 9 - Sending Data (POST requests)
// so far only GET (just reading data), now trying to SEND data to an api

// GET is the default if you don't specify a method, POST needs to be explicit
async function addPost() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tells the server we're sending json
    },
    body: JSON.stringify({
      title: "my first post",
      body: "testing the fetch post method",
      userId: 1,
    }),
    // body has to be a STRING, JSON.stringify converts my object into one
    // sent an object directly without stringify first and it broke, learned the hard way
  });

  let data = await response.json();
  console.log("created post:", data);
  return data;
}
addPost();

// hooking this up to a button on the page
let addPostBtn = document.getElementById("addPostBtn");
let addPostResult = document.getElementById("addPostResult");

addPostBtn.addEventListener("click", async () => {
  addPostResult.textContent = "sending...";
  try {
    let newPost = await addPost();
    addPostResult.textContent = `created with fake id: ${newPost.id}`;
    // note: jsonplaceholder doesn't ACTUALLY save this anywhere, it just
    // pretends to and sends back a fake id, good enough for practice though
  } catch (error) {
    addPostResult.textContent = "failed to add post";
  }
});

// PUT - update an existing item (replaces the whole thing)
async function updatePost(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: "updated title",
      body: "updated body text",
      userId: 1,
    }),
  });
  let data = await response.json();
  console.log("updated post:", data);
}
updatePost(1);

// DELETE - removes an item
async function deletePost(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  console.log("delete status:", response.status); // usually 200 if it "worked"
}
deletePost(1);

// note to self on the 4 methods i now know:
// GET - read data (default)
// POST - create new data
// PUT - update/replace existing data
// DELETE - remove data
// apparently this is called CRUD (create read update delete), saw that term
// somewhere and now it actually makes sense why