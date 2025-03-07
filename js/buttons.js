"use strict";

const btnUp = document.querySelector(".btnUp");
btnUp.style.display = "none";
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 880) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
  btnUp.addEventListener("click", scrollToTop);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//Heart beat in footer
const heartIcon = document.getElementById("heartIcon");

const heartTransform = {
  initialScale: 1,
  firstBeat: 1.1,
  secondBeat: 1.3,
  transition: "transform 200ms ease-in-out",
};

const heartbeat = () => {
  const { initialScale, firstBeat, secondBeat, transition } = heartTransform;
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
