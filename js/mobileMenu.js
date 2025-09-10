"use strict";

const mobileMenuBtn = document.querySelector(".header__mobileBtn");
const modal = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".mobileMenu__close");

const toggleMobileMenu = () => {
  modal.classList.toggle("activeMenu");
  document.body.style.overflow = "hidden";
};

const closeMobileMenu = () => {
  modal.classList.remove("activeMenu");
  document.body.style.overflow = "";
};

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);

//Language menu window for desktop
const langMenuBtn = document.querySelector(".langBtn");
const langMenu = document.querySelector(".langMenu");

const toggleLangMenu = () => {
  langMenu.classList.toggle("activeLangMenu");
};

const closeLangMenu = () => {
  langMenu.classList.remove("activeLangMenu");
};

langMenuBtn.addEventListener("click", toggleLangMenu);
langMenuBtn.addEventListener("blur", closeLangMenu);
langMenuBtn.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLangMenu();
    langMenuBtn.blur();
  }
});
window.addEventListener("scroll", closeLangMenu);
