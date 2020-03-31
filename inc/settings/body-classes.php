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
    ?>

    <p>You can use this section to add a new class to the body of a page or post.</p>
    <p>This is useful for adding specific styles to a piece of content in the <a href="https://wordpress.org/support/article/appearance-customize-screen/" target="_blank">Customizer</a> without having to make changes to your theme's code.</p>


<?php
}


function ccs_field_classes_cb($args)
{
    $options = get_option('ccs_body_classes');

    $classes = is_array($options['ccs_field_classes']) ? $options['ccs_field_classes'] : [];

    ?>

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

function ccs_section_header_cb($args)
{
    ?>

    <p>You can use this section to add code to the head of your page.</p>
    <p>This is useful for custom CSS and JavaScript, for example analytics tracking code. Code here is output to the <code>wp_head</code> tag.</p>


<?php
}

function ccs_section_footer_cb($args)
{
    ?>

    <p>You can use this section to add code to the end of your page.</p>
    <p>This is useful for custom JavaScript. Code here is output to the <code>wp_footer</code> tag.</p>


<?php
}

function ccs_section_body_cb($args)
{
    ?>

    <p>You can use this section to add code to the very start of the body of your page.</p>
    <p>This most commonly used for the <code>noscript</code> part of analytics tracking code. Code here is output to the <code>wp_body_open</code> tag.</p>


<?php
}