document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Scroll-Based Animations
    const faders = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Testimonial Carousel
    const testimonialTrack = document.getElementById('testimonial-track');
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    const showNextTestimonial = () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        const offset = -currentIndex * 100;
        testimonialTrack.style.transform = `translateX(${offset}%)`;
    };

    // Auto-advance the carousel every 5 seconds
    setInterval(showNextTestimonial, 5000);

    // Optional: Contact Form Submission (for demonstration)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you soon.');
        contactForm.reset();
    });
});