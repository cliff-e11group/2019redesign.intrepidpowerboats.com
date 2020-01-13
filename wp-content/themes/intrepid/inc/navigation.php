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
