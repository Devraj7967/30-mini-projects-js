const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
