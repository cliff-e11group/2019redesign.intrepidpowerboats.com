<?php
get_header();
the_post();
?>

<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">404</h1>
            </div>
        </div>
    </section>
    <div class="container" style="margin-top: 64px;margin-bottom: 64px;">
        <p>Sorry, we could not find this page.</p>
    </div>
</main>

<?php get_footer(); ?>
