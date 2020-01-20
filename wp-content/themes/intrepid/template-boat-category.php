<?php

// Template Name: Boat Category
get_header();
the_post();
$page = get_the_ID();
$cat_id = get_field('select_boat_category');
$hero_image = get_field('boat_cat_hero_image');
$tagline = get_field( 'tagline' );
$description = get_field( 'description' );
?>


<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo get_the_title(); ?></h1>
                <?php if($tagline) : ?>
                <div class="hero__description">
                    <p><?php echo $tagline; ?></p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo $hero_image['url']; ?>)"></div>
        <div class="container">
            <div class="model-intro__content">
                <p><?php echo $description; ?></p>
            </div>
        </div>
    </div>

    <div class="content-wrap">
        <?php
        $boat_cat_content = get_field('boat_other_content_section');
        ?>
        <?php $count = 0; ?>
        <?php if (!empty($boat_cat_content)) : ?>
            <?php foreach($boat_cat_content as $content) : ?>
                <?php
                if($content['include_boats']) :
                    $count++;
                endif; ?>


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

                        <?php if($content['include_boats'] && $count <= 1) : ?>

                            <?php
                            $boat_args = array(
                                'post_type' => 'boats',
                                'tax_query' => array(
                                        array(
                                            'taxonomy' => 'boat-category',
                                            'field' => 'id',
                                            'terms' => $cat_id,
                                        ),
                                    ),
                                );

                                $boat_cat_query = new WP_Query($boat_args);
                            ?>

                            <?php if($boat_cat_query->have_posts()): ?>
                                <?php while ($boat_cat_query->have_posts()): $boat_cat_query->the_post(); ?>

                                <?php
                                    $title = get_the_title();
                                    $brochure = get_field('quick_statistics_brochure');
                                    // $post = get_the_ID();
                                ?>

                                <!-- boat_category_description -->
                                <div class="column-model">
                                    <div class="column-model__item">
                                        <figure class="column-model__thumbnail">
                                            <?php echo get_the_post_thumbnail($post, 'boat-cat-pullin'); ?>
                                        </figure>
                                        <div class="column-model__title-wrap">
                                            <h2 class="column-model__title"><?php echo $title; ?></h2>
                                            <span class="column-model__trigger"></span>
                                        </div>
                                        <div class="column-model__content">
                                            <?php echo get_field('overview', $post); ?>
                                            <?php if ($brochure) : ?>
                                                <a href="<?php echo $brochure['url']; ?>" class="btn btn--dark">Download Brochure</a>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                                <?php endwhile; ?>
                            <?php endif; ?>

                        <?php endif; ?>
                    </div>
                </section>
            <?php endforeach; ?>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>

