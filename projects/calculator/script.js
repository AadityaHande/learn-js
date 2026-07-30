// Project 1 - Calculator
// first "real" project, using pretty much everything from the last 10 days:
// DOM selection, events, event delegation-ish pattern, functions, some string/number juggling

// grabbing the display elements
const previousOperandEl = document.getElementById("previousOperand");
const currentOperandEl = document.getElementById("currentOperand");

// state - keeping track of what's going on with plain variables instead of
// an object at first, might refactor into an object later once i learn classes
let currentOperand = "0";
let previousOperand = "";
let operation = undefined;

// updates whats actually shown on screen, called after every action
function updateDisplay() {
  currentOperandEl.textContent = currentOperand;

  if (operation != null) {
    previousOperandEl.textContent = `${previousOperand} ${operation}`;
  } else {
    previousOperandEl.textContent = "";
  }
}

// typing a number or the decimal point
function appendNumber(number) {
  // don't allow more than one decimal point
  if (number === "." && currentOperand.includes(".")) return;

  // replace the initial "0" instead of showing "05" when you type 5
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number;
  } else {
    currentOperand = currentOperand + number;
  }
}

// picking an operator (+ - x /)
function chooseOperation(selectedOperation) {
  if (currentOperand === "") return; // nothing typed yet, ignore

  // if there's already a previous number waiting, calculate that first
  // (this lets you chain operations like 5 + 3 + 2 without pressing =)
  if (previousOperand !== "") {
    compute();
  }

  operation = selectedOperation;
  previousOperand = currentOperand;
  currentOperand = "";
}

// the actual math, using a switch since i learned that on day 2
function compute() {
  let result;
  let prev = parseFloat(previousOperand); // convert string back to number
  let current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return; // one of the numbers is missing, bail out

  switch (operation) {
    case "add":
      result = prev + current;
      break;
    case "subtract":
      result = prev - current;
      break;
    case "multiply":
      result = prev * current;
      break;
    case "divide":
      if (current === 0) {
        alert("can't divide by zero!"); // simple guard, learned this the hard way testing
        clear();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operation = undefined;
  previousOperand = "";
}

// AC button - reset everything
function clear() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
}

// DEL button - remove the last typed character
function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  if (currentOperand === "") currentOperand = "0";
}

// --- wiring up all the buttons ---
// used event delegation on the whole .buttons container instead of adding a
// listener to every single button, remembering that from day 7

const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (event) => {
  const target = event.target;

  // clicked a number button
  if (target.hasAttribute("data-number")) {
    appendNumber(target.textContent);
    updateDisplay();
    return;
  }

  // clicked an action button (operator, equals, clear, delete)
  if (target.hasAttribute("data-action")) {
    const action = target.getAttribute("data-action");

    if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
      chooseOperation(action);
    } else if (action === "equals") {
      compute();
    } else if (action === "clear") {
      clear();
    } else if (action === "delete") {
      deleteLast();
    }

    updateDisplay();
  }
});

// bonus - let it work with an actual keyboard too, wasn't required but wanted to try
document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    appendNumber(event.key);
  } else if (event.key === ".") {
    appendNumber(".");
  } else if (event.key === "+") {
    chooseOperation("add");
  } else if (event.key === "-") {
    chooseOperation("subtract");
  } else if (event.key === "*") {
    chooseOperation("multiply");
  } else if (event.key === "/") {
    event.preventDefault(); // "/" sometimes triggers browser search shortcut, stopping that
    chooseOperation("divide");
  } else if (event.key === "Enter" || event.key === "=") {
    compute();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clear();
  } else {
    return; // some other key i don't care about, don't bother updating display
  }
  updateDisplay();
});

updateDisplay(); // show "0" on load instead of a blank screen