<?php 
/**
 * Plugin Name: MASS Users Password Reset Pro
 * Plugin URI: https://codecanyon.net/item/mass-users-password-reset-pro/20809350
 * Description: MASS Users Password Reset is a WordPress Plugin that lets you resets the password of all users. It can group the users according to their role and resets password of that group.
 * Version: 1.7
 * Author: KrishaWeb PVT LTD
 * Author URI: https://www.krishaweb.com
 * Text Domain: mass-users-password-reset-pro
 * Domain path: /languages
 * License: GPL2
 */

// If check wp root path
if ( ! defined( 'ABSPATH' ) ) exit;

require_once 'includes/class-mupr.php';
require_once 'includes/class-mupr-ajax.php';

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	require_once 'includes/class-mupr-wp-cli.php';
}

define( 'MASS_USERS_PASSWORD_RESET_PRO_VERSION', '1.7' );
define( 'MASS_USERS_PASSWORD_RESET_PRO_REQUIRED_WP_VERSION', '4.3' );
define( 'MASS_USERS_PASSWORD_RESET_PRO', __FILE__ );
define( 'MASS_USERS_PASSWORD_RESET_PRO_BASENAME', plugin_basename( MASS_USERS_PASSWORD_RESET_PRO ) );
define( 'MASS_USERS_PASSWORD_RESET_PRO_PLUGIN_DIR', plugin_dir_path( MASS_USERS_PASSWORD_RESET_PRO ) );
define( 'MASS_USERS_PASSWORD_RESET_PRO_PLUGIN_URL', plugin_dir_url( MASS_USERS_PASSWORD_RESET_PRO ) );

/**
 * Activation hook
 */
function mass_users_password_reset_pro_activate() {
	// Code here
	if ( defined( 'MASS_USERS_PASSWORD_RESET' ) ) {
		wp_die( wp_sprintf( '<strong>Error: </strong>%s', __( 'Mass Users Password Reset (Free version) is active, please deactivate it and try again.', 'mass-users-password-reset' ) ) );
		exit;
	}
	// If check multisite install OR not
	if ( is_multisite() ) {
		foreach ( get_sites() as $site ) {
			switch_to_blog( $site->blog_id );

			// adding email fields in option table
			$email_content = wp_sprintf(
				'<p>%s {USER_NAME}, </p>
				<p>%s </p>
				<p>%s : {NEW_PASSWORD}</p>', __( 'Dear', 'mass-users-password-reset-pro' ), __( 'Your Password has been changed.', 'mass-users-password-reset-pro' ), __( 'Your new password is', 'mass-users-password-reset-pro' ) );
			$custom_email_options = array(
				'mupr_to_send_reset_link'	=>	'no',
				'from_email'	=>	get_option('admin_email'),
				'from_name'		=> get_bloginfo( 'name' ),
				'subject'			=>	'Reset Password',
				'message'			=>	$email_content
			);
			add_option( 'mupr_email_options', $custom_email_options );
			restore_current_blog();
		}
	} else {
		// adding email fields in option table
		$email_content = wp_sprintf(
			'<p>%s {USER_NAME}, </p>
			<p>%s </p>
			<p>%s : {NEW_PASSWORD}</p>', __( 'Dear', 'mass-users-password-reset-pro' ), __( 'Your Password has been changed.', 'mass-users-password-reset-pro' ), __( 'Your new password is', 'mass-users-password-reset-pro' ) );
		$custom_email_options = array(
			'mupr_to_send_reset_link'	=>	'no',
			'from_email'	=>	get_option('admin_email'),
			'from_name'		=> get_bloginfo( 'name' ),
			'subject'			=>	'Reset Password',
			'message'			=>	$email_content
		);
		add_option( 'mupr_email_options', $custom_email_options );
	}
}
register_activation_hook( __FILE__, 'mass_users_password_reset_pro_activate' );

/**
 * Diactivation hook
 */
function mass_users_password_reset_pro_deactivate() {
	// delete DB entry in options table
	if ( is_multisite() ) {
		foreach ( get_sites() as $site ) {
			switch_to_blog( $site->blog_id );
			delete_option( 'mupr_email_options' );
			restore_current_blog();
		}
	} else {
		delete_option( 'mupr_email_options' );
	}
}
register_deactivation_hook( __FILE__, 'mass_users_password_reset_pro_deactivate' );

/**
 * Load plugin textdomain.
 */
function mupr_init() {
	load_plugin_textdomain( 'mass-users-password-reset-pro', false, basename( dirname( __FILE__ ) ) . '/languages' );
	$mupr_ajax = new MUPR_AJAX();
	$mupr_ajax->mupr_ajax_init();
}
add_action( 'plugins_loaded', 'mupr_init' );
