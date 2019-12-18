<?php
get_header();
the_post();
$page = get_the_ID();

?>
<main class="main page-events-single">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo get_the_title(); ?></h1>
                <!-- <div class="hero__description">
                    <p><?php //echo $tagline; ?></p>
                </div> -->
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo get_the_post_thumbnail_url($page, 'hero'); ?>)"></div>
        <div class="container">
            <div class="model-intro__content">
                <p><?php echo get_field('event_intro'); ?></p>
            </div>
        </div>
    </div>

    <?php
    $content_blocks = get_field('content_blocks');
    ?>

    <?php if ($content_blocks) : ?>
        <?php foreach($content_blocks as $content) : ?>

            <section class="content-block">
                <div class="container">
                    <?php if ($content['title']) : ?>
                        <h2 class="content-block__title"><?php echo $content['title']; ?>
                        </h2>
                    <?php endif; ?>

                    <?php if ($content['content']) : ?>
                        <div class="sub-container">
                            <?php echo $content['content']; ?>
                        </div>
                    <?php endif; ?>

                </div>
            </section>

        <?php endforeach; ?>
    <?php endif; ?>


</main>
<?php get_footer();
