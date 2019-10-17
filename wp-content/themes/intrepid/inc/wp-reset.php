<?php
### Remove some default widgets, including some from Jetpack, Constant Contact, and others.
function unregister_default_widgets() {
	unregister_widget('WP_Widget_Pages');
	unregister_widget('WP_Widget_Calendar');
	unregister_widget('WP_Widget_Archives');
	unregister_widget('WP_Widget_Links');
	unregister_widget('WP_Widget_Meta');
	unregister_widget('WP_Widget_Search');
	unregister_widget('WP_Widget_Text');
	unregister_widget('WP_Widget_Categories');
	unregister_widget('WP_Widget_Recent_Posts');
	unregister_widget('WP_Widget_Recent_Comments');
	unregister_widget('WP_Widget_RSS');
	unregister_widget('WP_Widget_Tag_Cloud');
	unregister_widget('WP_Nav_Menu_Widget');
	unregister_widget('Twenty_Eleven_Ephemera_Widget');
	unregister_widget( 'Jetpack_Subscriptions_Widget' );
	unregister_widget( 'WPCOM_Widget_Facebook_LikeBox' );
	unregister_widget( 'Jetpack_Gallery_Widget' );
	unregister_widget( 'Jetpack_Gravatar_Profile_Widget' );
	unregister_widget( 'Jetpack_Image_Widget' );
	unregister_widget( 'Jetpack_Readmill_Widget' );
	unregister_widget('Jetpack_RSS_Links_Widget');
	unregister_widget( 'Jetpack_Top_Posts_Widget' );
	unregister_widget( 'Jetpack_Twitter_Timeline_Widget' );
	unregister_widget( 'Jetpack_Display_Posts_Widget' );
	unregister_widget( 'constant_contact_form_widget' );
	unregister_widget( 'constant_contact_events_widget' );
	unregister_widget( 'constant_contact_api_widget' );
	unregister_widget( 'bcn_widget' );
}
add_action('widgets_init', 'unregister_default_widgets', 11);

function e11_theme_setup(){

	### Theme support stuff
	add_theme_support( 'menus' ); // Navigation Menus
	add_theme_support( 'post-thumbnails' ); // Post Thumnbails
	add_theme_support( 'html5' ); // HTML5 in WP Generated Elemements
	add_theme_support( 'title-tag' ); // Support title tags for Yoast SEO Plugin

}
add_action( 'after_setup_theme', 'e11_theme_setup' );

### Make image links default to "none"
function wpb_imagelink_setup() {
	$image_set = get_option( 'image_default_link_type' );
	if ($image_set !== 'none') {
		update_option('image_default_link_type', 'none');
	}
}
add_action('admin_init', 'wpb_imagelink_setup', 10);

### Edit other TinyMCE stuff
function e11_tiny_mce_edits( $args ) {
	// Always show kitchen sink in WYSIWYG Editor.
	$args['wordpress_adv_hidden'] = false;

	// Set the block formats.
	$args['block_formats'] = 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6';

	return $args;
}
add_filter( 'tiny_mce_before_init', 'e11_tiny_mce_edits' );

### Move the SEO By Yoast plugin's meta box to a lower priority so it appears at the bottom of Edit screens.
// https://wordpress.org/support/topic/plugin-wordpress-seo-by-yoast-position-seo-meta-box-priority-above-custom-meta-boxes
add_filter( 'wpseo_metabox_prio', function(){return 'low';} );

### Customize the buttons on the WYSIWYG toolbars
// For the Basic WYSIWYG (via ACF)
function e11_toolbars( $toolbars ){

	// Removing the fullscreen button from the light WYSIWYG
	if( ($key = array_search('fullscreen' , $toolbars['Basic' ][1])) !== false ){
	    unset( $toolbars['Basic' ][1][$key] );
	}

	if( ($key = array_search('blockquote' , $toolbars['Basic' ][1])) !== false ){
	    unset( $toolbars['Basic' ][1][$key] );
	}
	if( ($key = array_search('strikethrough' , $toolbars['Basic' ][1])) !== false ){
	    unset( $toolbars['Basic' ][1][$key] );
	}

	//Add the Paste as PlainText to the light WYSIWYG
	if( isset($toolbars['Basic' ][1]) ){
		$toolbars['Basic'][1][] = 'pastetext';
	}

	// return $toolbars - IMPORTANT!
	return $toolbars;
}
add_filter( 'acf/fields/wysiwyg/toolbars' , 'e11_toolbars'  );

// For the FIRST row of the Full WYSIWYG buttons
function e11_tinymce_buttons($buttons) {
	//Remove the format dropdown select and text color selector
	$remove = array('strikethrough','wp_more','fullscreen');

	return array_diff($buttons,$remove);
}
add_filter('mce_buttons','e11_tinymce_buttons');

// For the SECOND row of the Full WYSIWYG buttons
function e11_tinymce_buttons2($buttons) {
	//Remove the format dropdown select and text color selector
	$remove = array('underline','alignjustify','forecolor','outdent','indent','wp_help');

	return array_diff($buttons,$remove);
}
add_filter('mce_buttons_2','e11_tinymce_buttons2');

function make_href_root_relative($input) {
	return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '/!', '/', $input);
}

function root_relative_permalinks($input) {
	return make_href_root_relative($input);
}
add_filter( 'the_permalink', 'root_relative_permalinks' );

### SVG in media uploader
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// Prevents the taxonomy checkbox lists from reordering themselves when one or more terms are checked.
// http://stackoverflow.com/questions/4830913/wordpress-category-list-order-in-post-edit-page
function taxonomy_checklist_checked_ontop_filter ($args){
    $args['checked_ontop'] = false;
    return $args;
}
add_filter('wp_terms_checklist_args','taxonomy_checklist_checked_ontop_filter');

### Add excerpts to pages
function e11_add_excerpts_to_pages() {
     add_post_type_support( 'page', 'excerpt' );
}
add_action( 'init', 'e11_add_excerpts_to_pages' );

/*
	Disable Default Dashboard Widgets
	@ https://digwp.com/2014/02/disable-default-dashboard-widgets/
*/
function disable_default_dashboard_widgets() {
    global $wp_meta_boxes;
    // wp..
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
    // bbpress
    unset($wp_meta_boxes['dashboard']['normal']['core']['bbp-dashboard-right-now']);
    // yoast seo
    unset($wp_meta_boxes['dashboard']['normal']['core']['yoast_db_widget']);
    // gravity forms
    unset($wp_meta_boxes['dashboard']['normal']['core']['rg_forms_dashboard']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['tribe_dashboard_widget']);
}
add_action('wp_dashboard_setup', 'disable_default_dashboard_widgets', 999);

function e11_admin_remove_add_columns($columns)
{
    global $wpseo_meta_columns;
    if ($wpseo_meta_columns) {
        remove_action('restrict_manage_posts', array($wpseo_meta_columns, 'posts_filter_dropdown'));
        remove_action('restrict_manage_posts', array($wpseo_meta_columns, 'posts_filter_dropdown_readability'));
    }
    unset($columns['wpseo-score']);
    unset($columns['wpseo-score-readability']);
    unset($columns['wpseo-title']);
    unset($columns['wpseo-metadesc']);
    unset($columns['wpseo-focuskw']);
    unset($columns['wpseo-links']);
    unset($columns['wpseo-linked']);
    unset($columns['comments']);
    unset($columns['tags']);

    return $columns;
}

add_filter('manage_edit-page_columns', 'e11_admin_remove_add_columns');

function e11_add_id_to_body($classes)
{

    if (!is_user_logged_in()):
        return $classes;
    endif;

    if (is_admin()):

        $user_info = get_userdata(get_current_user_id());
        $classes .= implode(' ', $user_info->roles);
    endif;

    return $classes;
}

add_filter('admin_body_class', 'e11_add_id_to_body');