"use strict";

const darkModeSlider = document.querySelector(".darkModeSlider");
const mobileMenu = document.querySelector(".mobileMenu");
const aptDescription = document.querySelector(".aptDescription");
const galleryIndex = document.querySelector(".galleryIndex");
const aptEquipment = document.querySelector(".aptEquipment");
const about = document.querySelector(".about");
const main = document.querySelector(".main");
const sectionLocation = document.querySelector(".locationIndex");
const travel = document.querySelector(".travel");
const infoCity = document.querySelector(".infoCity");
const weather = document.querySelector(".weather");
const contactIndex = document.querySelector(".contactIndex");

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}

function checkDarkModeStatus() {
  if (localStorage.getItem("darkMode") === "true") {
    addDarkTheme();
    darkModeSlider.checked = true;
  } else {
    removeDarkTheme();
    darkModeSlider.checked = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkDarkModeStatus();
});

function addDarkTheme() {
  mobileMenu.classList.add("darkTheme");
  aptDescription.classList.add("darkTheme");
  galleryIndex.classList.add("darkTheme");
  aptEquipment.classList.add("darkTheme");
  about.classList.add("darkTheme");
  main.classList.add("darkTheme");
  sectionLocation.classList.add("darkTheme");
  travel.classList.add("darkTheme");
  infoCity.classList.add("darkTheme");
  weather.classList.add("darkTheme");
  contactIndex.classList.add("darkTheme");
}

function removeDarkTheme() {
  mobileMenu.classList.remove("darkTheme");
  aptDescription.classList.remove("darkTheme");
  galleryIndex.classList.remove("darkTheme");
  aptEquipment.classList.remove("darkTheme");
  about.classList.remove("darkTheme");
  main.classList.remove("darkTheme");
  sectionLocation.classList.remove("darkTheme");
  travel.classList.remove("darkTheme");
  infoCity.classList.remove("darkTheme");
  weather.classList.remove("darkTheme");
  contactIndex.classList.remove("darkTheme");
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
