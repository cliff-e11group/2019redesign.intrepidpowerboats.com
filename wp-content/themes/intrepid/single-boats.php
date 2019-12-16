<?php
get_header();
the_post();
$page = get_the_ID();
$title = get_the_title();
?>
<main class="page__single page__single--boat main">
    <section class="hero hero--model" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/410-evolution-hero.jpg);">
        <div class="container">
            <div class="model__title-box">
                <h1 class="model__title"><strong>410</strong> Evolution</h1>
            </div>
            <a class="model__360-view" data-src="#spinner-container" href="#">360 view</a>
            <div id="spinner-container">
                <div id="spinner-view"></div>
            </div>
        </div>
    </section>
    <div id="parentTab">
        <div class="nav-block">
            <div class="nav-block__toggle"><span class="nav-block__active-tab">Overview</span><span class="icon-close icon-close--white"></span></div>
            <div class="nav-block__inner">
                <div class="container">
                    <ul class="model-nav resp-tabs-list hor_1">
                        <li class="model-nav__item active">Overview</li>
                        <li class="model-nav__item">Gallery</li>
                        <li class="model-nav__item">Features</li>
                        <li class="model-nav__item">Deck Plan</li>
                        <li class="model-nav__item">Motors</li>
                        <li class="model-nav__item">Options</li>
                    </ul>
                </div>
                <a href="#" class="sticky-btn" data-class="build-a-boat-toggle">Build Yours<svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                    <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                </svg></a>
            </div>
        </div>
        <div class="resp-tabs-container hor_1">
            <div>
                <!-- overview start -->
                <?php
                $overview = get_field('overview');
                $overview_title = get_field('overview_title');
                ?>
                <section class="overview-block">
                    <div class="container">
                        <div class="overview-block__content">
                            <h2 class="overview-block__title"><?php echo $overview_title; ?></h2>
                            <div class="overview-block__description">
                                <?php echo $overview; ?>
                            </div>
                            <ul class="overview-nav">
                                <li class="overview-nav__item"><a href="#">See the Gallery</a></li>
                                <li class="overview-nav__item"><a href="#">Deck Plan</a></li>
                                <li class="overview-nav__item"><a href="#">Virtual Tour</a></li>
                                <li class="overview-nav__item"><a href="#">Build Yours Own</a></li>
                            </ul>
                        </div>

                        <?php
                        $quick_stats = get_field('quick_statistics');
                        $quick_stats_brochure = get_field('quick_statistics_brochure');
                        ?>
                        <div class="stat-block">
                            <span class="stat-block__title">Quick Statistics</span>
                            <ul class="quick-stat">
                            <?php foreach($quick_stats as $quick_stat) : ?>
                                <li class="quick-stat__item">
                                    <span class="quick-stat__title"><?php echo $quick_stat['label']; ?></span>
                                    <span class="quick-stat__value"><?php echo $quick_stat['value']; ?></span>
                                </li>
                            <?php endforeach; ?>

                            </ul>
                            <?php if($quick_stats_brochure) : ?>
                                <a href="<?php echo $quick_stats_brochure['url']; ?>" class="btn btn--dark">Download Brochure</a>
                            <?php endif; ?>

                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- overview end -->
            </div>
            <div>
                <div id="childTab">
                    <ul class="resp-tabs-list hor_child_1">
                        <li> Gallery </li>
                        <li> Virtual Tour </li>
                    </ul>

                    <div class="resp-tabs-container hor_child_1">
                        <div>
                            <!-- gallery start -->
                            <?php e11_gallery_rows(array(), true, 'get_field', '', ''); ?>

                            <!-- gallery end -->
                        </div>

                        <div class="btn-wrap">
                            <a href="#" class="scroll-to-top"><svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                                <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                            </svg>Back to Top</a>
                            <a href="#" class="btn btn--dark">Contact a sales representative</a>
                        </div>


                        <div>
                            <!-- virtual tour start -->
                            <div class="virtual-tour">
                                <div class="container">
                                    <iframe src="https://vrcloud.com/?pv=1544284614" class="virtual-tour__iframe" frameborder="0"></iframe>
                                </div>
                            </div>
                            <!-- virtual tour end -->
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- features start -->
                <section class="features-block">
                <?php $features = get_field('features_section'); ?>
                    <div class="container">
                        <div class="feature-list">
                            <?php foreach($features as $feature) : ?>
                                <div class="feature-list__item">
                                    <h2 class="feature-list__title"><?php echo$feature['title']; ?></h2>
                                    <ul class="list">
                                        <?php foreach ($feature['details'] as $detail) : ?>
                                            <li class="list__item"><?php echo $detail['detail']; ?></li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            <?php endforeach; ?>
                        </div>

                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- features end -->
            </div>
            <div>
                <!-- deck plan start -->
                <div class="deck-block">
                    <div class="container">
                        <img class="deck-desktop" src="<?php echo STYLEDIR; ?>/uploads/DeckPlanPic.jpg" alt="Boat Deck Plan">
                        <img class="deck-mobile" src="<?php echo STYLEDIR; ?>/uploads/DeckPlanPic-mobile.jpg" alt="Boat Deck Plan">
                        <span class="deck-block__short-note">Select to see features</span>
                    </div>
                    <div class="deck-block__info">
                        <div class="container">
                            <div class="deck-info">
                                <span class="deck-info__number">19</span>
                                <figure class="deck-info__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/premium-upholstery-package.jpg" alt="premium-upholstery-package" />
                                </figure>
                                <div class="deck-info__content">
                                    <h2 class="deck-info__title">Captain's Chair</h2>
                                    <div class="deck-info__description">
                                        <p>This is the description of the item that is selected. May be one or two sentences but nothing too crazy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-close text--right">
                            <a href="javascript:void(0);" class="close">CLOSE <span class="icon-close"></span></a>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </div>
                <!-- deck plan start -->
            </div>
            <div>
                <!-- motor start -->
                <section class="motor-block">
                    <div class="container">
                        <h2 class="motor-block__title">Motor selections for <strong><?php echo $title; ?></strong></h2>
                        <ul class="motor-list">
                        <?php
                        $motor_blocks = get_field('motor_blocks');
                        ?>
                        <?php foreach($motor_blocks  as $motor_block) : ?>
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo $motor_block['image']['url']; ?>" alt="<?php echo $motor_block['image']['alt']; ?>" />
                                </figure>
                                <div class="motor-list__content">
                                    <h2 class="motor-list__title"><?php echo $motor_block['title']; ?><span class="motor-list__trigger"></span></h2>
                                    <div class="motor-list__description">
                                        <?php echo $motor_block['description']; ?>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach; ?>

                        </ul>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- motor end -->
            </div>
            <div>
                <!-- option start -->
                <section class="model-option">
                    <div class="container">
                        <div class="model-option__header">
                            <h2 class="model-option__title">The many options for the <strong>4<?php echo $title; ?></strong></h2>
                            <span>Create a checklist for the optional equipment you’re interested in.</span>
                        </div>
                        <?php
                        $boat_options = get_field('boat_options');
                        ?>
                        <div class="option-slider">
                            <?php foreach ($boat_options as $boat_option) : ?>
                                <div>
                                    <h3 class="option-title"><?php echo $boat_option['title']; ?></h3>
                                    <ul class="option-list">
                                        <?php foreach($boat_option['options'] as $option) : ?>
                                            <li class="option-list__item"><?php echo $option['option']; ?></li>
                                        <?php endforeach; ?>
                                    </ul>
                            </div>
                            <?php endforeach; ?>


                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a class="form-toggle btn btn--dark-alt" href="#">Email This List</a>
                        <div class="form-wrap">
                            <form class="form" action="#" method="post">
                                <h3 class="form__title">Your information</h3>
                                <ul class="form-fields">
                                    <li class="form__field">
                                        <label for="name" class="accessible-text"></label>
                                        <input type="text" id="name" name="txt_name" placeholder="Name">
                                    </li>
                                    <li class="form__field">
                                        <label for="email-address" class="accessible-text"></label>
                                        <input type="email" id="email-address" name="email_add" placeholder="Email Address">
                                    </li>
                                    <li class="form__field">
                                        <label for="phone-number" class="accessible-text"></label>
                                        <input type="text" id="phone-number" name="phone_no" placeholder="Phone Number">
                                    </li>
                                    <li class="form__field">
                                        <label for="questions-comments" class="accessible-text"></label>
                                        <textarea id="questions-comments" placeholder="Questions or Comments?"></textarea>
                                    </li>
                                    <li class="form__field">
                                        <input class="button" type="submit" value="Submit">
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- option end -->
            </div>
        </div>
    </div>
    <section class="build-a-boat">
        <div class="step-block">
            <div class="step-block__close" data-class="build-a-boat-toggle">
                <span class="icon-close"></span>
            </div>
            <ul class="form-step">
                <li class="step__item step__item--active" data-label-back="" data-label-next="Motors">
                    Exterior
                </li>
                <li class="step__item" data-label-back="Colors" data-label-next="Options">
                    Motors
                </li>
                <li class="step__item" data-label-back="Motors" data-label-next="Finish">
                    Options
                </li>
                <li class="step__item" data-label-back="Options" data-label-next="">
                    Make it yours
                </li>
            </ul>
        </div>
        <div class="custom-hero">
            <div class="container">
                <?php echo file_get_contents(STYLEDIR . '/uploads/bab-sample.svg'); ?>
            </div>
        </div>
        <div class="step-nagivation step-nagivation--alt build-a-boat--start">
            <a href="#" class="step-prev" data-class="prev">&lt; Back to <span></span></a>
            <a href="#" class="btn btn--dark btn--large-desktop" data-class="next">Finish</a>
            <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
        </div>
        <div class="build-a-boat__steps">
            <div class="color-block step__item--active" data-class="step">
                <div class="container">
                    <div class="color-block__inner">
                        <div class="color-block__picker">
                            <label for="color-picker" class="accessible-text">Choose a color</label>
                            <input id="color-picker" type="text" value="#ff8800">
                        </div>
                        <div class="color-block__option">
                            <span class="color-block__title">Select an area to color</span>
                            <ul class="area-list">
                                <li class="area-list__item active" data-boat-layer="hull-color">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Hull Color</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="sheer-stripe">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Sheer Stripe</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="boot-stripe">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Boot Stripe</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="sheer-stripe-accent">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Sheer Accent</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="boot-stripe-accent">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Boot Accent</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="logo-color">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Logo</span>
                                </li>
                            </ul>
                            <div class="step-nagivation step-nagivation--mobile">
                                <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
                            </div>
                            <div class="color-palette">
                                <span class="color-palette__title">
                                    Recently used colors
                                </span>
                                <ul class="color-list" id="recent-colors">

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Add Motors</a>
                    </div>
                </div>
            </div>
            <div class="motor-option" data-class="step">
                <div class="container">
                    <div class="motor-option__inner">
                        <div class="motor-option__details">
                            <ul class="motor-color">
                                <li class="motor-color__item motor-color__item--white active" data-boat-layer="white">
                                    <span class="motor-color__title">White</span>
                                    <span class="motor-color__box"></span>
                                </li>
                                <li class="motor-color__item motor-color__item--black" data-boat-layer="black">
                                    <span class="motor-color__title">Black</span>
                                    <span class="motor-color__box"></span>
                                </li>
                            </ul>
                            <div class="motor-thumbnail">
                                <img src="<?php echo STYLEDIR; ?>/uploads/engine.png" alt="engine" />
                                <span class="icon-close"></span>
                            </div>
                        </div>
                        <div class="motor-option__wrap">
                            <span class="motor-option__title">Select a Motor</span>
                            <ul class="motor-option__list">
                                <li class="motor-option__list-item active" data-boat-layer="sevenmarine">
                                    <span class="motor-option__list-title">Seven Marine</span>
                                </li>
                                <li class="motor-option__list-item" data-boat-layer="evinrude">
                                    <span class="motor-option__list-title">Evinrude</span>
                                </li>
                                <li class="motor-option__list-item" data-boat-layer="yamaha">
                                    <span class="motor-option__list-title">Yamaha</span>
                                </li>
                                <li class="motor-option__list-item" data-boat-layer="suzuki">
                                    <span class="motor-option__list-title">Suzuki</span>
                                </li>
                                <li class="motor-option__list-item" data-boat-layer="mercury">
                                    <span class="motor-option__list-title">Mercury</span>
                                </li>
                            </ul>
                            <span class="motor-option__note">
                            * Not all engines colors shown
                        </span>
                            <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                                <a href="build-boat-options.html" class="step-next" data-class="next">Skip this step &gt;</a>
                            </div>
                        </div>
                        <div class="motor-option__description">
                            <h2>About Seven Marine Engines:</h2>
                            <p>Seven is an evolution in outboard engineering and customer service. At the heart of a Seven, Luxury Performance. A supercharged 6.2L V8, powerful acceleration, and more technology than ever before under a cowl, supported with concierge service. Intrepid Powerboats from the 375 to the 475 offer the opportunity to go farther and faster with twin, triple or quad 627hp and 557hp Seven’s. Personalize your power and match it to the boat with SpectraBlade LED illumination, infinite color choices</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Select Options</a>
                    </div>
                </div>
            </div>
            <div class="model-option model-option--alt" data-class="step">
                <span class="model-option__block-title">Select a category for options</span>
                <div class="container">
                    <div class="option-slider">
                        <div>
                            <h3 class="option-title option-title--featured">Featured Options</h3>
                            <ul class="option-list">
                                <li class="option-list__item" data-boat-layer="top-half-tower">Half-Tower Top</li>
                                <li class="option-list__item" data-boat-layer="top-arch">Arch Top</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Mechanical</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item">Bow Thruster</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Comfort</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item"><span class="option-list__thumbnail" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/premium-upholstery-package.jpg');"></span>Premium Upholstery Package</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Fishing</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item">Bow Thruster</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                    <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Finish</a>
                </div>
            </div>
            <div class="contact-block" data-class="step">
                <div class="container">
                    <h1 class="contact-block__title">Great Design. <strong>Now Let's Make it yours</strong></h1>
                    <div class="contact-block__inner">
                        <div class="form-option">
                            <ul class="option-list">
                                <li class="option-list__item">Please email the boat I created to me and Intrepid, and have them contact me.</li>
                                <li class="option-list__item">Please only email me the boat I created.</li>
                            </ul>
                        </div>
                        <div class="form-holder">
                            <form class="form build-a-boat__form" action="#" method="post">
                                <h3 class="form__title">Your information</h3>
                                <ul class="form-fields">
                                    <li class="form__field">
                                        <label for="build-a-boat-name" class="accessible-text">Name</label>
                                        <input type="text" name="build-a-boat-name" id="build-a-boat-name" placeholder="Name *">
                                    </li>
                                    <li class="form__field">
                                        <label for="build-a-boat-email" class="accessible-text">Name</label>
                                        <input type="email" name="build-a-boat-email" id="build-a-boat-email" placeholder="Email *">
                                    </li>
                                    <li class="form__field">
                                        <label for="build-a-boat-phone" class="accessible-text">Name</label>
                                        <input type="text" name="build-a-boat-phone" id="build-a-boat-phone" placeholder="Phone (XXX-XXX-XXXX)">
                                    </li>
                                    <li class="form__field">
                                        <label for="build-a-boat-message" class="accessible-text">Name</label>
                                        <textarea id="build-a-boat-message" name="build-a-boat-message" placeholder="Want something even more custom? Let us know here."></textarea>
                                    </li>
                                    <li class="form__field">
                                        <input class="button" type="submit" value="Submit">
                                        <span class="form__note">* Required Fields</span>
                                    </li>
                                </ul>
                            </form>
                            <span class="terms-condition">By hitting “SUBMIT” you agree to our <a href="#">TERMS OF USE.</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer();
