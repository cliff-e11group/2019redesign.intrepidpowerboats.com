<?php

function e11_register_menus() {

	// Navigation Menus
	register_nav_menus(
		array(	'main-navigation' => 'Main Navigation',
				'utility-navigation' => 'Utility Navigation',
				'footer-menu-1' => 'Footer Menu 1',
		)
	);

}
add_action( 'init', 'e11_register_menus' );


add_filter('nav_menu_link_attributes', 'e11_nav_images', 10, 3);

function e11_nav_images( $atts, $item, $args ) {

	if ($args->theme_location !== 'main-navigation') {
		return $atts;
	}

	$image = get_field('nav_image', $item);

	if( $image ) {

		$atts['data-src'] = $image['sizes']['nav-image'];

	}

	return $atts;

}