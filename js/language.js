"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function changeLanguage(event) {
    const selectedLanguageUrl = event.currentTarget.getAttribute("data-url");
    // Add language to localStorage
    const selectedLanguage = event.currentTarget.getAttribute("data-language");
    localStorage.setItem("selectedLanguage", selectedLanguage);
    // Set language

    window.location.href = selectedLanguageUrl;
  }

  // Check if there is language in localStorage and if website was checked => sessionStorage
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  const languageChecked = sessionStorage.getItem("languageChecked");

  // Map selected language to URL
  const languageUrlMap = {
    en: "/bergantinApartmentWebSite/index.html",
    pl: "/bergantinApartmentWebSite/languages/pl/index_pl.html",
    de: "/bergantinApartmentWebSite/languages/de/index_de.html",
    es: "/bergantinApartmentWebSite/languages/es/index_es.html",
    fr: "/bergantinApartmentWebSite/languages/fr/index_fr.html",
  };

  // If selectedLanguage is set and session is not checked
  if (selectedLanguage && !languageChecked) {
    const selectedLanguageUrl = languageUrlMap[selectedLanguage];

    // Mark that language was checked in sessionStorage
    sessionStorage.setItem("languageChecked", "true");

    // If current URL is not the language index URL, redirect to language index
    const currentUrl = window.location.pathname;
    const targetUrl = selectedLanguageUrl;
    //Check if current URL is subpage so it will be load instead of index
    const subpage = currentUrl.includes(
      "gallery",
      "location",
      "bookings",
      "contact",
      "dataProtectionPolicy"
    );
    if (currentUrl !== targetUrl) {
      if (!subpage) {
        window.location.href = targetUrl;
      }
    }
  }

  // Select all elements with the class 'languageSelect'
  const languageButtons = document.querySelectorAll(".languageSelect");

  // Add event listener to each button
  languageButtons.forEach((button) => {
    button.addEventListener("click", changeLanguage);
  });
});
