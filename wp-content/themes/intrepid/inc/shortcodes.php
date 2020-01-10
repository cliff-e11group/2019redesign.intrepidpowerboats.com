<?php

function e11_button_shortcode($atts = [], $content = null) {
	return '<button class="btn btn--dark">'.$content.'</button>';
}
add_shortcode('button', 'e11_button_shortcode');