const testimonialCards = document.querySelectorAll(".testimonial-card");

let current = 0;

setInterval(() => {

    testimonialCards.forEach(card => {
        card.classList.remove("active-testimonial");
    });

    testimonialCards[current].classList.add("active-testimonial");

    current++;

    if(current >= testimonialCards.length){
        current = 0;
    }

},3000);
// Contact Form Demo

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });
} 
