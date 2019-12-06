<?php
/**
* Template Name: About
*/
get_header();
the_post();
?>
<?php get_header(); ?>
<main class="main">
    <section class="landing-hero landing-hero--alt" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/fishing.jpg)">
        <div class="container">
            <div class="landing-hero__item" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/fishing.jpg)">
                <div class="landing-hero__content landing-hero__content--fade">
                    <h2 class="landing-hero__title">One of a kind</h2>
                    <div class="landing-hero__description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed post.</p>
                    </div>
                    <a class="btn btn--outline btn--outline-mobile" href="#">Custom Made</a>
                </div>
            </div>
            <div class="landing-hero__item" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/gallery-image3.jpg)">
                <div class="landing-hero__content">
                    <h2 class="landing-hero__title">One at a time</h2>
                    <div class="landing-hero__description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed post.</p>
                    </div>
                    <a class="btn btn--outline-mobile" href="#">Expert Craftmanship</a>
                </div>
            </div>
            <div class="landing-hero__intro">
                <p>From the moment you decide to own an Intrepid, you will enter a world of collaborative design, precision construction and customization and one of the most coveted and legendary customer service programs on land or sea. </p>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>
