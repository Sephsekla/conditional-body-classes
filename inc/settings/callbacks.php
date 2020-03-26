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



    <p class="description">
        <?php esc_html_e('Lorem ipsum here\s a description', 'cbc'); ?>
    </p>

    <?php

    $i = 0;

    $operators = [
    ['Page', 'page'],
    ['Post Type', 'post_type'],

    ];

    $types = get_post_types([
        'public' => true
    ],'objects'); 

    do{

        ?>

<fieldset id="<?php echo esc_attr($args['label_for']).'-'.$i; ?>" class="cbc-set" data-custom="<?php echo esc_attr($args['cbc_custom_data']); ?>" data-index="<?php echo $i ?>">

    <input type="text" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][classes]"
        value="<?php echo $classes[$i]['classes']?>">
    <select name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][operator]" class="cbc-operator">

        <?php foreach($operators as $operator){
            ?>
        <option value="<?php echo $operator[1] ?>"
            <?php echo selected($operator[1] === $options[ $args['label_for'] ][$i]['operator'], true, false); ?>>
            <?php echo $operator[0] ?></option>
            <?php
        }

        ?>


    </select>
    <div class="cbc-conditions" style="display: inline-block">
    <!--<input type="text" name="cbc_options[<?php echo esc_attr($args['label_for']); ?>][<?php echo $i ?>][conditions]"
        value="<?php echo $classes[$i]['conditions'] ?>"> -->



    <?php 
    
    switch($options[ $args['label_for'] ][$i]['operator']){
        case 'page':
            wp_dropdown_pages([
                'name' => "cbc_options[".esc_attr($args['label_for'])."][".$i."][conditions]",
                'id' => 'cbc-pages-'.$i,
                'selected' => $classes[$i]['conditions'],
                'class' => 'cbc-pages'
            ]);
            break;
        default:

        ?>
        <select name= "cbc_options[<?php echo esc_attr($args['label_for'])?>][<?php echo $i ?>][conditions]" id="cbc-post-types-<?php echo $i?>" class="cbc-types">
    
        <?php 
        
            foreach($types as $type){
                echo '<option>'.$type->name.'</option>';
            }
        
        ?>
        
        </select>

        <?php
    }
    
    

    
   ?>
    
    </div>

    <br>

        <?php

        $i++;

        ?>

        </fieldset>
            <?php

    }
    while($i < count($classes));


}

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
    

