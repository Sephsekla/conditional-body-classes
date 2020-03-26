<?php
/**
 * Settings Callbacks
 *
 * Callback functions for settings
 *
 * @package ccs
 * @since   0.4.0
 */



namespace ccs\settings;

use ccs\options as options;
use ccs\helpers as helpers;

function ccs_field_permissions_cb($args)
{
    $options = get_option('ccs_options');


    $roles = helpers\get_all_roles();
  

    // output the field
    ?>


<fieldset id="<?php echo esc_attr($args['label_for']); ?>"
    data-custom="<?php echo esc_attr($args['ccs_custom_data']); ?>">
    <p class="description">
        <?php esc_html_e('Select which roles can access Conditional Code Suite', 'ccs'); ?>
    </p>

    <?php foreach($roles as $key=>$role){


        if ('administrator' === $key) {

            ?>

    <input type="checkbox" disabled name="ccs_options[<?php echo esc_attr($args['label_for']); ?>][]"
        value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>

    <input type="hidden" name="ccs_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>">

            <?php

        }

        else{

            ?>


    <input type="checkbox" <?php echo ('administrator' === $key) ? 'disabled' : '' ?>
        name="ccs_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>



            <?php

        }

    }
    ?>
</fieldset>
    <?php
}
    

