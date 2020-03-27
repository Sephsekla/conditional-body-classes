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


    switch($_POST['value']){
        case 'page':
            helpers\dropdown_pages($label,$index,null);
           
            break;
        default:

            helpers\dropdown_post_types($label,$index);
    }

    
    wp_die();
}

function add_class_row(){

    $i = intval($_POST['index']);

    $options = get_option('ccs_body_classes');

    $classes = $options['ccs_field_classes'];

    $label = esc_html($_POST['label']);



settings\class_row($label,$i,$classes,$options);

wp_die();


  
}

add_action("wp_ajax_ccs_add_class", __NAMESPACE__."\add_class_row");