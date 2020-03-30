<?php
/**
 * Helper Functions
 *
 * Helper functions used throughout the plugin
 *
 * @package ccs
 * @since   0.3.0
 */


namespace ccs\helpers;

function get_all_roles()
{
    global $wp_roles;
    
    $roles = $wp_roles->roles;
    
    return $roles;
}


function print_nice($array){
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}

