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


    if (! in_array($hook, ['ccs_page_ccs-body-class','ccs_page_ccs-header-footer','ccs_page_ccs-permissions', 'ccs_page_ccs-dashboard', 'toplevel_page_ccs-dashboard'] ) ) {
        return;
    }

    wp_register_style( 'ccs-styles', ccs_PLUGIN_URL . 'dist/main.min.css', array(), '1.0' );


    wp_register_script( 'ccs-script', ccs_PLUGIN_URL . 'dist/main.js', array('jquery'), '1.0' );

    wp_localize_script( 'ccs-script', 'ccsVars', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));        

    wp_enqueue_script('ccs-script');
    wp_enqueue_style('ccs-styles');
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__.'\enqueue_admin_script' );