<?php

function e11_load_more_ajax_handler(){
	// prepare our arguments for the query
	$args = json_decode( stripslashes( $_POST['query'] ), true );
	$args['paged'] = $_POST['page'] + 1;
	$args['post_status'] = 'publish';
    $args['posts_per_page']	= 4;

	// it is always better to use WP_Query but not here
	query_posts( $args );

	if( have_posts() ) :
		while( have_posts() ): the_post();
			get_template_part( 'post', get_post_format() );
		endwhile;

	endif;
	die;
}

add_action('wp_ajax_e11_load_more', 'e11_load_more_ajax_handler');
add_action('wp_ajax_nopriv_e11_load_more', 'e11_load_more_ajax_handler');