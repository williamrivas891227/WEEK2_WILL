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
        const email = document.getElementById('email').value;

        // Send the email data to the server using fetch
        fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to subscribe.');
                }
            })
            .then(data => {
                thankYouMessage.textContent = "Thank you for providing your information. We will contact you shortly.";
                thankYouMessage.style.display = "block";
                form.reset();  // Reset the form fields
            })
            .catch(error => {
                console.error('Error:', error);
                thankYouMessage.textContent = "There was an issue with your submission. Please try again.";
                thankYouMessage.style.display = "block";
            });

        thankYouMessage.textContent = "Thank you for providing your information. We will contact you shortly.";
        thankYouMessage.style.display = "block";

        form.reset();
    });
});
