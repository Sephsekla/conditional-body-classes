<?php
/**
 * Settings
 *
 * Settings attached to options page
 *
 * @package ccs
 * @since   0.4.0
 */

namespace ccs\settings;

require_once ccs_PLUGIN_PATH.'inc/settings/settings.php';

use ccs\options as options;
use ccs\helpers as helpers;

function settings_init()
{

   // add_option('ccs');

    // register a new setting for "ccs" page
    register_setting(
        'ccs_group_body_classes', 'ccs_body_classes', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_body_classes',
        'default' => [
        ]
        ]
    );


    register_setting(
        'ccs_group_header_footer', 'ccs_header_footer', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_header_footer',
        'default' => [
        ]
        ]
    );

    register_setting(
        'ccs_group_permissions', 'ccs_permissions', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_permissions',
        'default' => [
            'ccs_field_permissions' => [
                'administrator'
            ]
        ]
        ]
    );

    
    
    // register a new section in the "ccs" page
    add_settings_section(
        'ccs_section_classes',
        __('Body Classes.', 'ccs'),
        __NAMESPACE__.'\ccs_section_classes_cb',
        'ccs-body-class'
    );

    add_settings_section(
        'ccs_section_permissions',
        __('Permissions', 'ccs'),
        __NAMESPACE__.'\ccs_section_classes_cb',
        'ccs-permissions'
    );

    add_settings_section(
        'ccs_section_header',
        __('Header', 'ccs'),
        __NAMESPACE__.'\ccs_section_classes_cb',
        'ccs-header-footer'
    );

    add_settings_section(
        'ccs_section_footer',
        __('Footer', 'ccs'),
        __NAMESPACE__.'\ccs_section_classes_cb',
        'ccs-header-footer'
    );



    
    // register a new field in the "ccs_section_developers" section, inside the "ccs" page
    add_settings_field(
        'ccs_field_classes', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Classes', 'ccs'),
        __NAMESPACE__.'\ccs_field_classes_cb',
        'ccs-body-class',
        'ccs_section_classes',
        [
        'label_for' => 'ccs_field_classes',
        'class' => 'ccs_row',
        'ccs_custom_data' => 'custom',
        
        ]
    );

        // register a new field in the "ccs_section_developers" section, inside the "ccs" page
        add_settings_field(
            'ccs_field_header_footer', // as of WP 4.6 this value is used only internally
            // use $args' label_for to populate the id inside the callback
            __('Header code', 'ccs'),
            __NAMESPACE__.'\ccs_field_header_cb',
            'ccs-header-footer',
            'ccs_section_header',
            [
            'label_for' => 'ccs_field_header_footer',
            'class' => 'ccs_row',
            'ccs_custom_data' => 'custom',
            ]
        );

         // register a new field in the "ccs_section_developers" section, inside the "ccs" page
         add_settings_field(
            'ccs_field_footer', // as of WP 4.6 this value is used only internally
            // use $args' label_for to populate the id inside the callback
            __('Footer code', 'ccs'),
            __NAMESPACE__.'\ccs_field_footer_cb',
            'ccs-header-footer',
            'ccs_section_footer',
            [
            'label_for' => 'ccs_field_footer',
            'class' => 'ccs_row',
            'ccs_custom_data' => 'custom',
            ]
        );

    add_settings_field(
        'ccs_field_permissions', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Permissions', 'ccs'),
        __NAMESPACE__.'\ccs_field_permissions_cb',
        'ccs-permissions',
        'ccs_section_permissions',
        [
        'label_for' => 'ccs_field_permissions',
        'class' => 'ccs_row',
        'ccs_custom_data' => 'custom',
        ]
    );
}

   /**
    * register our ccs_settings_init to the admin_init action hook
    */
    add_action('admin_init', __NAMESPACE__.'\settings_init');



function sanitize_body_classes($value)
{

    /**
     * Renumber array to avoid a headache later
     */

    if(is_array($value['ccs_field_classes']) && count($value['ccs_field_classes']) > 0){

    $value['ccs_field_classes'] = array_combine(range(0, count($value['ccs_field_classes']) - 1), array_values($value['ccs_field_classes']));

    }


    return $value;
}

function sanitize_header_footer($value)
{

    /**
     * Renumber array to avoid a headache later
     */

    if(is_array($value['ccs_field_header']) && count($value['ccs_field_header']) > 0){

    $value['ccs_field_header'] = array_combine(range(0, count($value['ccs_field_header']) - 1), array_values($value['ccs_field_header']));

    }


    if(is_array($value['ccs_field_footer']) && count($value['ccs_field_footer']) > 0){

        $value['ccs_field_footer'] = array_combine(range(0, count($value['ccs_field_footer']) - 1), array_values($value['ccs_field_footer']));
    
        }


    return $value;
}

function sanitize_permissions($value)
{

    // $value[] = 'sanitized';


    if(!in_array('administrator', $value['ccs_field_permissions'])) {
        add_settings_error('ccs_messages', 'ccs_message', __('Warning, administrator needs access otherwise you\'ll be locked out!', 'ccs'), 'error');

        $value['ccs_field_permissions'][] ='administrator';

    }


    return $value;
}