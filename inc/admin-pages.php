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

 namespace ccs\pages;


function options_page()
{


    add_menu_page(
        'Conditional Code Suite',
        'CCS',
        'ccs_edit',
        'ccs-dashboard',
        'ccs\settings\dashboard_html',
        'data:image/svg+xml;base64,' . base64_encode(file_get_contents(ccs_PLUGIN_PATH.'dist/icon-dashboard.svg'))
    );




     // add top level menu page
    add_submenu_page(
        'ccs-dashboard',
        'Conditional Code Suite',
        'Dashboard',
        'ccs_edit',
        'ccs-dashboard',
        'ccs\settings\dashboard_html'
    );


    // add top level menu page
    add_submenu_page(
        'ccs-dashboard',
        'CCS Body Classes',
        'Body Classes',
        'ccs_edit',
        'ccs-body-class',
        'ccs\settings\body_class_html'
    );

    add_submenu_page(
        'ccs-dashboard',
        'CCS Header and Footer',
        'Header and Footer',
        'ccs_edit',
        'ccs-header-footer',
        'ccs\settings\header_footer_html'
    );

    add_submenu_page(
        'ccs-dashboard',
        'CCS Permissions',
        'Permissions',
        'manage_options',
        'ccs-permissions',
        'ccs\settings\permissions_html'
    );
}


    
   /**
    * register our wporg_options_page to the admin_menu action hook
    */
   add_action('admin_menu', __NAMESPACE__.'\options_page');