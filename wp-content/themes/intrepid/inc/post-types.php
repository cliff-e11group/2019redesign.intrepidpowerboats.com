<?php

function e11_register_post_types() {

    $e11_magic_post_type_maker_array = array(
        /*
        array(
            'cpt_single' => 'Ad',
            'cpt_plural' => 'Ads',
            'slug' => 'ads',
            'cpt_icon' => 'dashicons-megaphone',
            'exclude_from_search' => true,
            'hierarchical' => false,
            'supports' => array('title', 'revisions', 'page-attributes'),
        ),
        */
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