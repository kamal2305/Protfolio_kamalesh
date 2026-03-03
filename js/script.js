// Initialize EmailJS (only on contact page)
if (document.getElementById('contact-form')) {
    emailjs.init('42f2whhFbMsvCPjxl');
}

// Create Particles Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#4A7BF7';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 8px rgba(74, 123, 247, 0.6)';
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
    // Initialize particles only on home page
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        createParticles();
    }
    
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 150);
    }, 600);
});

// Typing Animation for Hero Section (only on home page)
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    
    if (typingText && cursor) {
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
    }
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

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', isMenuOpen);
        
        if (isMenuOpen) {
            mobileMenu.style.display = 'block';
            hamburger.innerHTML = '<i class="fa-solid fa-times" aria-hidden="true"></i>';
            hamburger.setAttribute('aria-label', 'Close mobile menu');
        } else {
            mobileMenu.style.display = 'none';
            hamburger.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
            hamburger.setAttribute('aria-label', 'Toggle mobile menu');
        }
    });
    
    // Close mobile menu when clicking on any link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                mobileMenu.style.display = 'none';
                hamburger.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
                hamburger.setAttribute('aria-label', 'Toggle mobile menu');
                isMenuOpen = false;
            }
        });
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
setActiveNavLink();

// Smooth Scroll for hash links only (for scroll indicator on home page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Don't prevent default for regular page links
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
            
            // Trigger skill icon animations with stagger
            if (entry.target.classList.contains('skill-icon-item')) {
                const allIcons = document.querySelectorAll('.skill-icon-item');
                allIcons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add('visible');
                    }, index * 80);
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
    .skill-icon-item,
    .project-card,
    .contact-info,
    .contact-form,
    .social-links,
    .footer p
`);

animatedElements.forEach(el => observer.observe(el));

// Contact Form Submission with EmailJS (only on contact page)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
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
}

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

// Parallax effect for hero section (only on home page)
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

if (heroContent && heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

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
console.log('%c Portfolio by Kamalesh Thandi Thirumal ', 'background: linear-gradient(135deg, #3461D1, #4A7BF7); color: white; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%c Thanks for visiting! ', 'color: #4A7BF7; font-size: 14px;');
