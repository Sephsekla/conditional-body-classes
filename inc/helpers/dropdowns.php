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

function dropdown_operators($field,$options,$label,$i)
{

    $operators = [
        ['Page', 'page'],
        ['Post Type', 'post_type'],
    
        ];

    ?>

<select name="<?php echo $field ?>[<?php echo esc_attr($label); ?>][<?php echo $i ?>][operator]"
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


function dropdown_post_types($field,$label,$i)
{

    $types = get_post_types(
        [
        'public' => true
        ], 'objects'
    ); 
    ?>
<select name="<?php echo $field ?>[<?php echo esc_attr($label)?>][<?php echo $i ?>][conditions]"
    id="ccs-post-types-<?php echo $i?>" class="ccs-types">

    <?php 
    
    foreach($types as $type){
        echo '<option>'.$type->name.'</option>';
    }
    
    ?>

</select>

    <?php
}


function dropdown_pages($field,$label,$i,$selected){

    wp_dropdown_pages(
        [
        'name' => $field."[".esc_attr($label)."][".$i."][conditions]",
        'id' => 'ccs-pages-'.$i,
        'selected' => $selected,
        'class' => 'ccs-pages'
        ]
    );
}