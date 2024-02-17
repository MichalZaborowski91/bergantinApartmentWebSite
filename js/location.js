"use strict";

function showContent() {
  const option = document.getElementById("option").value;
  const content = document.querySelector(".content");
  switch (option) {
    case "1":
      content.innerHTML = `<ul class="content__list"><li>Playa del Cura 500m</li><li>Playa de los Locos 600m</li><li>Playa del Acequión 2.8km</li><li>Playa de los Naúfragos 3km</li></ul>`;
      break;
    case "2":
      content.innerHTML = `<ul class="content__list"><li>Tabacco shop 150m</li><li>Smak shop 180m</li><li>D&E 24h mini market 210m</li><li>Consum supermarket 270m</li><li>24h Z shop 350m</li></ul>`;
      break;
    case "3":
      content.innerHTML = `<ul class="content__list"><li>There are plenty of restaurants around the apartment</li><li>Only 5 minutes from the promenade where there are many different restaurants</li></ul>`;
      break;
    case "4":
      content.innerHTML = `<ul class="content__list"><li>Torravieja city centre 1,1km</li><li>Elche 38km</li><li>Alicante 50km</li><li>Cartagena 58km</li><li>Murcia 70km</li><li>Benidorm 100km</li></ul>`;
      break;
    default:
      content.innerHTML = "";
  }
}

window.onload = showContent();
