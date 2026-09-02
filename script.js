// Portfolio JavaScript

console.log("🚀 Welcome to Ismail Kango's portfolio!");

// ===== DYNAMIC YEAR IN FOOTER =====
const year = new Date().getFullYear();
const footer = document.querySelector('footer p');
if (footer) {
    footer.innerHTML = `&copy; ${year} Ismail Kango. All rights reserved.`;
}
console.log(`📅 Portfolio year: ${year}`);

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== TYPING EFFECT FOR HERO SUBTITLE (Optional) =====
const subtitle = document.querySelector('.hero h2');
if (subtitle) {
    const roles = ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function typeEffect() {
        const fullText = roles[index];
        
        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        subtitle.textContent = currentText;

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === fullText.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    // Uncomment below to enable typing effect:
    // typeEffect();
}

console.log("✅ Portfolio ready!");