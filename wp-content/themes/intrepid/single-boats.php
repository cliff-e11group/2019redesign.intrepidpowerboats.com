<?php
get_header();
the_post();
$page = get_the_ID();
$title = get_the_title();

//format title
$title_words = explode(' ', $title);
$title_words[0] = '<strong>' . $title_words[0] . '</strong>';
$formatted_title = implode(' ', $title_words);


$boat_hero_image = get_field('boat_hero_image');
$boat_hero_img = $boat_hero_image ? $boat_hero_image['sizes']['hero'] : get_the_post_thumbnail_url( $page, 'hero' );
$boat_hero_title_bg_img = get_field('boat_hero_title_bg_img');
$boat_hero_title_class = $boat_hero_title_bg_img ? 'model__title-box--imgTitle' : '';
$overview = get_field('overview');
$boat_footer_link = get_field('boat_single_footer_link', 'option');
$gallery_rows = get_field('gallery_rows');
$virtual_tour = get_field('virtual_tour');
$features = get_field('features_section');
$deck_plan_image = get_field('deck_plan_image');
$deck_points = get_field('deck_points');
$motor_blocks = get_field('motor_blocks');
$boat_options = get_field('boat_options');

$view_360_images = get_field('360_view_gallery');
$view_360_urls = array();

if(!empty($view_360_images)) {
    foreach($view_360_images as $image){
        array_push($view_360_urls, $image['image']['sizes']['view-gallery']);
    }
}

if (!empty($view_360_urls)) :
    wp_localize_script('scripts', 'view_360_urls', $view_360_urls );
endif;

$bab_main_image = get_field('bab_main_image');
$bab_default_colors = get_field('bab_default_colors');
$hull_color = $bab_default_colors['hull_color'];
$boot_stripe = $bab_default_colors['boot_stripe'];
$boot_stripe_accent = $bab_default_colors['boot_stripe_accent'];
$logo_color = $bab_default_colors['logo_color'];
$bab_motors = get_field('bab_motors');
$bab_default_motor = get_field('bab_default_motor');

$mobile_title_color = get_field('mobile_title_color');
$mobile_title_background_color = get_field('mobile_title_background_color');
?>

<main class="page__single page__single--boat main">
    <section class="hero hero--model <?php if (!empty($view_360_urls)) : ?>hero--overlay<?php endif; ?>">
        <div class="container">
            <div class="hero__bg" style="background-image:url(<?php echo $boat_hero_img; ?>);"></div>
            <div class="model__title-box <?php echo $boat_hero_title_class; ?>" <?php echo $mobile_title_background_color ? 'style="background-color:'. $mobile_title_background_color . '"' : ''; ?>>
                <h1 class="model__title" <?php echo $mobile_title_color ? 'style="color:'.$mobile_title_color.'"': ''; ?>><?php echo $formatted_title; ?></h1>
                <?php if($boat_hero_title_bg_img) : ?>
                <img src="<?php echo $boat_hero_title_bg_img['url']; ?>" alt="<?php echo $boat_hero_title_bg_img['alt']; ?>" class="model__title--img">
                <?php endif; ?>
            </div>
            <?php if (!empty($view_360_urls)) : ?>
            <a class="spinner__toggle model__360-view" href="#"><span class="accessible-text">360 view</span></a>
            <?php endif; ?>
        </div>
        <?php if (!empty($view_360_urls)) : ?>
        <div class="spinner__container">
            <button class="spinner__toggle spinner__toggle--bg">
                <span class="accessible-text">Close 360 view</span>
            </button>
            <div class="spinner__toggle-container">
                <a href="#" class="spinner__toggle icon-close">
                    <span class="accessible-text">Close 360 view</span>
                </a>
            </div>
            <div id="spinner-view"></div>
        </div>
        <?php endif; ?>
    </section>
    <div id="parentTab">
        <div class="nav-block">
            <div class="nav-block__toggle"><span class="nav-block__active-tab">Overview</span><span class="icon-close icon-close--white"></span></div>
            <div class="nav-block__inner">
                <div class="container">
                    <ul class="model-nav resp-tabs-list hor_1">
                        <li class="model-nav__item active">Overview</li>
                        <?php if ( !empty($gallery_rows) ) : ?>
                            <li class="model-nav__item" data-class="nav-item-gallery">Gallery</li>
                        <?php endif; ?>
                        <?php if ( !empty($features) ) : ?>
                            <li class="model-nav__item">Features</li>
                        <?php endif; ?>
                        <?php if ( !empty($boat_options) ) : ?>
                        <li class="model-nav__item">Options</li>
                        <?php endif; ?>
                        <?php if ( !empty($deck_points) && $deck_plan_image ) : ?>
                        <li class="model-nav__item" data-class="nav-item-deck-plan">Deck Plan</li>
                        <?php endif; ?>
                        <?php if (!empty($motor_blocks) ) : ?>
                            <li class="model-nav__item">Motors</li>
                        <?php endif; ?>
                    </ul>
                </div>
                <?php if($bab_main_image) : ?>
                <a href="#" class="sticky-btn" data-class="build-a-boat-toggle">Build Yours<svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                    <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                </svg></a>
                <?php endif; ?>
            </div>
        </div>
        <div class="resp-tabs-container hor_1">
            <div>
                <!-- overview start -->
                <?php
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
                                <?php if ( !empty($gallery_rows) ) : ?>
                                <li class="overview-nav__item"><a href="#" data-target="nav-item-gallery" data-subtarget="subnav-item-gallery">See the Gallery</a></li>
                                <?php endif; ?>
                                <?php if ( !empty($deck_points) && $deck_plan_image ) : ?>
                                <li class="overview-nav__item"><a href="#" data-target="nav-item-deck-plan">Deck Plan</a></li>
                                <?php endif; ?>
                                <?php if($virtual_tour) : ?>
                                <li class="overview-nav__item"><a href="#" data-target="nav-item-gallery" data-subtarget="subnav-item-virtual-gallery">Virtual Tour</a></li>
                                <?php endif; ?>
                                <li class="overview-nav__item"><a href="#" data-class="build-a-boat-toggle">Build Your Own</a></li>
                            </ul>
                        </div>

                        <?php
                        $quick_stats = get_field('quick_statistics');
                        $quick_stats_brochure = get_field('quick_statistics_brochure');
                        if(!empty($quick_stats)) :
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
                        <?php endif; ?>
                    </div>
                    <?php if ($boat_footer_link) : ?>
                        <div class="btn-wrap">
                            <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                        </div>
                    <?php endif; ?>
                </section>
                <!-- overview end -->
            </div>
            <?php if ( $virtual_tour || !empty($gallery_rows) ) : ?>
            <div>

                <div id="childTab">
                    <ul class="resp-tabs-list hor_child_1">
                        <li data-class="subnav-item-gallery"> Gallery </li>
                        <?php if($virtual_tour) : ?>
                        <li data-class="subnav-item-virtual-gallery"> Virtual Tour </li>
                        <?php endif; ?>
                    </ul>
                    <div class="resp-tabs-container hor_child_1">
                        <div>
                            <!-- gallery start -->
                            <?php e11_gallery_rows(array(), true, 'get_field', '', ''); ?>
                            <!-- gallery end -->
                        </div>

                        <div>
                            <!-- virtual tour start -->
                            <?php if($virtual_tour) : ?>
                                <div class="virtual-tour">
                                    <div class="container">
                                        <?php echo $virtual_tour ; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <!-- virtual tour end -->
                        </div>
                    </div>
                </div>
                <?php if ($boat_footer_link) : ?>
                <div class="btn-wrap">
                    <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                </div>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            <?php if ( !empty($features) ) : ?>
            <div>
                <!-- features start -->
                <section class="features-block">

                    <div class="container">
                        <div class="feature-list">
                            <?php foreach($features as $feature) : ?>
                                <div class="feature-list__item">
                                    <?php if($feature['title']) : ?>
                                    <h2 class="feature-list__title"><?php echo $feature['title']; ?></h2>
                                    <?php endif; ?>
                                    <?php if($feature['content']) : ?>
                                    <div class="entry-content"><?php echo $feature['content']; ?></div>
                                    <?php endif; ?>
                                </div>
                            <?php endforeach; ?>
                        </div>

                    </div>
                    <?php if ($boat_footer_link) : ?>
                    <div class="btn-wrap">
                        <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                    </div>
                    <?php endif; ?>
                </section>
                <!-- features end -->
            </div>
            <?php endif; ?>
            <?php if ( !empty($boat_options) ) : ?>
            <div>
                <!-- option start -->
                <section class="model-option">
                    <div class="container">
                        <div class="model-option__header">
                            <h2 class="model-option__title">The many options for the <strong><?php echo $title; ?></strong></h2>
                            <span>Create a checklist for the optional equipment you’re interested in.</span>
                        </div>
                        <div class="option-slider">
                            <?php foreach ($boat_options as $boat_option) : ?>
                            <div>
                                <h3 class="option-title"><?php echo $boat_option['title']; ?></h3>
                                <ul class="option-list" data-user-choices="<?php echo $boat_option['number_of_choices']; ?>">
                                    <?php foreach($boat_option['options'] as $option) : ?>
                                    <li class="option-list__item boatOption">
                                        <?php if ($option['thumbnail']) : ?>
                                        <span class="option-list__thumbnail" style="background-image: url('<?php echo $option["thumbnail"]["sizes"]["boat-options"];?>');"></span>
                                        <?php endif; ?>

                                        <?php echo $option['option']; ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <div class="btn-wrap ">
                        <a class="form-toggle btn btn--dark" href="#">Email This List</a>
                        <?php if ($boat_footer_link) : ?>
                        <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                        <?php endif; ?>
                        <div class="form-wrap">
                            <div class="form-option">
                                <ul class="option-list">
                                    <li class="option-list__item">Please email the boat I created to me and Intrepid, and have them contact me.</li>
                                    <li class="option-list__item">Please only email me the boat I created.</li>
                                </ul>
                            </div>
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
                    </div>
                </section>
                <!-- option end -->
            </div>
            <?php endif; ?>
            <?php if ( !empty($deck_points) && $deck_plan_image ) : ?>
            <div>
                <!-- deck plan start -->
                <div class="deck-block">
                    <div class="container">
                        <div class="deck-block__outer">
                            <div class="deck-block__inner">
                                <img class="deck-block__img" src="<?php echo $deck_plan_image['url']; ?>" alt="<?php echo $deck_plan_image['alt']; ?>">
                                <?php foreach($deck_points as $deck_point) : ?>
                                <div class="deck-point__container">
                                    <button class="deck-point" style="top: calc(<?php echo $deck_point['distance_from_top_border']; ?>% - 13px); left: calc(<?php echo $deck_point['distance_from_left_border']; ?>% - 13px);"><?php echo $deck_point['number_on_hotspot']; ?></button>
                                    <div class="deck-block__info">
                                        <div class="container">
                                            <div class="deck-info">
                                                <span class="deck-info__number"><?php echo $deck_point['number_on_hotspot']; ?></span>
                                                <?php if($deck_point['image']) : ?>
                                                <figure class="deck-info__thumbnail">
                                                    <img src="<?php echo $deck_point['image']['url']; ?>" alt="<?php echo $deck_point['image']['alt']; ?>">
                                                </figure>
                                                <?php endif; ?>
                                                <div class="deck-info__content">
                                                    <?php if($deck_point['title']) : ?>
                                                    <h2 class="deck-info__title"><?php echo $deck_point['title']; ?></h2>
                                                    <?php endif; ?>
                                                    <?php if($deck_point['description']) : ?>
                                                    <div class="deck-info__description">
                                                        <?php echo $deck_point['description']; ?>
                                                    </div>
                                                    <?php endif; ?>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-close text--right">
                                            <a href="javascript:void(0);" class="close">CLOSE <span class="icon-close"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <span class="deck-block__short-note">Select to see features</span>
                    </div>
                    <?php if ($boat_footer_link) : ?>
                    <div class="btn-wrap">
                        <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                    </div>
                    <?php endif; ?>
                </div>
                <!-- deck plan start -->
            </div>
            <?php endif; ?>
            <?php if ( !empty($motor_blocks) ) : ?>
            <div>
                <!-- motor start -->
                <section class="motor-block">
                    <div class="container">
                        <h2 class="motor-block__title">Motor selections for <strong><?php echo $title; ?></strong></h2>
                        <ul class="motor-list">

                        <?php foreach($motor_blocks  as $motor_block) : ?>
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo $motor_block['image']['url']; ?>" alt="<?php echo $motor_block['image']['alt']; ?>" />
                                </figure>
                                <div class="motor-list__content">
                                    <div class="motor-list__outer">
                                        <div class="motor-list__inner">
                                            <h2 class="motor-list__title">
                                                <span class="motor-list__text <?php if($motor_block['title_image']) : ?>accessible-text<?php endif; ?>"><?php echo $motor_block['title']; ?></span>
                                                <?php if($motor_block['title_image']) : ?>
                                                <img src="<?php echo $motor_block['title_image']['url']; ?>" alt="<?php echo $motor_block['title_image']['alt']; ?>" class="motor-list__logo">
                                                <?php endif; ?>
                                            </h2>
                                            <button class="motor-list__trigger-container"><span class="accessible-text">Toggle content.</span></button>
                                            <span class="motor-list__trigger"></span>
                                        </div>
                                    </div>
                                    <div class="motor-list__description">
                                        <?php echo $motor_block['description']; ?>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach; ?>

                        </ul>
                    </div>
                    <?php if ($boat_footer_link) : ?>
                    <div class="btn-wrap">
                        <a href="<?php echo $boat_footer_link['url']; ?>" target="<?php echo $boat_footer_link['target']; ?>" class="btn btn--dark"><?php echo $boat_footer_link['title']; ?></a>
                    </div>
                    <?php endif; ?>
                </section>
                <!-- motor end -->
            </div>
            <?php endif; ?>
        </div>
    </div>
    <?php if($bab_main_image) : ?>
    <section class="build-a-boat">
        <div class="step-block">
            <div class="step-block__close" data-class="build-a-boat-toggle">
                <span class="icon-close"></span>
            </div>
            <ul class="form-step">
                <li class="step__item step__item--active" data-label-back="" data-label-next="Motors">
                    Exterior
                </li>
                <?php if ( !empty($bab_motors) ) : ?>
                <li class="step__item" data-label-back="Colors" data-label-next="Options">
                    Motors
                </li>
                <?php endif; ?>
                <?php if ( !empty($boat_options) ) : ?>
                <li class="step__item" data-label-back="Motors" data-label-next="Finish">
                    Options
                </li>
                <?php endif; ?>
                <li class="step__item" data-label-back="Options" data-label-next="">
                    Make it yours
                </li>
            </ul>
        </div>
        <div class="custom-hero">
            <div class="container">
                <?php echo file_get_contents($bab_main_image['url']); ?>
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
                                <li class="area-list__item" data-boat-layer="boot-stripe">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Boot Stripe</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="logo-color">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Logo</span>
                                </li>
                                <li class="area-list__item" data-boat-layer="boot-stripe-accent">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Boot Accent</span>
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
            <?php if ( !empty($bab_motors) ) : ?>
            <div class="motor-option" data-class="step">
                <div class="container">
                    <div class="motor-option__inner">
                        <div class="motor-option__details">
                            <div class="motor-color__container">

                            </div>
                            <div class="motor-thumbnail">
                                <img src="" alt="">
                                <span class="icon-close"></span>
                            </div>
                        </div>
                        <div class="motor-option__wrap">
                            <span class="motor-option__title">Select a Motor</span>
                            <ul class="motor-option__list">
                                <?php
                                $motorCount = 0;
                                foreach($bab_motors as $bab_motor) :
                                $motorDetails = get_term($bab_motor);
                                $motorName = $motorDetails->name;
                                $motorId = $motorDetails->slug;
                                $motorDescription = get_field('boat_motor_description', 'boat-motors_' . $motorDetails->term_id);
                                $motorColors = get_field('boat_motor_colors', 'boat-motors_' . $motorDetails->term_id);
                                ?>
                                <li class="motor-option__list-item">
                                    <span class="motor-option__list-title"><?php echo $motorName; ?></span>
                                    <?php if($motorDescription) : ?>
                                    <div class="motor__description"><?php echo $motorDescription; ?></div>
                                    <?php endif; ?>
                                    <?php if(!empty($motorColors)) : ?>
                                    <ul class="motor-color">
                                        <?php $motorColorCount = 0; foreach($motorColors as $motorColor) : ?>
                                        <li class="motor-color__item motor-color__item--<?php echo strtolower($motorColor['color']); ?> <?php if($motorColorCount === 0) : echo 'active'; endif; ?>" data-motor-layer="<?php echo $motorId . '-' . strtolower($motorColor['color']); ?>" data-motor-image="<?php echo $motorColor['image']['url']; ?>">
                                            <span class="motor-color__title"><?php echo $motorColor['color']; ?></span>
                                            <span class="motor-color__box"></span>
                                        </li>
                                        <?php $motorColorCount++; endforeach; ?>
                                    </ul>
                                    <?php endif; ?>
                                </li>
                                <?php $motorCount++; endforeach; ?>
                            </ul>
                            <span class="motor-option__note">
                            * Not all engines colors shown
                        </span>
                            <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                                <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
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
            <?php endif; ?>
            <?php if ( !empty($boat_options) ) : ?>
            <div class="model-option model-option--alt" data-class="step">
                <span class="model-option__block-title">Select a category for options</span>
                <div class="container">
                    <div class="option-slider">
                        <?php foreach ($boat_options as $boat_option) : ?>
                        <div>
                            <h3 class="option-title"><?php echo $boat_option['title']; ?></h3>
                            <ul class="option-list" data-user-choices="<?php echo $boat_option['number_of_choices']; ?>">
                                <?php foreach($boat_option['options'] as $option) : ?>
                                <li class="option-list__item boatOption" <?php if($option['svg_id']) : ?>data-boat-layer="<?php echo $option['svg_id']; ?>"<?php endif; ?>>
                                    <?php if ($option['thumbnail']) : ?>
                                    <span class="option-list__thumbnail" style="background-image: url('<?php echo $option["thumbnail"]["sizes"]["boat-options"];?>');"></span>
                                    <?php endif; ?>

                                    <?php echo $option['option']; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                    <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Finish</a>
                </div>
            </div>
            <?php endif; ?>
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
    <?php endif; ?>
</main>
<?php get_footer();
