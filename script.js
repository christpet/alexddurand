/**
 * Alex Durand - Research Portfolio
 * Interactive enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initScrollAnimations();
    initSmoothScroll();
    initNavHighlight();
    initNavBackground();
});

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    // Add animation class to elements
    const animatedElements = document.querySelectorAll(
        '.section-title, .section-intro, .about-text, .detail-card, ' +
        '.research-card, .publication-item, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay for grouped elements
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.querySelectorAll('.animate-on-scroll'));
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
                
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Highlight active navigation link based on scroll position
 */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNav() {
        const scrollY = window.scrollY;
        const navHeight = document.querySelector('.nav').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Add active style
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--cream);
        }
        .nav-links a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
}

/**
 * Change navigation background on scroll
 */
function initNavBackground() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    function updateNav() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 22, 18, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = '0 1px 0 rgba(45, 82, 74, 0.3)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10, 22, 18, 1), transparent)';
            nav.style.backdropFilter = 'none';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }
    
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
}

/**
 * Parallax effect for hero section (subtle)
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        
        hero.style.backgroundPosition = `center ${rate}px`;
    }, { passive: true });
}

