<?php

function e11_send_email_on_registration($user_id = 0 ){
    $email_addresses = get_field('registration_email_list', 'option');

    if ($email_addresses){
        $user = get_user_by('ID', $user_id );
        $user_name = $user->display_name;
        $user_email = $user->user_email;


        $to = $email_addresses;
        $subject = 'New Owner Portal Registration';
        $message = 'There has been a new registration to the Owner Portal for user '. $user_name .', at email address '. $user_email;

        wp_mail($to, $subject, $message);
    }
}
add_action( 'bbp_user_register',   'e11_send_email_on_registration', 10, 1 );

function e11_new_topic_email( $post_id){

    $email_addresses = get_field('upload_email_list', 'option');

    if ($email_addresses){
        $topic_title = get_the_title($post_id);
        $topic_link = get_the_permalink($post_id);
        //author
        $author_id = get_post_field('post_author', $post_id);
        $author = get_userdata($author_id);
        $author_name = $author->display_name;


        $to = $email_addresses;
        $subject = 'Owner Portal New Topic - '. $topic_title;
        $message = 'There has been a new topic added to the Owner Portal, entitled ' . $topic_title . ', created by user '.$author_name.'. You can visit the new topic here at <'. $topic_link .'>' ;

        wp_mail($to, $subject, $message);
    }
}
add_action('bbp_new_topic', 'e11_new_topic_email');


function e11_new_reply_email(  $reply_id,  $topic_id,  $forum_id,  $anonymous_data,  $reply_author,  $false,  $reply_to){

    //email list
    $email_addresses = get_field('upload_email_list', 'option');

    if ($email_addresses){
        //author
        $author = get_userdata($reply_author);
        $author_name = $author->display_name;
        //reply
        $reply = get_post_field('post_content', $reply_id);
        //topic
        $topic = get_post_field('post_title', $topic_id);


        $to = $email_addresses;
        $subject = 'New Reply in "'. $topic .'"';
        $message = 'There has been a new reply in the topic "'. $topic .'". User '.$author_name.' says : '.$reply;

        wp_mail($to, $subject, $message);
    }
}
add_action('bbp_new_reply', 'e11_new_reply_email', 7, 10);

