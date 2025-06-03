const toggleBtn = document.querySelector(".toggle-btn");
const toggleContent = document.querySelector(".toggle-content");

toggleBtn.addEventListener("click", () => {
  toggleContent.style.display = toggleContent.style.display === "none" || toggleContent.style.display === ""
    ? "block"
    : "none";
});
