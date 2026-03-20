# Components Map - Motion Lagree Studio

This document maps each section/component from the current Next.js site to the corresponding HTML structure in the WordPress replica.

## Page Structure Overview

```
index.html
├── Hero Section
├── About Section  
├── What is Lagree Section
├── Studio Highlights Section
├── Final CTA Section
└── Footer
```

---

## 1. Hero Section

**Location in HTML**: Lines 17-127  
**CSS Classes**: `.hero-section`, `.hero-background`, `.site-header`, `.hero-content`

### Components:
- **Background Image** (`<div class="hero-background">`)
  - Full-screen background image with overlay
  - Dark gradient for text readability
  
- **Header** (`<header class="site-header">`)
  - Logo (Motion Lagree Studio wordmark)
  
- **Coming Soon Badge** (`<div class="coming-soon-badge">`)
  - Pulsing dot indicator
  - "Opening Soon" text
  
- **Hero Content** (`<div class="hero-content">`)
  - Main headline: "Move with intention. Build lasting strength."
  - Subheadline paragraph
  - Email waitlist form (stacked input + button)
  - Helper text below form
  
- **Scroll Indicator** (`<div class="scroll-indicator">`)
  - Animated mouse icon at bottom

### JavaScript:
- Form ID: `#waitlistForm`
- Email input ID: `#emailInput`
- Success message ID: `#successMessage`
- Form submission handled in `script.js` → `handleFormSubmit()`

### Interactions:
- Form validation on submit
- Loading state on button ("Joining...")
- Success message replaces form after submission
- Bounce animation on scroll indicator

---

## 2. About Section

**Location in HTML**: Lines 130-167  
**CSS Classes**: `.about-section`, `.about-grid`, `.about-image-wrapper`, `.about-content`

### Components:
- **Image** (`<div class="about-image">`)
  - Portrait aspect ratio (4:5)
  - Person in beige workout set
  
- **Decorative Elements**
  - `.decorative-box-1` - Coral accent box (bottom-right)
  - `.decorative-box-2` - Beige outlined box (top-left)
  
- **Content** (`<div class="about-content">`)
  - Section label: "The Studio"
  - Heading: "More Than a Workout"
  - Two body paragraphs

### Layout:
- Mobile: Stacked (image on top, content below)
- Desktop (1024px+): Side-by-side grid

---

## 3. What is Lagree Section

**Location in HTML**: Lines 170-237  
**CSS Classes**: `.lagree-section`, `.lagree-intro-grid`, `.lagree-points-grid`

### Components:

#### Part A: Introduction
- **Content** (`<div class="lagree-intro-content">`)
  - Section label: "The Method"
  - Heading: "What is Lagree?"
  - Two body paragraphs
  
- **Image Grid** (`<div class="lagree-image-grid">`)
  - Two vertical images side-by-side
  - Second image offset lower with margin-top

#### Part B: Four Cards
- **Cards Grid** (`<div class="lagree-points-grid">`)
  - 4 feature cards with hover effects
  - Each card contains:
    - Numbered circle badge (1-4)
    - Title
    - Description

### Cards Content:
1. **Slow & Controlled** - Tempo and muscle engagement
2. **High Intensity** - Challenge without high-impact
3. **Time Under Tension** - Builds strength and endurance
4. **Full-Body Results** - Integrated training approach

### Layout:
- Mobile: Single column stack
- Tablet (640px+): 2x2 grid
- Desktop (1024px+): 4 columns in a row

---

## 4. Studio Highlights Section

**Location in HTML**: Lines 240-293  
**CSS Classes**: `.highlights-section`, `.highlights-background`, `.highlights-grid`

### Components:
- **Background Image** (`<div class="highlights-background">`)
  - Low opacity (0.2) background texture
  - Dark section (midnight-moss background)
  
- **Header** (`<div class="highlights-header">`)
  - Section label: "The Experience"
  - Heading: "What to Expect"
  - Subtitle paragraph
  
- **Highlights Grid** (`<div class="highlights-grid">`)
  - 6 semi-transparent cards
  - Each card contains:
    - Title (white text)
    - Description (beige text)

### Cards Content:
1. **Intimate Class Sizes** - Small classes, more coaching
2. **Premium Equipment** - State-of-the-art Megaformers
3. **Expert Instructors** - Certified, precision coaching
4. **Curated Atmosphere** - Warm, minimal, calming
5. **Flexible Scheduling** - Morning to evening classes
6. **Community Focus** - Welcoming, supportive culture

### Layout:
- Mobile: Single column
- Tablet (640px+): 2 columns
- Desktop (1024px+): 3 columns

### Styling:
- Light text on dark background
- Hover effect: increased background opacity
- Glassmorphism effect with backdrop-blur

---

## 5. Final CTA Section

**Location in HTML**: Lines 296-344  
**CSS Classes**: `.cta-section`, `.cta-grid`, `.cta-image-wrapper`, `.cta-content`

### Components:
- **Image** (`<div class="cta-image">`)
  - Square aspect ratio
  - Woman in terracotta set on reformer
  - Coral tint overlay
  
- **Content** (`<div class="cta-content">`)
  - Section label: "Join the Movement"
  - Heading: "Be First to Experience Motion"
  - Body paragraph
  - Email form (stacked input + button)
  - Success message (hidden by default)

### JavaScript:
- Form ID: `#ctaForm`
- Email input ID: `#ctaEmailInput`
- Success message ID: `#ctaSuccessMessage`
- Form submission handled in `script.js` → `handleFormSubmit()`

### Layout:
- Mobile: Stacked (content above, image below)
- Desktop (1024px+): Side-by-side (image left, content right)
- Content alignment: Centered on mobile, left-aligned on desktop

### Interactions:
- Same form behavior as hero section
- Success message shown as inline element with checkmark icon

---

## 6. Footer

**Location in HTML**: Lines 347-355  
**CSS Classes**: `.site-footer`, `.footer-text`

### Components:
- Copyright text with dynamic year
- Simple centered layout
- Top border separator

### JavaScript:
- Year span ID: `#currentYear`
- Updated dynamically in `script.js` → `updateFooterYear()`

---

## Form Handling Details

### Both Forms (Hero & CTA) Share:

**HTML Structure:**
- Email input (type="email", required)
- Submit button with text/icon
- Helper text or success message

**JavaScript Flow:**
1. Form submit event preventDefault
2. Validate email input
3. Disable button, show "Joining..." state
4. Simulate API call (1 second delay)
5. Hide form, show success message
6. Store submission in localStorage
7. Console log email (for testing)

**localStorage Keys:**
- `motionWaitlistSubmitted`: "true" when submitted
- `motionWaitlistEmail`: Submitted email address

**WordPress Integration Points:**
Replace the `setTimeout` mock API in `handleFormSubmit()` with actual WordPress AJAX call to save email to database or send to email marketing service.

---

## Animation Classes

### Defined in CSS:

- `.animate-fade-up` - Fade in while moving up (0.8s)
- `.animate-fade-in` - Simple fade in (0.6s)
- `.animation-delay-100` - 100ms delay
- `.animation-delay-200` - 200ms delay

### Applied to:
- Coming soon badge: fade-in
- Hero headline: fade-up
- Hero subheadline: fade-up with 100ms delay
- Waitlist form: fade-up with 200ms delay
- Scroll indicator: bounce animation (infinite)
- Pulse dot: pulse animation (infinite)

---

## Responsive Behavior Summary

### Mobile (< 640px)
- All sections stack vertically
- Full-width elements
- Larger touch targets (48px min height)
- Single column grids

### Tablet (640px - 1023px)
- Lagree points: 2x2 grid
- Highlights: 2 columns
- Maintained stacked layouts for about/CTA sections

### Desktop (1024px+)
- About section: Side-by-side layout
- Lagree intro: Side-by-side layout
- Lagree points: 4 columns
- Highlights: 3 columns
- CTA section: Side-by-side layout with image on left
- Larger typography scale

---

## WordPress Template Mapping

### Suggested WordPress Structure:

```
theme/
├── header.php          → Lines 1-54 (head + site-header)
├── footer.php          → Lines 347-360 (footer + scripts)
├── page-coming-soon.php → Lines 56-345 (all sections)
├── style.css           → Keep as-is, enqueue properly
├── script.js           → Modify API calls, enqueue properly
└── functions.php       → Enqueue scripts, AJAX handlers
```

### Custom Fields Recommendations:

Create ACF field groups for:

1. **Hero Section**
   - Badge text (text)
   - Headline (text)
   - Subheadline (textarea)
   - Background image (image)

2. **About Section**
   - Label (text)
   - Heading (text)
   - Body paragraphs (repeater: textarea)
   - Image (image)

3. **Method Section**
   - Label, heading, body (same as above)
   - Images (repeater: image)
   - Points cards (repeater: title, description)

4. **Highlights Section**
   - Label, heading, subtitle (text/textarea)
   - Cards (repeater: title, description)

5. **CTA Section**
   - Label, heading, body (text/textarea)
   - Image (image)

This makes all content editable without touching code.

---

## Image Assets Reference

All images currently use Vercel Blob Storage URLs. For WordPress:

### Option A: Keep External URLs
- No changes needed
- Images load from Vercel CDN
- Fast, but external dependency

### Option B: Download and Host Locally
1. Download all images from URLs
2. Upload to WordPress media library
3. Replace URLs with `<?php echo wp_get_attachment_url(ID); ?>`

### Image List:
1. Logo: `image-CDmtFBx9LVXxGuDSNF7uKJgwNp2cEj.png`
2. Hero BG: `coming%20soon%20hero%202-xjMJtc3GVP0nejuvhletXjYJ2grNMT.png`
3. About: `happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg`
4. Method Image 1: `gfsd-bLDae8AJUfOcglNchnWSKrbrrl1nkY.jpg`
5. Method Image 2: `MOTION%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0%20PILATES-BRANDING-4MsxCQeZZSU5F07tPFuvrM5CVXNCBm.jpg`
6. Highlights BG: `MOTION%20PILATE%D0%BA%D0%BA%D0%BAS-BRANDING-9DbbDNdkzdxMb2l3uvkP5StHKgpATe.jpg`
7. CTA: `coming%20soon%20hero-CcYYdmqku70dEMKB6WUiZ6crw2mHBF.png`

---

## Accessibility Features

### Implemented:
- Semantic HTML5 elements (`<header>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Form labels (placeholder + proper input types)
- Focus states on interactive elements
- Sufficient color contrast ratios
- Keyboard navigable forms

### Consider Adding:
- Skip to content link
- ARIA labels on decorative elements
- Focus trap in success messages
- Reduced motion media query for animations

---

This map should help WordPress developers understand exactly where each component lives and how to split the static HTML into dynamic WordPress templates.
