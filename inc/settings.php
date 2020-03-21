<?php

use cbc_options as options;

function settings_init()
{
    // register a new setting for "cbc" page
    register_setting('cbc', 'cbc_options');
    
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
        'cbc_field_pill', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Pill', 'cbc'),
        __NAMESPACE__.'\cbc_field_pill_cb',
        'cbc',
        'cbc_section_classes',
        [
        'label_for' => 'cbc_field_pill',
        'class' => 'cbc_row',
        'cbc_custom_data' => 'custom',
        ]
    );
}

function cbc_section_classes_cb()
{
    echo 'SECTION CALLBACk';
}

function cbc_field_pill_cb()
{
    echo 'FIELD CALLBACk';
}
    
   /**
    * register our cbc_settings_init to the admin_init action hook
    */
   add_action('admin_init', __NAMESPACE__.'\settings_init');