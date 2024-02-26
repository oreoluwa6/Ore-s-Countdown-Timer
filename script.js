

function updateCountdown() {
  const targetDate = new Date("2024-03-07T00:00:00Z").getTime(); // Change the target date accordingly
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days + "d";
  document.getElementById("hours").innerText = hours + "h";
  document.getElementById("minutes").innerText = minutes + "m";
  document.getElementById("seconds").innerText = seconds + "s";
}

updateCountdown();
setInterval(updateCountdown, 1000);