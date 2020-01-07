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
function e11_hero($args = array(), $use_page_content = false, $get_field_type = 'get_field', $field_location = '', $prefix = false)
{

    if (empty($args) && !$use_page_content):
        return false;
    endif;

    if ($use_page_content):
        $defaults = array(
            'image' => $get_field_type($prefix . 'hero_image', $field_location),
            'title' => $get_field_type($prefix . 'hero_title', $field_location),
            'content' => $get_field_type($prefix . 'hero_content', $field_location),
        );
    else:
        $defaults = array(
            'image' => array(),
            'title' => false,
            'content' => false,
        );
    endif;

    $data = array_merge($defaults, $args);

    if (!empty($data)):
        include 'tpl/hero.tpl.php';
    endif;

    return true;
}
