<?php

function e11_owner_gallery_upload_form()
{
    if (!isset($_POST['user_id'])) {
        print 'Sorry, there was an error uploading your file.';
        exit;
    }

    if (!isset($_POST['owner_gallery_upload_nonce']) || !wp_verify_nonce($_POST['owner_gallery_upload_nonce'], 'owner-gallery-upload-nonce')){
        print 'Sorry, we could not validate your security token. Please refresh the page and try again.';
        wp_die();
    }




    $accepted = array(
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
    );

    $ok_uploads = array();

    foreach($_FILES as $fileName => $file){
        if(!in_array($file['type'], $accepted) ){
            echo 'Your image must be a jpeg, png or gif!';
            exit;
        }

        //get id of file
        $fileId = preg_replace('/[^0-9.]/','', $fileName);

        // echo '<pre>'; print_r($fileId);

        // exit;

           // echo '<pre>'; print_r($_FILES); echo  '<br>';
        // echo '<pre>'; print_r($_POST); exit;

        // echo $_POST['owner_gallery_upload_image'][$fileId]['visibility_level'];


        if (!isset($_POST['owner_gallery_upload_image'][$fileId]['visibility_level'])) {
            print 'Sorry, you must choose a visibility level for each file uploaded.';
            exit;
        }

        $visiblity_level = $_POST['owner_gallery_upload_image'][$fileId]['visibility_level'];

        $result = array(
            'caption' => false,
        );

        //if successful
        $result = e11_parse_file_errors($file, $_POST['owner_gallery_upload_image'][$fileId]['caption']);
        if ($result['error']) {
            echo '<p>ERROR: ' . $result['error'] . '</p>';
            exit;
        }

        //add file and all associated post data to array which will be used once all of them have passed
        $upload_data = array(
            'post_title' => $_POST['user_id'] . '-' . date('d-m-y') . '-' . $fileId,
            'post_status' => $visiblity_level === 'private' ? ' publish' : 'pending',
            'post_type' => 'owner-gallery',
            'meta_input' => array(
                'owner' => $_POST['user_id'],
                'caption' => $result['caption']
            ),
        );

        array_push($ok_uploads, $upload_data);

    }



    foreach($ok_uploads as $ok_upload){
        // echo '<pre>'; print_r($ok_upload['meta_input']['caption']);

        $post_id = wp_insert_post($ok_upload);

        if (!is_wp_error($post_id)):

            if ($_POST['post_status'] == 'publish'):
                update_field('make_upload_private', true, $post_id);
            else:
                update_field('make_upload_private', false, $post_id);
            endif;

            e11_process_upload('owner_gallery_upload_image', $post_id, $ok_upload['meta_input']['caption']);

        endif;

    }

    wp_redirect(site_url('owner-gallery'));
    exit();

    // exit;

}

add_action('admin_post_owner_gallery_upload_action', 'e11_owner_gallery_upload_form');


function e11_redirect_to_home()
{
    wp_redirect(site_url());
    exit;
}

add_action('admin_post_nopriv_owner_gallery_upload_action', 'e11_redirect_to_home');

define('MAX_UPLOAD_SIZE', 200000);

function e11_parse_file_errors($file = array(), $image_caption = false)
{

    $result = array();
    $result['error'] = 0;
    if ($file['error']) {
        $result['error'] = "No file uploaded or there was an upload error!";
        return $result;
    }
    $image_caption = trim(preg_replace('/[^a-zA-Z0-9\s]+/', ' ', $image_caption));

    $result['caption'] = $image_caption;

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