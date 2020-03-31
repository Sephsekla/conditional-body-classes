<?php
/**
 * Settings Callbacks
 *
 * Callback functions for settings
 *
 * @package ccs
 * @since   0.4.0
 */



namespace ccs\settings;

use ccs\options as options;
use ccs\helpers as helpers;

function ccs_field_permissions_cb($args)
{
    $options = get_option('ccs_permissions');


    $roles = helpers\get_all_roles();
  

    // output the field
    ?>

<div class="postbox">
<div class="inside">
<fieldset id="<?php echo esc_attr($args['label_for']); ?>"
    data-custom="<?php echo esc_attr($args['ccs_custom_data']); ?>">
    <p class="description">
        <?php esc_html_e('Select which roles can access Conditional Code Suite', 'ccs'); ?>
    </p>

    <?php foreach($roles as $key=>$role){


        if ('administrator' === $key) {

            ?>

    <input type="checkbox" disabled name="ccs_permissions[<?php echo esc_attr($args['label_for']); ?>][]"
        value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>

    <input type="hidden" name="ccs_permissions[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>">

            <?php

        }

        else{

            ?>


    <input type="checkbox" <?php echo ('administrator' === $key) ? 'disabled' : '' ?>
        name="ccs_permissions[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>



            <?php

        }

    }
    ?>
</fieldset>
</div>
</div>
    <?php
}
    

function permissions_html()
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
    settings_fields('ccs_group_permissions');
    // output setting sections and their fields
    // (sections are registered for "wporg", each field is registered to a specific section)
    do_settings_sections('ccs-permissions');
    // output save settings button
    submit_button('Save Settings');
    ?>
    </form>
    </div>


    
    <?php
}
