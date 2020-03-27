<?php
/**
 * Header & Footer
 *
 * Header and footer code
 *
 * @package ccs
 * @since   0.7.0
 */



namespace ccs\settings;

use ccs\helpers as helpers;

function header_footer_html()
{
    // check user capabilities
    if (! current_user_can('ccs_edit') ) {
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
    settings_fields('ccs_group_header_footer');
    // output setting sections and their fields
    // (sections are registered for "wporg", each field is registered to a specific section)
    do_settings_sections('ccs-header-footer');
    // output save settings button
    submit_button('Save Settings');
    ?>
    </form>
    </div>


    
    <?php
}


function ccs_field_header_footer_cb($args){
    $options = get_option('ccs_header_footer');

    $classes = is_array($options['ccs_field_header_footer']) ? $options['ccs_field_header_footer'] : [];

    //print_r($options['ccs_field_header_footer']);



helpers\print_nice($options);
    // output the field
    ?>



    <p class="description">
        <?php esc_html_e('Lorem ipsum here\s a description', 'ccs'); ?>
    </p>
    

    <div id="ccs-class-rules">

    <?php

    $i = 0;

   // class_row($args['label_for'],$i,$classes,$options);




    while($i < count($classes)){

       class_row('ccs_header_footer',$args['label_for'],$i,$classes,$options);

$i++;

    }

    ?>

    </div>

<input type="button" name="add" id="add" class="button button-primary" value="Add a rule" data-label="<?php echo $args['label_for'] ?>" data-option='ccs_header_footer'>


    <?php




}