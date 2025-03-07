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
