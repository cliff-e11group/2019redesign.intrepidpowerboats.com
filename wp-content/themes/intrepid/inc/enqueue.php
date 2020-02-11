<?php
function e11_scripts(){
	if (!is_admin()) {
		global $wp_query;
	### Core
		// Deregister WordPress jQuery and register Google's
		wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', array(), '3.3.1', false);
        wp_enqueue_style('font-awesome-css', '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css?ver=4.8', array(), '2.1.0', false);
        wp_enqueue_script('google-translate', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', array('scripts'), '1.0', true);

		wp_enqueue_script('object-assign-polyfill', 'https://cdn.jsdelivr.net/npm/es6-object-assign@1.1.0/dist/object-assign-auto.min.js', array(), '1.0', true);

		wp_enqueue_style('fancybox-css', STYLEDIR.'/css/libs/fancybox.css', false, '1.0');


		// Main Stylsheet
		wp_enqueue_style('css', STYLEDIR.'/style.css', false, '1.0.0');

		// Main Scripts (this file is concatenated from the files inside of js/development/ )
		wp_enqueue_script('scripts', JSDIR.'/scripts.min.js', array('jquery', 'object-assign-polyfill'), '1.0.1', true);
        wp_localize_script(
			'scripts',
			'localized',
			array(
				'ajaxurl' => admin_url('admin-ajax.php'),
				'siteurl' => site_url(),
				'stylesheeturl' => get_bloginfo('stylesheet_directory'),
				'posts' => json_encode( $wp_query->query_vars ),
				'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
				'max_page' => $wp_query->max_num_pages
			)
		);
	}
	wp_dequeue_style( 'wp-block-library' );

}

add_action('wp_enqueue_scripts', 'e11_scripts', 100);
