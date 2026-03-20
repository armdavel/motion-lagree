// Motion Lagree Studio - WordPress Plugin JavaScript

(function($) {
    'use strict';

    // Initialize on document ready
    $(document).ready(function() {
        initWaitlistForms();
        checkWaitlistStatus();
    });

    /**
     * Initialize both waitlist forms (hero and CTA)
     */
    function initWaitlistForms() {
        // Hero form
        $('#waitlistForm').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmit($(this), $('#successMessage'));
        });
        
        // CTA form
        $('#ctaForm').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmit($(this), $('#ctaSuccessMessage'));
        });
    }

    /**
     * Handle form submission via AJAX
     */
    function handleFormSubmit($form, $successMessage) {
        var $emailInput = $form.find('input[type="email"]');
        var $submitButton = $form.find('button[type="submit"]');
        var email = $emailInput.val();
        
        if (!email) {
            return;
        }
        
        // Disable button and show loading state
        $submitButton.prop('disabled', true);
        var originalButtonText = $submitButton.html();
        $submitButton.html('Joining...');
        
        // Send AJAX request
        $.ajax({
            url: motionAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'motion_submit_waitlist',
                nonce: motionAjax.nonce,
                email: email
            },
            success: function(response) {
                if (response.success) {
                    // Hide form and show success message
                    $form.fadeOut(300, function() {
                        if ($successMessage.attr('id') === 'ctaSuccessMessage') {
                            $successMessage.css('display', 'inline-flex').hide().fadeIn(300);
                        } else {
                            $successMessage.css('display', 'flex').hide().fadeIn(300);
                        }
                    });
                    
                    // Store in localStorage
                    localStorage.setItem('motionWaitlistSubmitted', 'true');
                    localStorage.setItem('motionWaitlistEmail', email);
                } else {
                    alert(response.data.message || 'An error occurred. Please try again.');
                    
                    // Reset button
                    $submitButton.prop('disabled', false);
                    $submitButton.html(originalButtonText);
                }
            },
            error: function() {
                alert('An error occurred. Please try again.');
                
                // Reset button
                $submitButton.prop('disabled', false);
                $submitButton.html(originalButtonText);
            }
        });
    }

    /**
     * Check if user has already submitted waitlist form
     */
    function checkWaitlistStatus() {
        var submitted = localStorage.getItem('motionWaitlistSubmitted');
        
        if (submitted === 'true') {
            // Hide forms and show success messages
            var $heroForm = $('#waitlistForm');
            var $heroSuccess = $('#successMessage');
            var $ctaForm = $('#ctaForm');
            var $ctaSuccess = $('#ctaSuccessMessage');
            
            if ($heroForm.length && $heroSuccess.length) {
                $heroForm.hide();
                $heroSuccess.css('display', 'flex').show();
            }
            
            if ($ctaForm.length && $ctaSuccess.length) {
                $ctaForm.hide();
                $ctaSuccess.css('display', 'inline-flex').show();
            }
        }
    }

})(jQuery);
