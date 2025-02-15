export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Get in Touch";

    const intro = document.createElement("p");
    intro.textContent = 
        "We would love to hear from you! Whether you're planning a special event, need a reservation, or just want to say hello, our team is here to assist you.";

    const address = document.createElement("p");
    address.innerHTML = "<strong>📍 Address:</strong> 123 Medina Street, Casablanca, Morocco";

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>📞 Phone:</strong> 0000000000000000";

    const email = document.createElement("p");
    email.innerHTML = "<strong>✉️ Email:</strong> contact@andaluscuisine.com";

    const hours = document.createElement("p");
    hours.innerHTML = 
        "<strong>🕒 Opening Hours:</strong><br>" +
        "Monday - Friday: 11:00 AM - 11:00 PM<br>" +
        "Saturday - Sunday: 10:00 AM - 12:00 AM";

    const reservationNote = document.createElement("p");
    reservationNote.textContent = "For reservations, call us or send an email, and we’ll be happy to accommodate your requests!";

    contact.appendChild(heading);
    contact.appendChild(intro);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(hours);
    contact.appendChild(reservationNote);

    content.appendChild(contact);
}
