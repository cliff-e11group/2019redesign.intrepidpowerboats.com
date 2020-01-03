<?php
get_header();
the_post();
$page = get_the_ID();
?>
<?php get_header(); ?>

<main class="main">

    <?php e11_hero_video(array(), true, 'get_field', $page, ''); ?>

    <?php e11_intro_block(array(), true, 'get_field', $page, ''); ?>

    <?php e11_grid_block(array(), true, 'get_field', $page, ''); ?>


    <div class="newsletter-block">
        <h3 class="newsletter-block__title">
            Newsletter Signup <svg class="icon icon-arrow-up" aria-hidden="true" role="img">
            <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
        </svg>
        </h3>
        <div class="newsletter-block__content">
            <div class="newsletter-block__description">
                <?php
                    $newsletter_description = get_field('newsletter_description', 'option');
                ?>
                <?php if ($newsletter_description) : ?>
                    <p><?php echo $newsletter_description; ?></p>
                <?php endif; ?>

                <span class="newsletter-block__info">Enter Information Below:</span>
            </div>
            <?php echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]'); ?>
        </div>
    </div>
    <div class="language-switcher">
        <h3 class="language-switcher__title">
            Select Language <svg class="icon icon-arrow-up" aria-hidden="true" role="img">
            <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
        </svg>
        </h3>
        <ul class="language-switcher__list">
            <li class="language-switcher__list-item"><a href="#">English</a></li>
            <li class="language-switcher__list-item"><a href="#">French</a></li>
            <li class="language-switcher__list-item"><a href="#">Germany</a></li>
            <li class="language-switcher__list-item"><a href="#">English</a></li>
        </ul>
    </div>
</main>

<?php get_footer(); ?>
