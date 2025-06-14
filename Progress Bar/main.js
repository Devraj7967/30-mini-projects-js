const progressBar = document.getElementById("progressBar");
const updateBtn = document.getElementById("updateBtn");

let progress = 0;

updateBtn.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";
  }
});
