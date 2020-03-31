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


function ccs_field_header_cb($args){
    $options = get_option('ccs_header_footer');

    $classes = is_array($options['header']) ? $options['header'] : [];

    ?>
    
    <div class="postbox">
    <div class="inside">
    <div id="ccs-header-rules" class="ccs-rule-wrapper" data-option="ccs_header_footer">

    <?php

    $i = 0;

   // class_row($args['label_for'],$i,$classes,$options);




    while($i < count($classes)){

       class_row('ccs_header_footer','header',$i,$classes,$options,true);

$i++;

    }

    ?>

    </div>

<a name="add" id="add" class="button button-primary add" value="Add a rule" data-label="header" data-option='ccs_header_footer' data-type="textarea" href="#ccs-header-rules">Add a Rule</a>
</div>
</div>

    <?php




}


function ccs_field_footer_cb($args){
    $options = get_option('ccs_header_footer');

    $classes = is_array($options['footer']) ? $options['footer'] : [];

    ?>
    
    <div class="postbox">
    <div class="inside">
    <div id="ccs-footer-rules" class="ccs-rule-wrapper" data-option="ccs_header_footer">

    <?php

    $i = 0;

   // class_row($args['label_for'],$i,$classes,$options);




    while($i < count($classes)){

       class_row('ccs_header_footer','footer',$i,$classes,$options,true);

$i++;

    }

    ?>

    </div>

<a name="add" id="add" class="button button-primary add" value="Add a rule" data-label="footer" data-option='ccs_header_footer' data-type="textarea" href="#ccs-footer-rules">Add a Rule</a>
</div>
</div>

    <?php




}

function ccs_field_body_cb($args){
    $options = get_option('ccs_header_footer');

    $classes = is_array($options['body']) ? $options['body'] : [];

    ?>
     <div class="postbox">
    <div class="inside">
    <div id="ccs-body-rules" class="ccs-rule-wrapper" data-option="ccs_header_footer">

    <?php

    $i = 0;

   // class_row($args['label_for'],$i,$classes,$options);




    while($i < count($classes)){

       class_row('ccs_header_footer','body',$i,$classes,$options,true);

$i++;

    }

    ?>

    </div>

<a name="add" id="add" class="button button-primary add" value="Add a rule" data-label="body" data-option='ccs_header_footer' data-type="textarea" href="#ccs-body-rules">Add a Rule</a>
</div>
</div>


    <?php




}