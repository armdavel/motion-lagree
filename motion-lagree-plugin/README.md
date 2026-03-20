# Motion Lagree Studio - WordPress Plugin

A complete WordPress plugin for the Motion Lagree Studio coming soon page with full waitlist functionality, database integration, and admin management.

## Features

- **Complete Coming Soon Page**: Beautiful, responsive landing page with all sections
- **Waitlist Functionality**: Two signup forms with AJAX submission
- **Database Integration**: Stores email signups in WordPress database
- **Admin Dashboard**: View, manage, and export waitlist entries
- **Email Notifications**: Automatic confirmation emails to subscribers and admin notifications
- **Shortcode Support**: Easy integration with `[motion_coming_soon]`
- **Responsive Design**: Mobile-first, fully responsive layout
- **Custom Styling**: Brand colors and typography built-in
- **localStorage Persistence**: Remembers if user already signed up

## Installation

### Method 1: Upload via WordPress Admin

1. Download the `motion-lagree-plugin` folder
2. Zip the entire folder
3. Go to WordPress Admin → Plugins → Add New
4. Click "Upload Plugin"
5. Choose the zip file and click "Install Now"
6. Activate the plugin

### Method 2: Manual Installation

1. Upload the `motion-lagree-plugin` folder to `/wp-content/plugins/`
2. Go to WordPress Admin → Plugins
3. Find "Motion Lagree Studio Coming Soon" and click "Activate"

## Usage

### Display the Coming Soon Page

**Option 1: Use the Shortcode**
Add this shortcode to any page or post:
```
[motion_coming_soon]
```

**Option 2: Create a Full-Width Template**
1. Create a new page in WordPress
2. Add the shortcode `[motion_coming_soon]`
3. Set the page template to "Full Width" or "Blank" (depends on your theme)
4. Set this page as your homepage in Settings → Reading

### View Waitlist Submissions

1. Go to WordPress Admin
2. Look for "Motion Waitlist" in the sidebar menu
3. View all email submissions with timestamps
4. Export to CSV for use in email marketing tools
5. Delete individual entries if needed

## File Structure

```
motion-lagree-plugin/
├── motion-lagree-studio.php     # Main plugin file
├── assets/
│   ├── css/
│   │   └── style.css            # All styles
│   └── js/
│       └── script.js            # jQuery-based AJAX forms
├── templates/
│   └── coming-soon.php          # Main template
└── admin/
    └── waitlist-admin.php       # Admin interface
```

## Database

The plugin creates a custom table: `wp_motion_waitlist`

**Schema:**
- `id` (bigint) - Primary key, auto-increment
- `email` (varchar 255) - Email address, unique
- `created_at` (datetime) - Signup timestamp

## Customization

### Change Colors

Edit `assets/css/style.css` and modify the CSS variables:

```css
:root {
    --minimal-mist: #F7F2ED;      /* Light background */
    --balanced-brick: #C46A4A;     /* Accent color */
    --midnight-moss: #2D2E28;      /* Dark text */
    /* ... more colors */
}
```

### Change Copy/Text

Edit `templates/coming-soon.php` and modify the HTML content.

### Modify Email Template

Edit the `send_confirmation_email()` function in `motion-lagree-studio.php`.

### Add Custom Fields

1. Update the database schema in the `activate()` method
2. Add fields to the forms in `templates/coming-soon.php`
3. Update the AJAX handler in `handle_waitlist_submission()`
4. Update the admin table in `admin/waitlist-admin.php`

## AJAX Integration

The plugin uses WordPress AJAX API:

**Endpoint:** `admin-ajax.php`
**Action:** `motion_submit_waitlist`
**Security:** Nonce verification (`motion_waitlist_nonce`)

JavaScript variables are localized via:
```javascript
motionAjax.ajaxurl  // Admin AJAX URL
motionAjax.nonce    // Security nonce
```

## Email Configuration

By default, the plugin uses WordPress's `wp_mail()` function. For better deliverability, install an SMTP plugin like:

- WP Mail SMTP
- Easy WP SMTP
- Post SMTP

## Export to CSV

Waitlist entries can be exported to CSV from the admin dashboard. The CSV includes:
- ID
- Email Address
- Signup Date

Import this file into:
- Mailchimp
- ConvertKit
- Klaviyo
- ActiveCampaign
- Any email marketing platform

## Hooks & Filters

### Available Actions

```php
// After successful waitlist submission
do_action('motion_waitlist_submitted', $email);

// After confirmation email sent
do_action('motion_confirmation_email_sent', $email);
```

### Available Filters

```php
// Modify confirmation email subject
apply_filters('motion_confirmation_email_subject', $subject, $email);

// Modify confirmation email message
apply_filters('motion_confirmation_email_message', $message, $email);
```

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher
- MySQL 5.6 or higher
- jQuery (included with WordPress)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Troubleshooting

### Forms not submitting
- Check browser console for JavaScript errors
- Verify jQuery is loaded
- Ensure AJAX URL is correct

### Emails not sending
- Install an SMTP plugin
- Check spam folder
- Verify admin email in Settings → General

### Styling issues
- Ensure no theme CSS conflicts
- Try adding `!important` to critical styles
- Check that CSS file is loading

### Database errors
- Deactivate and reactivate the plugin
- Check database user permissions
- Verify table was created (`wp_motion_waitlist`)

## Security

- All inputs are sanitized using WordPress functions
- Nonce verification on all AJAX requests
- SQL queries use prepared statements
- Admin capabilities checked before displaying sensitive data
- XSS protection via `esc_html()` and `esc_attr()`

## Support

For issues or questions:
1. Check the FAQ above
2. Review the code comments
3. Contact the Motion Lagree Studio development team

## License

GPL v2 or later

## Changelog

### Version 1.0.0
- Initial release
- Complete coming soon page
- Waitlist functionality
- Admin dashboard
- Email notifications
- CSV export

## Credits

Developed for Motion Lagree Studio
Based on the Next.js coming-soon page design
