<?php
/**
 * Frontend
 *
 * Frontend filters
 *
 * @package cbc
 * @since   0.5.0
 */

namespace cbc\frontend;

function filter_body_class($class_list){

    $options = get_option('cbc_options');

    $classes = $options['cbc_field_classes'];

    foreach ($classes as $class){
        $class_list[] = $class['classes'];
    }



    //$class_list[] ="test-class";

    return $class_list;
}




add_filter('body_class',__NAMESPACE__.'\filter_body_class');