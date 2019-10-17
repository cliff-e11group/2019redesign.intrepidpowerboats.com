<?php
function e11_scripts(){
	if (!is_admin()) {
	### Core
		// Deregister WordPress jQuery and register Google's
		wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', array(), '3.3.1', false);
        wp_enqueue_style('font-awesome-css', '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css?ver=4.8', array(), '2.1.0', false);

        wp_enqueue_style('fancybox-css', STYLEDIR.'/css/libs/fancybox/fancybox.css', false, '1.0');

		// Main Stylsheet
		wp_enqueue_style('css', STYLEDIR.'/style.css', false, time());

		// Main Scripts (this file is concatenated from the files inside of js/development/ )
		wp_enqueue_script('scripts', JSDIR.'/scripts.min.js', array('jquery'), time(), true);
        wp_localize_script('scripts', 'localized', array('ajaxurl' => admin_url('admin-ajax.php'), 'siteurl' => site_url()));
	}
    wp_dequeue_style( 'wp-block-library' );
}

add_action('wp_enqueue_scripts', 'e11_scripts', 100);
