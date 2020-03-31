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

	<div id="icon-options-general" class="icon32"></div>
	<h1><?php echo esc_html(get_admin_page_title()) ?></h1>

	<div id="poststuff">

		<div id="post-body" class="metabox-holder columns-2">

			<!-- main content -->
			<div id="post-body-content">

				<div class="meta-box-sortables ui-sortable">

					<div class="postbox">

						<h2><span><?php esc_attr_e( 'Conditional Code Suite', 'ccs' ); ?></span></h2>

						<div class="inside">
                            <p>Version <?php echo ccs_PLUGIN_VERSION ?></p>
							<p><?php esc_attr_e(
									'Conditional Code Suite allows you to add styles and scripts to specific pages or post types without having to touch your theme\'s files.',
									'ccs'
								); ?></p>

                            <hr>
                            <p><strong>Changelog</strong></p>
                            
						</div>

                        
						<!-- .inside -->

					</div>
					<!-- .postbox -->

				</div>
				<!-- .meta-box-sortables .ui-sortable -->

			</div>
			<!-- post-body-content -->

			<!-- sidebar -->
			<div id="postbox-container-1" class="postbox-container">

				<div class="meta-box-sortables">

					<div class="postbox">

						<h2><span><?php esc_attr_e(
									'Information', 'ccs'
								); ?></span></h2>

						<div class="inside">
							<ul> 
            <li><?php  echo 'You have '.count_rules('ccs_body_classes','ccs_field_classes').' <a href="'.admin_url('admin.php?page=ccs-body-class').'">conditional body classes</a>'; ?></li>
      
            <li><?php  echo 'You have '.count_rules('ccs_header_footer','header').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">header code snippets</a>'; ?></li>
       
            <li><?php  echo 'You have '.count_rules('ccs_header_footer','footer').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">footer code snippets</a>'; ?></li>
      
            <li><?php  echo 'You have '.count_rules('ccs_header_footer','body').' <a href="'.admin_url('admin.php?page=ccs-header-footer').'">body code snippets</a>'; ?></li>
     </ul>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->

				</div>
				<!-- .meta-box-sortables -->

			</div>
			<!-- #postbox-container-1 .postbox-container -->

		</div>
		<!-- #post-body .metabox-holder .columns-2 -->

		<br class="clear">
	</div>
	<!-- #poststuff -->

</div> <!-- .wrap -->


    <?php


}

function count_rules($option,$subfield){
    $option_array = get_option($option);

    return is_countable($option_array[$subfield]) ? count($option_array[$subfield]) : 0;
}