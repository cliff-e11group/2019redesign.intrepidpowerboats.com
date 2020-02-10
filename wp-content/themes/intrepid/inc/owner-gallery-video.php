<?php

function e11_owner_gallery_upload_video_form(){


    if (!isset($_POST['video_user_id'])) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }

    if (!isset($_POST['owner_gallery_upload_video_nonce']) && wp_verify_nonce($_POST['owner_gallery_upload_video_nonce'], 'owner-gallery-upload-video-nonce')) {
        echo '<p>Error validating security token, please refresh the page and try again.';
        wp_die();
    }

    $accepted = array(
        'video/mp4',
        'video/ogg'
    );

    $ok_uploads = array();


    foreach($_FILES as $fileName => $file){
        if(!in_array($file['type'], $accepted) ){
            continue;
        }

        //get file id
        $fileId = preg_replace('/[^0-9.]/','', $fileName);

         if (!isset($_POST['owner_gallery_upload_video'][$fileId]['visibility_level'])) {
            print 'Sorry, you must choose a visibility level for each file uploaded.';
            exit;
        }

        $result = array(
            'cation' => false,
        );

        $result = e11_parse_file_video_errors($file, $_POST['owner_gallery_upload_video'][$fileId]['caption']);
            if ($result['error']) {
                echo '<p>ERROR: ' . $result['error'] . '</p>';
                exit;
            }

        //only run if there's a file attached
        $accepted_image_types = array(
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
        );
        $placeholder_exists = false;
        $placeholder = $_FILES['owner_gallery_upload_video_placeholder-'.$fileId];

        if (empty($placeholder) || !in_array($placeholder['type'], $accepted_image_types)) {
            echo '<p>Placeholder image must be a jpeg, png or gif!</p>';
            exit;
        } else{
            $placeholder_exists = true;
        }

        $image_result = e11_parse_file_errors($placeholder);
        if ($image_result['error']) {
            echo '<p>ERROR: image result ' . $image_result['error'] . '</p>';
            exit;
        }


        $visiblity_level = $_POST['owner_gallery_upload_video'][$fileId]['visibility_level'];

        //add file and all associated post data to array which will be used once all of them have passed
        $upload_data = array(
            'post_title' => $_POST['user_id'] . '-' . date('d-m-y') . '-' . $fileId,
            'post_status' => $visiblity_level === 'private' ? ' publish' : 'pending',
            'post_type' => 'owner-gallery',
            'meta_input' => array(
                'owner' => $_POST['video_user_id'],
                'caption' => $result['caption']
            ),
        );

        array_push($ok_uploads, $upload_data);


    }
    // echo '<pre>'; print_r($_POST); echo '<br>';
    // echo '<pre>'; print_r($ok_uploads);
    //  exit;


    foreach($ok_uploads as $ok_id => $ok_upload){

        $post_id = wp_insert_post($ok_upload);

        if (!is_wp_error($post_id)):
            if ($ok_upload['post_status'] == 'pending'):
                update_field('make_upload_private', false, $post_id);
            else:
                update_field('make_upload_private', true, $post_id);
            endif;

            e11_process_video('owner_gallery_upload_video-' . ($ok_id + 1), $post_id, $ok_upload['meta_input']['caption']);

            //only run if no error was returned
            if ($placeholder_exists && empty($image_result['error'])) {
                e11_process_upload('owner_gallery_upload_video_placeholder-' . ($ok_id + 1), $post_id, $image_result['caption']);
            }
        endif;
    }

    wp_redirect(site_url('owner-gallery'));
    exit;

}

add_action('admin_post_owner_gallery_upload_video_action', 'e11_owner_gallery_upload_video_form');

add_action('admin_post_nopriv_owner_gallery_upload_video_action', 'e11_redirect_to_home');


function e11_parse_file_video_errors($file = array(), $video_caption = false){

    $result = array();
    $result['error'] = 0;
    if ($file['error']) {
        $result['error'] = "No file uploaded or there was an upload error!";
        return $result;
    }
    $result['caption'] = trim(preg_replace('/[^a-zA-Z0-9\s]+/', ' ', $video_caption));

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