"use strict";

const weather = document.querySelector(".weather");

function fetchWeatcher() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/torravieja?unitGroup=metric&include=days%2Ccurrent&key=WELKMBRQE5AGG2H8BH6XLDXRR&contentType=json",
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Sprawdź, czy odpowiedź zawiera dane bieżącego dnia
      if (data && data.currentConditions && data.currentConditions.temp) {
        const currentTemperature = data.currentConditions.temp;
        weather.innerHTML = `<p>Current temp: ${currentTemperature} <sup>o</sup>C</p>`;
      } else {
        console.log("Brak danych o bieżącej temperaturze.");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

window.onload = fetchWeatcher();
