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
                    <ul class="primary-nav">
                        <li class="menu__item menu-item-has-children current-menu-item mega-menu">
                            <a href="<?php echo site_url('boats'); ?>">Models</a>
                            <ul class="sub-menu">
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">200 Flats</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">245 Center Console</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">300 Center Console</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">327 Cuddy</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">327-I Tourney Edition</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">327-I Center Console</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">345 Nomad FE</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">345 Nomad SE</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">345 Walkaround</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">375 Center Console</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">400 Center Console</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">407 Cuddy</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">407 Panacea</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">410 Evolution</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">430 Sport yacht</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">475 Panacea</a></li>
                                <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="<?php echo site_url('boats/410-evolution'); ?>">475 Sport yacht</a></li>
                                <li class="menu-content">
                                    <a href="<?php echo site_url('boats'); ?>">View all models</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu__item">
                            <a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>">News</a>
                        </li>
                        <li class="menu__item">
                            <a href="<?php echo site_url('events'); ?>">Events</a>
                        </li>
                        <li class="menu__item">
                            <a href="#">About</a>
                        </li>
                        <li class="menu__item">
                            <a href="#">Service</a>
                        </li>
                        <li class="menu__item">
                            <a href="#">Pre-Owned</a>
                        </li>
                    </ul>
                    <ul class="secondary-nav">
                        <li class="secondary-nav__item"><a href="#">Newsletter Signup</a></li>
                        <li class="secondary-nav__item"><a href="#">Language Selection</a></li>
                        <li class="secondary-nav__item"><a href="#">Terms of Use</a></li>
                        <li class="secondary-nav__item"><a href="#">Accessible</a></li>
                    </ul>
                    <div class="social-block">
                        <h4 class="block-title">Connect</h4>
                        <div class="social-links">
                            <a href="#" target="_blank">
                                <svg class="icon icon-facebook" aria-hidden="true" role="img">
                                    <use xlink:href="#icon-facebook" x="0" y="0"></use>
                                </svg>
                            </a>
                            <a href="#" target="_blank">
                                <svg class="icon icon-instagram" aria-hidden="true" role="img">
                                    <use xlink:href="#icon-instagram" x="0" y="0"></use>
                                </svg>
                            </a>
                            <a href="#" target="_blank">
                                <svg class="icon icon-youtube" aria-hidden="true" role="img">
                                    <use xlink:href="#icon-youtube" x="0" y="0"></use>
                                </svg>
                            </a>
                            <a href="#" target="_blank">
                                <svg class="icon icon-twitter" aria-hidden="true" role="img">
                                    <use xlink:href="#icon-twitter" x="0" y="0"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <ul class="quick-links">
                <li class="quick-links__item">
                    <a class="btn btn--primary" href="#">Contact</a>
                </li>
                <li class="quick-links__item">
                    <a class="link" href="#">Owners Portal</a>
                </li>
            </ul>
        </div>
    </header>
