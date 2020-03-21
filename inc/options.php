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

 /**
  * Class for registering a new settings page under Settings.
  */
class options_page
{
 
    /**
     * Constructor.
     */
    function __construct()
    {
        add_action('admin_menu', array( $this, 'admin_menu' ));
        add_action('admin_menu', array( $this, 'create_settings_section' ));
    }
 
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
            array(
                $this,
                'settings_page'
            )
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
    <form action="options-general.php" method="post">
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

        register_setting( 'cbc_classes', 'cbc' );


        add_settings_section(
            'cbc_section',
            __('Body Classes.', 'cbc'),
            array($this,'cbc_section_callback'),
            'cbc'
        );
    }

    function cbc_section_callback()
    {
        echo  __('Intro', 'cbc');
    }

 
}
 
new options_page;