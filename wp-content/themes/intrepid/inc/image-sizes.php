<?php

function e11_image_size_setup(){

	// Add custom image sizes.
	add_image_size('hero', 1440, 9999, false);
	add_image_size('featured-thumb', 280, 180, true);
	add_image_size('image-gallery', 715, 730, true);
	add_image_size('boat-featured', 546, 228, true);
	add_image_size('boat-options', 560, 306, true);
	add_image_size('boat-archive', 275, 115, true);
	add_image_size('boat-cat-pullin', 985, 415, true);


}
add_action( 'after_setup_theme', 'e11_image_size_setup' );


// Give human-readable names the image sizes.
function e11_custom_size_names( $sizes ) {
	return array_merge( $sizes, array(
		//'header-background' => 'Header Background',
	) );
}
//add_filter( 'image_size_names_choose', 'e11_custom_size_names' );
