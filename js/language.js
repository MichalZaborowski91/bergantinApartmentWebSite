"use strict";

const polish = document.querySelector(".languagePolish");

function changeLanguage() {
  const selectedLanguage = document.getElementById("languageSelect").value;
  window.location.href = selectedLanguage;
}
