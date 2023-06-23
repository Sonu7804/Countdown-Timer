var countdownInterval;
var countdownTime;
var countdownElement = document.getElementById("countdown");

function startTimer() {
  var timeInput = prompt("Enter the countdown time in seconds:");

  if (timeInput) {
    clearInterval(countdownInterval);

    countdownTime = parseInt(timeInput);
    countdownElement.textContent = countdownTime;

    countdownInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(countdownInterval);
}

function resetTimer() {
  clearInterval(countdownInterval);
  countdownTime = 0;
  countdownElement.textContent = countdownTime;
}

function restartTimer() {
  clearInterval(countdownInterval);
  countdownElement.textContent = countdownTime;
  countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  countdownTime--;

  if (countdownTime >= 0) {
    countdownElement.textContent = countdownTime;
  } else {
    clearInterval(countdownInterval);
    alert("Countdown timer has reached zero!");
  }
}
