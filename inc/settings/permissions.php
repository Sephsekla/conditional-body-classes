<?php
/**
 * Settings Callbacks
 *
 * Callback functions for settings
 *
 * @package cbc
 * @since   0.4.0
 */



namespace cbc\settings;

use cbc\options as options;
use cbc\helpers as helpers;

function cbc_field_permissions_cb($args)
{
    $options = get_option('cbc_options');


    $roles = helpers\get_all_roles();
  

    // output the field
    ?>


<fieldset id="<?php echo esc_attr($args['label_for']); ?>"
    data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>">
    <p class="description">
        <?php esc_html_e('Select which roles can access Conditional Body Classes', 'cbc'); ?>
    </p>

    <?php foreach($roles as $key=>$role){


        if ('administrator' === $key) {

            ?>

    <input type="checkbox" disabled name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]"
        value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>

    <input type="hidden" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>">

            <?php

        }

        else{

            ?>


    <input type="checkbox" <?php echo ('administrator' === $key) ? 'disabled' : '' ?>
        name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>"
            <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br>



            <?php

        }

    }
    ?>
</fieldset>
    <?php
}
    

