<?php
/**
* Template Name: Service
*/
get_header();
the_post();
$page = get_the_id();

$title = get_field('page_title');
$tagline = get_field('page_tagline');
?>
<?php get_header(); ?>
<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo $title ? $title : get_the_title(); ?></h1>
                <div class="hero__description">
                    <?php if ($tagline): ?>
                        <p><?php echo $tagline; ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

   <?php e11_hero(array(), true, 'get_field', $page, ''); ?>

   <?php e11_content_and_dropdowns(array(), true, 'get_field', $page, ''); ?>

   <?php e11_locations_and_customer_service(array(), true, 'get_field', $page, ''); ?>


</main>
<?php get_footer(); ?>
