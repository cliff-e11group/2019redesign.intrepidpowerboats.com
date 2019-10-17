<?php
$functionFiles = scandir(TEMPLATEPATH . '/inc');
foreach ($functionFiles as $functionFile) {
    if ($functionFile == '.' || $functionFile == '..'):
        continue;
    endif;

    $functionFile = TEMPLATEPATH . '/inc/' . $functionFile;

    if (file_exists($functionFile)) {
        require_once($functionFile);
    }
}

// Modules
$module_paths = glob(TEMPLATEPATH . '/modules/*', GLOB_ONLYDIR);
foreach ($module_paths as $module_path) {
    $module_name = basename($module_path);
    $file_name = e11_get_stylesheet_path() . '/modules/' . $module_name . '/' . $module_name . '.php';

    if (file_exists($file_name)) {
        require_once($file_name);
    }

}

// add autocomplete = off for PCI compliance
add_action('login_init', 'e11_autocomplete_login_init');
function e11_autocomplete_login_init()
{
    ob_start();
}

add_action('login_form', 'e11_autocomplete_login_form');
function e11_autocomplete_login_form()
{
    $content = ob_get_contents();
    ob_end_clean();
    $content = str_replace('id="user_pass"', 'id="user_pass" autocomplete="off"', $content);
    $content = str_replace('id="user_login"', 'id="user_login" autocomplete="off"', $content);
    echo $content;
}

add_filter( 'rest_authentication_errors', function( $result ) {
    if ( ! empty( $result ) ) {
        return $result;
    }
    if ( ! is_user_logged_in() ) {
        return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
    }
    return $result;
});

add_filter('oembed_result', 'e11_hide_youtube_related_videos', 10, 3);
function e11_hide_youtube_related_videos($data, $url, $args = array()) {

    //Autoplay
    $autoplay = strpos($url, "autoplay=1") !== false ? "&autoplay=1" : "";

    //Setup the string to inject into the url
    $str_to_add = apply_filters("hyrv_extra_querystring_parameters", "wmode=transparent&amp;") . 'rel=0';

    //Regular oembed
    if (strpos($data, "feature=oembed") !== false) {
        $data = str_replace('feature=oembed', $str_to_add . $autoplay . '&amp;feature=oembed', $data);

        //Playlist
    } elseif (strpos($data, "list=") !== false) {
        $data = str_replace('list=', $str_to_add . $autoplay . '&amp;list=', $data);
    }

    //All Set
    return $data;
}
