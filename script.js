// Configuration
const LAUNCH_DATE = new Date('2026-06-30T00:00:00').getTime();

// DOM Elements
const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    emailForm: document.getElementById('emailForm'),
    successModal: document.getElementById('successModal'),
    statNumbers: document.querySelectorAll('.stat-number'),
    notifyBtn: document.querySelector('.btn-notify'),
    header: document.querySelector('header'),
    body: document.body,
    hamburgerBtn: document.querySelector('.hamburger-btn'),
    mobileContactMenu: document.getElementById('mobileContactMenu'),
    mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),
    mobileCloseBtn: document.getElementById('mobileCloseBtn')
};

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = LAUNCH_DATE - now;

    if (distance < 0) {
        // Launch date has passed
        elements.days.textContent = '00';
        elements.hours.textContent = '00';
        elements.minutes.textContent = '00';
        elements.seconds.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elements.days.textContent = String(days).padStart(2, '0');
    elements.hours.textContent = String(hours).padStart(2, '0');
    elements.minutes.textContent = String(minutes).padStart(2, '0');
    elements.seconds.textContent = String(seconds).padStart(2, '0');
}

// Start countdown
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for stat animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stat numbers
elements.statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Email Form Handling
elements.emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse e-mail valide.', 'error');
        return;
    }
    
    // Simulate API call
    submitEmail(email);
});

// Notify Button Handling
if (elements.notifyBtn) {
    elements.notifyBtn.addEventListener('click', function() {
        // Scroll to email signup section
        const emailSection = document.querySelector('.email-signup');
        if (emailSection) {
            emailSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Focus on email input after scroll
            setTimeout(() => {
                const emailInput = document.getElementById('email');
                if (emailInput) {
                    emailInput.focus();
                }
            }, 800);
        }
    });
}

// Mobile Menu Handling
function openMobileMenu() {
    elements.hamburgerBtn.classList.add('active');
    elements.mobileContactMenu.classList.add('active');
    elements.mobileMenuOverlay.classList.add('active');
    elements.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    elements.hamburgerBtn.classList.remove('active');
    elements.mobileContactMenu.classList.remove('active');
    elements.mobileMenuOverlay.classList.remove('active');
    elements.body.style.overflow = 'auto';
}

// Hamburger Button Event Listener
if (elements.hamburgerBtn) {
    elements.hamburgerBtn.addEventListener('click', function() {
        if (elements.mobileContactMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close Button Event Listener
if (elements.mobileCloseBtn) {
    elements.mobileCloseBtn.addEventListener('click', closeMobileMenu);
}

// Overlay Click Event Listener
if (elements.mobileMenuOverlay) {
    elements.mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.mobileContactMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitEmail(email) {
    // Show loading state
    const submitButton = elements.emailForm.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        // Store email in localStorage (in real app, send to backend)
        const emails = JSON.parse(localStorage.getItem('sanovia_emails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('sanovia_emails', JSON.stringify(emails));
        }
        
        // Reset form
        document.getElementById('email').value = '';
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
        
        // Show success modal
        showModal();
        
        // Update stats if applicable
        updateSubscriberCount();
        
    }, 1500);
}

function showModal() {
    elements.successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
elements.successModal.addEventListener('click', function(e) {
    if (e.target === elements.successModal) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.successModal.style.display === 'block') {
        closeModal();
    }
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Update subscriber count (demo purpose)
function updateSubscriberCount() {
    const emails = JSON.parse(localStorage.getItem('sanovia_emails') || '[]');
    const subscriberStat = document.querySelector('[data-count="500"]');
    if (subscriberStat && emails.length > 0) {
        const newCount = 500 + emails.length;
        subscriberStat.textContent = newCount;
        subscriberStat.dataset.count = newCount;
    }
}

// Smooth scrolling for anchor links
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

// Header Scroll Effect
function handleHeaderScroll() {
    const scrolled = window.pageYOffset;
    const threshold = 50; // Pixels before header transforms
    
    if (scrolled > threshold) {
        elements.header.classList.add('scrolled');
        elements.body.classList.add('scrolled');
    } else {
        elements.header.classList.remove('scrolled');
        elements.body.classList.remove('scrolled');
    }
}

// Parallax effect for hero background
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Throttled scroll handler for performance
let ticking = false;
function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleHeaderScroll();
            handleParallax();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', handleScroll);

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        fadeInObserver.observe(element);
    });
    
    // Update initial subscriber count
    updateSubscriberCount();
    
    console.log('🏥 Sanovia Landing Page Loaded Successfully!');
    console.log('📧 Email submissions are stored locally for demo purposes.');
});

// Global function for modal (needed for onclick attribute)
window.closeModal = closeModal;
