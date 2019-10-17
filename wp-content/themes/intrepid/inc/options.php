<?php

// Options Pages
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page('Site Options');

	/* Example for adding in a child options page
	acf_add_options_page(
		array(
			'page_title' => 'CPT Options',
			'parent_slug' => 'edit.php?post_type=cpt-slug'
		)
	);
	*/

}
