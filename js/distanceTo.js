"use strict";

function distanceTo() {
  const option = document.getElementById("option").value;
  const content = document.querySelector(".locationIndex__distance");
  const pathname = window.location.pathname;
  const english = pathname.includes("index");
  const polish = pathname.includes("index_pl");
  const german = pathname.includes("index_de");
  const spanish = pathname.includes("index_es");

  const markup = {
    english: {
      beach: `<ul class="locationIndex__distance__list"><li>Beach del Cura <b>500m</b></li><li>Beach los Locos <b>600m</b></li><li>Beach del Acequión <b>2.8km</b></li><li>Beach los Naúfragos <b>3km</b></li></ul>`,
      shop: `<ul class="locationIndex__distance__list"><li>Tabacco shop <b>150m</b></li><li>Smak shop <b>180m</b></li><li>D&E 24h mini market <b>210m</b></li><li>Consum supermarket <b>270m</b></li><li>24h Z shop <b>350m</b></li></ul>`,
      restaurant: `<ul class="locationIndex__distance__list"><li>There are <b>plenty</b> of restaurants around the apartment</li><li>Only <b>5 minutes</b> from the <b>promenade</b> where there are many different restaurants</li></ul>`,
      marina: `<ul class="locationIndex__distance__list"><li>Only <b>1.7km</b> walk along the beach's promenade</li></ul>`,
    },
    polish: {
      beach: `<ul class="locationIndex__distance__list"><li>Plaża del Cura <b>500m</b></li><li>Plaża de los Locos <b>600m</b></li><li>Plaża del Acequión <b>2.8km</b></li><li>Plaża los Naúfragos <b>3km</b></li></ul>`,
      shop: `<ul class="locationIndex__distance__list"><li>Sklep tytoniowy <b>150m</b></li><li>Sklep smak <b>180m</b></li><li>D&E 24h mini market <b>210m</b></li><li>Consum supermarket <b>270m</b></li><li>24h Z sklep <b>350m</b></li></ul>`,
      restaurant: `<ul class="locationIndex__distance__list"><li>W okolicy apartamentu znajduje się <b>wiele restauracji</b></li><li>Tylko <b>5 minut</b> od <b>promenady</b>, przy której znajduje się wiele różnych restauracji</li></ul>`,
      marina: `<ul class="locationIndex__distance__list"><li>Tylko <b>1.7km</b> spacerem promenadą wzdłuż plaży</li></ul>`,
    },
    german: {
      beach: `<ul class="locationIndex__distance__list"><li>Strand del Cura <b>500m</b></li><li>Strand los Locos <b>600m</b></li><li>Strand del Acequión <b>2.8km</b></li><li>Strand los Naúfragos <b>3km</b></li></ul>`,
      shop: `<ul class="locationIndex__distance__list"><li>Tabakladen <b>150m</b></li><li>Smak shop <b>180m</b></li><li>D&E 24h Minimarkt <b>210m</b></li><li>Consum Supermarkt <b>270m</b></li><li>24h Z shop <b>350m</b></li></ul>`,
      restaurant: `<ul class="locationIndex__distance__list"><li>Rund um die Wohnung gibt es <b>zahlreiche Restaurants</b></li><li>Nur <b>5 Minuten</b> von der <b>Promenade</b> entfernt, wo es viele verschiedene Restaurants gibt</li></ul>`,
      marina: `<ul class="locationIndex__distance__list"><li>Nur <b>1.7km</b> zu Fuß entlang der Strandpromenade</li></ul>`,
    },
    spanish: {
      beach: `<ul class="locationIndex__distance__list"><li>Playa del Cura <b>500m</b></li><li>Playa de los Locos <b>600m</b></li><li>Playa del Acequión <b>2.8km</b></li><li>Playa de los Naúfragos <b>3km</b></li></ul>`,
      shop: `<ul class="locationIndex__distance__list"><li>Tienda de tabaco <b>150m</b></li><li>Tienda smak <b>180m</b></li><li>Minimercado D&E 24h <b>210m</b></li><li>Supermercado Consum <b>270m</b></li><li>Tienda Z 24h <b>350m</b></li></ul>`,
      restaurant: `<ul class="locationIndex__distance__list"><li>Hay <b>muchos</b> restaurantes alrededor del apartamento</li><li>A sólo <b>5 minutos</b> del <b>paseo marítimo</b> donde hay muchos restaurantes diferentes</li></ul>`,
      marina: `<ul class="locationIndex__distance__list"><li>Sólo <b>1.7km</b> a pie por el paseo marítimo de la playa</li></ul>`,
    },
    cityCenter: `<ul class="locationIndex__distance__list"><li>Torrevieja <b>1,1km</b></li><li>Elche <b>38km</b></li><li>Alicante <b>50km</b></li><li>Cartagena <b>58km</b></li><li>Murcia <b>70km</b></li><li>Benidorm <b>100km</b></li></ul>`,
  };

  if (!option || !content) {
    throw new Error("Elements not found on the website.");
  }

  if (english) {
    switch (option) {
      case "1":
        content.innerHTML = markup.english.beach;
        break;
      case "2":
        content.innerHTML = markup.english.shop;
        break;
      case "3":
        content.innerHTML = markup.english.restaurant;
        break;
      case "4":
        content.innerHTML = markup.cityCenter;
        break;
      case "5":
        content.innerHTML = markup.english.marina;
        break;
      default:
        content.innerHTML = "";
    }
  } else if (polish) {
    switch (option) {
      case "1":
        content.innerHTML = markup.polish.beach;
        break;
      case "2":
        content.innerHTML = markup.polish.shop;
        break;
      case "3":
        content.innerHTML = markup.polish.restaurant;
        break;
      case "4":
        content.innerHTML = markup.cityCenter;
        break;
      case "5":
        content.innerHTML = markup.polish.marina;
        break;
      default:
        content.innerHTML = "";
    }
  } else if (german) {
    switch (option) {
      case "1":
        content.innerHTML = markup.german.beach;
        break;
      case "2":
        content.innerHTML = markup.german.shop;
        break;
      case "3":
        content.innerHTML = markup.german.restaurant;
        break;
      case "4":
        content.innerHTML = markup.cityCenter;
      case "5":
        content.innerHTML = markup.german.marina;
        break;
      default:
        content.innerHTML = "";
    }
  } else if (spanish) {
    switch (option) {
      case "1":
        content.innerHTML = markup.spanish.beach;
        break;
      case "2":
        content.innerHTML = markup.spanish.shop;
        break;
      case "3":
        content.innerHTML = markup.spanish.restaurant;
        break;
      case "4":
        content.innerHTML = markup.cityCenter;
        break;
      case "5":
        content.innerHTML = markup.spanish.marina;
        break;
      default:
        content.innerHTML = "";
    }
  } else {
    throw new Error("The website language was not recognized.");
  }
}

window.onload = distanceTo();
