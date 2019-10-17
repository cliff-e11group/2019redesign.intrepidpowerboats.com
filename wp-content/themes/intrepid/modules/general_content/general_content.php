<?php
/**
 * @param array $args - override the module with custom content (ie: page builder or some other special content)
 * @param bool $use_page_content - pull in defaults from the page ACF fields
 * @param string $get_field_type - either get_field or get_sub_field depending on if this is coming from page builder or not
 * @param string $field_location - either an ID of the page or 'option' if it is an archive page
 * @param bool $prefix - prepended to the get_field for things like archive site options
 * @return bool
 * Usage on page template / $page_id = get_the_ID(); / e11_module_name(array(), true, 'get_field', $page_id);
 */
function e11_general_content($args = array(), $use_page_content = false, $get_field_type = 'get_field', $field_location = '', $prefix = false)
{

    if (empty($args) && !$use_page_content):
        return false;
    endif;

    if ($use_page_content):
        $defaults = array(
            'content' => $get_field_type($prefix . 'content', $field_location),
            'content_col_2' => $get_field_type($prefix . 'content_col_2', $field_location),
            'content_col_3' => $get_field_type($prefix . 'content_col_3', $field_location),
            'col_count' => $get_field_type($prefix . 'col_count', $field_location),
            'gen_content_number_of_columns' => $get_field_type($prefix . 'gen_content_number_of_columns', $field_location),
        );
    else:
        $defaults = array(
            'content' => '',
            'content_col_2' => false,
            'content_col_3' => false,
            'col_count' => 1,
            'gen_content_number_of_columns' => 1,
        );
    endif;

    $data = array_merge($defaults, $args);

    if (!empty($data['content'])):
        include 'tpl/general_content.tpl.php';
    endif;

    return true;
}
