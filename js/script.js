// Initialize EmailJS
emailjs.init('42f2whhFbMsvCPjxl');

// Create Particles Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#00f0ff';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.8)';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Loading Screen
window.addEventListener('load', () => {
    // Initialize particles
    createParticles();
    
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    }, 2000);
});

// Typing Animation for Hero Section
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    const fullText = "Hi, I'm Kamalesh Thandi Thirumal";
    let index = 0;
    const typingSpeed = 80;

    function typeText() {
        if (index <= fullText.length) {
            typingText.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Hide cursor after typing is complete
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 500);
        }
    }

    // Start typing after a short delay
    setTimeout(typeText, 1000);
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.style.display = 'block';
        hamburger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        mobileMenu.style.display = 'none';
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (isMenuOpen) {
                mobileMenu.style.display = 'none';
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
                isMenuOpen = false;
            }
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger skill bar animations
            if (entry.target.classList.contains('skill-item')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 300);
            }
            
            // Trigger stat animations with stagger
            if (entry.target.classList.contains('about-stats')) {
                const stats = entry.target.querySelectorAll('.stat');
                stats.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.classList.add('visible');
                    }, index * 100);
                });
            }
            
            // Trigger social link animations with stagger
            if (entry.target.classList.contains('social-links')) {
                const links = entry.target.querySelectorAll('.social-link');
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.add('visible');
                    }, 600 + (index * 100));
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animations
const animatedElements = document.querySelectorAll(`
    .section-title,
    .about-content,
    .about-text,
    .about-image,
    .about-stats,
    .skill-category,
    .skill-item,
    .project-card,
    .contact-info,
    .contact-form,
    .social-links,
    .footer p
`);

animatedElements.forEach(el => observer.observe(el));

// Contact Form Submission with EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const buttonText = document.getElementById('button-text');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable submit button
    submitBtn.disabled = true;
    buttonText.textContent = 'Sending...';
    formStatus.innerHTML = '';
    
    // Get form data
    const formData = new FormData(contactForm);
    const templateParams = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        to_name: 'Kamalesh',
        subject: formData.get('subject'),
        message: formData.get('message'),
        reply_to: formData.get('from_email')
    };
    
    try {
        const result = await emailjs.send(
            'service_r37vfqa',
            'template_80vp888',
            templateParams
        );
        
        if (result.text === 'OK') {
            formStatus.innerHTML = '<div class="success-message">Message sent successfully! I\'ll get back to you soon.</div>';
            contactForm.reset();
        } else {
            formStatus.innerHTML = '<div class="error-message">Failed to send message. Please try again.</div>';
        }
    } catch (error) {
        console.error('Error sending email:', error);
        formStatus.innerHTML = '<div class="error-message">Failed to send message. Please try again.</div>';
    } finally {
        submitBtn.disabled = false;
        buttonText.textContent = 'Send Message';
        
        // Clear status message after 3 seconds
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 3000);
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
        setTimeout(() => {
            scrollToTopBtn.classList.add('visible');
        }, 10);
    } else {
        scrollToTopBtn.classList.remove('visible');
        setTimeout(() => {
            if (!scrollToTopBtn.classList.contains('visible')) {
                scrollToTopBtn.style.display = 'none';
            }
        }, 300);
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0) scale(0.95)';
    });
    
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add animation delay to skill items
document.querySelectorAll('.skill-category').forEach((category, categoryIndex) => {
    const skillItems = category.querySelectorAll('.skill-item');
    skillItems.forEach((item, itemIndex) => {
        item.style.transitionDelay = `${(categoryIndex * 0.2) + (itemIndex * 0.1)}s`;
    });
});

// Add animation delay to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Prevent animations from replaying on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate positions if needed
    }, 250);
});

// Log console message
console.log('%c Portfolio by Kamalesh Thandi Thirumal ', 'background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%c Thanks for visiting! ', 'color: #1e3a8a; font-size: 14px;');
