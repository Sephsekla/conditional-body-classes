<?php
/**
 * Helper Functions
 *
 * Helper functions used throughout the plugin
 *
 * @package cbc
 * @since   0.3.0
 */


namespace cbc\helpers;

function get_all_roles(){
    global $wp_roles;
	
	$roles = $wp_roles->roles;
	
	return $roles;
}