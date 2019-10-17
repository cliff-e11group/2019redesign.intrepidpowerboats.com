<?php
// props https://stackoverflow.com/a/17030234
function e11_get_youtube_video_id($url)
{
    preg_match("/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/", $url, $matches);
    if (count($matches) > 0):
        return $matches[1];
    else:
        $values = false;
        if (preg_match('/youtube\.com\/watch\?v=([^\&\?\/]+)/', $url, $id)) {
            $values = $id[1];
        } else if (preg_match('/youtube\.com\/embed\/([^\&\?\/]+)/', $url, $id)) {
            $values = $id[1];
        } else if (preg_match('/youtube\.com\/v\/([^\&\?\/]+)/', $url, $id)) {
            $values = $id[1];
        } else if (preg_match('/youtu\.be\/([^\&\?\/]+)/', $url, $id)) {
            $values = $id[1];
        } else if (preg_match('/youtube\.com\/verify_age\?next_url=\/watch%3Fv%3D([^\&\?\/]+)/', $url, $id)) {
            $values = $id[1];
        } else {
            // not an youtube video
        }
        return $values;
    endif;
}

// props https://gist.github.com/djekl/5832149
function e11_get_video_details($url)
{
    $host = explode('.', str_replace('www.', '', strtolower(parse_url($url, PHP_URL_HOST))));
    $host = isset($host[0]) ? $host[0] : $host;
    switch ($host) {
        case 'vimeo':
            $video_id = substr(parse_url($url, PHP_URL_PATH), 1);
            $data = json_decode(file_get_contents("http://vimeo.com/api/v2/video/{$video_id}.json"));
            return array(
                'provider' => 'vimeo',
                'title' => $data[0]->title,
                'thumbnail' => $data[0]->thumbnail_large,
            );
            break;
        case 'youtube':
        case 'youtu':
            $video_id = e11_get_youtube_video_id($url);
            $result = wp_remote_get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" . $video_id . "&key=" . GOOGLE_API_KEY);
            if (is_wp_error($result)):
                return array('provider' => 'youtube', 'title' => false, 'thumbnail' => false);
            else:
                $data = json_decode(wp_remote_retrieve_body($result));

                if (property_exists($data, 'error') && !empty($data->error)):
                    return array('provider' => 'youtube', 'title' => false, 'thumbnail' => false);
                endif;
                return array(
                    'provider' => 'youtube',
                    'title' => $data->items[0]->snippet->title,
                    'thumbnail' => $data->items[0]->snippet->thumbnails->maxres->url,
                );
            endif;

            break;
    }

    return array('provider' => false);
}

function e11_get_video_details_for_post($post_id)
{
    if ('page' == get_post_type($post_id)):
        if (array_key_exists('acf', $_POST) && array_key_exists('field_5cc0d042a0f83', $_POST['acf'])):
            foreach ($_POST['acf']['field_5cc0d042a0f83'] as $key => $video_arr):
                if (empty($video_arr['field_5cc0d089a0f87']) || empty($video_arr['field_5cc0d39ed49b9'])):
                    $video_details = e11_get_video_details($video_arr['field_5cc0d04ba0f84']);
                    $_POST['acf']['field_5cc0d042a0f83'][$key]['field_5cc0d39ed49b9'] = $video_details['thumbnail'];
                    if (empty($video_arr['field_5cc0d089a0f87'])):
                        $_POST['acf']['field_5cc0d042a0f83'][$key]['field_5cc0d089a0f87'] = $video_details['title'];
                    endif;
                endif;
                $video_id = e11_get_youtube_video_id($video_arr['field_5cc0d04ba0f84']);
                $_POST['acf']['field_5cc0d042a0f83'][$key]['field_5cc0d071a0f86'] = $video_id;
            endforeach;
        endif;
    endif;

    return $post_id;
}

//add_action('acf/save_post', 'e11_get_video_details_for_post', 1, 1);