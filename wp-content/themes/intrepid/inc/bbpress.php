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



function  e11_add_form_fields_forum_register(){
    // echo 'shit';
    ?>

    <div class="bbp-username">
        <label for="user_name"><?php esc_html_e( 'Name', 'bbpress' ); ?>: </label>
        <input type="text" name="user_name" value="<?php bbp_sanitize_val( 'user_name' ); ?>" size="20" id="user_name" maxlength="100" autocomplete="off" required/>
    </div>

    <div class="bbp-username">
        <label for="user_phone"><?php esc_html_e( 'Phone', 'bbpress' ); ?>: </label>
        <input type="tel" name="user_phone" value="<?php bbp_sanitize_val( 'user_phone' ); ?>" id="user_phone"  autocomplete="off" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
    </div>

    <div class="bbp-username">
        <label for="user_type"><?php esc_html_e( 'User Type', 'bbpress' ); ?>: </label>
        <select name="user_type" id="user_type">
            <option value="owner">Owner</option>
            <option value="fan">Fan</option>
        </select>
    </div>

    <div class="bbp-username bbp-hullnumber">
        <label for="user_hull_number"><?php esc_html_e( 'HullNumber', 'bbpress' ); ?>: </label>
        <input type="text" name="user_hull_number" value="<?php bbp_sanitize_val( 'user_hull_number' ); ?>" size="20" id="user_hull_number" maxlength="100" autocomplete="off" />
    </div>





    <?php
}
add_action('register_form', 'e11_add_form_fields_forum_register');