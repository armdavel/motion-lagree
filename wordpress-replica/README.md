# Motion Lagree Studio - WordPress Replica

This folder contains a complete standalone HTML/CSS/JS replica of the Motion Lagree Studio coming-soon page, ready for WordPress integration.

## File Structure

```
wordpress-replica/
├── index.html          # Main HTML file (coming-soon page)
├── style.css           # All styles and responsive design
├── script.js           # Form handling and interactions
├── README.md           # This file
└── components-map.md   # Component reference guide
```

## Main Files

### index.html
- Complete semantic HTML5 structure
- All sections included: Hero, About, Method, Highlights, CTA, Footer
- Uses external images from Vercel Blob Storage
- Fully accessible with proper ARIA labels and semantic tags

### style.css
- All styling in one organized CSS file
- CSS custom properties (variables) for colors and design tokens
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth animations and transitions
- Clean, organized sections with comments

### script.js
- Form submission handling for both hero and CTA forms
- LocalStorage integration to persist form submission state
- Dynamic footer year update
- Vanilla JavaScript (no dependencies)

## Color Palette

The site uses these brand colors defined as CSS custom properties:

- `--minimal-mist`: #F7F2ED (background, light text)
- `--clouded-pearl`: #E4D7C8 (borders, secondary)
- `--balanced-beige`: #B8A89B (accent, muted text)
- `--balanced-brick`: #C46A4A (primary CTA, highlights)
- `--midnight-moss`: #2D2E28 (dark sections, text)

## Typography

- **Headings**: Playfair Display (serif) - elegant, refined
- **Body**: DM Sans (sans-serif) - clean, readable
- Fonts loaded via Google Fonts CDN

## Responsive Breakpoints

- Mobile: < 640px (stacked layouts, larger touch targets)
- Tablet: 640px - 1023px (2-column grids where appropriate)
- Desktop: 1024px+ (full multi-column layouts)

## Images

All images are hosted on Vercel Blob Storage and referenced via absolute URLs. If you need to use local images instead:

1. Download images from the URLs in `index.html`
2. Place them in `assets/images/`
3. Update image `src` attributes to relative paths

## JavaScript Functionality

### Form Submissions
- Both hero and CTA forms collect email addresses
- Form state is stored in `localStorage` to persist across page refreshes
- Loading states and success messages are handled
- **Integration needed**: Replace the `setTimeout` mock API call in `handleFormSubmit()` with your actual backend endpoint

### Current JavaScript Features
- Email form validation
- Loading button states
- Success message display
- LocalStorage persistence
- Dynamic copyright year

## WordPress Integration Notes

### Converting to WordPress Templates

This static site should be split into these WordPress template parts:

1. **header.php**
   - Everything from `<head>` to opening `<body>` tag
   - The `.site-header` section with logo
   - `wp_head()` before closing `</head>`

2. **footer.php**
   - The `.site-footer` section
   - Copyright year (use `<?php echo date('Y'); ?>`)
   - `wp_footer()` before closing `</body>`

3. **page-coming-soon.php** (Page Template)
   - All sections between header and footer
   - Call `get_header()` and `get_footer()`

4. **functions.php**
   - Enqueue `style.css` and `script.js` properly
   - Register form submission AJAX handler

### Required WordPress Customizations

1. **Enqueue Assets**
```php
function motion_enqueue_scripts() {
    wp_enqueue_style('motion-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('motion-script', get_template_directory_uri() . '/script.js', array(), '', true);
}
add_action('wp_enqueue_scripts', 'motion_enqueue_scripts');
```

2. **Form Handler**
```php
// Add to functions.php
function motion_handle_waitlist_submission() {
    $email = sanitize_email($_POST['email']);
    // Add to database or email service
    wp_send_json_success(['message' => 'Success']);
}
add_action('wp_ajax_nopriv_submit_waitlist', 'motion_handle_waitlist_submission');
add_action('wp_ajax_submit_waitlist', 'motion_handle_waitlist_submission');
```

3. **Update JavaScript**
   - Replace the mock API call in `script.js` with WordPress AJAX:
```javascript
fetch(ajaxurl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'action=submit_waitlist&email=' + encodeURIComponent(email)
})
```

4. **Logo**
   - Upload logo to WordPress media library
   - Replace logo URL with `<?php echo get_template_directory_uri(); ?>/assets/images/logo.png`
   - Or use WordPress Customizer: `<?php echo get_custom_logo(); ?>`

5. **Images**
   - Either keep external URLs (as-is, works immediately)
   - Or download and add to media library, then reference via WordPress functions

### Custom Fields (Optional)

For easier content management, consider making these editable via WordPress admin:

- Hero headline and subheadline
- Section headings and body copy
- Lagree points cards (4 cards)
- Highlights cards (6 cards)
- CTA section copy

Use Advanced Custom Fields (ACF) or WordPress Gutenberg blocks to make content editable.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- CSS Custom Properties (variables) required
- No IE11 support (uses modern CSS features)

## Testing Checklist

- [ ] Forms submit correctly
- [ ] Success messages appear after submission
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Images load properly
- [ ] Animations run smoothly
- [ ] All links work (if applicable)
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader compatible

## Performance Optimization

For production WordPress site:

1. **Images**: Convert to WebP format, add lazy loading
2. **CSS**: Minify `style.css`
3. **JS**: Minify `script.js`
4. **Fonts**: Consider hosting fonts locally or using font-display: swap
5. **Caching**: Use WordPress caching plugin (WP Rocket, W3 Total Cache)

## Next Steps

1. Set up WordPress theme structure
2. Split HTML into header.php, footer.php, and page template
3. Create functions.php and enqueue assets
4. Add form submission backend handler
5. Test all functionality
6. Add WordPress Customizer options for easy editing
7. Deploy and test on staging environment

## Support

For questions about the HTML/CSS/JS structure, refer to `components-map.md` for detailed component breakdown.
