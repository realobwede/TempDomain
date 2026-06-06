// Initialize Lucide Icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navTitle = document.querySelector('.nav-title');
const navSubtitle = document.querySelector('.nav-subtitle');
const navMenuLinks = document.querySelectorAll('.nav-menu-link');
const backToTop = document.getElementById('backToTop');


//--------------
//Donate script
document.addEventListener('DOMContentLoaded', () => {
  const amountButtons = document.querySelectorAll('.donate-amount');
  const amountInput = document.getElementById('donationAmountInput');

  // Helper function to clear the active (selected) design from all buttons
  function clearActiveStates() {
    amountButtons.forEach(btn => {
      // Revert to default semi-transparent background
      btn.classList.remove('bg-white/25', 'hover:bg-white/35', 'ring-2', 'ring-white');
      btn.classList.add('bg-white/15', 'hover:bg-white/25');
    });
  }

  // Handle Preset Button Clicks
  amountButtons.forEach(button => {
    button.addEventListener('click', function() {
      clearActiveStates();

      // Apply the active layout to the clicked button
      this.classList.remove('bg-white/15', 'hover:bg-white/25');
      this.classList.add('bg-white/25', 'hover:bg-white/35', 'ring-2', 'ring-white');

      // Update the hidden/visible input field value
      amountInput.value = this.getAttribute('data-amount');
    });
  });

  // Handle Manual Typing
  amountInput.addEventListener('input', () => {
    // When the user writes a custom amount, visually uncheck the preset bubbles
    clearActiveStates();
  });
});
//--------------------




function handleNavScroll() {
    if (window.scrollY > 80) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
    navTitle.classList.remove('text-white');
    navTitle.classList.add('text-gray-900');
    navSubtitle.classList.remove('text-pink-200');
    navSubtitle.classList.add('text-pink-500');
    navMenuLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-700');
    });
    backToTop.classList.remove('opacity-0', 'invisible');
    backToTop.classList.add('opacity-100', 'visible');
    } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
    navTitle.classList.add('text-white');
    navTitle.classList.remove('text-gray-900');
    navSubtitle.classList.add('text-pink-200');
    navSubtitle.classList.remove('text-pink-500');
    navMenuLinks.forEach(link => {
        link.classList.add('text-white');
        link.classList.remove('text-gray-700');
    });
    backToTop.classList.add('opacity-0', 'invisible');
    backToTop.classList.remove('opacity-100', 'visible');
    }
}
window.addEventListener('scroll', handleNavScroll);
handleNavScroll();

// Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuOpen = false;
    });
});

// Intersection Observer for fade-up animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-counter');
        counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
            } else {
            counter.textContent = target.toLocaleString() + '+';
            }
        };
        updateCounter();
        });
        counterObserver.unobserve(entry.target);
    }
    });
}, { threshold: 0.3 });

counterObserver.observe(document.getElementById('impact'));

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.classList.add('hidden');
    document.getElementById('formSuccess').classList.remove('hidden');
    lucide.createIcons();
});

// Newsletter Form
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('newsletterSuccess').classList.remove('hidden');
    this.reset();
});

// Donate amount buttons
document.querySelectorAll('.donate-amount').forEach(btn => {
    btn.addEventListener('click', function() {
    document.querySelectorAll('.donate-amount').forEach(b => {
        b.classList.remove('bg-white/25', 'ring-2', 'ring-white');
        b.classList.add('bg-white/15');
    });
    this.classList.remove('bg-white/15');
    this.classList.add('bg-white/25', 'ring-2', 'ring-white');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    });
});