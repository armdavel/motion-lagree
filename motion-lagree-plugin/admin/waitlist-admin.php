<?php
/**
 * Admin page for viewing waitlist submissions
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Check user capabilities
if (!current_user_can('manage_options')) {
    wp_die(__('You do not have sufficient permissions to access this page.'));
}

// Handle export
if (isset($_GET['action']) && $_GET['action'] === 'export' && check_admin_referer('motion_export_waitlist')) {
    export_waitlist_csv();
}

// Handle delete
if (isset($_POST['delete_email']) && check_admin_referer('motion_delete_email')) {
    $email_id = intval($_POST['email_id']);
    delete_waitlist_email($email_id);
}

// Get waitlist entries
global $wpdb;
$table_name = $wpdb->prefix . 'motion_waitlist';
$entries = $wpdb->get_results("SELECT * FROM $table_name ORDER BY created_at DESC");
$total_count = count($entries);

/**
 * Export waitlist to CSV
 */
function export_waitlist_csv() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'motion_waitlist';
    $entries = $wpdb->get_results("SELECT * FROM $table_name ORDER BY created_at DESC", ARRAY_A);
    
    // Set headers for file download
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=motion-waitlist-' . date('Y-m-d') . '.csv');
    
    // Create file pointer
    $output = fopen('php://output', 'w');
    
    // Add column headers
    fputcsv($output, array('ID', 'Email', 'Signup Date'));
    
    // Add data rows
    foreach ($entries as $entry) {
        fputcsv($output, array(
            $entry['id'],
            $entry['email'],
            $entry['created_at']
        ));
    }
    
    fclose($output);
    exit;
}

/**
 * Delete waitlist email
 */
function delete_waitlist_email($id) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'motion_waitlist';
    $wpdb->delete($table_name, array('id' => $id), array('%d'));
}
?>

<div class="wrap">
    <h1>Motion Lagree Studio - Waitlist</h1>
    
    <div class="notice notice-info">
        <p><strong>Shortcode:</strong> Use <code>[motion_coming_soon]</code> to display the coming soon page on any page or post.</p>
    </div>
    
    <div class="tablenav top">
        <div class="alignleft actions">
            <h2>Total Signups: <?php echo esc_html($total_count); ?></h2>
        </div>
        <div class="alignright actions">
            <a href="<?php echo wp_nonce_url(admin_url('admin.php?page=motion-waitlist&action=export'), 'motion_export_waitlist'); ?>" class="button button-primary">
                Export to CSV
            </a>
        </div>
    </div>
    
    <?php if ($entries) : ?>
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th scope="col" style="width: 60px;">ID</th>
                    <th scope="col">Email Address</th>
                    <th scope="col" style="width: 180px;">Signup Date</th>
                    <th scope="col" style="width: 100px;">Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($entries as $entry) : ?>
                    <tr>
                        <td><?php echo esc_html($entry->id); ?></td>
                        <td><?php echo esc_html($entry->email); ?></td>
                        <td><?php echo esc_html(date('M j, Y g:i A', strtotime($entry->created_at))); ?></td>
                        <td>
                            <form method="post" style="display: inline;">
                                <?php wp_nonce_field('motion_delete_email'); ?>
                                <input type="hidden" name="email_id" value="<?php echo esc_attr($entry->id); ?>">
                                <input type="hidden" name="delete_email" value="1">
                                <button type="submit" class="button button-small button-link-delete" onclick="return confirm('Are you sure you want to delete this email?');">
                                    Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else : ?>
        <div class="notice notice-warning">
            <p>No waitlist signups yet.</p>
        </div>
    <?php endif; ?>
</div>

<style>
    .wrap h2 {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 600;
    }
    .tablenav {
        margin: 20px 0;
        padding: 10px 0;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .tablenav:after {
        content: "";
        display: table;
        clear: both;
    }
</style>
