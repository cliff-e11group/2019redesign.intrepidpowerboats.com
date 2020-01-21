<?php
function e11_upload_baseImage()
{

    $filteredData = substr($_POST['img'], strpos($_POST['img'], ",") + 1);

    //Decode the string
    $unencodedData = base64_decode($filteredData);

    $upload_dir = wp_upload_dir();
    $upload_path = str_replace('/', DIRECTORY_SEPARATOR, $upload_dir['path']) . DIRECTORY_SEPARATOR;

    $filename = $_POST['title'] . '.jpg';
    $file_type = 'image/jpg';
    $hashed_filename = md5($filename . microtime()) . '_' . $filename;

    //Save the image
    file_put_contents($upload_path . $hashed_filename, $unencodedData);

    $attachment = array(
        'post_mime_type' => $file_type,
        'post_title' => preg_replace('/\.[^.]+$/', '', basename($hashed_filename)),
        'post_content' => '',
        'post_status' => 'inherit',
        'guid' => $upload_dir['url'] . '/' . basename($hashed_filename)
    );

    $attach_id = wp_insert_attachment($attachment, $upload_dir['path'] . '/' . $hashed_filename);

    if (!is_wp_error($attach_id)):
        $results = array(
            'status' => 'success',
            'message' => 'Upload Successful.',
            'boat_url' => wp_get_attachment_image_src($attach_id),
        );
        header("Content-Type: application/json");
        echo json_encode($results);
        exit();
    else:
        $results = array(
            'status' => 'error',
            'message' => 'Error inserting new image',
            'boat_url' => false,
        );
        header("Content-Type: application/json");
        echo json_encode($results);
        exit();
    endif;

}

add_action('wp_ajax_e11_upload_baseImage', 'e11_upload_baseImage');
add_action('wp_ajax_nopriv_e11_upload_baseImage', 'e11_upload_baseImage');
