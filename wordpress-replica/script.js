// Motion Lagree Studio - Main JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initWaitlistForms();
    updateFooterYear();
});

/**
 * Initialize both waitlist forms (hero and CTA)
 */
function initWaitlistForms() {
    // Hero form
    const heroForm = document.getElementById('waitlistForm');
    const heroSuccessMessage = document.getElementById('successMessage');
    
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(heroForm, heroSuccessMessage);
        });
    }
    
    // CTA form
    const ctaForm = document.getElementById('ctaForm');
    const ctaSuccessMessage = document.getElementById('ctaSuccessMessage');
    
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(ctaForm, ctaSuccessMessage);
        });
    }
}

/**
 * Handle form submission
 * @param {HTMLFormElement} form - The form element
 * @param {HTMLElement} successMessage - The success message element
 */
function handleFormSubmit(form, successMessage) {
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!emailInput || !emailInput.value) {
        return;
    }
    
    // Disable button and show loading state
    submitButton.disabled = true;
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Joining...';
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(function() {
        // Get email value
        const email = emailInput.value;
        
        // Here you would typically send the email to your backend
        // Example:
        // fetch('/api/waitlist', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // });
        
        console.log('Email submitted:', email);
        
        // Hide form and show success message
        form.style.display = 'none';
        if (successMessage) {
            successMessage.style.display = 'flex';
        }
        
        // Reset button state (in case form is shown again)
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        
        // Store in localStorage to persist across page refreshes
        localStorage.setItem('motionWaitlistSubmitted', 'true');
        localStorage.setItem('motionWaitlistEmail', email);
    }, 1000);
}

/**
 * Update footer year dynamically
 */
function updateFooterYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Check if user has already submitted waitlist form
 * (Useful for showing appropriate state on page load)
 */
function checkWaitlistStatus() {
    const submitted = localStorage.getItem('motionWaitlistSubmitted');
    
    if (submitted === 'true') {
        // Hide forms and show success messages
        const heroForm = document.getElementById('waitlistForm');
        const heroSuccess = document.getElementById('successMessage');
        const ctaForm = document.getElementById('ctaForm');
        const ctaSuccess = document.getElementById('ctaSuccessMessage');
        
        if (heroForm && heroSuccess) {
            heroForm.style.display = 'none';
            heroSuccess.style.display = 'flex';
        }
        
        if (ctaForm && ctaSuccess) {
            ctaForm.style.display = 'none';
            ctaSuccess.style.display = 'inline-flex';
        }
    }
}

// Check waitlist status on load
checkWaitlistStatus();
