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

function ccs_section_classes_cb()
{
    echo 'SECTION CALLBACk';
}

/**
 * class_row
 *
 * @param  mixed $label
 * @param  mixed $i
 * @param  mixed $classes
 * @param  mixed $options
 * @return void
 */
function class_row($field,$label,$i,$classes,$options,$textarea = false){

    

    ?>

    <fieldset id="<?php echo esc_attr($label).'-'.$i; ?>" class="ccs-set" data-index="<?php echo $i ?>" data-label="<?php echo $label ?>">

    <?php if($textarea){

        ?>

<textarea name="<?php echo $field ?>[<?php echo esc_attr($label); ?>][<?php echo $i ?>][classes]"
            required><?php echo $classes[$i]['classes']?></textarea>

    <?php

    }
    else{

        ?>

<input type="text" name="<?php echo $field ?>[<?php echo esc_attr($label); ?>][<?php echo $i ?>][classes]"
            value="<?php echo $classes[$i]['classes']?>" required>

    <?php

    }

    ?>
    
        
            
            <?php helpers\dropdown_operators($field,$options,$label,$i) ?>
    
    
    
        <div class="ccs-conditions" style="display: inline-block">
    
    
            <?php 
        
            switch($options[ $label ][$i]['operator']){
            case 'post_type':
                helpers\dropdown_post_types($label,$i);

                break;
            default:
    

                helpers\dropdown_pages($field,$label,$i,$classes[$i]['conditions']);

            }
        
        
    
        
            ?>

        
        </div>
    

        <input type="button" name="remove" class="button button-primary remove" value="Remove">

            <br>
            </fieldset>
    
                <?php

}


function ccs_field_classes_cb($args)
{
    $options = get_option('ccs_body_classes');

    $classes = is_array($options['ccs_field_classes']) ? $options['ccs_field_classes'] : [];



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

       class_row('ccs_body_classes',$args['label_for'],$i,$classes,$options);

$i++;

    }

    ?>

    </div>

<button name="add" id="add" class="button button-primary" value="Add a rule" data-label="<?php echo $args['label_for'] ?>" data-option='ccs_body_classes'>Add a rule</button>


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
