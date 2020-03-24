<?php
/**
 * Permissions
 *
 * User permissions functionality
 *
 * @package cbc
 * @since   0.3.0
 */


namespace cbc\permissions;

use cbc\helpers as helpers;

function update_role_permissions($old_value, $value, $option)
{

    global $wp_roles;

    $roles = helpers\get_all_roles();

    $roles_set = is_array($value['cbc_field_permissions']); // Check we have some roles set
     
    foreach($roles as $key=>$role){

        $wp_roles->remove_cap($key, 'cbc_edit'); // Remove capability from role

        if($roles_set && in_array($role['name'], $value['cbc_field_permissions'])) { 
            $wp_roles->add_cap($key, 'cbc_edit'); // Add capability to the role if it's in the new array
        }


        
    }


    
}

$option = 'cbc_options';

add_action("update_option_{$option}", __NAMESPACE__.'\update_role_permissions', 10, 3);
