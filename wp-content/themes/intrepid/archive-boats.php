<?php
get_header();
the_post();
?>

<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">OUR MODELS</h1>
                <div class="hero__description">
                    <p>Custom craftsmanship and design that follow an uncompromising set of specifications.<strong>yours.</strong></p>
                </div>
            </div>
        </div>
    </section>
    <section class="model-list__container">
        <div class="model-list__filter">
            <div class="container">
                <a href="#" class="filter-list__toggle">
                    FILTERS <span class="icon-plus"></span>
                </a>
                <ul class="model-list__filter-items">
                    <li>LENGTH:
                        <select class="filters-select">
                            <option value="*">ALL</option>
                            <option value=".40">40</option>
                            <option value=".50">50</option>
                            <option value=".55">55+</option>
                        </select>
                    </li>
                    <li><a href="<?php echo site_url('boat-category/center-console'); ?>">CENTER CONSOLE</a></li>
                    <li><a href="#">CUDDY/WALKAROUND</a></li>
                    <li><a href="<?php echo site_url('boat-category/sport-yacht'); ?>">SPORT YACHT</a></li>
                </ul>
            </div>
        </div>
        <div class="container model-list__grid">
            <div class="grid-sizer"></div>
            <div class="gutter-sizer"></div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/200-Flats.jpg" alt="Model 200 Flats">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">200 Flats</h3>
                        <span class="model-list__trigger">
                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" target="_blank" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/245-center-console.jpg" alt="Model 245 Center Console">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">245 CENTER CONSOLE</h3>
                        <span class="model-list__trigger">
                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/300-center-console.jpg" alt="Model 300 Center Console">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">300 CENTER CONSOLE</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/327-i-tourney-edition.jpg" alt="Model 327-i Tourney Edition">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">200 Flats</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/327-cuddy.jpg" alt="Model 327 Cuddy">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">327-I Tourney Edition</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/345-nomad-fe.jpg" alt="345 Nomad FE">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">345 Nomad FE</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/345-nomad-se.jpg" alt="Model 345 Nomad SE">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">345 Nomad SE</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/345-walkaround.jpg" alt="Model 345 WALKAROUND">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">345 WALKAROUND</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/375-center-console.jpg" alt="Model 375 CENTER CONSOLE">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">375 CENTER CONSOLE</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/375-nomad.jpg" alt="Model 375 NOMAD">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">375 NOMAD</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/375-walkaround.jpg" alt="Model 375 WALKAROUND">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">375 WALKAROUND</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/400-center-console.jpg" alt="Model 400 CENTER CONSOLE">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">400 CENTER CONSOLE</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/407-cuddy.jpg" alt="Model 407 CUDDY">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">407 CUDDY</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/407-panacea.jpg" alt="Model 407 PANACEA">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">407 PANACEA</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/410-evolution.jpg" alt="Model 410 EVOLUTION">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">410 EVOLUTION</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/430-sport-yacht.jpg" alt="Model 430 SPORT YACHT">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">430 SPORT YACHT</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/475-panacea.jpg" alt="Model 475 PANACEA">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">475 PANACEA</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <img src="<?php echo STYLEDIR; ?>/uploads/475-sport-yacht.jpg" alt="Model 475 SPORT YACHT">
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title">475 SPORT YACHT</h3>
                        <span class="model-list__trigger">

                            </span>
                    </div>
                    <div class="model-list-hidden__content" style="display: none">
                        <div class="model-list-stat__container">
                            <h4 class="data-title">STATISTICS</h4>
                            <ul class="data-list">
                                <li class="data-list__item">
                                    <span class="data-list__title">Standard Fuel</span>
                                    <span class="data-list__value">420 GALLONS</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">BEAM</span>
                                    <span class="data-list__value">9'10"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">LENGTH</span>
                                    <span class="data-list__value">41'7"</span>
                                </li>
                                <li class="data-list__item">
                                    <span class="data-list__title">WATER</span>
                                    <span class="data-list__value">40 GALLONS</span>
                                </li>
                            </ul>
                        </div>
                        <div class="model-list-cta__container">
                            <a href="<?php echo site_url('boats/410-evolution'); ?>" class="btn btn--outline">Visit model page</a>
                            <a href="#" class="btn btn--dark">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="icon-list">
        <div class="container">
            <div class="icon-list__item">
                <a href="model-compare-mode.html">
                    <div class="icon-container">
                        <svg class="icon icon-compare" aria-hidden="true" role="img">
                            <use xlink:href="#icon-compare" x="0" y="0"></use>
                        </svg>
                    </div>
                    <span class="icon-list__title">COMPARE MODELS</span>
                </a>
            </div>
            <div class="icon-list__item">
                <div class="icon-container">
                    <svg class="icon icon-brochure" aria-hidden="true" role="img">
                        <use xlink:href="#icon-brochure" x="0" y="0"></use>
                    </svg>
                </div>
                <span class="icon-list__title">FULL LINE BROCHURE</span>
            </div>
            <div class="icon-list__item">
                <div class="icon-container">
                    <svg class="icon icon-gear" aria-hidden="true" role="img">
                        <use xlink:href="#icon-gear" x="0" y="0"></use>
                    </svg>
                </div>
                <span class="icon-list__title">HOW THEY ARE MADE</span>
            </div>
        </div>
    </div>
    <section class="content-block">
        <div class="container">
            <h2 class="content-block__title">POWER IN A CLASS OF ITS OWN. PROGRESS THAT NEVER STOPS.<br>
                <strong>THAT’S THE INTREPID PROMISE.</strong>
            </h2>
            <div class="sub-container">
                <p>You’re here because you want the best of the best, and you know unbeatable quality when you see it. Every Intrepid boat for sale is fabricated with the best materials, engineered with the most advanced techniques and designed to meet the highest safety standards.</p>

                <p>When you’re behind the wheel of an Intrepid powerboat, it’s easy to see what makes it so different from the rest. But if you haven’t had the chance to experience high-performance, luxury boating just yet, here are just a few of the things that separate our powerboats from the pack:</p>

                <div class="accordion__container">
                    <div data-aria-accordion data-transition>
                        <h3 data-aria-accordion-heading>INNOVATIVE ENGINEERING</h3>
                        <div data-aria-accordion-panel>
                            <p>Here is the first panel of content.</p>
                            <p>
                                This particular accordion example can have multiple opened panels at a time, or
                                every panel closed.
                            </p>
                        </div>
                        <h3 data-aria-accordion-heading>DECADES OF RESEARCH</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                By using the <code>data-multi</code> attribute, multiple
                                panels can be opened at once.
                            </p>
                        </div>
                        <h3 data-aria-accordion-heading>METICULOUS DESIGN</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                The <code>data-default="none"</code> attribute is used to
                                indicate that no panel will be open by default, when the
                                accordion is initially rendered.
                            </p>
                        </div>
                        <h3 data-aria-accordion-heading>COMMITMENT TO SAFETY</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                The <code>data-default="none"</code> attribute is used to
                                indicate that no panel will be open by default, when the
                                accordion is initially rendered.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content-block">
        <div class="container">
            <h2 class="content-block__title">LUXURY POWERBOATS FOR EVERY LIFESTYLE.<br>
                <strong>MADE FOR YOU, AND NO ONE ELSE.</strong>
            </h2>
            <div class="sub-container">
                <p>What’s your perfect day on the water like? Is it an adrenaline-pumping afternoon spent deep sea
                    sport fishing, or is it a relaxing evening bonding with family as you enjoy the sunset? Or
                    perhaps you’re the type that likes to entertain, and your ideal powerboat has everything you
                    need to host in style.</p>

                <p>We pride ourselves on our extremely versatile selection of models. Over the years, we’ve designed
                    boats for sport fishing, diving, luxury entertainment and even law enforcement. With so many
                    options, where do you even start?</p>

                <p>Each Intrepid boat model can be categorized as one of the following:</p>

                <div class="accordion__container">
                    <div data-aria-accordion data-transition>
                        <h3 data-aria-accordion-heading>CENTER CONSOLE</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                Here is the first panel of content.
                            </p>
                            <p>
                                This particular accordion example can have multiple opened panels at a time, or
                                every panel closed.
                            </p>
                        </div>

                        <h3 data-aria-accordion-heading>SPORT YACHT</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                By using the <code>data-multi</code> attribute, multiple
                                panels can be opened at once.
                            </p>
                        </div>
                        <h3 data-aria-accordion-heading>CUDDY</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                The <code>data-default="none"</code> attribute is used to
                                indicate that no panel will be open by default, when the
                                accordion is initially rendered.
                            </p>
                        </div>
                        <h3 data-aria-accordion-heading>WALKAROUND</h3>
                        <div data-aria-accordion-panel>
                            <p>
                                The <code>data-default="none"</code> attribute is used to
                                indicate that no panel will be open by default, when the
                                accordion is initially rendered.
                            </p>
                        </div>
                    </div>
                </div>

                <p>Not excited about something featured on a particular model? <strong>Change it</strong>. That’s
                    the beauty of complete customization. That’s the beauty of Intrepid. No other boat manufacturer
                    cares more about building each boat to reflect its owner’s individual preferences.</p>
            </div>
        </div>
    </section>
    <section class="content-block">
        <div class="container">
            <h2 class="content-block__title">
                COVETED CUSTOMER SERVICE THAT STAYS WITH YOU<br>
                <strong>FOR A LIFETIME.</strong>
            </h2>
            <div class="sub-container">
                <p>The moment you choose to design an Intrepid, no matter the model, you become a part of our
                    family. And we treat our family like anyone else would - with the best quality of care and
                    attention to detail.</p>

                <p>Our customer service is unlike that of any other business. We keep an archive of detailed
                    information on every boat we’ve ever built, so when you call us or come by our marina for
                    repairs or upgrades, we have the exact specifications of your unique boat on hand. Your free
                    time is just as important to us as it is to you, and keeping great records is just one of the
                    ways we’re able to provide such excellent customer service so quickly.</p>

                <p>And because you’re family, there’s no expiration date on that relationship. With Intrepid, you’re
                    taken care of for life, no exceptions - just ask our customers from the ’80s.</p>
            </div>
        </div>
    </section>
    <section class="content-block">
        <div class="container">
            <h2 class="content-block__title">
                YOU’LL NEVER EXPERIENCE ANYTHING ELSE LIKE IT. <strong>PERIOD.</strong>
            </h2>
            <div class="sub-container">
                <p>An Intrepid boat is truly and completely one of a kind. Other powerboats for sale might make big
                    promises, but we actually live up to ours. Whether you’re a first-time customer looking to buy
                    your first luxury day boat or a repeat customer looking to upgrade to something even bigger and
                    better, you can always count on the same superb craftsmanship, first-rate customer care and the
                    incredible boating experience you expect from Intrepid.</p>
                <p><a href="#">Contact us online</a> or come and see us at the Harbour Towne Marina in Dania Beach to discover what
                    a luxury powerboat should be.</p>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
