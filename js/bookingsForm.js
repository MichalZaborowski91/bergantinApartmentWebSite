"use strict";
document.addEventListener("DOMContentLoaded", function () {
  flatpickr(".date", {
    dateFormat: "d/m/Y",
    minDate: "today",
  });

  const formularz = document.getElementById("reservationForm");

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
          console.log("Pomyślnie wysłano żądanie.");
          formularz.reset();
          alert("pomyslnie wyslano formularz");
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
