<?php
/**
 * JS functionality
 *
 * JavaScript files enqueued in admin
 *
 * @package ccs
 * @since   0.4.0
 */

 namespace ccs\scripts;


 /**
 * Enqueue a script in the WordPress admin, excluding edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
function enqueue_admin_script( $hook ) {

    //add_settings_error('ccs_messages', 'ccs_message', $hook, 'error');


    if ('settings_page_ccs' != $hook ) {
        return;
    }



    wp_register_script( 'ccs-script', ccs_PLUGIN_URL . 'dist/main.js', array('jquery'), '1.0' );

    wp_localize_script( 'ccs-script', 'ccsVars', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));        

    wp_enqueue_script('ccs-script');
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__.'\enqueue_admin_script' );