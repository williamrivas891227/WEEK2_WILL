document.addEventListener('DOMContentLoaded', () => {
    const navEl = document.getElementById("nav-mobile-menu");
    const nav = document.getElementsByTagName("nav");

    navEl.addEventListener("click", () => {
        nav[1].classList.toggle("active");
    });


    const form = document.getElementById('subscriptionForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        thankYouMessage.textContent = "Thank you for providing your information. We will contact you shortly.";
        thankYouMessage.style.display = "block";

        form.reset();
    });
});
