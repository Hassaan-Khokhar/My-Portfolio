
document.addEventListener("DOMContentLoaded", function() {
    // Create an IntersectionObserver to handle the visibility of cards
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.classList.add('show');
                observer.unobserve(card); // Stop observing the card after it's in view
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control how much of the card should be visible before triggering
    });

    // Observe each card
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});

