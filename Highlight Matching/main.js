const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll("#itemList li");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchText) && searchText !== "") {
      item.classList.add("highlight");
    } else {
      item.classList.remove("highlight");
    }
  });
});
