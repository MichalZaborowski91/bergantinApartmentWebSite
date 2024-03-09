"use strict";
const mobileMenuBtn = document.querySelector(".header__mobileBtn");
const modal = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".mobileMenu__close");

mobileMenuBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
});
