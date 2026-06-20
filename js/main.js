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
