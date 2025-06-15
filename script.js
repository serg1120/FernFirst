// Language switching functionality
let currentLanguage = 'en';

// Language data
const translations = {
    en: {
        // Placeholders and dynamic content
        'Enter ZIP Code': 'Enter ZIP Code',
        'Ingrese código postal': 'Enter ZIP Code',
        'Full Name': 'Full Name',
        'Nombre completo': 'Full Name',
        'Phone Number': 'Phone Number',
        'Número de teléfono': 'Phone Number',
        'Email Address': 'Email Address',
        'Correo electrónico': 'Email Address'
    },
    es: {
        // Placeholders and dynamic content
        'Enter ZIP Code': 'Ingrese código postal',
        'Full Name': 'Nombre completo',
        'Phone Number': 'Número de teléfono',
        'Email Address': 'Correo electrónico'
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageToggle();
    initializeQuoteForm();
    initializeScrollToQuote();
});

// Language toggle functionality
function initializeLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            switchLanguage(selectedLang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-en and data-es attributes
    const elements = document.querySelectorAll('[data-en], [data-es]');
    
    elements.forEach(element => {
        const englishText = element.getAttribute('data-en');
        const spanishText = element.getAttribute('data-es');
        
        if (lang === 'en' && englishText) {
            element.textContent = englishText;
        } else if (lang === 'es' && spanishText) {
            element.textContent = spanishText;
        }
    });
    
    // Update placeholders
    updatePlaceholders(lang);
    
    // Update select options
    updateSelectOptions(lang);
}

function updatePlaceholders(lang) {
    const inputs = document.querySelectorAll('input[data-en-placeholder], input[data-es-placeholder]');
    
    inputs.forEach(input => {
        const englishPlaceholder = input.getAttribute('data-en-placeholder');
        const spanishPlaceholder = input.getAttribute('data-es-placeholder');
        
        if (lang === 'en' && englishPlaceholder) {
            input.placeholder = englishPlaceholder;
        } else if (lang === 'es' && spanishPlaceholder) {
            input.placeholder = spanishPlaceholder;
        }
    });
}

function updateSelectOptions(lang) {
    const selectOptions = document.querySelectorAll('option[data-en], option[data-es]');
    
    selectOptions.forEach(option => {
        const englishText = option.getAttribute('data-en');
        const spanishText = option.getAttribute('data-es');
        
        if (lang === 'en' && englishText) {
            option.textContent = englishText;
        } else if (lang === 'es' && spanishText) {
            option.textContent = spanishText;
        }
    });
}

// Quote form functionality
let currentStep = 1;
const totalSteps = 3;

function initializeQuoteForm() {
    // ZIP code input validation
    const zipCodeInput = document.getElementById('zipCode');
    if (zipCodeInput) {
        zipCodeInput.addEventListener('input', function() {
            // Only allow numbers
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Limit to 5 digits
            if (this.value.length > 5) {
                this.value = this.value.slice(0, 5);
            }
        });
        
        // Auto-advance when ZIP code is complete
        zipCodeInput.addEventListener('input', function() {
            if (this.value.length === 5) {
                setTimeout(() => {
                    const nextButton = document.querySelector('#step1 .btn-next');
                    if (nextButton) {
                        nextButton.style.background = '#10b981';
                        nextButton.innerHTML = '<span>ZIP Code Valid ✓</span><i class="fas fa-arrow-right"></i>';
                    }
                }, 500);
            }
        });
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
            }
            
            this.value = value;
        });
    }
    
    // Form submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
    }
}

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    
    // Validate current step
    if (!validateCurrentStep()) {
        return;
    }
    
    // Hide current step
    currentStepElement.classList.remove('active');
    
    // Show next step
    currentStep++;
    const nextStepElement = document.getElementById(`step${currentStep}`);
    if (nextStepElement) {
        nextStepElement.classList.add('active');
        
        // Focus on first input of next step
        const firstInput = nextStepElement.querySelector('input, select');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
    
    // Update progress indicator (if you want to add one)
    updateProgressIndicator();
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc2626';
            
            // Reset border color after 3 seconds
            setTimeout(() => {
                input.style.borderColor = '#e5e7eb';
            }, 3000);
        }
    });
    
    // Special validation for ZIP code
    if (currentStep === 1) {
        const zipCode = document.getElementById('zipCode').value;
        if (zipCode.length !== 5) {
            isValid = false;
            showError('Please enter a valid 5-digit ZIP code');
        }
    }
    
    return isValid;
}

function updateProgressIndicator() {
    // You can add a progress bar here if desired
    const progress = (currentStep / totalSteps) * 100;
    // Implementation depends on if you want to add a progress bar to the HTML
}

function handleFormSubmission() {
    const formData = {
        zipCode: document.getElementById('zipCode').value,
        insuranceType: document.getElementById('insuranceType').value,
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        language: currentLanguage,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Processing...</span>';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showSuccessMessage();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Reset form
        document.getElementById('quoteForm').reset();
        currentStep = 1;
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step1').classList.add('active');
        
    }, 2000);
    
    // Log form data (replace with actual submission logic)
    console.log('Form submitted:', formData);
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>${currentLanguage === 'en' ? 'Quote Request Received!' : '¡Solicitud de cotización recibida!'}</h3>
            <p>${currentLanguage === 'en' ? 'We\'ll contact you within 15 minutes with your quote.' : 'Te contactaremos en 15 minutos con tu cotización.'}</p>
        </div>
    `;
    
    const quoteWidget = document.querySelector('.quote-widget');
    quoteWidget.appendChild(successMessage);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = 'background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 12px; border-radius: 6px; margin: 10px 0; text-align: center;';
    errorDiv.textContent = message;
    
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.appendChild(errorDiv);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Scroll to quote functionality
function initializeScrollToQuote() {
    window.scrollToQuote = function() {
        const quoteWidget = document.querySelector('.quote-widget');
        if (quoteWidget) {
            quoteWidget.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Focus on ZIP code input
            const zipInput = document.getElementById('zipCode');
            if (zipInput) {
                setTimeout(() => zipInput.focus(), 500);
            }
        }
    };
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click tracking for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add analytics tracking here
            console.log('CTA clicked:', this.textContent.trim());
        });
    });
    
    // Add form field focus effects
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
});

// Emergency contact tracking
function trackEmergencyContact() {
    // Track when someone clicks the emergency contact
    console.log('Emergency contact clicked at:', new Date().toISOString());
    
    // You can add more sophisticated tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'emergency_contact_click', {
            'event_category': 'engagement',
            'event_label': 'phone_click'
        });
    }
}

// Add click tracking to phone links
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', trackEmergencyContact);
    });
});