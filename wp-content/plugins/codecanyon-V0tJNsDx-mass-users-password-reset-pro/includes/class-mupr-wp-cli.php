<?php
// If check class exists or not
if ( ! class_exists( 'MUPR_WP_CLI' ) ) {
	
	class MUPR_WP_CLI {

		private $mupr;

		/**
		 * Class construct
		 */
		public function __construct() {
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				$this->mupr = new Mass_users_password_reset();
			}
		}

		/**
		 * Update site options
		 * @param array $args
		 * @param array $assoc_args
		 */
		public function update( $args = array(), $assoc_args = array() ) {
			// If check args and assoc_args empty OR not
			if ( ! empty( $args ) && ! empty( $assoc_args ) ) {
				// If check args
				if ( in_array( 'option', $args ) ) {
					$message = '';
					$errors = array();
					// Get current options
					$option = $this->mupr->options;
					// If check reset_link exists OR not
					if ( array_key_exists( 'reset_link', $assoc_args ) && ! empty( $assoc_args['reset_link'] ) ) {
						$message = wp_sprintf( '%s %s', __( 'Reset link', 'mass-users-password-reset-pro' ), $assoc_args['reset_link'] );
						$option['mupr_to_send_reset_link'] = $assoc_args['reset_link'] == 'enabled' ? 'yes' : 'no';
					}

					// If check test_mode in_array
					if ( array_key_exists( 'test_mode', $assoc_args ) && array_key_exists( 'test_mode_email', $assoc_args ) ) {
						// If check test_mode in_array
						if ( ! empty( $assoc_args['test_mode_email'] ) ) {
							if ( is_email( $assoc_args['test_mode_email'] ) ) {
								$option['mupr_testmode'] = $assoc_args['test_mode'] == 'enabled' ? true : false;
								$option['mupr_testmode_email'] = $assoc_args['test_mode_email'];
								// Success message
								$message = wp_sprintf( '%s %s', __( 'Test mode', 'mass-users-password-reset-pro' ), $assoc_args['test_mode'] );
							} else {
								$errors['invalid_email'] = __( 'The e-mail address entered is invalid', 'mass-users-password-reset-pro' );
							}
						}
					} else if ( array_key_exists( 'test_mode', $assoc_args ) && $assoc_args['test_mode'] == 'disable' ) {
							$option['mupr_testmode'] = false;
							// Success message
							$message = wp_sprintf( '%s %s', __( 'Test mode', 'mass-users-password-reset-pro' ), $assoc_args['test_mode'] );
					} else if( array_key_exists( 'test_mode', $assoc_args ) && ! array_key_exists( 'test_mode_email', $assoc_args ) ) {
						$errors['invalid_email'] = __( 'Missing arguments', 'mass-users-password-reset-pro' );
					}

					// If check error is empty OR not
					if ( empty( $errors ) ) {
						// Update options
						update_option( 'mupr_email_options', $option );
						// Success message
						WP_CLI::success( $message );
						if ( is_multisite() ) {
							WP_CLI::warning( __( 'Multisite is installed, You can use --url="siteurl" argument' ) );
						}
					} else {
						foreach( $errors as $error ) {
							WP_CLI::error( $error );
						}
					}
				} else {
					WP_CLI::error( wp_sprintf( '%s %s', __( 'Wrong arguments', 'mass-users-password-reset-pro' ), join( ', ', $args ) ) );
				}
			} else {
				WP_CLI::error( __( 'Missing arguments', 'mass-users-password-reset-pro' ) );
			}
		}

		/**
		 * Add command
		 * @param array $args
		 * @param array $assoc_args
		 */
		public function reset( $args = array(), $assoc_args = array() ) {
			// Setp defalut options.
			$default_options = array(
				'all'			=> false,
				'role'			=> '',
				'user_id'		=> '',
				'meta_key'		=> '',
				'meta_value'	=> '',
				'meta_compare'	=> '=',
				'site_url'		=> ''
			);
			// WP filter parse args
			$arguments = wp_parse_args( $assoc_args, $default_options );
			if ( is_multisite() && ! empty( $arguments['site_url'] ) ) {
				$blog_id = $this->get_blog_id( $arguments['site_url'] );
				unset( $arguments['site_url'] );
				$arguments['blog_id'] = $blog_id;
			}
			// Explode user id by whitespace.
			$arguments['include'] = array_filter( explode( ' ', $arguments['user_id'] ) );
			// Remove query args.
			unset( $arguments['user_id'] );
			if ( $arguments['meta_key'] == '' || $arguments['meta_value'] == '' ) {
				unset( $arguments['meta_compare'] );
			}
			// Table fields
			$fields = array( 'ID', 'user_login', 'user_email' );
			$data = array();
			$user_query = array_filter( $arguments );
			// If check args
			if ( count( $user_query ) >= 1 || ( isset( $user_query['all'] ) && $user_query['all'] == true ) ) {
				// If check array value
				if ( $user_query ) {
					unset( $user_query['all'] );
					if ( empty( $user_query ) ) {
						$user_query['role'] = '';
						$filter_query = $user_query;
					} else {
						$filter_query = array_filter( $user_query );
					}
					$users = new WP_User_Query( $user_query );
					$results = ( array ) $users->results;
					$total = count( $results );
						if ( ! empty( $results ) ) {
							foreach ( $results as $user ) {
								$data[] = array(
									'ID' 			=> $user->ID,
									'user_login'	=> $user->user_login,
									'user_email'	=> $user->user_email
								);
								$this->mupr->send_email_format( $user->ID );
								do_action( 'mupr_cli_after_reset', $user );
							}
							$successful_msg = sprintf( _n( '%s user password has been reset successfully','%s users password have been reset successfully', $total, 'mass-users-password-reset-pro' ), $total );
							// Show total users
							WP_CLI\Utils\format_items( 'table', $data, $fields );
							// Success message
							WP_CLI::success( $successful_msg );
							if ( is_multisite() ) {
								WP_CLI::warning( __( 'Multisite is installed, You can use --site_url="siteurl" OR blog_id="ID" argument', 'mass-users-password-reset-pro' ) );
							}
					} else {
						WP_CLI::error( __( 'No users', 'mass-users-password-reset-pro' ) );
					}
				}
			} else {
				WP_CLI::error( __( 'Missing arguments', 'mass-users-password-reset-pro' ) );
			}
		}

		/**
		 * Get blog ID by URL
		 * @param string $url
		 * @return int blog IDs
		 */
		private function get_blog_id( $url = '' ) {
			$url = preg_replace( '#^https?://#', '', $url );
			$sites = get_sites();
			$site_data = array();
			foreach ( $sites as $site ) {
				$site_data[$site->blog_id] = $site->domain . $site->path;
			}
			$blog_id = array_search( $url, $site_data );
			return $blog_id > 0 ? $blog_id : 1;
		}
	}
	WP_CLI::add_command( 'mupr', 'MUPR_WP_CLI' );
}
