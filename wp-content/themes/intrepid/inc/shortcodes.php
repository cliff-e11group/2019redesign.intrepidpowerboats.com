<?php

function e11_button_shortcode($atts = [], $content = null) {
	return '<button class="btn btn--outline-dark btn--outline">'.$content.'</button>';
}
add_shortcode('button', 'e11_button_shortcode');

add_action('admin_init', 'e11_button_shortcode_select');
 function e11_button_shortcode_select() {

      //Abort early if the user will never see TinyMCE
      if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
           return;

      //Add a callback to regiser our tinymce plugin
      add_filter('mce_external_plugins', 'e11_button_register_tinymce_plugin');

      // Add a callback to add our button to the TinyMCE toolbar
      add_filter('mce_buttons', 'e11_add_tinymce_button');
}

//This callback registers our plug-in
function e11_button_register_tinymce_plugin($plugin_array) {
    $plugin_array['e11_button'] = get_stylesheet_directory_uri() . '/js/button_shortcode.js';
    return $plugin_array;
}

//This callback adds our button to the toolbar
function e11_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
    $buttons[] = "e11_button";
    // echo '<pre>'; print_r($buttons);
    return $buttons;
}
