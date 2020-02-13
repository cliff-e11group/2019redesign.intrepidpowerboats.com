<?php

function e11_register_post_types() {

    $e11_magic_post_type_maker_array = array(

        array(
            'cpt_single' => 'Boat',
            'cpt_plural' => 'Boats',
            'slug' => 'boats',
            'cpt_icon' => 'dashicons-admin-post',
            'exclude_from_search' => false,
            'hierarchical' => true,
            'supports' => array('title', 'revisions', 'page-attributes', 'thumbnail'),
        ),
        array(
            'cpt_single' => 'Event',
            'cpt_plural' => 'Events',
            'slug' => 'events',
            'cpt_icon' => 'dashicons-admin-post',
            'exclude_from_search' => false,
            'hierarchical' => true,
            'supports' => array('title', 'revisions', 'page-attributes', 'thumbnail'),
        ),
        array(
            'cpt_single' => 'Owner Gallery',
            'cpt_plural' => 'Owner Galleries',
            'slug' => 'owner-gallery',
            'cpt_icon' => 'dashicons-format-gallery',
            'exclude_from_search' => true,
            'hierarchical' => true,
            'supports' => array('title', 'revisions', 'page-attributes', 'thumbnail', 'editor'),
        ),

    );

    foreach( $e11_magic_post_type_maker_array as $post_type ){
        $cpt_single = $post_type['cpt_single'];
        $cpt_plural = $post_type['cpt_plural'];
        $slug = $post_type['slug'];
        $cpt_icon = $post_type['cpt_icon'];
        $exclude_from_search = $post_type['exclude_from_search'];
        $hierarchical = $post_type['hierarchical'];
        $supports = $post_type['supports'];

        $labels = e11_generate_label_array($cpt_plural, $cpt_single);

        $args = e11_generate_post_type_args($labels, $cpt_plural, $cpt_icon, $exclude_from_search, $hierarchical, $supports);

        register_post_type( $slug, $args );
    }

}

add_action( 'init', 'e11_register_post_types', 0 );

function e11_generate_label_array($cpt_plural, $cpt_single){
    $labels = array(
        'name'               => __( $cpt_plural,                                'spark' ),
        'singular_name'      => __( $cpt_single,                                'spark' ),
        'add_new'            => __( 'Add New '.$cpt_single,                     'spark' ),
        'add_new_item'       => __( 'Add New '.$cpt_single,                     'spark' ),
        'edit_item'          => __( 'Edit '.$cpt_single,                        'spark' ),
        'new_item'           => __( 'New '.$cpt_single,                         'spark' ),
        'all_items'          => __( 'All '.$cpt_plural,                         'spark' ),
        'view_item'          => __( 'View '.$cpt_single.' Page',                'spark' ),
        'search_items'       => __( 'Search '.$cpt_plural,                      'spark' ),
        'not_found'          => __( 'No '.$cpt_plural.' found',                 'spark' ),
        'not_found_in_trash' => __( 'No '.$cpt_plural.' found in the Trash',    'spark' ),
        'parent_item_colon'  => '',
        'menu_name'          => $cpt_plural,
    );

    return $labels;
}

function e11_generate_post_type_args($labels, $cpt_plural, $cpt_icon, $exclude_from_search, $hierarchical, $supports){
    $args = array(
        'labels'        	  => $labels,
        'description'   	  => __('Manage '.$cpt_plural, 'spark'),
        'public'        	  => true,
        'menu_position' 	  => 10,
        'hierarchical'		  => $hierarchical,
        'supports'      	  => $supports,
        'has_archive'   	  => true,
        'menu_icon'			  => $cpt_icon,
        'exclude_from_search' => $exclude_from_search
    );

    return $args;
}

function e11_disable_single_cpt_views() {
    $current_post_type = get_query_var('post_type');
    $disable_single_view = array();
    if ( is_single() && in_array( $current_post_type, $disable_single_view )  ) {
        wp_redirect( get_post_type_archive_link($current_post_type), 301 );
        exit;
    }
}
//add_action( 'template_redirect', 'e11_disable_single_cpt_views' );

function e11_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'News';
    $submenu['edit.php'][5][0] = 'News';
    $submenu['edit.php'][10][0] = 'Add News';
    $submenu['edit.php'][16][0] = 'News Tags';
}
function e11_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'News';
    $labels->singular_name = 'News';
    $labels->add_new = 'Add News';
    $labels->add_new_item = 'Add News';
    $labels->edit_item = 'Edit News';
    $labels->new_item = 'News';
    $labels->view_item = 'View News';
    $labels->search_items = 'Search News';
    $labels->not_found = 'No News found';
    $labels->not_found_in_trash = 'No News found in Trash';
    $labels->all_items = 'All News';
    $labels->menu_name = 'News';
    $labels->name_admin_bar = 'News';
}

add_action( 'admin_menu', 'e11_change_post_label' );
add_action( 'init', 'e11_change_post_object' );



function e11_admin_boat_featured_img_label($content, $post_id, $thumbnail_id)
{
    $post = get_post($post_id);

    $content .= '<small><i>Image should be 1088x456px.</small></i>';
    return $content;

}
add_filter('admin_post_thumbnail_html', 'e11_admin_boat_featured_img_label', 10, 3);