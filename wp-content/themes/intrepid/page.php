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
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">Owner's Portal</h1>
                <?php if(is_user_logged_in()) : ?>
                <div class="hero__description">
                    <p>Forum</p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <section class="owners-portal">
        <?php if(is_user_logged_in()) : ?>
        <nav class="nav-block">
            <div class="nav-block__toggle active"><span class="nav-block__active-tab">Forum</span><span class="icon-close icon-close--white"></span></div>
            <div class="nav-block__inner">
                <div class="container">
                    <ul class="model-nav resp-tabs-list hor_1 resp-tab-active">
                        <li class="model-nav__item">
                            <a href="<?php echo site_url('forums'); ?>">Forum</a>
                        </li>
                        <li class="model-nav__item">
                            <a href="<?php echo site_url('gallery'); ?>">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
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
    </section>
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
