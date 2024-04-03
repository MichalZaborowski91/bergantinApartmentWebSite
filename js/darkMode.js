"use strict";

const darkModeSlider = document.querySelector(".darkModeSlider");
const sunIcon = document.querySelector(".toggleSlider__icon--sun");
const moonIcon = document.querySelector(".toggleSlider__icon--moon");

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}

function checkDarkModeStatus() {
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";
  darkModeSlider.checked = darkModeEnabled;
  if (darkModeEnabled) {
    addDarkTheme();
    darkModeSlider.checked = true;
  } else {
    removeDarkTheme();
    darkModeSlider.checked = false;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  checkDarkModeStatus();
});

function addDarkTheme() {
  document.body.classList.add("darkTheme");
  moonIcon.classList.add("activateIcon");
  sunIcon.classList.remove("activateIcon");
}

function removeDarkTheme() {
  document.body.classList.remove("darkTheme");
  sunIcon.classList.add("activateIcon");
  moonIcon.classList.remove("activateIcon");
}

function switchMode() {
  if (darkModeSlider.checked) {
    addDarkTheme();
  } else {
    removeDarkTheme();
  }
  localStorage.setItem("darkMode", darkModeSlider.checked);
}

darkModeSlider.addEventListener("change", switchMode);
