// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background on scroll and active navigation highlighting
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    // Update active navigation link
    updateActiveNavLink();
});

// Function to update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // If no section is active (at the very top), make home active
    if (!current && window.pageYOffset < 200) {
        const homeLink = document.querySelector('.nav-link[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            // Animate out when element leaves viewport
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .stat-item');
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add fade-in animation for about paragraphs
    aboutParagraphs.forEach((paragraph, index) => {
        paragraph.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Create observer for about section
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const paragraphs = entry.target.querySelectorAll('p');
                paragraphs.forEach(paragraph => {
                    paragraph.classList.add('fade-in');
                });
            } else {
                // Remove fade-in class when element leaves viewport
                const paragraphs = entry.target.querySelectorAll('p');
                paragraphs.forEach(paragraph => {
                    paragraph.classList.remove('fade-in');
                });
            }
        });
    }, { threshold: 0.3 });
    
    const aboutSection = document.querySelector('.about-text');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // Initialize active navigation link on page load
    updateActiveNavLink();
});

// Skill category gradual glow effect
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transition = 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        category.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.5)';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.boxShadow = '0 0 0px rgba(255, 105, 180, 0)';
    });
});

// Skill item gradual glow effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.background = '#ff69b4';
        
        // Change icon and text color to white for better contrast
        const icon = item.querySelector('i');
        const text = item.querySelector('span');
        if (icon) icon.style.color = '#ffffff';
        if (text) text.style.color = '#ffffff';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.background = 'var(--primary-bg)';
        item.style.boxShadow = '0 0 0px rgba(255, 105, 180, 0)';
        
        // Reset icon and text color back to original
        const icon = item.querySelector('i');
        const text = item.querySelector('span');
        if (icon) icon.style.color = 'var(--accent-pink)';
        if (text) text.style.color = 'var(--text-primary)';
    });
});

// Project card hover effects are now handled by CSS

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}





// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-pink);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px var(--shadow-color);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-3px)';
    scrollToTopBtn.style.boxShadow = '0 8px 25px var(--shadow-color)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 15px var(--shadow-color)';
});

// Add shooting star effect to hero section
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.style.cssText = `
        position: absolute;
        width: 2px;
        height: 80px;
        background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), transparent);
        pointer-events: none;
        animation: shooting-star 12s linear;
        z-index: 5;
        top: 0;
        left: 0;
        transform-origin: center center;
        opacity: 1;
    `;
    
    document.querySelector('.hero').appendChild(shootingStar);
    
    // JavaScript animation for transparency
    let startTime = Date.now();
    const duration = 12000; // 12 seconds
    
    function updateOpacity() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
            shootingStar.remove();
            return;
        }
        
        // Start fading after 1/3 of the screen (after 33% of animation)
        if (progress > 0.03) {
            const fadeProgress = (progress - 0.1) / 0.67; // 0 to 1 over the remaining 67%
            const opacity = Math.max(0, 1 - fadeProgress);
            shootingStar.style.opacity = opacity;
        } else {
            shootingStar.style.opacity = 1;
        }
        
        requestAnimationFrame(updateOpacity);
    }
    
    requestAnimationFrame(updateOpacity);
}

// Create shooting stars periodically with initial delay
setTimeout(() => {
    createShootingStar();
    setInterval(createShootingStar, 9000);
}, 500);

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
        animation: particleFloat 8s linear infinite;
        z-index: 3;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Create particles periodically
setInterval(createParticle, 3000);



// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes shooting-star {
        0% {
            transform: translateX(100vw) translateY(-100px) rotate(45deg);
        }
        100% {
            transform: translateX(-100px) translateY(100vh) rotate(45deg);
        }
    }
`;
document.head.appendChild(style); 