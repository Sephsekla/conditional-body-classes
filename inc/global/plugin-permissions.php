<?php
/**
 * Permissions
 *
 * User permissions functionality
 *
 * @package ccs
 * @since   0.3.0
 */


namespace ccs\permissions;

use ccs\helpers as helpers;

function update_role_permissions($old_value, $value, $option)
{

    global $wp_roles;

    $roles = helpers\get_all_roles();

    $roles_set = is_array($value['ccs_field_permissions']); // Check we have some roles set
     
    foreach($roles as $key=>$role){

        $wp_roles->remove_cap($key, 'ccs_edit'); // Remove capability from role

        if($roles_set && in_array($key, $value['ccs_field_permissions'])) { 
            $wp_roles->add_cap($key, 'ccs_edit'); // Add capability to the role if it's in the new array
        }


        
    }


    
}

$option = 'ccs_permissions';

add_action("update_option_{$option}", __NAMESPACE__.'\update_role_permissions', 10, 3);




register_activation_hook( __FILE__, __NAMESPACE__.'\initial_roles' );

function initial_roles(){
    $role = get_role( 'administrator' );
    $role->add_cap( 'ccs_edit' );
}