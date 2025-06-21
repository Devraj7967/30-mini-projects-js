// Get the paragraph and buttons from the page
let text = document.getElementById("text");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");

// Start with font size 16
let fontSize = 16;

// When the Increase button is clicked
increaseBtn.addEventListener("click", function () {
  fontSize = fontSize + 2;          // Add 2 to font size
  text.style.fontSize = fontSize + "px";  // Apply new size
});

// When the Decrease button is clicked
decreaseBtn.addEventListener("click", function () {
  fontSize = fontSize - 2;          // Subtract 2 from font size
  if (fontSize < 4) {
    fontSize = 4;                   // Set minimum font size
  }
  text.style.fontSize = fontSize + "px";  // Apply new size
});
