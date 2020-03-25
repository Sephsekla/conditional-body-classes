<?php

use cbc\options as options;
use cbc\helpers as helpers;

function settings_init()
{
    // register a new setting for "cbc" page
    register_setting(
        'cbc', 'cbc_options', [
        'sanitize_callback' => __NAMESPACE__.'\sanitize_cbc',
        'default' => [
            'cbc_field_permissions' => [
                'administrator'
            ]
        ]
        ]
    );
    
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
    $options = get_option('cbc_options');

    $classes = $options['cbc_field_classes'];

    echo '<pre>';
    print_r($options);
    echo '</pre>';
    // output the field
    ?>


<fieldset id="<?php echo esc_attr($args['label_for']); ?>" data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>">      
<p class="description">
    <?php esc_html_e('Lorem ipsum here\s a description', 'cbc'); ?>
</p> 

<?php

$i = -1;

$operators = [
    ['Page', 'page'],
    ['Post Type', 'post_type'],

];

do{

    ?>

<input type="text" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][classes]" value="<?php echo $classes[$i]['classes']?>">
<select name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][operator]">

<?php foreach($operators as $operator){
    ?>
    <option value="<?php echo $operator[1] ?>" <?php echo selected($operator[1] === $options[ $args['label_for'] ][$i]['operator'], true, false); ?>><?php echo $operator[0] ?></option>
    <?php
}

?>
   
    
</select>
<input type="text" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][conditions]" value="<?php echo $classes[$i]['conditions'] ?>">


<br> 

<?php

$i++;

}
while($i < count($classes));

?>

    </fieldset>      
    <?php
}

function cbc_field_permissions_cb($args)
{
    $options = get_option('cbc_options');


    $roles = helpers\get_all_roles();
  

    // output the field
    ?>


<fieldset id="<?php echo esc_attr($args['label_for']); ?>" data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>">      
<p class="description">
    <?php esc_html_e('Select which roles can access Conditional Body Classes', 'cbc'); ?>
</p>   

    <?php foreach($roles as $key=>$role){


        if ('administrator' === $key) {

            ?>

<input type="checkbox" disabled name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>" <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br> 

    <input type="hidden" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>"> 

            <?php

        }

        else{

            ?>


<input type="checkbox" <?php echo ('administrator' === $key) ? 'disabled' : '' ?> name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][]" value="<?php echo $key ?>" <?php echo isset($options[ $args['label_for'] ]) ? ( checked(in_array($key, $options[ $args['label_for'] ]), true, false) ) : ( '' ); ?>><?php echo $role['name'] ?><br> 



            <?php

        }

    }
    ?>   
    </fieldset>      
    <?php
}
    
   /**
    * register our cbc_settings_init to the admin_init action hook
    */
   add_action('admin_init', __NAMESPACE__.'\settings_init');


function sanitize_cbc($value)
{

    // $value[] = 'sanitized';


    if(!in_array('administrator', $value['cbc_field_permissions'])) {
        add_settings_error('cbc_messages', 'cbc_message', __('Warning, administrator needs access otherwise you\'ll be locked out!', 'cbc'), 'error');

        $value['cbc_field_permissions'][] ='administrator';

    }



    return $value;
}