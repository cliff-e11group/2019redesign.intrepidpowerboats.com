<?php

function e11_owner_gallery_upload_form(){

    if ( isset( $_POST['owner_gallery_upload_nonce'] ) && wp_verify_nonce($_POST['owner_gallery_upload_nonce'], 'owner-gallery-upload-nonce')){
        $result = e11_parse_file_errors($_FILES['owner_gallery_upload_image'], $_POST['owner_gallery_upload_caption']);
        if($result['error']){
            echo '<p>ERROR: ' . $result['error'] . '</p>';
        }
    }
    if ( !isset( $_POST['user_id']) ) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }
    if ( !isset( $_POST['visibility_level']) ) {
        print 'Sorry, you did not select a visibility level.';
        exit;
    }

    $args = array(
        'post_title' => $_POST['user_id'] . '-' . date('d-m-y'),
        'post_status' => 'pending',
        'post_type' => 'owner-gallery',
        'meta_input' => array(
            'owner' => $_POST['user_id'],
            'visibility' => $_POST['visibility_level'],
        ),
    );

    if($post_id = wp_insert_post($args)){
        e11_process_upload('owner_gallery_upload_image', $post_id, $result['caption']);

        wp_redirect( site_url('owner-gallery') );
        exit;
    }
}
add_action( 'admin_post_owner_gallery_upload_action', 'e11_owner_gallery_upload_form' );


function e11_redirect_to_home(){
    wp_redirect( site_url() );
    exit;
}
add_action( 'admin_post_nopriv_owner_gallery_upload_action', 'e11_redirect_to_home' );


function e11_parse_file_errors($file = '', $image_caption){
    $result = array();
    $result['error'] = 0;
    if($file['error']){
      $result['error'] = "No file uploaded or there was an upload error!";
      return $result;
    }
    $image_caption = trim(preg_replace('/[^a-zA-Z0-9\s]+/', ' ', $image_caption));
    if($image_caption == ''){
      $result['error'] = "Your caption may only contain letters, numbers and spaces!";
      return $result;
    }
    $result['caption'] = $image_caption;
    $image_data = getimagesize($file['tmp_name']);
    if(!in_array($image_data['mime'], unserialize(TYPE_WHITELIST_IMAGE))){
      $result['error'] = 'Your image must be a jpeg, png or gif!';
    }elseif(($file['size'] > MAX_UPLOAD_SIZE)){
      $result['error'] = 'Your image was ' . $file['size'] . ' bytes! It must not exceed ' . MAX_UPLOAD_SIZE . ' bytes.';
    }
    return $result;
}

function e11_process_upload($file, $post_id, $caption){
    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');

    $attachment_id = media_handle_upload($file, $post_id);

    update_post_meta($post_id, '_thumbnail_id', $attachment_id);
    update_post_meta($post_id, 'image_id', $attachment_id);

    $attachment_data = array(
        'ID' => $attachment_id,
        'post_excerpt' => $caption
    );

    wp_update_post($attachment_data);

    return $attachment_id;
}