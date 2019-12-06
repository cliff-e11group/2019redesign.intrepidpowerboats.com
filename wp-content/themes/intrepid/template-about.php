<?php
/**
* Template Name: About
*/
get_header();
the_post();
?>
<?php get_header(); ?>
<main class="main">
    <section class="landing-hero landing-hero--alt">
        <div class="container">
            <div class="landing-hero__item landing-hero__item--active">
                <div class="landing-hero__item-bg" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/fishing.jpg)"></div>
                <div class="landing-hero__content landing-hero__content--fade">
                    <h2 class="landing-hero__title">One of a kind</h2>
                    <div class="landing-hero__description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed post.</p>
                    </div>
                    <a class="landing-hero__link" href="<?php echo site_url('about/one-of-a-kind'); ?>">
                        <span class="btn btn--outline btn--light">Custom Made</span>
                    </a>
                </div>
            </div>
            <div class="landing-hero__item">
                <div class="landing-hero__item-bg" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/craftsmanship.jpg)"></div>
                <div class="landing-hero__content">
                    <h2 class="landing-hero__title">One at a time</h2>
                    <div class="landing-hero__description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed post.</p>
                    </div>
                    <a class="landing-hero__link" href="<?php echo site_url('about/one-at-a-time'); ?>">
                        <span class="btn btn--outline btn--light">Expert Craftmanship</span>
                    </a>
                </div>
            </div>
            <div class="landing-hero__intro">
                <p>From the moment you decide to own an Intrepid, you will enter a world of collaborative design, precision construction and customization and one of the most coveted and legendary customer service programs on land or sea. </p>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>
