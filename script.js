document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DYNAMIC NAVBAR EFFECTS
    // ==========================================
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "12px 10%";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
        } else {
            navbar.style.padding = "20px 10%";
            navbar.style.background = "#ffffff";
            navbar.style.backdropFilter = "none";
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
        }
    });

    // ==========================================
    // 2. SMOOTH SCROLL REVEAL (Cards Lift-up Effect)
    // ==========================================
    const revealElements = document.querySelectorAll(".card, .why-item, .review-card, .menu-item-card");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        element.classList.add("reveal-hidden");
        revealOnScroll.observe(element);
    });
});