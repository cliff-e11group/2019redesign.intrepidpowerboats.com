<?php

function e11_image_size_setup(){

	// Add custom image sizes.
	add_image_size('hero', 2880, 9999, false);
	add_image_size('featured-thumb', 560, 99999, false);
	add_image_size('image-gallery', 1430, 1460, true);
	add_image_size('boat-featured', 1092, 456, true);
	add_image_size('boat-options', 1120, 612, true);
	add_image_size('boat-archive', 1680, 9999, false);
	add_image_size('boat-cat-pullin', 1970, 830, true);
	add_image_size('event-archive', 1160, 820, true);
	add_image_size('view-gallery', 2880, 1160, true);
	add_image_size('gallery-video', 2360, 9999, false);
	add_image_size('gallery-half', 1160, 9999, false);
	add_image_size('gallery-one-third', 756, 9999, false);
	add_image_size('gallery-two-third', 1556, 9999, false);
	add_image_size('team-member', 320, 360, false);
	add_image_size('map', 760, 370, false);
	add_image_size('nav-image', 520, 560, false);

}
add_action( 'after_setup_theme', 'e11_image_size_setup' );


// Give human-readable names the image sizes.
function e11_custom_size_names( $sizes ) {
	return array_merge( $sizes, array(
		//'header-background' => 'Header Background',
	) );
}
//add_filter( 'image_size_names_choose', 'e11_custom_size_names' );

