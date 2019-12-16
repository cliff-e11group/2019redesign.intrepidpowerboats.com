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
                <?php
                $boat_lengths = get_terms('boat-length');
                $boat_cats = get_terms('boat-category');
                ?>

                <ul class="model-list__filter-items">
                <!-- boat lengths  -->
                    <?php if ($boat_lengths) : ?>
                        <li>LENGTH:
                            <select class="filters-select">
                                <option value="*">ALL</option>
                                <?php foreach($boat_lengths as $boat_length) : ?>
                                    <option value=".<?php echo preg_replace("/[^0-9]/", "", $boat_length->name ); ?>"><?php echo $boat_length->name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </li>
                    <?php endif; ?>

                    <!-- boat categories  -->
                    <?php if ($boat_cats) : ?>
                        <?php foreach($boat_cats as $boat_cat) : ?>
                            <li><a href="<?php echo get_term_link($boat_cat->term_id); ?>"><?php echo $boat_cat->name; ?></a></li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
        <div class="container model-list__grid">
            <div class="grid-sizer"></div>
            <div class="gutter-sizer"></div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/200-Flats.jpg" alt="Model 200 Flats">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">200 Flats</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/245-center-console.jpg" alt="Model 245 Center Console">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">245 CENTER CONSOLE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/300-center-console.jpg" alt="Model 300 Center Console">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">300 CENTER CONSOLE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/327-i-tourney-edition.jpg" alt="Model 327-i Tourney Edition">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">200 Flats</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/327-cuddy.jpg" alt="Model 327 Cuddy">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">327-I Tourney Edition</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/345-nomad-fe.jpg" alt="345 Nomad FE">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">345 Nomad FE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/345-nomad-se.jpg" alt="Model 345 Nomad SE">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">345 Nomad SE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/345-walkaround.jpg" alt="Model 345 WALKAROUND">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">345 WALKAROUND</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/375-center-console.jpg" alt="Model 375 CENTER CONSOLE">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">375 CENTER CONSOLE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/375-nomad.jpg" alt="Model 375 NOMAD">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">375 NOMAD</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/375-walkaround.jpg" alt="Model 375 WALKAROUND">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">375 WALKAROUND</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 50">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/400-center-console.jpg" alt="Model 400 CENTER CONSOLE">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">400 CENTER CONSOLE</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/407-cuddy.jpg" alt="Model 407 CUDDY">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">407 CUDDY</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/407-panacea.jpg" alt="Model 407 PANACEA">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">407 PANACEA</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/410-evolution.jpg" alt="Model 410 EVOLUTION">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">410 EVOLUTION</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/430-sport-yacht.jpg" alt="Model 430 SPORT YACHT">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">430 SPORT YACHT</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 55">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/475-panacea.jpg" alt="Model 475 PANACEA">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">475 PANACEA</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-list__block 40">
                <div class="model-list__image">
                    <a href="<?php echo site_url('boats/410-evolution'); ?>">
                        <img src="<?php echo STYLEDIR; ?>/uploads/475-sport-yacht.jpg" alt="Model 475 SPORT YACHT">
                    </a>
                </div>
                <div class="model-list__detail">
                    <div class="model-list__title-wrap">
                        <h3 class="model-list__title"><a href="<?php echo site_url('boats/410-evolution'); ?>">475 SPORT YACHT</a></h3>
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
                            <a href="#" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
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

    <?php e11_content_and_dropdowns(array(), true, 'get_field', 'options', ''); ?>


</main>

<?php get_footer(); ?>
