let countdownDate = new Date().setSeconds(new Date().getSeconds() + 60);

let timerInterval;

const secondsElem = document.getElementById("seconds"),
  timer = document.getElementById("timer"),
  content = document.getElementById("content");

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let seconds = Math.floor(difference % 60);

  secondsElem.innerHTML = formatTime(seconds, "second");
};

const endCountdown = () => {
  clearInterval(timerInterval);
  timer.remove();
  content.classList.add("visible");
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});