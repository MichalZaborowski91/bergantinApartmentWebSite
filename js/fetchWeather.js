"use strict";

const API_KEY = "25319e446a134077b5b223946241702";
const weather = document.querySelector(".weather");

function fetchWeather() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=torrevieja&aqi=yes`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      weatherWidget(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

window.onload = fetchWeather();

function weatherWidget(data) {
  const dataIcon = data.current.condition.icon;
  const dataIconArray = dataIcon.split("/");
  const indexOfLastElement = dataIconArray.length - 1;
  const iconName = Number.parseInt(dataIconArray[indexOfLastElement]);
  const day = data.current.is_day === 1 ? "day" : "night";
  const currentTemperature = data.current.temp_c;
  const textDescription = data.current.condition.text;

  if (day === "day") {
    weather.style.backgroundImage =
      "url('../../../bergantinApartmentWebSite/images/weather/weatherDayBackground.jpg')";
  }

  weather.innerHTML = `<h3 class="weather__header">Torrevieja</h3><div class="weather__box"><img class="weather__box--icon" src="./images/weather/${day}/${iconName}.png"/><p class="weather__box--text">${textDescription}</p></div><div class="weather__temp"><span>Current temp:</span> <span class="weather__temp--degrees">${currentTemperature} <sup>o</sup>C</span></div>`;
}
