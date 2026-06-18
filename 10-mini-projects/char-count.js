// char-count.js
const MAX_CHARS = 200;

let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");
let statsBox = document.getElementById("stats");

textInput.addEventListener("input", () => {
    let text = textInput.value;
    let chars = text.length;
    charCount.textContent = chars;

    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    if (chars > MAX_CHARS) {
        textInput.value = text.substring(0, MAX_CHARS);
        charCount.textContent = MAX_CHARS;
        // statsBox.style.color = "red";
    } else {
        statsBox.style.color = "black";
    }

    if(chars > MAX_CHARS * 0.9) {
        statsBox.style.color = "orange";
        statsBox.classList.add("warning");
    } else {
        statsBox.classList.remove("warning");
    }
});

