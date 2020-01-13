<?php

add_filter( 'gform_pre_render_5', 'e11_boat_model_dropdown' );
add_filter( 'gform_pre_validation_5', 'e11_boat_model_dropdown' );
add_filter( 'gform_pre_submission_filter_5', 'e11_boat_model_dropdown' );
add_filter( 'gform_admin_pre_render_5', 'e11_boat_model_dropdown' );

add_filter( 'gform_pre_render_6', 'e11_boat_model_dropdown' );
add_filter( 'gform_pre_validation_6', 'e11_boat_model_dropdown' );
add_filter( 'gform_pre_submission_filter_6', 'e11_boat_model_dropdown' );
add_filter( 'gform_admin_pre_render_6', 'e11_boat_model_dropdown' );
function e11_boat_model_dropdown( $form ) {

    foreach ( $form['fields'] as &$field ) {

        if ( $field->type != 'select' || strpos( $field->cssClass, 'boat-model-dropdown' ) === false ) {
            continue;
        }

        // you can add additional parameters here to alter the posts that are retrieved
        // more info: http://codex.wordpress.org/Template_Tags/get_posts
        $posts = get_posts( 'numberposts=-1&post_status=publish&post_type=boats' );

        $choices = array();

        foreach ( $posts as $post ) {
            $choices[] = array( 'text' => $post->post_title, 'value' => $post->post_title );
        }

        // update 'Select a Post' to whatever you'd like the instructive option to be
        $field->placeholder = 'MODEL*';
        $field->choices = $choices;

    }

    return $form;
}