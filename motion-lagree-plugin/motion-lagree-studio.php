<?php
/**
 * Plugin Name: Motion Lagree Studio Coming Soon
 * Plugin URI: https://motionlagreestudio.com
 * Description: A complete coming soon page for Motion Lagree Studio with waitlist functionality, custom styling, and responsive design.
 * Version: 1.0.0
 * Author: Motion Lagree Studio
 * Author URI: https://motionlagreestudio.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: motion-lagree
 * Domain Path: /languages
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('MOTION_LAGREE_VERSION', '1.0.0');
define('MOTION_LAGREE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MOTION_LAGREE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MOTION_LAGREE_PLUGIN_BASENAME', plugin_basename(__FILE__));

/**
 * Main Motion_Lagree_Studio class
 */
class Motion_Lagree_Studio {
    
    /**
     * Instance of this class
     */
    private static $instance = null;
    
    /**
     * Get instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        $this->init_hooks();
    }
    
    /**
     * Initialize WordPress hooks
     */
    private function init_hooks() {
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        
        // Register shortcode
        add_shortcode('motion_coming_soon', array($this, 'render_coming_soon_page'));
        
        // AJAX handler for waitlist submission
        add_action('wp_ajax_motion_submit_waitlist', array($this, 'handle_waitlist_submission'));
        add_action('wp_ajax_nopriv_motion_submit_waitlist', array($this, 'handle_waitlist_submission'));
        
        // Add admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Register activation hook
        register_activation_hook(__FILE__, array($this, 'activate'));
    }
    
    /**
     * Enqueue CSS and JavaScript
     */
    public function enqueue_assets() {
        // Only enqueue on pages with our shortcode
        global $post;
        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'motion_coming_soon')) {
            // Google Fonts
            wp_enqueue_style(
                'motion-google-fonts',
                'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
                array(),
                null
            );
            
            // Main stylesheet
            wp_enqueue_style(
                'motion-lagree-style',
                MOTION_LAGREE_PLUGIN_URL . 'assets/css/style.css',
                array(),
                MOTION_LAGREE_VERSION
            );
            
            // Main JavaScript
            wp_enqueue_script(
                'motion-lagree-script',
                MOTION_LAGREE_PLUGIN_URL . 'assets/js/script.js',
                array('jquery'),
                MOTION_LAGREE_VERSION,
                true
            );
            
            // Localize script for AJAX
            wp_localize_script('motion-lagree-script', 'motionAjax', array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('motion_waitlist_nonce')
            ));
        }
    }
    
    /**
     * Render coming soon page via shortcode
     */
    public function render_coming_soon_page($atts) {
        ob_start();
        include MOTION_LAGREE_PLUGIN_DIR . 'templates/coming-soon.php';
        return ob_get_clean();
    }
    
    /**
     * Handle AJAX waitlist submission
     */
    public function handle_waitlist_submission() {
        // Verify nonce
        check_ajax_referer('motion_waitlist_nonce', 'nonce');
        
        // Get email from POST
        $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
        
        if (!is_email($email)) {
            wp_send_json_error(array('message' => 'Invalid email address'));
        }
        
        // Save to database
        global $wpdb;
        $table_name = $wpdb->prefix . 'motion_waitlist';
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'email' => $email,
                'created_at' => current_time('mysql')
            ),
            array('%s', '%s')
        );
        
        if ($result) {
            // Optional: Send confirmation email
            $this->send_confirmation_email($email);
            
            wp_send_json_success(array('message' => 'Successfully added to waitlist'));
        } else {
            wp_send_json_error(array('message' => 'Failed to save email'));
        }
    }
    
    /**
     * Send confirmation email to subscriber
     */
    private function send_confirmation_email($email) {
        $subject = 'Welcome to Motion Lagree Studio!';
        $message = "Thank you for joining our waitlist!\n\n";
        $message .= "We'll be in touch soon with exclusive updates and early access details.\n\n";
        $message .= "Best regards,\nMotion Lagree Studio Team";
        
        $headers = array('Content-Type: text/plain; charset=UTF-8');
        
        wp_mail($email, $subject, $message, $headers);
        
        // Also send notification to admin
        $admin_email = get_option('admin_email');
        $admin_subject = 'New Waitlist Signup';
        $admin_message = "New email added to waitlist: " . $email;
        
        wp_mail($admin_email, $admin_subject, $admin_message, $headers);
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_menu_page(
            'Motion Waitlist',
            'Motion Waitlist',
            'manage_options',
            'motion-waitlist',
            array($this, 'render_admin_page'),
            'dashicons-email',
            30
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        include MOTION_LAGREE_PLUGIN_DIR . 'admin/waitlist-admin.php';
    }
    
    /**
     * Plugin activation
     */
    public function activate() {
        // Create waitlist table
        global $wpdb;
        $table_name = $wpdb->prefix . 'motion_waitlist';
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            email varchar(255) NOT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE KEY email (email)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

// Initialize plugin
function motion_lagree_studio_init() {
    return Motion_Lagree_Studio::get_instance();
}

// Start the plugin
motion_lagree_studio_init();
