<?php
/**
 * Settings Callbacks
 *
 * Callback functions for settings
 *
 * @package cbc
 * @since   0.4.0
 */



namespace cbc\settings;

use cbc\options as options;
use cbc\helpers as helpers;

function cbc_section_classes_cb()
{
    echo 'SECTION CALLBACk';
}


function cbc_field_classes_cb($args)
{
    $options = get_option('cbc_options');

    $classes = $options['cbc_field_classes'];

    echo '<pre>';
    print_r($options);
    echo '</pre>';
    // output the field
    ?>



    <p class="description">
        <?php esc_html_e('Lorem ipsum here\s a description', 'cbc'); ?>
    </p>

    <?php

    $i = 0;


    do{

        ?>

<fieldset id="<?php echo esc_attr($args['label_for']).'-'.$i; ?>" class="cbc-set" data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>" data-index="<?php echo $i ?>">

    <input type="text" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][classes]"
        value="<?php echo $classes[$i]['classes']?>">
        
        <?php helpers\dropdown_operators($options,$args,$i) ?>



    <div class="cbc-conditions" style="display: inline-block">


        <?php 
    
        switch($options[ $args['label_for'] ][$i]['operator']){
        case 'page':
            helpers\dropdown_pages($args['label_for'],$i,$classes[$i]['conditions']);
           
            break;
        default:

            helpers\dropdown_post_types($args['label_for'],$i);
        }
    
    

    
        ?>
    
    </div>

    <br>

        </fieldset>
            <?php

$i++;

    }
    while($i < count($classes));


}
    

