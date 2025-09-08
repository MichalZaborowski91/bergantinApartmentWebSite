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
        // Jeśli zmieniona została data w arrivals, zaktualizuj datę w departures
        const selectedArrivalDate = selectedDates[0];
        const selectedDepartureDate = departureDateInput.selectedDates[0];
        if (
          selectedDepartureDate &&
          selectedDepartureDate < selectedArrivalDate
        ) {
          // Jeśli data w departures jest wcześniejsza, zaktualizuj datę departures

          departureDateInput.clear();
        }
      },
    });

    departureDateInput = flatpickr("#departureDate", {
      dateFormat: "d/m/Y",
      minDate: "today",
      onChange: function (selectedDates, dateStr, instance) {
        // Jeśli zmieniona została data w departures, sprawdź czy jest wcześniejsza niż w arrivals
        const selectedDepartureDate = selectedDates[0];
        const selectedArrivalDate = arrivalDateInput.selectedDates[0];
        if (
          selectedArrivalDate &&
          selectedDepartureDate < selectedArrivalDate
        ) {
          // Jeśli data w departures jest wcześniejsza, zaktualizuj datę departures

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

      // Pobierz dane z formularza
      const formData = new FormData(this);

      // Ustaw parametry wiadomości e-mail
      const emailParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("text"),
        arrival_date: formData.get("arrivalDate"),
        departure_date: formData.get("departureDate"),
      };

      // Wyślij e-mail za pomocą EmailJS
      // Wysłanie żądania API do EmailJS
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
            // Obsługa innej odpowiedzi, która powinna być w formacie JSON
            try {
              const jsonData = JSON.parse(response.data);
              console.log("Odpowiedź z serwera:", jsonData);
              // Reszta kodu
            } catch (error) {
              console.error("Błąd parsowania danych JSON:", error);
            }
          }
        });
    });
  });
})();
