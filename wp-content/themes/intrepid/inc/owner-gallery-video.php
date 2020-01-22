<?php

function e11_owner_gallery_upload_video_form()
{
    $result = array(
        'cation' => false,
    );

    if (isset($_POST['owner_gallery_upload_video_nonce']) && wp_verify_nonce($_POST['owner_gallery_upload_video_nonce'], 'owner-gallery-upload-video-nonce')) {
        $result = e11_parse_file_video_errors($_FILES['owner_gallery_upload_video'], $_POST['owner_gallery_upload_video_caption']);
        if ($result['error']) {
            echo '<p>ERROR: ' . $result['error'] . '</p>';
        }
    } else {
        echo '<p>Error validating security token, please refresh the page and try again.';
        wp_die();
    }

    //only run if there's a file attached
    $placeholder_exists = false;
    if (!empty($_FILES['owner_gallery_upload_video_placeholder']['size'])) {
        $placeholder_exists = true;
        $image_result = e11_parse_file_errors($_FILES['owner_gallery_upload_video_placeholder'], $_POST['owner_gallery_upload_video_caption']);
        if ($image_result['error']) {
            echo '<p>ERROR: image result ' . $image_result['error'] . '</p>';
            exit;
        }
    }

    if (!isset($_POST['video_user_id'])) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }
    if (!isset($_POST['video_visibility_level'])) {
        print 'Sorry, you did not select a visibility level.';
        exit;
    }

    $args = array(
        'post_title' => $_POST['video_user_id'] . '-' . date('d-m-y'),
        'post_status' => $_POST['video_visibility_level'] === 'private' ? ' publish' : 'pending',
        'post_type' => 'owner-gallery',
        'meta_input' => array(
            'owner' => $_POST['video_user_id'],
        ),
    );

    $post_id = wp_insert_post($args);

    if (!is_wp_error($post_id)):
        if ($_POST['video_visibility_level'] == 'private'):
            update_field('make_upload_private', true, $post_id);
        else:
            update_field('make_upload_private', false, $post_id);
        endif;

        e11_process_video('owner_gallery_upload_video', $post_id, $result['caption']);

        //only run if no error was returned
        if ($placeholder_exists && empty($image_result['error'])) {
            e11_process_upload('owner_gallery_upload_video_placeholder', $post_id, $image_result['caption']);
        }

        wp_redirect(site_url('owner-gallery'));
        exit;
    endif;
}

add_action('admin_post_owner_gallery_upload_video_action', 'e11_owner_gallery_upload_video_form');

add_action('admin_post_nopriv_owner_gallery_upload_video_action', 'e11_redirect_to_home');


function e11_parse_file_video_errors($file = array(), $video_caption = false)
{
    $result = array();
    $result['error'] = 0;
    if ($file['error']) {
        $result['error'] = "No file uploaded or there was an upload error!";
        return $result;
    }
    $result['caption'] = trim(preg_replace('/[^a-zA-Z0-9\s]+/', ' ', $video_caption));

    $video_data = $file['type'];
    if (!in_array($video_data, unserialize(TYPE_WHITELIST_VIDEO))) {
        $result['error'] = 'Incorrect file type!';
    }
    // elseif(($file['size'] > MAX_UPLOAD_SIZE)){
    //   $result['error'] = 'Your video was ' . $file['size'] . ' bytes! It must not exceed ' . MAX_UPLOAD_SIZE . ' bytes.';
    // }
    return $result;
}

function e11_process_video($file, $post_id, $caption)
{
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