var secondHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setDate() {
  let now = new Date();
  let secondDegrees = (now.getSeconds() / 60) * 360;
  let minDegrees = (now.getMinutes() / 60) * 360 + secondDegrees / 60;
  let hourDegrees = (now.getHours() / 12) * 360 + minDegrees / 12;

  if (secondHand.style.getPropertyValue("transform") === "rotate(354deg)") {
    secondHand.classList.add("notransition");
    secondHand.style.transform = `rotate(-6deg)`;
    secondHand.offsetHeight;
    secondHand.classList.remove("notransition");
  }

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
