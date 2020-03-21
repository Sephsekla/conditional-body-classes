<?php

use cbc_options as options;

 function wporg_settings_init() {
    // register a new setting for "wporg" page
    register_setting( 'wporg', 'wporg_options' );
    
    // register a new section in the "wporg" page
    add_settings_section(
    'wporg_section_developers',
    __( 'The Matrix has you.', 'wporg' ),
    __NAMESPACE__.'\wporg_section_developers_cb',
    'wporg'
    );
    
    // register a new field in the "wporg_section_developers" section, inside the "wporg" page
    add_settings_field(
    'wporg_field_pill', // as of WP 4.6 this value is used only internally
    // use $args' label_for to populate the id inside the callback
    __( 'Pill', 'wporg' ),
    'wporg_field_pill_cb',
    'wporg',
    'wporg_section_developers',
    [
    'label_for' => 'wporg_field_pill',
    'class' => 'wporg_row',
    'wporg_custom_data' => 'custom',
    ]
    );
   }
    
   /**
    * register our wporg_settings_init to the admin_init action hook
    */
   add_action( 'admin_init', __NAMESPACE__.'\wporg_settings_init' );