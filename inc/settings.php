<?php

use cbc_options as options;

function settings_init()
{
    // register a new setting for "cbc" page
    register_setting('cbc', 'cbc_options');
    
    // register a new section in the "cbc" page
    add_settings_section(
        'cbc_section_classes',
        __('Body Classes.', 'cbc'),
        __NAMESPACE__.'\cbc_section_classes_cb',
        'cbc'
    );

    add_settings_section(
        'cbc_section_permissions',
        __('Permissions', 'cbc'),
        __NAMESPACE__.'\cbc_section_classes_cb',
        'cbc'
    );


    
    // register a new field in the "cbc_section_developers" section, inside the "cbc" page
    add_settings_field(
        'cbc_field_classes', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Classes', 'cbc'),
        __NAMESPACE__.'\cbc_field_classes_cb',
        'cbc',
        'cbc_section_classes',
        [
        'label_for' => 'cbc_field_classes',
        'class' => 'cbc_row',
        'cbc_custom_data' => 'custom',
        ]
    );

    add_settings_field(
        'cbc_field_permissions', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Permissions', 'cbc'),
        __NAMESPACE__.'\cbc_field_permissions_cb',
        'cbc',
        'cbc_section_permissions',
        [
        'label_for' => 'cbc_field_permissions',
        'class' => 'cbc_row',
        'cbc_custom_data' => 'custom',
        ]
    );
}

function cbc_section_classes_cb()
{
    echo 'SECTION CALLBACk';
}

function cbc_field_classes_cb($args)
{
     echo "CLASSEs";
}

function cbc_field_permissions_cb($args){
    $options = get_option( 'cbc_options' );

    print_r($options);

// output the field
?>


<fieldset id="<?php echo esc_attr( $args['label_for'] ); ?>" data-custom="<?php echo esc_attr( $args['cbc_custom_data'] ); ?>">      
<p class="description">
<?php esc_html_e( 'Select which roles can access Conditional Body Classes', 'cbc' ); ?>
</p>   
        <input type="checkbox" name="cbc_options[<?php echo esc_attr( $args['label_for'] ); ?>][]" value="blue" <?php echo isset( $options[ $args['label_for'] ] ) ? ( checked( in_array('blue',$options[ $args['label_for'] ]), true, false ) ) : ( '' ); ?>>Blue<br>      
        <input type="checkbox" name="cbc_options[<?php echo esc_attr( $args['label_for'] ); ?>][]" value="red" <?php echo isset( $options[ $args['label_for'] ] ) ? ( checked( in_array('red',$options[ $args['label_for'] ]), true, false ) ) : ( '' ); ?>>Red<br>         
    </fieldset>      
<?php
}
    
   /**
    * register our cbc_settings_init to the admin_init action hook
    */
   add_action('admin_init', __NAMESPACE__.'\settings_init');