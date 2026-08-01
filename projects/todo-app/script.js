// Project 3 - To-Do App
// first project where the "data" is a whole LIST of objects that can be
// added, checked off, and deleted. also first time using localStorage so
// the list actually survives a page refresh instead of resetting every time

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const itemsLeftEl = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = [];            // array of { id, text, completed }
let currentFilter = "all"; // all / active / completed

// -- localStorage helpers 
// localStorage only stores STRINGS, so objects/arrays need JSON.stringify to
// save and JSON.parse to load back. forgot to parse it back once and just
// got the raw string "[object Object]" showing up, took a sec to realize why

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  let saved = localStorage.getItem("todos");
  // getItem returns null if nothing's been saved yet (first visit ever)
  todos = saved ? JSON.parse(saved) : [];
}

// -- rendering 
// clearing the whole list and rebuilding it from the todos array every time,
// instead of trying to update individual elements. easier to reason about,
// and the list is never going to be big enough for it to actually matter

function render() {
  todoList.innerHTML = "";

  let visibleTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true; // "all"
  });

  if (visibleTodos.length === 0) {
    let li = document.createElement("li");
    li.className = "list-group-item text-center text-muted";
    li.textContent = todos.length === 0 ? "no tasks yet, add one above" : "nothing here for this filter";
    todoList.appendChild(li);
  }

  visibleTodos.forEach((todo) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center todo-item";
    li.dataset.id = todo.id; // storing the id on the element so i can find it again on click

    li.innerHTML = `
      <input class="form-check-input me-2" type="checkbox" ${todo.completed ? "checked" : ""} />
      <span class="flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}">${todo.text}</span>
      <button type="button" class="btn btn-sm btn-outline-danger delete-btn">✕</button>
    `;

    todoList.appendChild(li);
  });

  updateItemsLeft();
  saveTodos(); // save on every render so nothing gets lost, even after refresh
}

function updateItemsLeft() {
  let activeCount = todos.filter((todo) => !todo.completed).length;
  itemsLeftEl.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

// -- actions 

function addTodo(text) {
  let newTodo = {
    id: Date.now(), // using the current timestamp as a quick unique id, simple but works
    text: text.trim(),
    completed: false,
  };
  todos.push(newTodo);
  render();
}

function toggleTodo(id) {
  // find the matching todo and flip its completed value, using spread
  // instead of mutating the object directly, seen this pattern recommended a lot
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  render();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  render();
}

// -- event listeners 

todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // forms refresh the page by default, stopping that
  let text = todoInput.value;

  if (text.trim() === "") return; // ignore empty/whitespace-only input

  addTodo(text);
  todoInput.value = "";
  todoInput.focus(); // keeps the cursor in the input so i can add multiple todos fast
});

// event delegation on the whole list instead of adding a listener per todo -
// todos get added/removed constantly so individual listeners would need
// constant rewiring, one listener on the parent handles all of it
todoList.addEventListener("click", (event) => {
  let li = event.target.closest(".todo-item"); // finds the parent li no matter what was clicked inside it
  if (!li) return;

  let id = Number(li.dataset.id); // dataset values are always strings, convert back to number

  if (event.target.matches("input[type='checkbox']")) {
    toggleTodo(id);
  } else if (event.target.matches(".delete-btn")) {
    deleteTodo(id);
  }
});

clearCompletedBtn.addEventListener("click", clearCompleted);

// filter buttons - swapping bootstrap's btn-primary / btn-outline-primary
// classes so the selected filter actually looks different, not just tracked
// internally with a class that has no visible style attached to it
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    filterButtons.forEach((b) => {
      b.classList.remove("active", "btn-primary");
      b.classList.add("btn-outline-primary");
    });
    btn.classList.remove("btn-outline-primary");
    btn.classList.add("active", "btn-primary");

    render();
  });
});

// -- init 
loadTodos();
render();