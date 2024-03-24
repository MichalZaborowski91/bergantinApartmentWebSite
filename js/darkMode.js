"use strict";

const darkModeSlider = document.getElementById("darkModeSlider");
const mobileMenu = document.querySelector(".mobileMenu");
const aptDescription = document.querySelector(".aptDescription");
const galleryMain = document.querySelector(".gallery");
const aptEquipment = document.querySelector(".aptEquipment");
const about = document.querySelector(".about");
const main = document.querySelector(".main");

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

checkDarkModeStatus();

function addDarkTheme() {
  mobileMenu.classList.add("darkTheme");
  aptDescription.classList.add("darkTheme");
  galleryMain.classList.add("darkTheme");
  aptEquipment.classList.add("darkTheme");
  about.classList.add("darkTheme");
  main.classList.add("darkTheme");
}

function removeDarkTheme() {
  mobileMenu.classList.remove("darkTheme");
  aptDescription.classList.remove("darkTheme");
  galleryMain.classList.remove("darkTheme");
  aptEquipment.classList.remove("darkTheme");
  about.classList.remove("darkTheme");
  main.classList.remove("darkTheme");
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
