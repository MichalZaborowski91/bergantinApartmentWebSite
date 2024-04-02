"use strict";

const darkModeSlider = document.querySelector(".darkModeSlider");

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
}

function removeDarkTheme() {
  document.body.classList.remove("darkTheme");
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
