<?php
/**
 * AJAX functionality
 *
 * AJAX functions to update dropdown
 *
 * @package ccs
 * @since   0.5.0
 */

 namespace ccs\ajax;

 use ccs\helpers as helpers;
 use ccs\settings as settings;


add_action("wp_ajax_ccs_update_condition", __NAMESPACE__."\update_condition");


function update_condition(){

    $label = esc_html($_POST['label']);

    $index = intval($_POST['index']);

    $option = esc_html($_POST['option']);


    switch($_POST['value']){
        case 'page':
            helpers\dropdown_pages($option,$label,$index,null);
           
            break;
        default:

            helpers\dropdown_post_types($option,$label,$index);
    }

    
    wp_die();
}

function add_class_row(){

    $i = intval($_POST['index']);

    $option = esc_html($_POST['option']);

    $options = get_option($option);

    $classes = $options['ccs_field_classes'];

    $label = esc_html($_POST['label']);

    $type = filter_var($_POST['textarea'], FILTER_VALIDATE_BOOLEAN);


settings\class_row($option,$label,$i,$classes,$options,$type);

wp_die();


  
}

add_action("wp_ajax_ccs_add_class", __NAMESPACE__."\add_class_row");