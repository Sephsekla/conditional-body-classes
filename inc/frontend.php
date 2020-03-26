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

function filter_body_class($class_list){

    $options = get_option('ccs_options');

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