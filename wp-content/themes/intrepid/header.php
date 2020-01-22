<!DOCTYPE html>
<html lang="en-US">
<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<div id="page" class="site">
    <header class="header">
        <div class="header__wrap">
            <div class="header__branding">
                <a href="<?php echo site_url(); ?>" class="logo"><img src="<?php echo IMAGES; ?>/logo.svg" alt="Intrepid Powerboats"/></a>
            </div>
            <button class="mobile-nav__toggle" data-class="nav__toggle">
                <span class="accessible-text">Click to toggle navigation menu.</span>
                <span class="mobile-nav__header">Menu</span>
                <span class="icon-plus icon-plus--white"></span>
            </button>
            <nav class="nav-container">
                <div class="nav-container__inner">
                    <?php
                        $args = array(
                            'container' => false,
                            'menu_class' => 'primary-nav',
                            'theme_location' => 'main-navigation'
                        );
                        wp_nav_menu($args);
                    ?>

                    <nav class="secondary-nav">
                        <?php
                            $args = array(
                                'container' => false,
                                'menu_class' => '',
                                'theme_location' => 'utility-navigation'
                            );
                            wp_nav_menu($args);
                        ?>
                        <?php $mobile_language_description = get_field('mobile_language_description', 'option');
                        if($mobile_language_description) : ?>
                        <div class="secondary-nav__item"><p><?php echo $mobile_language_description; ?></p></div>
                        <?php endif; ?>
                    </nav>
                    <?php
                    $facebook = get_field('facebook_link', 'option');
                    $insta = get_field('instagram_link', 'option');
                    $youtube = get_field('youtube_link', 'option');
                    $twitter = get_field('twitter_link', 'option');
                    if ($facebook || $insta || $youtube || $twitter) : ?>
                    <div class="social-block">
                        <h4 class="block-title">Connect</h4>
                        <div class="social-links">
                            <?php if ($facebook) :?>
                                <a href="<?php echo $facebook; ?>" target="_blank">
                                    <svg class="icon icon-facebook" aria-hidden="true" role="img">
                                        <use xlink:href="#icon-facebook" x="0" y="0"></use>
                                    </svg>
                                </a>
                            <?php endif; ?>

                            <?php if ($insta) :?>
                                <a href="<?php echo $insta; ?>" target="_blank">
                                    <svg class="icon icon-instagram" aria-hidden="true" role="img">
                                        <use xlink:href="#icon-instagram" x="0" y="0"></use>
                                    </svg>
                                </a>
                            <?php endif; ?>

                            <?php if ($youtube) :?>
                                <a href="<?php echo $youtube; ?>" target="_blank">
                                    <svg class="icon icon-youtube" aria-hidden="true" role="img">
                                        <use xlink:href="#icon-youtube" x="0" y="0"></use>
                                    </svg>
                                </a>
                            <?php endif; ?>

                            <?php if ($twitter) :?>
                                <a href="<?php echo $twitter; ?>" target="_blank">
                                    <svg class="icon icon-twitter" aria-hidden="true" role="img">
                                        <use xlink:href="#icon-twitter" x="0" y="0"></use>
                                    </svg>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </nav>
            <ul class="quick-links">
                <li class="quick-links__item">
                    <a class="btn btn--primary" href="<?php echo site_url('contact'); ?>">Contact</a>
                </li>
                <li class="quick-links__item">
                    <a class="link" href="<?php echo site_url('forums'); ?>">Owners Portal</a>
                </li>
            </ul>
        </div>
    </header>
