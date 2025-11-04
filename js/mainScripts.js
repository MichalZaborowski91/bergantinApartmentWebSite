"use strict";

//Mobile menu
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
//-------------------------------------------

//Dark mode
const darkModeSliders = document.querySelectorAll(".darkModeSlider");
const sunIcon = document.querySelector(".toggleSlider__icon--sun");
const moonIcon = document.querySelector(".toggleSlider__icon--moon");

//Set up default value if doesn't exists
if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}

const addDarkTheme = () => {
  document.body.classList.add("darkTheme");
  moonIcon.classList.add("activateIcon");
  sunIcon.classList.remove("activateIcon");
};

const removeDarkTheme = () => {
  document.body.classList.remove("darkTheme");
  sunIcon.classList.add("activateIcon");
  moonIcon.classList.remove("activateIcon");
};

//Check dark mode status on load
const checkDarkModeStatus = () => {
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  //Synchronize all sliders (mobile and desktop)
  darkModeSliders.forEach((slider) => {
    slider.checked = darkModeEnabled;
  });

  if (darkModeEnabled) {
    addDarkTheme();
  } else {
    removeDarkTheme();
  }
};

//Switch mode function
const switchMode = (e) => {
  const enabled = e.target.checked;
  if (enabled) {
    addDarkTheme();
  } else {
    removeDarkTheme();
  }

  //Save status in localStorage
  localStorage.setItem("darkMode", enabled);

  //Actualize all other sliders
  darkModeSliders.forEach((slider) => {
    if (slider !== e.target) {
      slider.checked = enabled;
    }
  });
};

//On load check status
document.addEventListener("DOMContentLoaded", checkDarkModeStatus);

//eventListener on all sliders
darkModeSliders.forEach((slider) => {
  slider.addEventListener("change", switchMode);
});
//---------------------------------------------

//Language
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

  //Map selected language to URL
  const languageUrlMap = {
    en: "/index.html",
    pl: "/languages/pl/index_pl.html",
    de: "/languages/de/index_de.html",
    es: "/languages/es/index_es.html",
  };

  //If selectedLanguage is set and session is not checked
  if (selectedLanguage && !languageChecked) {
    const selectedLanguageUrl = languageUrlMap[selectedLanguage];

    //Mark that language was checked in sessionStorage
    sessionStorage.setItem("languageChecked", "true");

    //If current URL is not the language index URL, redirect to language index
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

  //Select all elements with the class 'languageSelect'
  const languageButtons = document.querySelectorAll(".languageSelect");

  //Add event listener to each button
  languageButtons.forEach((button) => {
    button.addEventListener("click", changeLanguage);
  });
});
//--------------------------------------------

//Heart beat logic in footer
const heartIcon = document.getElementById("heartIcon");

const heartTransform = {
  initialScale: 1,
  firstBeat: 1.1,
  secondBeat: 1.3,
  transition: "transform 200ms ease-in-out",
};

const heartbeat = () => {
  const { initialScale, firstBeat, secondBeat, transition } = heartTransform;
  heartIcon.style.transform = `scale(${firstBeat})`;
  heartIcon.style.transition = transition;

  setTimeout(function () {
    heartIcon.style.transform = `scale(${initialScale})`;
    heartIcon.style.transition = transition;
  }, 200);
  setTimeout(function () {
    heartIcon.style.transform = `scale(${secondBeat})`;
    heartIcon.style.transition = transition;
  }, 400);
  setTimeout(function () {
    heartIcon.style.transform = `scale(${initialScale})`;
    heartIcon.style.transition = transition;
  }, 700);
};

setInterval(heartbeat, 1400);
//-----------------------------------------

//Button "Bring to top page"
const btnUp = document.querySelector(".btnUp");
btnUp.style.display = "none";
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 880) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
  btnUp.addEventListener("click", scrollToTop);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
//--------------------------------------------

//Contact widget
const contactWidget = document.querySelector(".contactWidget");
const widgetEmail = document.querySelector(".widgetEmail");
const widgetWhatsapp = document.querySelector(".widgetWhatsapp");
const widgetPhone = document.querySelector(".widgetPhone");

let isWidgetActive = false;

const showWidgets = () => {
  widgetEmail.classList.add("activateWidgetEmail");
  widgetEmail.classList.remove("deactivateWidgetEmail");
  setTimeout(() => {
    widgetWhatsapp.classList.add("activateWidgetWhatsapp");
    widgetWhatsapp.classList.remove("deactivateWidgetWhatsapp");
  }, 200);
  setTimeout(() => {
    widgetPhone.classList.add("activateWidgetPhone");
    widgetPhone.classList.remove("deactivateWidgetPhone");
  }, 400);
  isWidgetActive = true;
};

const hideWidgets = () => {
  widgetPhone.classList.remove("activateWidgetPhone");
  widgetPhone.classList.add("deactivateWidgetPhone");
  setTimeout(() => {
    widgetWhatsapp.classList.remove("activateWidgetWhatsapp");
    widgetWhatsapp.classList.add("deactivateWidgetWhatsapp");
  }, 200);
  setTimeout(() => {
    widgetEmail.classList.remove("activateWidgetEmail");
    widgetEmail.classList.add("deactivateWidgetEmail");
  }, 400);
  isWidgetActive = false;
};

const widgetHandler = () => {
  if (!isWidgetActive) {
    showWidgets();
  } else {
    hideWidgets();
  }
};

contactWidget.addEventListener("click", widgetHandler);

contactWidget.addEventListener("blur", () => {
  if (isWidgetActive) {
    hideWidgets();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isWidgetActive) {
    hideWidgets();
    contactWidget.blur();
  }
});
