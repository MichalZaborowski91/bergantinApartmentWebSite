/*"use strict";

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
      !window.location.pathname.endsWith(selectedLanguageUrl)
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
});*/

/*"use strict";

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

    // Check if current URL already includes the selected language URL
    const currentPath = window.location.pathname;

    if (
      selectedLanguageUrl &&
      !currentPath.includes(selectedLanguageUrl.replace("./", "/"))
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
});*/

/*"use strict";

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
    en: "index.html",
    pl: "./languages/pl/index_pl.html",
    de: "./languages/de/index_de.html",
    es: "./languages/es/index_es.html",
    fr: "./languages/fr/index_fr.html",
  };

  // If selectedLanguage is set and session is not checked
  if (selectedLanguage && !languageChecked) {
    const selectedLanguageUrl = languageUrlMap[selectedLanguage];

    // Mark that language was checked in sessionStorage
    sessionStorage.setItem("languageChecked", "true");

    // If current URL is not the language index URL, redirect to language index
    if (
      selectedLanguageUrl &&
      !window.location.pathname.includes(selectedLanguageUrl.replace("./", "/"))
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
*/

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

    if (currentUrl !== targetUrl) {
      window.location.href = targetUrl;
    }
  }

  // Select all elements with the class 'languageSelect'
  const languageButtons = document.querySelectorAll(".languageSelect");

  // Add event listener to each button
  languageButtons.forEach((button) => {
    button.addEventListener("click", changeLanguage);
  });
});
