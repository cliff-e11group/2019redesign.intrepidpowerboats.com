<?php

function e11_owner_gallery_upload_form(){

    if (!isset($_POST['owner_gallery_upload_nonce']) || !wp_verify_nonce($_POST['owner_gallery_upload_nonce'], 'owner-gallery-upload-nonce')) {
        print 'Sorry, we could not validate your security token. Please refresh the page and try again.';
        exit;
    };

    if (!isset($_POST['user_id'])) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }
    if (!isset($_POST['visibility_level'])) {
        print 'Sorry, you did not select a visibility level.';
        exit;
    }

    $files = e11_reformat_array( $_FILES['owner_gallery_upload_image'] );

    $result = array(
        'caption' => false,
    );

    foreach($files as $file){
        $result = e11_parse_file_errors($file);
        if ($result['error']) {
            echo '<p>ERROR: ' . $result['error'] . '</p>';
            exit;
        }
    }

    $result['caption']  = trim(preg_replace('/[^a-zA-Z0-9\s]+/', ' ', $_POST['owner_gallery_upload_caption']));


    $untouched_files = $_FILES['owner_gallery_upload_image'];
    $count = 1;
    foreach($untouched_files['name'] as  $key => $value){

        $args = array(
            'post_title' => $_POST['user_id'] . '-' . date('d-m-y') .'-'. $count,
            'post_status' => $_POST['visibility_level'] === 'private' ? ' publish' : 'pending',
            'post_type' => 'owner-gallery',
            'meta_input' => array(
                'owner' => $_POST['user_id'],
            ),
        );


        $post_id = wp_insert_post($args);

        if (!is_wp_error($post_id)){

            if ($_POST['visibility_level'] == 'private'):
                update_field('make_upload_private', true, $post_id);
            else:
                update_field('make_upload_private', false, $post_id);
            endif;

            $file = array(
                'name' => $untouched_files['name'][$key],
                'type' => $untouched_files['type'][$key],
                'tmp_name' => $untouched_files['tmp_name'][$key],
                'error' => $untouched_files['error'][$key],
                'size' => $untouched_files['size'][$key]
            );
            $_FILES = array ('owner_gallery_upload_image' => $file);
            // echo '<pre>'; print_r($_FILES); exit;
            foreach ($_FILES as $file => $array) {
                $newupload = e11_process_upload($file, $post_id, $result['caption']);
            }

         }
        $count++;
    }

    wp_redirect(site_url('owner-gallery'));
    exit();
}

add_action('admin_post_owner_gallery_upload_action', 'e11_owner_gallery_upload_form');


function e11_redirect_to_home()
{
    wp_redirect(site_url());
    exit;
}

add_action('admin_post_nopriv_owner_gallery_upload_action', 'e11_redirect_to_home');

define('MAX_UPLOAD_SIZE', 200000);

function e11_parse_file_errors($file = array(), $image_caption = false){

    $result = array();
    $result['error'] = 0;

    foreach($file['error'] as $file_error){
        if($file_error !== 0){
            $result['error'] = $file['error'];
            return $result;
        }
    }

    $accepted = array(
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
    );

    foreach($file['type'] as $file_type){
        if (!in_array($file_type, $accepted)) {
            $result['error'] = 'Your image must be a jpeg, png or gif!';
        }
    }

    return $result;
}

function e11_process_upload($file, $post_id, $caption)
{
    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');

    $attachment_id = media_handle_upload($file, $post_id);

    update_post_meta($post_id, 'image_id', $attachment_id);

    $attachment_data = array(
        'ID' => $attachment_id,
        'post_excerpt' => $caption
    );

    wp_update_post($attachment_data);

    return $attachment_id;
}

function e11_reformat_array($file) {

    $file_ary = array();
    $file_count = count($file['name']);
    $file_keys = array_keys($file);


    for ($i=0; $i<$file_count; $i++) {
        foreach ($file_keys as $key) {
            $file_ary[$i][$key] = $file[$key][$i];
        }
    }

    return $file_ary;
}