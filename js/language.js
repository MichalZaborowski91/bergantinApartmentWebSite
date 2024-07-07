"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function changeLanguage(event) {
    const selectedLanguageUrl = event.currentTarget.getAttribute("data-url");
    //Add language to localStorage
    const selectedLanguage = event.currentTarget.getAttribute("data-language");
    localStorage.setItem("selectedLanguage", selectedLanguage);
    //Set language
    window.location.href = selectedLanguageUrl;
  }

  //Check if there is language in localStorage and if website was checked => sessionStorage
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const languageChecked = sessionStorage.getItem("languageChecked");

  if (selectedLanguage && !languageChecked) {
    //Map selected language to URL
    const languageUrlMap = {
      en: "index.html",
      pl: "./languages/pl/index_pl.html",
      de: "./languages/de/index_de.html",
      es: "./languages/es/index_es.html",
      fr: "./languages/fr/index_fr.html",
    };

    const selectedLanguageUrl = languageUrlMap[selectedLanguage];

    //Mark that language was checked in sessionStorage
    sessionStorage.setItem("languageChecked", "true");

    //Transfer to language version
    if (
      selectedLanguageUrl &&
      !window.location.href.includes(selectedLanguageUrl)
    ) {
      window.location.href = selectedLanguageUrl;
    }
  }

  // Select all elements with the class 'languageSelect'
  const languageButtons = document.querySelectorAll(".languageSelect");

  // Add event listener to each button
  languageButtons.forEach((button) => {
    button.addEventListener("click", changeLanguage);
  });
});
