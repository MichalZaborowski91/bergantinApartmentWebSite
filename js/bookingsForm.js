"use strict";

(() => {
  const closeBtn = document.querySelector(".formInfo__box__closeBtn");
  const formInfo = document.querySelector(".formInfo");

  document.addEventListener("DOMContentLoaded", function () {
    let arrivalDateInput, departureDateInput;

    arrivalDateInput = flatpickr("#arrivalDate", {
      dateFormat: "d/m/Y",
      minDate: "today",
      onChange: function (selectedDates, dateStr, instance) {
        //If data was changed in arrivals, update date in departures
        const selectedArrivalDate = selectedDates[0];
        const selectedDepartureDate = departureDateInput.selectedDates[0];
        if (
          selectedDepartureDate &&
          selectedDepartureDate < selectedArrivalDate
        ) {
          //If departures is before arrivals, update departures
          departureDateInput.clear();
        }
      },
    });

    departureDateInput = flatpickr("#departureDate", {
      dateFormat: "d/m/Y",
      minDate: "today",
      onChange: function (selectedDates, dateStr, instance) {
        //If departures was changed then check if is not before arrivals
        const selectedDepartureDate = selectedDates[0];
        const selectedArrivalDate = arrivalDateInput.selectedDates[0];
        if (
          selectedArrivalDate &&
          selectedDepartureDate < selectedArrivalDate
        ) {
          //If departures is before arrivals, update departures
          alert("Invalid date, please choose date after arrival date.");
          instance.clear();
        }
      },
    });

    const formularz = document.getElementById("reservationForm");

    //Form info after succes
    const showFormInfo = () => {
      formInfo.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const hideFormInfo = () => {
      formInfo.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", hideFormInfo);

    formularz.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      //Get data from form
      const formData = new FormData(this);

      //Set up message params e-mail
      const emailParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("text"),
        arrival_date: formData.get("arrivalDate"),
        departure_date: formData.get("departureDate"),
      };

      //Send email through EmailJS
      //Send request API to EmailJS
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_bikddqo",
          template_id: "template_ngfu3u8",
          user_id: "bqIBDSZe6hPGWDbqv",
          template_params: emailParams,
        })
        .then((response) => {
          if (response.data === "OK") {
            formularz.reset();
            showFormInfo();
          } else {
            //Handling another response that should be in JSON format
            try {
              const jsonData = JSON.parse(response.data);
              console.log("Odpowiedź z serwera:", jsonData);
            } catch (error) {
              console.error("Błąd parsowania danych JSON:", error);
            }
          }
        });
    });
  });
})();
