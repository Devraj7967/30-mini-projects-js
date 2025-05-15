let time = 10; // countdown from 10 seconds

const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerElement.textContent = `00:${minutes}:${seconds}`;

  time--;

  if (time < 0) {
    clearInterval(countdown);
    timerElement.textContent = "Time's up!";
  }
}, 1000);
