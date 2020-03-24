<?php

use cbc\options as options;
use cbc\helpers as helpers;

function settings_init()
{
    // register a new setting for "cbc" page
    register_setting('cbc', 'cbc_options', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_cbc'
    ]);
    
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

function cbc_field_permissions_cb($args)
{
    $options = get_option('cbc_options');

    print_r($options);

    $roles = helpers\get_all_roles();

    echo '<pre>';

    print_r($roles);

    echo '</pre>';

  

    // output the field
    ?>


<fieldset id="<?php echo esc_attr($args['label_for']); ?>" data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>">      
<p class="description">
    <?php esc_html_e('Select which roles can access Conditional Body Classes', 'cbc'); ?>
</p>   

    <?php foreach($roles as $role){
        ?>

<input type="checkbox" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $role['name'] ?>" <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($role['name'], $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br> 

        <?php

    }
    ?>   
    </fieldset>      
    <?php
}
    
   /**
    * register our cbc_settings_init to the admin_init action hook
    */
   add_action('admin_init', __NAMESPACE__.'\settings_init');


   function sanitize_cbc($value){

    $value[] = 'test';

    add_settings_error('cbc_messages', 'cbc_message', __('Warning, something', 'cbc'), 'error');



    return $value;
   }