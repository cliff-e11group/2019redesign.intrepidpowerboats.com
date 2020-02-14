<?php
function e11_lazy_load_bab_svg(){

    $results = array(
        'boat_file' => '',
    );

    if (!empty($_POST['boat_id'])):
        $bab_main_image = get_field('bab_main_image', $_POST['boat_id']);
        if (!empty($bab_main_image['url'])):
            $results = array(
                'boat_file' => file_get_contents($bab_main_image['url']),
                'url' => $bab_main_image['url'],
            );
        endif;
    endif;

    header("Content-Type: application/json");
    echo json_encode($results);
    wp_die();
}

add_action('wp_ajax_e11_lazy_load_bab_svg', 'e11_lazy_load_bab_svg');
add_action('wp_ajax_e11_lazy_load_bab_svg', 'e11_lazy_load_bab_svg');