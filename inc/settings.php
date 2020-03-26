<?php
/**
 * Settings
 *
 * Settings attached to options page
 *
 * @package cbc
 * @since   0.4.0
 */

namespace cbc\settings;

require_once CBC_PLUGIN_PATH.'inc/settings/callbacks.php';

use cbc\options as options;
use cbc\helpers as helpers;

function settings_init()
{
    // register a new setting for "cbc" page
    register_setting(
        'cbc', 'cbc_options', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_cbc',
        'default' => [
            'cbc_field_permissions' => [
                'administrator'
            ]
        ]
        ]
    );
    
    // register a new section in the "cbc" page
    add_settings_section(
        'cbc_section_classes',
        __('Body Classes.', 'cbc'),
        __NAMESPACE__.'\cbc_section_classes_cb',
        'cbc'
    );

    add_settings_section(
        'cbc_section_permissions',
        __('Permissions', 'cbc'),
        __NAMESPACE__.'\cbc_section_classes_cb',
        'cbc'
    );


    
    // register a new field in the "cbc_section_developers" section, inside the "cbc" page
    add_settings_field(
        'cbc_field_classes', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Classes', 'cbc'),
        __NAMESPACE__.'\cbc_field_classes_cb',
        'cbc',
        'cbc_section_classes',
        [
        'label_for' => 'cbc_field_classes',
        'class' => 'cbc_row',
        'cbc_custom_data' => 'custom',
        ]
    );

    add_settings_field(
        'cbc_field_permissions', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Permissions', 'cbc'),
        __NAMESPACE__.'\cbc_field_permissions_cb',
        'cbc',
        'cbc_section_permissions',
        [
        'label_for' => 'cbc_field_permissions',
        'class' => 'cbc_row',
        'cbc_custom_data' => 'custom',
        ]
    );
}

   /**
    * register our cbc_settings_init to the admin_init action hook
    */
    add_action('admin_init', __NAMESPACE__.'\settings_init');



function sanitize_cbc($value)
{

    // $value[] = 'sanitized';


    if(!in_array('administrator', $value['cbc_field_permissions'])) {
        add_settings_error('cbc_messages', 'cbc_message', __('Warning, administrator needs access otherwise you\'ll be locked out!', 'cbc'), 'error');

        $value['cbc_field_permissions'][] ='administrator';

    }

    /**
     * Renumber array to avoid a headache later
     */
    $value['cbc_field_classes'] = array_combine(range(0, count($value['cbc_field_classes']) - 1), array_values($value['cbc_field_classes']));



    return $value;
}