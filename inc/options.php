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
        __NAMESPACE__.'\options_page_html'
    );




    // add top level menu page
    add_submenu_page(
        'ccs',
        'CCS Body Classes',
        'Body Classes',
        'ccs_edit',
        'ccs-body-classes',
        __NAMESPACE__.'\options_page_html'
    );

    add_submenu_page(
        'ccs',
        'CCS Header and Footer',
        'Header and Footer',
        'ccs_edit',
        'ccs-header-footer',
        __NAMESPACE__.'\options_page_html'
    );

    add_submenu_page(
        'ccs',
        'CCS Permissions',
        'Permissions',
        'manage_options',
        'ccs-permissions',
        __NAMESPACE__.'\options_page_html'
    );
}

function options_page_html()
{
    // check user capabilities
    if (! current_user_can('manage_options') ) {
        return;
    }
    
    // add error/update messages
    
    // check if the user have submitted the settings
    // wordpress will add the "settings-updated" $_GET parameter to the url
    if (isset($_GET['settings-updated']) ) {
        // add settings saved message with the class of "updated"
        add_settings_error('ccs_messages', 'ccs_message', __('Settings Saved', 'ccs'), 'updated');
    }
    
    // show error/update messages
    settings_errors('ccs_messages');
    ?>
    <div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <form action="options.php" method="post">
    <?php
    // output security fields for the registered setting "wporg"
    settings_fields('ccs');
    // output setting sections and their fields
    // (sections are registered for "wporg", each field is registered to a specific section)
    do_settings_sections('ccs');
    // output save settings button
    submit_button('Save Settings');
    ?>
    </form>
    </div>


    
    <?php
}
    
   /**
    * register our wporg_options_page to the admin_menu action hook
    */
   add_action('admin_menu', __NAMESPACE__.'\options_page');