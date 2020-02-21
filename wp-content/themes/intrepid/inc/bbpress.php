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


function e11_forum_registration(  $user_id ){

    if ( empty( $_POST['e11_register_forum'] ) ) {
		return;
    }

    if ( !empty( $_POST['user_firstname'] ) ) {
        update_user_meta( $user_id, 'first_name', $_POST['user_firstname'] );
    }

    if ( !empty( $_POST['user_lastname'] ) ) {
        update_user_meta( $user_id, 'last_name', $_POST['user_lastname'] );
    }

    if ( !empty( $_POST['user_phone'] ) ) {
        update_user_meta( $user_id, 'user_phone', $_POST['user_phone'] );
    }

    if ( !empty( $_POST['user_type'] ) ) {
        update_user_meta( $user_id, 'user_type', $_POST['user_type'] );
    }

    if ( !empty( $_POST['user_hull_number'] ) ) {
        update_user_meta( $user_id, 'user_hull_number', $_POST['user_hull_number'] );
    }

}
add_action('user_register', 'e11_forum_registration');
// registration_errors custom validation
// ?checkemail=registered

function e11_forum_validation($errors, $sanitized_user_login, $user_email){
    // echo '<pre>'; print_r($_POST); echo '</pre>';
    // exit;

    if ( empty( $_POST['e11_register_forum'] ) ) {
		return;
    }

    if ( empty( $_POST['user_firstname'] ) ) {
        $errors->add( $_POST['user_firstname'] , __( 'Please enter a first name' ) );
    }

    if ( empty( $_POST['user_lastname'] ) ) {
        $errors->add($_POST['user_lastname'], __( 'Please enter a last name.' ) );
    }

    if ( empty( $_POST['user_phone'] ) ) {
        $errors->add($_POST['user_phone'], __( 'Please enter a phone number.' ) );
    }

    if ( 'owner' === $_POST['user_type'] && empty( $_POST['user_hull_number']) ){
        $errors->add('custom_reg_field1', __( 'Please enter a hull number.' ) );
    }

    return $errors;
}
add_action('registration_errors', 'e11_forum_validation', 10, 3);
