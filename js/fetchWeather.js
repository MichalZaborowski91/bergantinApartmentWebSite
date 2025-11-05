"use strict";

const API_KEY = "25319e446a134077b5b223946241702";
const weather = document.querySelector(".weather__container");

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=torrevieja&aqi=yes`,
      {
        method: "GET",
        headers: {},
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    weatherWidget(data);
  } catch (err) {
    console.error("Error fetching data.", err.message);
  }
};

window.onload = fetchWeather();

function weatherWidget(data) {
  const dataIcon = data.current.condition.icon;
  const dataIconArray = dataIcon.split("/");
  const indexOfLastElement = dataIconArray.length - 1;
  const iconName = Number.parseInt(dataIconArray[indexOfLastElement]);
  const day = data.current.is_day === 1 ? "day" : "night";
  const currentTemperature = data.current.temp_c;
  const textDescription = data.current.condition.text;
  const pathname = window.location.pathname;

  const pathIndex = {
    en: "index.html",
    pl: "index_pl.html",
    de: "index_de.html",
    es: "index_es.html",
  };
  const { en, pl, de, es } = pathIndex;
  const english = pathname.includes(en);
  const polish = pathname.includes(pl);
  const german = pathname.includes(de);
  const spanish = pathname.includes(es);

  let tempText;
  let imagePath;

  if (polish) {
    tempText = "Aktualna temp:";
    imagePath = `../../images/weather/${day}/${iconName}.png`;
  } else if (german) {
    tempText = "Aktuelle temp:";
    imagePath = `../../images/weather/${day}/${iconName}.png`;
  } else if (spanish) {
    tempText = "Actual temp:";
    imagePath = `../../images/weather/${day}/${iconName}.png`;
  } else {
    //Default english
    tempText = "Current temp:";
    imagePath = `./images/weather/${day}/${iconName}.png`;
  }

  const basePath = window.location.hostname.includes("github.io")
    ? "/bergantinApartmentWebSite"
    : "";
  if (day === "day") {
    weather.style.backgroundImage = `url("${basePath}/images/weather/weatherDayBackground.jpg")`;
  } else {
    weather.style.backgroundImage = `url("${basePath}/images/weather/weatherNightBackground.jpg")`;
  }

  const markup = `<div class="weather__container__data"><img class="weather__container__data__icon" src="${imagePath}"/><p class="weather__container__data__text">${textDescription}</p></div><div class="weather__container__temp"><span>${tempText}</span> <span class="weather__container__temp__current">${currentTemperature} <sup>o</sup>C</span></div>`;
  weather.innerHTML = markup;
}
