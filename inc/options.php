<?php
/**
 * Create options page
 *
 * Create options page for conditional classes
 *
 * @package cbc
 * @since   0.3.0
 */

 namespace cbc\options;


add_action('admin_menu', __NAMESPACE__.'\admin_menu');
add_action('admin_menu', __NAMESPACE__.'\create_settings_section');
 
    /**
     * Registers a new settings page under Settings.
     */
function admin_menu()
{
    add_options_page(
        __('Conditional Body Classes', 'cbc'),
        __('Body Classes', 'cbc'),
        'manage_options',
        'cbc',
        __NAMESPACE__.'\settings_page'
    );

}

    /**
     * Settings page display callback.
     */
function settings_page()
{

    // check user capabilities
    if (! current_user_can('manage_options') ) {
        return;
    }
    
    ?>
    <div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <form action="options.php" method="post">
        <?php
        // output security fields for the registered setting "cbc"
        settings_fields('cbc');
        // output setting sections and their fields
        // (sections are registered for "cbc", each field is registered to a specific section)
        do_settings_sections('cbc');
        // output save settings button
        submit_button('Save Settings');
        ?>
    </form>
    </div>
        <?php
}

function create_settings_section()
{

    register_setting('cbc_classes', 'cbc');

     // register a new field in the "wporg_settings_section" section, inside the "reading" page
     add_settings_field(
        'wporg_settings_field',
        'WPOrg Setting',
        __NAMESPACE__.'\wporg_settings_field_cb',
        'cbc',
        'cbc_section'
    );

    function wporg_settings_field_cb()
{
    // get the value of the setting we've registered with register_setting()
    $setting = get_option('wporg_setting_name');
    // output the field
    ?>
    <input type="text" name="wporg_setting_name" value="<?php echo isset( $setting ) ? esc_attr( $setting ) : ''; ?>">
    <?php
}




    add_settings_section(
        'cbc_section',
        __('Body Classes.', 'cbc'),
        __NAMESPACE__.'\cbc_section_callback',
        'cbc'
    );
}

function cbc_section_callback()
{
    echo  __('Intro', 'cbc');
}

 