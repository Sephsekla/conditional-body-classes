<?php

namespace ccs\settings;

use ccs\helpers as helpers;


/**
 * class_row
 *
 * @param  mixed $label
 * @param  mixed $i
 * @param  mixed $classes
 * @param  mixed $options
 * @return void
 */
function class_row($field,$label,$i,$classes,$options,$textarea = false){

    

    ?>

    <fieldset id="<?php echo esc_attr($label).'-'.$i; ?>" class="ccs-set postbox" data-index="<?php echo $i ?>" data-label="<?php echo $label ?>">
    <div class="inside">
    <div class="fields">

    <?php if($textarea){

        ?>

<textarea name="<?php echo $field ?>[<?php echo esc_attr($label); ?>][<?php echo $i ?>][classes]"
            required class="large-text code"><?php echo $classes[$i]['classes']?></textarea>

    <?php

    }
    else{

        ?>

<input type="text" name="<?php echo $field ?>[<?php echo esc_attr($label); ?>][<?php echo $i ?>][classes]"
            value="<?php echo $classes[$i]['classes']?>" required class="large-text">

    <?php

    }

    ?>
    
        
            
            <?php helpers\dropdown_operators($field,$options,$label,$i) ?>
    
    
    
        <div class="ccs-conditions" style="display: inline-block">
    
    
            <?php 
        
            switch($options[ $label ][$i]['operator']){
            case 'post_type':
                helpers\dropdown_post_types($field,$label,$i);

                break;
            default:
    

                helpers\dropdown_pages($field,$label,$i,$classes[$i]['conditions']);

            }
        
        
    
        
            ?>

        
        </div>
        </div>
    

        <a name="remove" class="notice-dismiss remove" value="Remove"><span class="screen-reader-text">Remove</span></a>

           </div>
            </fieldset>
    
                <?php

}