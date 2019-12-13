<?php

function e11_image_size_setup(){

	// Add custom image sizes.
	add_image_size('hero', 1440, 9999, false);
	add_image_size('featured-thumb', 280, 180, true);

}
add_action( 'after_setup_theme', 'e11_image_size_setup' );


// Give human-readable names the image sizes.
function e11_custom_size_names( $sizes ) {
	return array_merge( $sizes, array(
		//'header-background' => 'Header Background',
	) );
}
//add_filter( 'image_size_names_choose', 'e11_custom_size_names' );
