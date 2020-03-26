<?php
/**
 * Create options page
 *
 * Create options page for conditional classes
 *
 * @package cbc
 * @since   0.3.0
 */

use cbc_settings as settings;

 namespace cbc\options;


function options_page()
{
    // add top level menu page
    add_options_page(
        'Conditional Body Classes',
        'Body Classes',
        'cbc_edit',
        'cbc',
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
        add_settings_error('cbc_messages', 'cbc_message', __('Settings Saved', 'cbc'), 'updated');
    }
    
    // show error/update messages
    settings_errors('cbc_messages');
    ?>
    <div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <form action="options.php" method="post">
    <?php
    // output security fields for the registered setting "wporg"
    settings_fields('cbc');
    // output setting sections and their fields
    // (sections are registered for "wporg", each field is registered to a specific section)
    do_settings_sections('cbc');
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