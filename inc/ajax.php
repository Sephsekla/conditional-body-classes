<?php
/**
 * AJAX functionality
 *
 * AJAX functions to update dropdown
 *
 * @package cbc
 * @since   0.5.0
 */

 namespace cbc\ajax;

 use cbc\helpers as helpers;


add_action("wp_ajax_cbc_update_condition", __NAMESPACE__."\update_condition");


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

    $options = get_option('cbc_options');

    $classes = $options['cbc_field_classes'];

    $label = esc_html($_POST['label']);



    cbc\sections\class_row($label,$i,$classes,$options);
}