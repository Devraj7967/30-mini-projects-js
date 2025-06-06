// Get both checkboxes and the container box
const fullDarkModeToggle = document.getElementById('full-dark-mode');
const containedDarkModeToggle = document.getElementById('contained-dark-mode');
const container = document.querySelector('.container');

// When full page checkbox is toggled
fullDarkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', fullDarkModeToggle.checked);
});

// When container-only checkbox is toggled
containedDarkModeToggle.addEventListener('change', () => {
  container.classList.toggle('dark-mode', containedDarkModeToggle.checked);
});
