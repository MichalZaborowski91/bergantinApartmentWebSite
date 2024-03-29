"use strict";

const API_KEY = "25319e446a134077b5b223946241702";
const weather = document.querySelector(".weather__container");

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

  weather.innerHTML = `<div class="weather__container__data"><img class="weather__container__data__icon" src="./images/weather/${day}/${iconName}.png"/><p class="weather__container__data__text">${textDescription}</p></div><div class="weather__container__temp"><span>Current temp:</span> <span class="weather__container__temp__current">${currentTemperature} <sup>o</sup>C</span></div>`;
}
