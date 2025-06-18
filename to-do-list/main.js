const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");


function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listConatiner.appendChild(li);

    // Add a span for delete (close button)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for ×
    li.appendChild(span);
  }
  inputBox.value = "";
}

// Handle clicking on list items or delete buttons
listConatiner.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
