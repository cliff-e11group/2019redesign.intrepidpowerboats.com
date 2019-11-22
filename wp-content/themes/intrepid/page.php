<?php
get_header();
the_post();
global $post;
if ($post->post_parent > 0) {
    $parents = get_post_ancestors($post->ID);
    $parent = array_pop($parents);
} else {
    $parent = $post->post_parent;
}
?>
<main class="main page-default">
    <?php if(is_bbpress()) : ?>
    <div class="owners-portal">
        <?php if(is_user_logged_in()) : ?>
            <div class="container">
                <nav class="portal-nav">
                    <a href="<?php echo site_url('forums'); ?>" class="portal-nav__link portal-nav__link--active"><span><?php echo file_get_contents(IMAGES . '/caret-right.svg'); ?></span>Forum</a>
                    <a href="<?php echo site_url('forums'); ?>" class="portal-nav__link"><span><?php echo file_get_contents(IMAGES . '/caret-right.svg'); ?></span>Gallery</a>
                </nav>
                <div class=""><?php the_content(); ?></div>
            </div>
        <?php else : ?>
        <section class="portal-login">
            <div class="container">
                <div class="portal-login__container portal-login__login">
                    <h1 class="portal-login__title">Owner's Portal Login</h1>
                    <div>
                        <div class="portal-login__inner">
                            <?php echo do_shortcode('[bbp-login]'); ?>
                            <button class="portal-login__link-forgot-password">Forgot password</button>
                        </div>
                        <h2 class="portal-login__note">New to Intrepid? <button class="btn btn--dark-alt portal-login__link-create-account">Create an account</button></h2>
                    </div>
                </div>
                <div class="portal-login__container portal-login__create-account">
                    <h1 class="portal-login__title">Create an Account</h1>
                    <div class="portal-login__inner">
                        <?php echo do_shortcode('[bbp-register]'); ?>
                    </div>
                    <button class="portal-login__link-back-from-create-account">< Back</button>
                </div>
                <div class="portal-login__container portal-login__lost-password">
                    <h1 class="portal-login__title">Password Recovery</h1>
                    <div class="portal-login__inner">
                        <?php echo do_shortcode('[bbp-lost-pass]'); ?>
                    </div>
                    <button class="portal-login__link-back-from-lost-pass">< Back</button>
                </div>
            </div>
        </section>
        <?php endif; ?>
    </div>
    <?php else : ?>
    <div class="container">
        <div class="entry-content"><?php the_content(); ?></div>
    </div>
    <?php endif; ?>
    <?php if (!post_password_required(get_the_ID()) && !post_password_required($parent)) : ?>
    <?php include('modules/flex-content/flex-content.php') ?>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
