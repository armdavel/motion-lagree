<?php
/**
 * Template: Coming Soon Page
 * 
 * This template renders the complete coming soon page for Motion Lagree Studio.
 * Use shortcode: [motion_coming_soon]
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="motion-lagree-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
        <!-- Background Image -->
        <div class="hero-background">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coming%20soon%20hero%202-xjMJtc3GVP0nejuvhletXjYJ2grNMT.png" alt="Woman in white workout set performing a seated side stretch on a Megaformer reformer">
            <div class="hero-overlay"></div>
            <div class="hero-gradient"></div>
        </div>
        
        <!-- Minimal Header -->
        <header class="site-header">
            <div class="logo-container">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDmtFBx9LVXxGuDSNF7uKJgwNp2cEj.png" alt="Motion Lagree Studio" class="logo">
            </div>
        </header>

        <!-- Main Content -->
        <div class="hero-content">
            <div class="hero-inner">
                <!-- Coming Soon Badge -->
                <div class="coming-soon-badge">
                    <span class="pulse-dot"></span>
                    <span class="badge-text">Opening Soon</span>
                </div>

                <!-- Main Headline -->
                <h1 class="hero-headline">
                    Move with intention. <span class="highlight">Build lasting strength.</span>
                </h1>

                <!-- Subheadline -->
                <p class="hero-subheadline">
                    A premium Lagree studio for those who want more than another workout—slow, controlled, high-intensity training that strengthens your body, sharpens your focus, and keeps you coming back for more.
                </p>

                <!-- Waitlist Form -->
                <div class="waitlist-form-container">
                    <form id="waitlistForm" class="waitlist-form">
                        <input 
                            type="email" 
                            id="emailInput"
                            name="email"
                            placeholder="Enter your email" 
                            required
                            class="email-input"
                        >
                        <button type="submit" class="submit-button">
                            <span>Get Early Access to Classes</span>
                            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p class="form-helper-text">
                            Be the first to know when Motion opens and get early access to book your first class.
                        </p>
                    </form>
                    
                    <!-- Success Message (hidden by default) -->
                    <div id="successMessage" class="success-message" style="display: none;">
                        <div class="success-icon-wrapper">
                            <svg class="success-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="success-text">
                            <p class="success-title">You're on the list!</p>
                            <p class="success-description">We'll be in touch soon with exclusive updates and early access details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <div class="scroll-mouse">
                <div class="scroll-wheel"></div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
        <div class="container">
            <div class="about-grid">
                <!-- Image -->
                <div class="about-image-wrapper">
                    <div class="about-image">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg" alt="Person in beige workout set with arms raised">
                    </div>
                    <!-- Decorative Elements -->
                    <div class="decorative-box-1"></div>
                    <div class="decorative-box-2"></div>
                </div>
                
                <!-- Content -->
                <div class="about-content">
                    <p class="section-label">The Studio</p>
                    <h2 class="section-heading">More Than a Workout</h2>
                    <p class="section-text">
                        Motion is a boutique Lagree studio built for people who want to feel stronger, more grounded, and more connected to the way they move. With premium Megaformers, intentional coaching, and a warm, elevated atmosphere, every class is designed to challenge you with care.
                    </p>
                    <p class="section-text">
                        From the energy in the room to the details of the space, everything is designed to help you focus, feel supported, and come back stronger.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- What is Lagree Section -->
    <section class="lagree-section">
        <div class="container-large">
            <div class="lagree-intro-grid">
                <!-- Content -->
                <div class="lagree-intro-content">
                    <p class="section-label">The Method</p>
                    <h2 class="section-heading">What is Lagree?</h2>
                    <p class="section-text">
                        Lagree is a high-intensity, low-impact method performed on the Megaformer. It combines strength, endurance, core, balance, and control into one efficient full-body workout.
                    </p>
                    <p class="section-text">
                        The difference is in the tempo: slow, precise movement keeps your muscles under constant tension, so every rep works harder—without the joint stress of high-impact training.
                    </p>
                </div>
                
                <!-- Image Grid -->
                <div class="lagree-image-grid">
                    <div class="lagree-image-1">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gfsd-bLDae8AJUfOcglNchnWSKrbrrl1nkY.jpg" alt="Close-up of reformer machine">
                    </div>
                    <div class="lagree-image-2">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0%20PILATES-BRANDING-4MsxCQeZZSU5F07tPFuvrM5CVXNCBm.jpg" alt="Person in meditation pose">
                    </div>
                </div>
            </div>

            <!-- Lagree Points Cards -->
            <div class="lagree-points-grid">
                <?php
                $lagree_points = array(
                    array(
                        'title' => 'Slow & Controlled',
                        'description' => 'The slower you move, the harder your muscles work. No rushing. No wasted reps.'
                    ),
                    array(
                        'title' => 'High Intensity',
                        'description' => 'Expect deep muscle fatigue, serious challenge, and a full-body burn—without the pounding of high-impact workouts.'
                    ),
                    array(
                        'title' => 'Time Under Tension',
                        'description' => 'Constant tension builds real strength, endurance, and control that lasts beyond class.'
                    ),
                    array(
                        'title' => 'Full-Body Results',
                        'description' => 'Core, legs, arms, balance, and stamina work together in one smart, efficient session.'
                    )
                );
                
                foreach ($lagree_points as $index => $point) :
                ?>
                <div class="lagree-point-card">
                    <div class="point-number"><?php echo $index + 1; ?></div>
                    <h3 class="point-title"><?php echo esc_html($point['title']); ?></h3>
                    <p class="point-description"><?php echo esc_html($point['description']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Studio Highlights Section -->
    <section class="highlights-section">
        <!-- Background Image -->
        <div class="highlights-background">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATE%D0%BA%D0%BA%D0%BAS-BRANDING-9DbbDNdkzdxMb2l3uvkP5StHKgpATe.jpg" alt="">
        </div>
        
        <div class="container">
            <div class="highlights-header">
                <p class="section-label-light">The Experience</p>
                <h2 class="section-heading-light">What to Expect</h2>
                <p class="highlights-subtitle">
                    From your first class on, Motion is designed to make every visit feel personal, polished, and worth returning to.
                </p>
            </div>
            
            <div class="highlights-grid">
                <?php
                $highlights = array(
                    array(
                        'title' => 'Intimate Class Sizes',
                        'description' => 'Small classes mean more coaching, better corrections, and more confidence on the machine.'
                    ),
                    array(
                        'title' => 'Premium Equipment',
                        'description' => 'Train on state-of-the-art Megaformers built for the Lagree Method.'
                    ),
                    array(
                        'title' => 'Expert Instructors',
                        'description' => 'Certified instructors who coach with precision, clarity, and encouragement.'
                    ),
                    array(
                        'title' => 'Curated Atmosphere',
                        'description' => 'Warm, minimal, and calming, so you can lock in and move with purpose.'
                    ),
                    array(
                        'title' => 'Flexible Scheduling',
                        'description' => 'Classes designed to fit real routines, from early mornings to evenings.'
                    ),
                    array(
                        'title' => 'Community Focus',
                        'description' => 'A welcoming studio culture where every body feels supported, challenged, and seen.'
                    )
                );
                
                foreach ($highlights as $highlight) :
                ?>
                <div class="highlight-card">
                    <h3 class="highlight-title"><?php echo esc_html($highlight['title']); ?></h3>
                    <p class="highlight-description"><?php echo esc_html($highlight['description']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-grid">
                <!-- Image -->
                <div class="cta-image-wrapper">
                    <div class="cta-image">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coming%20soon%20hero-CcYYdmqku70dEMKB6WUiZ6crw2mHBF.png" alt="Woman performing lunge on reformer">
                    </div>
                    <div class="cta-image-overlay"></div>
                </div>
                
                <!-- Content -->
                <div class="cta-content">
                    <p class="section-label">Join the Movement</p>
                    <h2 class="section-heading">Be First to Experience Motion</h2>
                    <p class="section-text cta-text">
                        Join the list to get early access to classes, opening updates, and special launch offers before bookings open to the public.
                    </p>
                    
                    <form id="ctaForm" class="cta-form">
                        <input 
                            type="email" 
                            id="ctaEmailInput"
                            name="email"
                            placeholder="Enter your email" 
                            required
                            class="cta-email-input"
                        >
                        <button type="submit" class="cta-submit-button">
                            Get Early Access
                        </button>
                    </form>
                    
                    <!-- Success Message (hidden by default) -->
                    <div id="ctaSuccessMessage" class="cta-success-message" style="display: none;">
                        <svg class="success-check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.666 5L7.5 14.167 3.334 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>You're already on the list!</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <p class="footer-text">
                &copy; <?php echo date('Y'); ?> Motion Lagree Studio. All rights reserved.
            </p>
        </div>
    </footer>
</div>
