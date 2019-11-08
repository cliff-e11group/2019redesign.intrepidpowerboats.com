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
                <a href="index.html" class="logo"><img src="<?php echo IMAGES; ?>/logo.svg" alt="Intrepid Powerboats"/></a>
            </div>
            <button class="mobile-nav__toggle" data-class="nav__toggle">
                <span class="accessible-text">Click to toggle navigation menu.</span>
                <span class="mobile-nav__header">Menu</span>
                <span class="icon-plus icon-plus--white"></span>
            </button>
            <nav class="primary-nav__container">
                <ul class="primary-nav">
                    <li class="menu__item menu-item-has-children current-menu-item mega-menu">
                        <a href="model.html">Models</a>
                        <ul class="sub-menu">
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">200 Flats</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">245 Center Console</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">300 Center Console</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">327 Cuddy</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">327-I Tourney Edition</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">327-I Center Console</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">345 Nomad FE</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">345 Nomad SE</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">345 Walkaround</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">375 Center Console</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">400 Center Console</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">407 Cuddy</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">407 Panacea</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">410 Evolution</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">430 Sport yacht</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg" href="#">475 Panacea</a></li>
                            <li><a data-src="<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg" href="#">475 Sport yacht</a></li>
                            <li class="menu-content">
                                <a href="model.html">View all models</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu__item">
                        <a href="#">News</a>
                    </li>
                    <li class="menu__item">
                        <a href="#">Events</a>
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
