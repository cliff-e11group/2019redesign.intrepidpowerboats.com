<?php
// check if the flexible content field has rows of data
if (function_exists('have_rows')):
    if (have_rows('page_builder')):
        $page_id = get_the_ID();
        // loop through the rows of data
        while (have_rows('page_builder')) : the_row();
            $layout = get_row_layout();
            $func = 'e11_' . $layout;
            if (function_exists($func)) {
                $func(array(), true, 'get_sub_field', $page_id, false);
            }

        endwhile;

    endif;
endif;
