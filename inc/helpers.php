<?php
/**
 * Helper Functions
 *
 * Helper functions used throughout the plugin
 *
 * @package ccs
 * @since   0.3.0
 */


namespace ccs\helpers;

function get_all_roles()
{
    global $wp_roles;
    
    $roles = $wp_roles->roles;
    
    return $roles;
}

function dropdown_operators($options,$label,$i)
{

    $operators = [
        ['Page', 'page'],
        ['Post Type', 'post_type'],
    
        ];

    ?>

<select name="ccs_options[<?php echo esc_attr($label); ?>][<?php echo $i ?>][operator]"
    class="ccs-operator">

    <?php foreach($operators as $operator){
        ?>
    <option value="<?php echo $operator[1] ?>"
        <?php echo selected($operator[1] === $options[ $label ][$i]['operator'], true, false); ?>>
        <?php echo $operator[0] ?></option>
        <?php
    }

    ?>


</select>

    <?php

}


function dropdown_post_types($label,$i)
{

    $types = get_post_types(
        [
        'public' => true
        ], 'objects'
    ); 
    ?>
<select name="ccs_options[<?php echo esc_attr($label)?>][<?php echo $i ?>][conditions]"
    id="ccs-post-types-<?php echo $i?>" class="ccs-types">

    <?php 
    
    foreach($types as $type){
        echo '<option>'.$type->name.'</option>';
    }
    
    ?>

</select>

    <?php
}


function dropdown_pages($label,$i,$selected){

    wp_dropdown_pages(
        [
        'name' => "ccs_options[".esc_attr($label)."][".$i."][conditions]",
        'id' => 'ccs-pages-'.$i,
        'selected' => $selected,
        'class' => 'ccs-pages'
        ]
    );
}