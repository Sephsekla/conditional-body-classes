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

function ccs_section_classes_cb($args)
{
    echo 'SECTION CALLBACk';

    //helpers\print_nice($args);
}


function ccs_field_classes_cb($args)
{
    $options = get_option('ccs_body_classes');

    $classes = is_array($options['ccs_field_classes']) ? $options['ccs_field_classes'] : [];

    ?>
    
    <div class="postbox">
    <div class="inside">
    <div id="ccs-class-rules" class="ccs-rule-wrapper" data-option="ccs_body_classes">

    <?php

    $i = 0;

   // class_row($args['label_for'],$i,$classes,$options);




    while($i < count($classes)){

       class_row('ccs_body_classes',$args['label_for'],$i,$classes,$options);

$i++;

    }

    ?>

    </div>

<a name="add" id="add" class="button button-primary add" value="Add a rule" data-label="<?php echo $args['label_for'] ?>" data-option='ccs_body_classes' href="#ccs-class-rules">Add a rule</a>
</div>
</div>


    <?php





}
    
function body_class_html()
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
    settings_fields('ccs_group_body_classes');
    // output setting sections and their fields
    // (sections are registered for "wporg", each field is registered to a specific section)
    do_settings_sections('ccs-body-class');
    // output save settings button
    submit_button('Save Settings');
    ?>
    </form>
    </div>
  


    
    <?php
}
