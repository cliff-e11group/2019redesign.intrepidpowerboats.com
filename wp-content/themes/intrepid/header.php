<!DOCTYPE html>
<html lang="en-US">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NMMJXB7');</script>
    <!-- End Google Tag Manager -->
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '229279001215207');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=229279001215207&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMMJXB7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
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
