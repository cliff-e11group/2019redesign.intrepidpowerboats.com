<!DOCTYPE html>
<html lang="en-US">
<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<header class="header js-header">
    <div class="container">
        <div class="logo__container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo__link">
                <div class="logo__wrap">
                    <?php //echo file_get_contents(IMAGES_SERVER . '/logo.svg'); ?>
                </div>
                <meta itemprop="name" content="<?php bloginfo('name'); ?>">
            </a>
        </div>
        <a href="#" class="mobileNav__toggle js-nav-toggle">
            <span class="accessible-text">Click to toggle navigation menu.</span>
            <div class="menuBar__container">
                <span class="menuBar"></span>
                <span class="menuBar"></span>
                <span class="menuBar"></span>
            </div>
        </a>
        <?php
        $menuArgs = array(
            'container' => false,
            'menu' => 'Main Navigation',
            'menu_class' => 'primaryNav'
        );
        wp_nav_menu($menuArgs);
        ?>
    </div>
</header>
