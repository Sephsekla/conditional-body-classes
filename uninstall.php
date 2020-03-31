<?php
/**
 * Uninstall
 *
 * Uninstall hooks for CCS
 *
 * @package ccs
 * @since   0.9.5
 */

 /**
  * No direct access please folks
  */
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

$options = array('ccs_body_classes', 'ccs_header_footer','ccs_permissions');

foreach($options as $option){
    delete($option);
}

/**
 * “Don’t cry because it’s over, smile because it happened.”
 * - Dr Seuss
 */