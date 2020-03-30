<?php
/**
 * Sanitisation
 *
 * Sanitisation functions
 *
 * @package ccs
 * @since   0.8.0
 */

namespace ccs\settings;


use ccs\options as options;
use ccs\helpers as helpers;


function sanitize_body_classes($value)
{

    /**
     * Renumber array to avoid a headache later
     */

    if(is_array($value['ccs_field_classes']) && count($value['ccs_field_classes']) > 0){

    $value['ccs_field_classes'] = array_combine(range(0, count($value['ccs_field_classes']) - 1), array_values($value['ccs_field_classes']));

    }


    return $value;
}

function sanitize_header_footer($value)
{

    /**
     * Renumber array to avoid a headache later
     */

    if(is_array($value['ccs_field_header']) && count($value['ccs_field_header']) > 0){

    $value['ccs_field_header'] = array_combine(range(0, count($value['ccs_field_header']) - 1), array_values($value['ccs_field_header']));

    }


    if(is_array($value['ccs_field_footer']) && count($value['ccs_field_footer']) > 0){

        $value['ccs_field_footer'] = array_combine(range(0, count($value['ccs_field_footer']) - 1), array_values($value['ccs_field_footer']));
    
        }


    return $value;
}

function sanitize_permissions($value)
{

    // $value[] = 'sanitized';


    if(!in_array('administrator', $value['ccs_field_permissions'])) {
        add_settings_error('ccs_messages', 'ccs_message', __('Warning, administrator needs access otherwise you\'ll be locked out!', 'ccs'), 'error');

        $value['ccs_field_permissions'][] ='administrator';

    }


    return $value;
}