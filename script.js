document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="about-ics.html"]');
    if (aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector('.about-page-body');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const homeLink = document.querySelector('a[href="index.html"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");
    const form = document.querySelector(".contact-form");

    sendBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default form submission

        if (form.checkValidity()) {
            alert("Your message has been sent successfully!");
            form.reset(); // This clears all input fields
        } else {
            alert("Please fill out all required fields.");
        }
    });
});