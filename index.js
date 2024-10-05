const switchOf = document.querySelector(".vol-swith-of");
const volUp = document.querySelector(".vol-up");
const volDown = document.querySelector(".vol-down");
const mainScreen = document.querySelector(".innerMoblie");
const dateElement = document.querySelector(".date");
const indicator = document.querySelector(".indicator");
const innerIndicator = document.querySelector(".innerIndicator");
const notification = document.querySelector(".notification");
const monthElement = document.querySelector(".month");
const notification1 = document.querySelector(".notification-1");
const lock = document.querySelector(".lock");
const network = document.querySelector("#network");
const wifi = document.querySelector("#wifi");
const battery = document.querySelector("#battery");
let volume = 50;
const maxVolume = 100;
const minVolume = 0;
const volumeStep = 10;

function showIndicator() {
  indicator.style.display = "block";
  setTimeout(() => {
    indicator.style.display = "none";
  }, 2500);
}

function adjustVolume(change) {
  volume = Math.max(minVolume, Math.min(maxVolume, volume + change));
  innerIndicator.style.height = `${(volume / maxVolume) * 6}rem`;
  showIndicator();
}

volUp.addEventListener("click", () => {
  adjustVolume(volumeStep);
});

volDown.addEventListener("click", () => {
  adjustVolume(-volumeStep);
});

let isBlack = false;

switchOf.addEventListener("click", () => {
  if (isBlack) {
    mainScreen.style.backgroundColor = "";
    mainScreen.style.backgroundImage =
      "url('https://w0.peakpx.com/wallpaper/730/501/HD-wallpaper-iphone-14-pro.jpg')";
    mainScreen.style.backgroundRepeat = "no-repeat";
    mainScreen.style.backgroundSize = "cover";
    mainScreen.style.backgroundPosition = "center";

    dateElement.classList.remove("hidden");
    notification.classList.remove("hidden");
    notification1.classList.remove("hidden");
    lock.classList.remove("hidden");
    network.classList.remove("hidden");
    wifi.classList.remove("hidden");
    battery.classList.remove("hidden");

    isBlack = false;
  } else {
    mainScreen.style.backgroundColor = "rgba(47, 46, 46, 0.995)";
    mainScreen.style.backgroundImage = "";

    dateElement.classList.add("hidden");
    notification.classList.add("hidden");
    notification1.classList.add("hidden");
    lock.classList.add("hidden");
    network.classList.add("hidden");
    wifi.classList.add("hidden");
    battery.classList.add("hidden");

    isBlack = true;
  }
});
setInterval(() => {
  const date = new Date();
  dateElement.innerHTML = date.toLocaleTimeString();
}, 1000);

function showNotifications() {
  setInterval(() => {
    notification.classList.remove("hidden");
  }, 9000); // Show the first notification after 9 seconds

  setInterval(() => {
    notification1.classList.remove("hidden");
  }, 7000); // Show the second notification after 7 seconds
}

showNotifications();
// hide notification 12 second
setInterval(() => {
  notification.classList.add("hidden");
  notification1.classList.add("hidden");
}, 12000);