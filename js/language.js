"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function changeLanguage(event) {
    const selectedLanguageUrl = event.currentTarget.getAttribute("data-url");
    window.location.href = selectedLanguageUrl;
  }

  // Select all elements with the class 'languageSelect'
  const languageButtons = document.querySelectorAll(".languageSelect");

  // Add event listener to each button
  languageButtons.forEach((button) => {
    button.addEventListener("click", changeLanguage);
  });
});
