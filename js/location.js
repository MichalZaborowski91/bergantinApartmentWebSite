"use strict";

function distanceTo() {
  const option = document.getElementById("option").value;
  const content = document.querySelector(".locationIndex__distance");
  switch (option) {
    case "1":
      content.innerHTML = `<ul class="locationIndex__distance__list"><li>Playa del Cura <b>500m</b></li><li>Playa de los Locos <b>600m</b></li><li>Playa del Acequión <b>2.8km</b></li><li>Playa de los Naúfragos <b>3km</b></li></ul>`;
      break;
    case "2":
      content.innerHTML = `<ul class="locationIndex__distance__list"><li>Tabacco shop <b>150m</b></li><li>Smak shop <b>180m</b></li><li>D&E 24h mini market <b>210m</b></li><li>Consum supermarket <b>270m</b></li><li>24h Z shop <b>350m</b></li></ul>`;
      break;
    case "3":
      content.innerHTML = `<ul class="locationIndex__distance__list"><li>There are <b>plenty</b> of restaurants around the apartment</li><li>Only <b>5 minutes</b> from the <b>promenade</b> where there are many different restaurants</li></ul>`;
      break;
    case "4":
      content.innerHTML = `<ul class="locationIndex__distance__list"><li>Torrevieja <b>1,1km</b></li><li>Elche <b>38km</b></li><li>Alicante <b>50km</b></li><li>Cartagena <b>58km</b></li><li>Murcia <b>70km</b></li><li>Benidorm <b>100km</b></li></ul>`;
      break;
    default:
      content.innerHTML = "";
  }
}

window.onload = distanceTo();
