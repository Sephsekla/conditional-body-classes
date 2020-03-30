<?php
/**
 * Frontend
 *
 * Frontend filters
 *
 * @package ccs
 * @since   0.5.0
 */

namespace ccs\frontend;


/**
 * Add body class to array from option
 *
 * @param [array] $class_list
 * @return [array] $class_list
 */
function filter_body_class($class_list){

    $options = get_option('ccs_body_classes');

    $classes = $options['ccs_field_classes'];

    foreach ($classes as $class){

        switch($class['operator']){
            case 'page':
                if(get_the_id() === intval($class['conditions'])){
                    $class_list[] = $class['classes'];

                }
            break;
            case 'post_type':

                if(get_post_type() === $class['conditions']){
                    $class_list[] = $class['classes'];
                }

            break;
        }


    }



    //$class_list[] ="test-class";

    return $class_list;
}




add_filter('body_class',__NAMESPACE__.'\filter_body_class');


/**
 * Add custom code to WP Head
 *
 * @return void
 */
function add_inline_code($location){

    $options = get_option('ccs_header_footer');

    $classes = $options[$location];


    foreach ($classes as $class){

        switch($class['operator']){
            case 'page':
                if(get_the_id() === intval($class['conditions'])){
                    echo $class['classes'];

                }
            break;
            case 'post_type':

                if(get_post_type() === $class['conditions']){
                    echo $class['classes'];
                }

            break;
        }


    }




}




add_action('wp_head',function(){
    add_inline_code('header');
});

add_action('wp_footer',function(){
    add_inline_code('footer');
});