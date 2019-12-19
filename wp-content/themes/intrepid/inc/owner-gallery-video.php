<?php

function e11_owner_gallery_upload_video_form(){

    // echo '<pre>'; print_r($_FILES);
    // exit;

    if ( isset( $_POST['owner_gallery_upload_video_nonce'] ) && wp_verify_nonce($_POST['owner_gallery_upload_video_nonce'], 'owner-gallery-upload-video-nonce')){
        $result = e11_parse_file_video_errors($_FILES['owner_gallery_upload_video'], $_POST['owner_gallery_upload_video_caption']);
        if($result['error']){
            echo '<p>ERROR: ' . $result['error'] . '</p>';
        }

        if($_FILES['owner_gallery_upload_video_placeholder']){
            $image_result = e11_parse_file_errors($_FILES['owner_gallery_upload_video_placeholder'], $_POST['owner_gallery_upload_video_caption']);
            if($image_result['error']){
                echo '<p>ERROR: ' . $image_result['error'] . '</p>';
            }
        }

    }
    if ( !isset( $_POST['video_user_id']) ) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }
    if ( !isset( $_POST['video_visibility_level']) ) {
        print 'Sorry, you did not select a visibility level.';
        exit;
    }

    $args = array(
        'post_title' => $_POST['video_user_id'] . '-' . date('d-m-y'),
        'post_status' => 'pending',
        'post_type' => 'owner-gallery',
        'meta_input' => array(
            'owner' => $_POST['video_user_id'],
            'visibility' => $_POST['video_visibility_level'],
        ),
    );

    if($post_id = wp_insert_post($args)){
        e11_process_video('owner_gallery_upload_video', $post_id, $result['caption']);

        if($image_result){
            e11_process_upload('owner_gallery_upload_video_placeholder', $post_id, $image_result['caption']);
        }

        wp_redirect( site_url('owner-gallery') );
        exit;
    }
}
add_action( 'admin_post_owner_gallery_upload_video_action', 'e11_owner_gallery_upload_video_form' );

add_action( 'admin_post_nopriv_owner_gallery_upload_video_action', 'e11_redirect_to_home' );


function e11_parse_file_video_errors($file = '', $image_caption){
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
    if(!in_array($image_data['mime'], unserialize(TYPE_WHITELIST_VIDEO))){
      $result['error'] = 'Incorrect file type!';
    }elseif(($file['size'] > MAX_UPLOAD_SIZE)){
      $result['error'] = 'Your video was ' . $file['size'] . ' bytes! It must not exceed ' . MAX_UPLOAD_SIZE . ' bytes.';
    }
    return $result;
}

function e11_process_video($file, $post_id, $caption){
    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');

    $attachment_id = media_handle_upload($file, $post_id);

    update_post_meta($post_id, 'video_id', $attachment_id);

    $attachment_data = array(
        'ID' => $attachment_id,
        'post_excerpt' => $caption
    );

    wp_update_post($attachment_data);

    return $attachment_id;
}