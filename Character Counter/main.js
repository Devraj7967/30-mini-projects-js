const input = document.getElementById("textInput");
const counter = document.getElementById("charCount");

input.addEventListener("input", () => {
  const maxLength = input.maxLength;
  const currentLength = input.value.length;
  counter.textContent = maxLength - currentLength;
});
