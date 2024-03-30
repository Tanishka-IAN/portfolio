// Smooth scrolling behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form (Example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Validation logic here
});
