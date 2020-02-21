<?php

/**
 * User Registration Form
 *
 * @package bbPress
 * @subpackage Theme
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

?>

<form method="post" action="<?php bbp_wp_login_action( array( 'context' => 'login_post' ) ); ?>" class="bbp-login-form" id="register-new-user">
	<fieldset class="bbp-form">
		<legend><?php esc_html_e( 'Create an Account', 'bbpress' ); ?></legend>

		<?php do_action( 'bbp_template_before_register_fields' ); ?>

		<div class="bbp-template-notice">
			<ul>
				<li><?php esc_html_e( 'Your username must be unique, and cannot be changed later.', 'bbpress' ); ?></li>
				<li><?php esc_html_e( 'We use your email address to email you a secure password and verify your account.', 'bbpress' ); ?></li>
			</ul>
		</div>

		<div class="bbp-username">
			<label for="user_login"><?php esc_html_e( 'Username', 'bbpress' ); ?>: </label>
			<input type="text" name="user_login" value="<?php bbp_sanitize_val( 'user_login' ); ?>" size="20" id="user_login" maxlength="100" autocomplete="off" />
		</div>

		<div class="bbp-email">
			<label for="user_email"><?php esc_html_e( 'Email', 'bbpress' ); ?>: </label>
			<input type="text" name="user_email" value="<?php bbp_sanitize_val( 'user_email' ); ?>" size="20" id="user_email" maxlength="100" autocomplete="off" />
		</div>

		<?php do_action( 'register_form' ); ?>

		<div class="bbp-username">
            <label for="user_firstname"><?php esc_html_e( 'First Name', 'bbpress' ); ?>: </label>
            <input type="text" name="user_firstname" value="<?php bbp_sanitize_val( 'user_firstname' ); ?>" size="20" id="user_firstname" maxlength="100" autocomplete="off" required/>
        </div>

        <div class="bbp-username">
            <label for="user_lastname"><?php esc_html_e( 'Last Name', 'bbpress' ); ?>: </label>
            <input type="text" name="user_lastname" value="<?php bbp_sanitize_val( 'user_lastname' ); ?>" size="20" id="user_lastname" maxlength="100" autocomplete="off" required/>
        </div>

        <div class="bbp-username">
            <label for="user_phone"><?php esc_html_e( 'Phone', 'bbpress' ); ?>: </label>
            <input type="tel" name="user_phone" value="<?php bbp_sanitize_val( 'user_phone' ); ?>" id="user_phone"  autocomplete="off" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>

        <div class="bbp-username">
            <label for="user_type"><?php esc_html_e( 'User Type', 'bbpress' ); ?>: </label>
            <select name="user_type" id="user_type">
                <option value="owner">Owner</option>
                <option value="fan">Fan</option>
            </select>
        </div>

        <div class="bbp-username bbp-hullnumber">
            <label for="user_hull_number"><?php esc_html_e( 'HullNumber', 'bbpress' ); ?>: </label>
            <input type="text" name="user_hull_number" value="<?php bbp_sanitize_val( 'user_hull_number' ); ?>" size="20" id="user_hull_number" maxlength="100" autocomplete="off" />
    </div>

    <input type="hidden" name="e11_register_forum" id="e11_register_forum" value="e11_register_forum">

    <div class="bbp-submit-wrapper">

        <button type="submit" name="user-submit" class="button submit user-submit"><?php esc_html_e( 'Register', 'bbpress' ); ?></button>

        <?php bbp_user_register_fields(); ?>

    </div>

    </fieldset>

</form>
