"use strict";

function showContent() {
  const option = document.getElementById("option").value;
  const content = document.querySelector(".content");
  switch (option) {
    case "1":
      content.innerHTML = `<ul class="content__list"><li>Playa del Cura 350m</li><li>Playa de los Locos 1km</li><li>Playa del Acequión 2.4km</li><li>Playa de los Naúfragos 2.6km</li></ul>`;
      break;
    case "2":
      content.innerHTML = "<p>Food here</p>";
      break;
    default:
      content.innerHTML = "";
  }
}

window.onload = showContent();
