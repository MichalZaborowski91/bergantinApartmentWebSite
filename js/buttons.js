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
