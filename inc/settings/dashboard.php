<?php
/**
 * Dashboard Callbacks
 *
 * Callback functions for dashboard
 *
 * @package ccs
 * @since   0.9.0
 */



namespace ccs\settings;

use ccs\options as options;
use ccs\helpers as helpers;

function dashboard_html(){



    ?>
  <div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <table class="widefat">
    <tr>
		<th class="row-title">Information</th>
	</tr>
    <tr>
        <td>
            <?php  echo 'You have '.count_rules('ccs_body_classes','ccs_field_classes').' <a href="'.admin_url('admin.php?page=ccs-body-class').'">conditional body classes</a>'; ?>
        </td>
    </tr>
    <tr>
        <td>
            <?php  echo 'You have '.count_rules('ccs_header_footer','header').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">header code snippets</a>'; ?>
        </td>
    </tr>
    <tr>
        <td>
            <?php  echo 'You have '.count_rules('ccs_header_footer','footer').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">footer code snippets</a>'; ?>
        </td>
    </tr>
    <tr>
        <td>
            <?php  echo 'You have '.count_rules('ccs_header_footer','body').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">body code snippets</a>'; ?>
        </td>
    </tr>

    </table>
    </div>


    <?php


}

function count_rules($option,$subfield){
    $option_array = get_option($option);

    return is_countable($option_array[$subfield]) ? count($option_array[$subfield]) : 0;
}