<?php
/**
 * JS functionality
 *
 * JavaScript files enqueued in admin
 *
 * @package cbc
 * @since   0.4.0
 */

 namespace cbc\scripts;


 /**
 * Enqueue a script in the WordPress admin, excluding edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
function enqueue_admin_script( $hook ) {

    //add_settings_error('cbc_messages', 'cbc_message', $hook, 'error');


    if ('settings_page_cbc' != $hook ) {
        return;
    }



    wp_register_script( 'cbc-script', CBC_PLUGIN_URL . 'dist/main.js', array('jquery'), '1.0' );

    wp_localize_script( 'cbc-script', 'cbcVars', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));        

    wp_enqueue_script('cbc-script');
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__.'\enqueue_admin_script' );