"use strict";

const btnUp = document.querySelector(".btnUp");
btnUp.style.display = "none";
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 880) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
  btnUp.addEventListener("click", scrollToTop);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Footer heart beat
const heartIcon = document.getElementById("heartIcon");
const initialScale = 1;
const firstBeat = 1.1;
const secondBeat = 1.3;
const transition = "transform 200ms ease-in-out";

const heartbeat = () => {
  heartIcon.style.transform = `scale(${firstBeat})`;
  heartIcon.style.transition = transition;

  setTimeout(function () {
    heartIcon.style.transform = `scale(${initialScale})`;
    heartIcon.style.transition = transition;
  }, 200);
  setTimeout(function () {
    heartIcon.style.transform = `scale(${secondBeat})`;
    heartIcon.style.transition = transition;
  }, 400);
  setTimeout(function () {
    heartIcon.style.transform = `scale(${initialScale})`;
    heartIcon.style.transition = transition;
  }, 700);
};

setInterval(heartbeat, 1400);
