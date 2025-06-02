document.addEventListener("DOMContentLoaded", function () {
  const stickyHeader = document.getElementById("sticky-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      stickyHeader.classList.add("visible");
    } else {
      stickyHeader.classList.remove("visible");
    }
  });
});
