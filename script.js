// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if(navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // Contact form simple validation and feedback (demo only)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formMsg').textContent = "Thank you for reaching out! We'll get back to you soon.";
            contactForm.reset();
        });
    }
});