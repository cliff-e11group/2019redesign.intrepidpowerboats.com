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
function e11_image_gallery($args = array(), $use_page_content = false, $get_field_type = 'get_field', $field_location = '', $prefix = false)
{

    if (empty($args) && !$use_page_content):
        return false;
    endif;

    if ($use_page_content):
        $defaults = array(
            'gallery' => $get_field_type($prefix . 'image_gallery', $field_location),
            'caption' => $get_field_type($prefix . 'image_gallery_caption', $field_location),

        );
    else:
        $defaults = array(
            'gallery' => array(),
            'caption' => false,
        );
    endif;

    $data = array_merge($defaults, $args);

    if (!empty($data['gallery'])):
        include 'tpl/image_gallery.tpl.php';
    endif;

    return true;
}
