<!-- mupr filter start -->
<form action="<?php echo esc_url( add_query_arg( 'page', 'mass_users_password_reset_options' ) ); ?>" method="GET" id="role_filter">
	<div class="mupr-filter-wrap<?php echo is_multisite() ? ' is-multisite' : ''; ?>">
		<?php if ( is_multisite() && is_super_admin() ) : ?>
		<ul>
			<li class="mupr-role-label"><?php _e( 'Sites', 'mass-users-password-reset-pro' ); ?></li>
			<li>
				<div class="mupr-select-box">
					<select class="mupr-selectpicker sites-filter" name="site" data-name="site">
						<?php
						echo $this->mupr_user_sites_filter();
						?>
					</select>
				</div>
			</li>
		</ul>
		<?php endif; ?>
	<ul>
		<li class="mupr-role-label"><?php is_multisite() && is_super_admin() ? _e( 'Role', 'mass-users-password-reset-pro' ) : _e( 'User Role', 'mass-users-password-reset-pro' ); ?></li>
		<li>
			<div class="mupr-select-box">
				<select class="mupr-selectpicker role-filter" name="role_filter" data-name="role_filter">
					<option value="all"><?php _e( 'All', 'mass-users-password-reset-pro' ); ?></option>
					<?php
					echo $this->mupr_user_role_filter();
					?>
				</select>

			</div>
		</li>
		<li class="extra-filter<?php echo ! isset( $_REQUEST['key'] ) ? ' mupr-hidden' : ''; ?>">
			<div class="mupr-select-box">
				<select class="mupr-selectpicker mupr-custom-field" data-live-search="true" data-live-search-placeholder="Search Custom Field" name="mupr_custom_field_filter" data-name="key">
					<option value=""><?php _e( 'Select Custom Field', 'mass-users-password-reset-pro' ); ?></option>
					<?php
					echo $this->mupr_custom_field_filter();
					?>
				</select>
			</div>
		</li>
		<li class="mupr-hidden<?php echo ! isset( $_REQUEST['value'] ) ? ' mupr-hidden' : ''; ?>">
			<div class="mupr-select-box" id="meta_data_filter">
				<select class="mupr-selectpicker" data-live-search="true" data-live-search-placeholder="Search Value">
					<option value=""><?php _e( 'Select value', 'mass-users-password-reset-pro' ); ?></option>
				</select>
			</div>
		</li>
		<li>
			<div class="mupr-filter-btn<?php echo isset( $_REQUEST['key'] ) ? ' active' : ''; ?>">
				<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4643 2.45455H18.8084C18.5556 1.05988 17.3523 0 15.9107 0C14.4691 0 13.2658 1.05988 13.013 2.45455H0.535714C0.240086 2.45455 0 2.699 0 3C0 3.301 0.240086 3.54545 0.535714 3.54545H13.013C13.2658 4.94012 14.4691 6 15.9107 6C17.3523 6 18.5556 4.94012 18.8084 3.54545H20.4643C20.7599 3.54545 21 3.301 21 3C21 2.699 20.7599 2.45455 20.4643 2.45455Z" fill="#798D9E"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4643 19.4545H18.8084C18.5556 18.0599 17.3523 17 15.9107 17C14.4691 17 13.2658 18.0599 13.013 19.4545H0.535714C0.240086 19.4545 0 19.699 0 20C0 20.301 0.240086 20.5455 0.535714 20.5455H13.013C13.2658 21.9401 14.4691 23 15.9107 23C17.3523 23 18.5556 21.9401 18.8084 20.5455H20.4643C20.7599 20.5455 21 20.301 21 20C21 19.699 20.7599 19.4545 20.4643 19.4545Z" fill="#798D9E"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.535715 11.5455L2.19159 11.5455C2.44436 12.9401 3.6477 14 5.08929 14C6.53087 14 7.73421 12.9401 7.98699 11.5455L20.4643 11.5455C20.7599 11.5455 21 11.301 21 11C21 10.699 20.7599 10.4545 20.4643 10.4545L7.98699 10.4545C7.73421 9.05988 6.53087 8 5.08929 8C3.6477 8 2.44436 9.05988 2.19159 10.4545L0.535715 10.4545C0.240086 10.4545 0 10.699 0 11C0 11.301 0.240086 11.5455 0.535715 11.5455Z" fill="#798D9E"/>
				</svg>
			</div>
		</li>
	</ul>
</div>
</form>
<!-- mupr filter end -->
<!-- mupr table start -->
<div class="mupr-user-list">
	<?php
	$users = $this->mupr_user_lists();
	$sortable_data = array_replace( array_flip( explode( ',', $this->options['mupr_reorder'] ) ), $this->user_rows );
	?>
	<table class="wp-list-table widefat mupr-table fixed table-wrap users">
		<thead>
			<?php $mupr_user_row = array_values( $this->options['mupr_user_row'] );
			if ( is_multisite() && is_super_admin() ) :
				$sortable_data['sites'] = __( 'Sites', 'mass-users-password-reset-pro' );
			$mupr_user_row[] = 'sites';
		endif;
		?>
		<tr class="post_header">
			<?php
			$count = 0;
			foreach( $sortable_data as $key => $mupr_rows ) :
				if ( in_array( $key, $mupr_user_row ) ) :
					?>
					<th class="column-primary">
						<?php if ( $count == 0 ) : ?>
							<input type="checkbox" id="select_all"<?php echo empty( $users['list']->results ) ? ' disabled': ''; ?>>
						<?php endif; ?>
						<?php echo esc_html( $mupr_rows ) ?>
					</th>
					<?php $count++; endif; endforeach; ?>
				</tr>
			</thead>
			<tbody id="the-list" data-wp-lists="list:user">
				<?php
				if ( $users['list']->results ) :
					foreach ( $users['list']->results as $user ) :
						$row_count = 0;
						$username = ! empty( $user->first_name ) || ! empty( $user->last_name ) ? wp_sprintf( '%s %s', $user->first_name, $user->last_name  ) : '—';
						?>
						<tr>
							<?php foreach( $sortable_data as $key => $mupr_rows ) :
								if ( in_array( $key, $mupr_user_row ) ) :
									$is_super_admin = '';
									if ( is_multisite() ) {
										if ( in_array( $user->user_login, get_super_admins() ) ) {
											$is_super_admin = __( '&nbsp;— Super Admin', 'mass-users-password-reset-pro' );
										}
									}
									if ( $row_count == 0 ) :
										?>
										<td class="column-primary <?php echo $key; ?> column-<?php echo $key; ?>">
											<input type="checkbox" class="select_user" name="select_user[]" value="<?php echo ( int ) $user->ID; ?>">
											<a href="<?php echo esc_url( get_edit_user_link( $user->ID ) ); ?>" target="_blank">
												<?php
												if ( $key == 'profile_picture' ) :
													echo get_avatar( $user->ID, 32 );
												elseif ( $key == 'role' ) :
													echo reset( $user->roles ) . $is_super_admin;
												else :
													echo $user->$key;
												endif;
												?>
											</a>
											<button type="button" class="toggle-row"> <span class="screen-reader-text"><?php echo _e( 'Show more details', 'mass-users-password-reset-pro' ); ?></span> </button>
										</td>
										<?php else : ?>
											<?php if ( $key == 'user_email' ) : ?>
												<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><a href="mailto:<?php echo $user->user_email; ?>"><?php echo $user->user_email; ?></a></td>
												<?php elseif ( $key == 'user_name' ) : ?>
													<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><?php echo $username; ?></td>
													<?php elseif ( $key == 'role' ) : ?>
														<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><?php echo reset( $user->roles ); ?>
														<?php
														if ( ! empty( $is_super_admin ) ) { ?>
															<strong><?php echo $is_super_admin; ?></strong>
															<?php
														}
														?>
													</td>
													<?php elseif ( $key == 'profile_picture' ) : ?>
														<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><?php echo get_avatar( $user->ID, 32 ); ?></td>
														<?php elseif ( $key == 'sites' ) : ?>
															<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><?php echo join( ',<br/>', $this->mupr_get_sites_by_user( $user->ID, 'blogname' ) ); ?></td>
															<?php else : ?>
																<td class="<?php echo $key; ?> column-<?php echo $key; ?>" data-colname="<?php echo $mupr_rows; ?>"><?php echo $user->$key; ?></td>
															<?php endif; ?>
														<?php endif; ?>
														<?php $row_count++; endif; endforeach; ?>
													</tr>
												<?php endforeach; ?>
												<?php else : ?>
													<tr>
														<td class="column-primary username column-username">
															<p><?php _e( 'No users yet', 'mass-users-password-reset-pro' ); ?></p>
														</td>
													</tr>
												<?php endif; ?>
											</tbody>
										</table>
									</div>
									<!-- mupr table end -->
									<div class="tablenav mupr-tablenav">
										<div class="mupr-action">
											<?php
											$attributes = array(
												'data-cancel-title' =>  __( 'Cancel', 'mass-users-password-reset-pro' ),
												'data-default-title' => __( 'Reset Password', 'mass-users-password-reset-pro' ),
											);
											if ( empty( $users['list']->results ) ) {
												$attributes['disabled'] = 'disabled'; 
											}
											submit_button( __( 'Reset Password', 'mass-users-password-reset-pro' ), 'button mupr-btn', 'reset', false,
												$attributes
											);

			/**
			 * Add new custom action
			 * @var $user object
			 */
			do_action( 'mupr_custom_action', $users );
			?>
		</div>
		<?php
		// Count total item
		$total_items = count( $users['pagination']->results );
		if ( $total_items > 0 ) {
			// Set pagination
			$this->set_pagination_args(
				array(
					'total_items' => $total_items,
					'per_page'    => $this->user_per_page
				)
			);
			echo $this->pagination( 'bottom' );
		}
		?>
	</div>