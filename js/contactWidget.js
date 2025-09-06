"use strict";

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
