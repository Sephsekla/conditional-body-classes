 <?php
/**
 * PHP minimum version
 *
 * Displays an error message when the minimum php version is not met.
 *
 *
 * @package ccs
 * @since 0.1.0
 */


function ccs_php_requirement_notice() {
    $class = 'notice notice-error';
    $message = __( 'Conditional Code Suite requires a minimum PHP version of 5.3. For more information visit <a href="https://wordpress.org/support/update-php/" target="_blank">WordPress Support</a>', 'ccs' );
 
    printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), $message ); 
}
add_action( 'admin_notices', 'ccs_php_requirement_notice' );