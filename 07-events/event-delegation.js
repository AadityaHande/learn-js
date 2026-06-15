// Day 7 - Event Delegation
// this one took a while to actually understand WHY it's needed, not just how

// the problem: adding a click listener to every single delete button one by one
let deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove(); // removes the whole <li>
  });
});
// this WORKS but breaks if i add a NEW button later with JS, since the loop
// already ran and finished before that new button even existed

// the fix: event delegation - listen on the PARENT instead, let clicks "bubble up"
let itemList = document.getElementById("itemList");

itemList.addEventListener("click", (event) => {
  // check if what was actually clicked is a delete button
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
// now this works even for buttons added AFTER this code runs, since we're
// listening on the parent the whole time, not the individual buttons

// testing that new items also work with the delegated listener
function addNewItem(text) {
  let li = document.createElement("li");
  li.textContent = text + " ";
  let delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "x";
  li.appendChild(delBtn);
  itemList.appendChild(li);
}
addNewItem("item 4 (added after page load)");
// clicking the x on THIS item still works because of delegation, the
// old "loop through every button" method would've missed this one completely

// event bubbling - the reason delegation even works
// when you click something, the event doesn't just fire on that element,
// it "bubbles up" through all its parents too (li -> ul -> body -> html)
document.body.addEventListener("click", () => {
  console.log("body noticed a click happened somewhere inside it");
});
// clicking literally anything inside body triggers this too, thats bubbling

// stopping the bubble if i ever need to (not using it here, just noting the syntax)
// event.stopPropagation();

// event.target vs event.currentTarget - this confused me for a bit
itemList.addEventListener("click", (event) => {
  console.log("target (actual clicked element):", event.target);
  console.log("currentTarget (element the listener is attached to):", event.currentTarget);
});
// target = whatever was actually clicked (could be the button)
// currentTarget = always the element the listener is ON (always itemList here)