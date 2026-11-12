const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = bookingForm.querySelectorAll("input");

    const name = fields[0].value;
    const mobile = fields[1].value;
    const destination = fields[2].value;
    const pickup = fields[3].value;
    const date = fields[4].value;
    const time = fields[5].value;
    const passengers = fields[6].value;

    const whatsappNumber = "919944271172";

    const message =
        "Hello RV Tours & Travels!\n\n" +
        "I want to book a trip.\n\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Destination: " + destination + "\n" +
        "Pickup Location: " + pickup + "\n" +
        "Travel Date: " + date + "\n" +
        "Travel Time: " + time + "\n" +
        "Passengers: " + passengers;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});