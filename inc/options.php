<?php
/**
 * Create options page
 *
 * Create options page for conditional classes
 *
 * @package ccs
 * @since   0.3.0
 */

use ccs_settings as settings;

 namespace ccs\options;


function options_page()
{


    add_menu_page(
        'Conditional Code Suite',
        'CCS',
        'ccs_edit',
        'ccs',
        'ccs\settings\body_class_html'
    );




    // add top level menu page
    add_submenu_page(
        'ccs',
        'CCS Body Classes',
        'Body Classes',
        'ccs_edit',
        'ccs-body-classes',
        'ccs\settings\body_class_html'
    );

    add_submenu_page(
        'ccs',
        'CCS Header and Footer',
        'Header and Footer',
        'ccs_edit',
        'ccs-header-footer',
        'ccs\settings\body_class_html'
    );

    add_submenu_page(
        'ccs',
        'CCS Permissions',
        'Permissions',
        'manage_options',
        'ccs-permissions',
        'ccs\settings\body_class_html'
    );
}


    
   /**
    * register our wporg_options_page to the admin_menu action hook
    */
   add_action('admin_menu', __NAMESPACE__.'\options_page');