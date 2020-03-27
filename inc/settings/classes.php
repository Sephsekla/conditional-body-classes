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
function class_row($label,$i,$classes,$options){

    ?>

    <fieldset id="<?php echo esc_attr($label).'-'.$i; ?>" class="ccs-set" data-index="<?php echo $i ?>" data-label="<?php echo $label ?>">
    
        <input type="text" name="ccs_options[<?php echo esc_attr($label); ?>][<?php echo $i ?>][classes]"
            value="<?php echo $classes[$i]['classes']?>" required>
            
            <?php helpers\dropdown_operators($options,$label,$i) ?>
    
    
    
        <div class="ccs-conditions" style="display: inline-block">
    
    
            <?php 
        
            switch($options[ $label ][$i]['operator']){
            case 'post_type':
                helpers\dropdown_post_types($label,$i);

                break;
            default:
    

                helpers\dropdown_pages($label,$i,$classes[$i]['conditions']);

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
    $options = get_option('ccs_options');

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

       class_row($args['label_for'],$i,$classes,$options);

$i++;

    }

    ?>

    </div>

<input type="button" name="add" id="add" class="button button-primary" value="Add a rule" data-label="<?php echo $args['label_for'] ?>">


    <?php





}
    

